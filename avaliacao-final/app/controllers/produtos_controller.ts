import type { HttpContext } from '@adonisjs/core/http'
import Produto from '#models/produto'
import { createProdutoValidator } from '#validators/produto'

export default class ProdutosController {
  // PÚBLICO: Qualquer um (others e chefe) pode listar e filtrar
  async index({ request }: HttpContext) {
    const categoriaId = request.input('categoria_id')
    const query = Produto.query()

    if (categoriaId) {
      query.where('categoriaId', categoriaId)
    }

    return await query
  }

  // PROTEGIDO: Só Gerente cadastra
  async store({ request, auth, response }: HttpContext) {
    if (auth.user?.role !== 'gerente') {
      return response.forbidden({ message: 'Apenas gerentes podem cadastrar produtos.' })
    }

    const payload = await request.validateUsing(createProdutoValidator)
    const produto = await Produto.create(payload)
    return response.created(produto)
  }

  // PÚBLICO: Qualquer um pode ver um produto específico
  async show({ params }: HttpContext) {
    return await Produto.findOrFail(params.id)
  }

  // PROTEGIDO: Só Gerente edita
  async update({ params, request, auth, response }: HttpContext) {
    if (auth.user?.role !== 'gerente') {
      return response.forbidden({ message: 'Apenas gerentes podem atualizar produtos.' })
    }

    const produto = await Produto.findOrFail(params.id)
    const payload = await request.validateUsing(createProdutoValidator)

    produto.merge(payload)
    await produto.save()
    return produto
  }

  // PROTEGIDO: Só Gerente deleta
  async destroy({ params, auth, response }: HttpContext) {
    if (auth.user?.role !== 'gerente') {
      return response.forbidden({ message: 'Apenas gerentes podem deletar produtos.' })
    }

    const produto = await Produto.findOrFail(params.id)
    await produto.delete()
    return response.noContent()
  }
}
