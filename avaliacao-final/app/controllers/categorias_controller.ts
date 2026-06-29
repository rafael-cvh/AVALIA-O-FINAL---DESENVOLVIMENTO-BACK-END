import type { HttpContext } from '@adonisjs/core/http'
import Categoria from '#models/categoria'
import { createCategoriaValidator } from '#validators/categoria'

export default class CategoriasController {
  public async index({ response }: HttpContext) {
    const categorias = await Categoria.all()
    return response.ok(categorias)
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createCategoriaValidator)
    const categoria = await Categoria.create(payload)
    return response.created(categoria)
  }

  // Qualquer um logado atualiza
  async update({ params, request }: HttpContext) {
    const categoria = await Categoria.findOrFail(params.id)
    const payload = await request.validateUsing(createCategoriaValidator)

    categoria.merge(payload)
    await categoria.save()
    return categoria
  }

  // Qualquer um logado deleta
  async destroy({ params, response }: HttpContext) {
    const categoria = await Categoria.findOrFail(params.id)
    await categoria.delete()
    return response.noContent()
  }
}
