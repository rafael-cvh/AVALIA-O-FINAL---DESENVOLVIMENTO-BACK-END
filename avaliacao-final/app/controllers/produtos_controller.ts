import type { HttpContext } from '@adonisjs/core/http'
import { createProdutoValidator } from '#validators/produto'
import db from '@adonisjs/lucid/services/db'
import Produto from '#models/produto'

export default class ProdutosController {
  // Cadastrar Produto
  public async index({ request, response }: HttpContext) {
    const categoriaId = request.input('categoria_id')

    if (categoriaId) {
      const produtos = await Produto.query().where('categorias_id', categoriaId)
      return response.ok(produtos)
    }

    const produtos = await Produto.all()
    return response.ok(produtos)
  }
  //cadastro de produto
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createProdutoValidator)

    const [id] = await db
      .table('produtos')
      .insert({
        name: payload.name,
        valor: payload.price,
        estoque: payload.stock,
        categorias_id: payload.categoriaId, // 👈 Exatamente igual à Migration
        created_at: new Date(),
        updated_at: new Date(),
      })
      .returning('id')

    return response.created({ message: 'Produto criado com sucesso!', id })
  }

  // Atualizar Produto
  async update({ params, request, response }: HttpContext) {
    const payload = await request.validateUsing(createProdutoValidator)

    await db.from('produtos').where('id', params.id).update({
      name: payload.name,
      valor: payload.price,
      estoque: payload.stock,
      categorias_id: payload.categoriaId, // 👈 Corrigido aqui também!
      updated_at: new Date(),
    })

    return response.ok({ message: 'Produto atualizado com sucesso!' })
  }

  // Deletar Produto
  async destroy({ params, response }: HttpContext) {
    await db.from('produtos').where('id', params.id).delete()
    return response.noContent()
  }
}
