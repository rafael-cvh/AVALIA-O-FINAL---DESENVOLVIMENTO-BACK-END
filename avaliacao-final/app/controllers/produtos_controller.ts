import type { HttpContext } from '@adonisjs/core/http'
import Produto from '#models/produto'
import { createProdutoValidator } from '#validators/produto'

export default class ProdutosController {
  // Listar produtos (Com a regra de negócio: Filtrar produtos por categoria)
  async index({ request }: HttpContext) {
    const categoriaId = request.input('categoria_id')

    // Se o cliente passar o ID da categoria na URL (?categoria_id=2), filtra por ela
    if (categoriaId) {
      const produtosFiltrados = await Produto.query()
        .where('categoriaId', categoriaId)
        .preload('categoria')
      return produtosFiltrados
    }

    // Se não passar nada, traz todos os produtos com a categoria anexada
    const todosProdutos = await Produto.query().preload('categoria')
    return todosProdutos
  }

  // Cadastrar novo produto (Garante preço > 0 e estoque >= 0 pelo Validator)
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createProdutoValidator)
    const produto = await Produto.create(payload)

    return response.created(produto)
  }

  // Buscar um único produto pelo ID
  async show({ params }: HttpContext) {
    const produto = await Produto.query().where('id', params.id).preload('categoria').firstOrFail()

    return produto
  }

  // Atualizar dados do produto
  async update({ params, request }: HttpContext) {
    const produto = await Produto.findOrFail(params.id)
    const payload = await request.validateUsing(createProdutoValidator)

    produto.merge(payload)
    await produto.save()

    return produto
  }

  // Deletar um produto né fi
  async destroy({ params, response }: HttpContext) {
    const produto = await Produto.findOrFail(params.id)
    await produto.delete()

    return response.noContent()
  }
}
