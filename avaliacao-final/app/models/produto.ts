import { ProdutoSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import Categoria from './categoria.ts'
import { type BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Produto extends ProdutoSchema {
  @belongsTo(() => Categoria)
  declare categoria: BelongsTo<typeof Categoria>
}
