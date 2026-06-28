import type { HttpContext } from '@adonisjs/core/http'
import Categoria from '#models/categoria'
import { createCategoriaValidator } from '#validators/categoria'

export default class CategoriasController {
  // PÚBLICO: Listar todas as categorias
  async index() {
    return await Categoria.all()
  }

  // PROTEGIDO: Cadastrar nova categoria
  async store({ request, auth, response }: HttpContext) {
    if (auth.user?.role !== 'gerente') {
      return response.forbidden({ message: 'Apenas gerentes podem cadastrar categorias.' })
    }

    const payload = await request.validateUsing(createCategoriaValidator)
    const categoria = await Categoria.create(payload)
    return response.created(categoria)
  }

  // PÚBLICO: Buscar uma única categoria pelo ID
  async show({ params }: HttpContext) {
    return await Categoria.findOrFail(params.id)
  }

  // PROTEGIDO: Atualizar uma categoria
  async update({ params, request, auth, response }: HttpContext) {
    if (auth.user?.role !== 'gerente') {
      return response.forbidden({ message: 'Apenas gerentes podem atualizar categorias.' })
    }

    const categoria = await Categoria.findOrFail(params.id)
    const payload = await request.validateUsing(createCategoriaValidator)

    categoria.merge(payload)
    await categoria.save()
    return categoria
  }

  // PROTEGIDO: Excluir uma categoria
  async destroy({ params, auth, response }: HttpContext) {
    if (auth.user?.role !== 'gerente') {
      return response.forbidden({ message: 'Apenas gerentes podem deletar categorias.' })
    }

    const categoria = await Categoria.findOrFail(params.id)
    await categoria.delete()
    return response.noContent()
  }
}
