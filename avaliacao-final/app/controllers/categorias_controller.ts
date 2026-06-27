import type { HttpContext } from '@adonisjs/core/http'
import Categoria from '#models/categoria'
import { createCategoriaValidator } from '#validators/categoria'

export default class CategoriasController {
  // Listar todas as categorias
  async index() {
    const categorias = await Categoria.all()
    return categorias
  }

  // Cadastrar nova categoria
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createCategoriaValidator)
    const categoria = await Categoria.create(payload)

    return response.created(categoria)
  }

  // Buscar uma única categoria pelo ID
  async show({ params }: HttpContext) {
    const categoria = await Categoria.findOrFail(params.id)
    return categoria
  }

  // Atualizar uma categoria
  async update({ params, request }: HttpContext) {
    const categoria = await Categoria.findOrFail(params.id)
    const payload = await request.validateUsing(createCategoriaValidator)

    categoria.merge(payload)
    await categoria.save()

    return categoria
  }

  // Excluir uma categoria
  async destroy({ params, response }: HttpContext) {
    const categoria = await Categoria.findOrFail(params.id)
    await categoria.delete()

    return response.noContent()
  }
}
