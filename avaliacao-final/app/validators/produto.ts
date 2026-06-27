import vine from '@vinejs/vine'

/**
 * Validador para criação e atualização de produtos.
 * Aplica as regras de negócio: preço > 0 e estoque >= 0.
 */
export const createProdutoValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(2).maxLength(150),

    // Regra: Preço deve ser maior que zero
    price: vine.number().positive(),

    // Regra: Estoque não pode ser negativo (mínimo 0)
    stock: vine.number().min(0),

    // Deve ser o ID de uma categoria existente
    categoriaId: vine.number(),
  })
)
