import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'access_tokens.store': { paramsTuple?: []; params?: {} }
    'access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'user.index': { paramsTuple?: []; params?: {} }
    'user.store': { paramsTuple?: []; params?: {} }
    'user.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'user.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'user.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'produto.index': { paramsTuple?: []; params?: {} }
    'produto.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'categorias.index': { paramsTuple?: []; params?: {} }
    'categorias.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'produto.store': { paramsTuple?: []; params?: {} }
    'produto.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'produto.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'categorias.store': { paramsTuple?: []; params?: {} }
    'categorias.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'categorias.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'access_tokens.store': { paramsTuple?: []; params?: {} }
    'user.store': { paramsTuple?: []; params?: {} }
    'produto.store': { paramsTuple?: []; params?: {} }
    'categorias.store': { paramsTuple?: []; params?: {} }
  }
  DELETE: {
    'access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'user.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'produto.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'categorias.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'user.index': { paramsTuple?: []; params?: {} }
    'user.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'produto.index': { paramsTuple?: []; params?: {} }
    'produto.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'categorias.index': { paramsTuple?: []; params?: {} }
    'categorias.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'user.index': { paramsTuple?: []; params?: {} }
    'user.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'produto.index': { paramsTuple?: []; params?: {} }
    'produto.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'categorias.index': { paramsTuple?: []; params?: {} }
    'categorias.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PUT: {
    'user.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'produto.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'categorias.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'user.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'produto.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'categorias.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}