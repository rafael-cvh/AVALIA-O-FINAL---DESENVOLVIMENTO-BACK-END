/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  accessTokens: {
    store: typeof routes['access_tokens.store']
    destroy: typeof routes['access_tokens.destroy']
  }
  user: {
    index: typeof routes['user.index']
    store: typeof routes['user.store']
    show: typeof routes['user.show']
    update: typeof routes['user.update']
    destroy: typeof routes['user.destroy']
  }
  produto: {
    index: typeof routes['produto.index']
    show: typeof routes['produto.show']
    store: typeof routes['produto.store']
    update: typeof routes['produto.update']
    destroy: typeof routes['produto.destroy']
  }
  categorias: {
    index: typeof routes['categorias.index']
    show: typeof routes['categorias.show']
    store: typeof routes['categorias.store']
    update: typeof routes['categorias.update']
    destroy: typeof routes['categorias.destroy']
  }
}
