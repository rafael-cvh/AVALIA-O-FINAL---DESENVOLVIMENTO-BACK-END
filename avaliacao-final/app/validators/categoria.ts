import vine from '@vinejs/vine'

export const createCategoriaValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3).maxLength(100),
    descricao: vine.string().trim(),
  })
)
