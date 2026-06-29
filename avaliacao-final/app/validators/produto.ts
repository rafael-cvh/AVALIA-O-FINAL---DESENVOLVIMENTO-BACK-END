import vine from '@vinejs/vine'

export const createProdutoValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(2).maxLength(150),

    //  Preço deve ser maior que zero
    price: vine.number().positive(),
    //  Estoque não pode ser negativo (mínimo 0)
    stock: vine.number().min(0),
    // Deve ser o ID de uma categoria existente
    categoriaId: vine.number(),
  })
)
