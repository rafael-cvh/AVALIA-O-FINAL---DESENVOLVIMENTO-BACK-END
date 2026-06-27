import vine from '@vinejs/vine'

/**
 * Validador para criação e atualização de categorias
 */
export const createCategoriaValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3).maxLength(100),
  })
)
