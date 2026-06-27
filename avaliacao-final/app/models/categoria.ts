import { CategoriaSchema } from '#database/schema'
import { hasMany } from '@adonisjs/lucid/orm'
import Produto from './produto.ts'
import { type HasMany } from '@adonisjs/lucid/types/relations'

export default class Categoria extends CategoriaSchema {
  @hasMany(() => Produto)
  declare produtos: HasMany<typeof Produto>
}
