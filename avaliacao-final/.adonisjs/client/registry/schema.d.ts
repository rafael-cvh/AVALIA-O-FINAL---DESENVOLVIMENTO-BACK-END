/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'access_tokens.store': {
    methods: ["POST"]
    pattern: '/session'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').loginValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').loginValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'access_tokens.destroy': {
    methods: ["DELETE"]
    pattern: '/session'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['destroy']>>>
    }
  }
  'user.index': {
    methods: ["GET","HEAD"]
    pattern: '/user'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['index']>>>
    }
  }
  'user.store': {
    methods: ["POST"]
    pattern: '/user'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').signupValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').signupValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'user.show': {
    methods: ["GET","HEAD"]
    pattern: '/user/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['show']>>>
    }
  }
  'user.update': {
    methods: ["PUT","PATCH"]
    pattern: '/user/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['update']>>>
    }
  }
  'user.destroy': {
    methods: ["DELETE"]
    pattern: '/user/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['destroy']>>>
    }
  }
  'produto.index': {
    methods: ["GET","HEAD"]
    pattern: '/produto'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/produtos_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/produtos_controller').default['index']>>>
    }
  }
  'produto.show': {
    methods: ["GET","HEAD"]
    pattern: '/produto/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/produtos_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/produtos_controller').default['show']>>>
    }
  }
  'categorias.index': {
    methods: ["GET","HEAD"]
    pattern: '/categorias'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/categorias_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/categorias_controller').default['index']>>>
    }
  }
  'categorias.show': {
    methods: ["GET","HEAD"]
    pattern: '/categorias/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/categorias_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/categorias_controller').default['show']>>>
    }
  }
  'produto.store': {
    methods: ["POST"]
    pattern: '/produto'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/produto').createProdutoValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/produto').createProdutoValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/produtos_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/produtos_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'produto.update': {
    methods: ["PUT","PATCH"]
    pattern: '/produto/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/produto').createProdutoValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/produto').createProdutoValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/produtos_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/produtos_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'produto.destroy': {
    methods: ["DELETE"]
    pattern: '/produto/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/produtos_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/produtos_controller').default['destroy']>>>
    }
  }
  'categorias.store': {
    methods: ["POST"]
    pattern: '/categorias'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/categoria').createCategoriaValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/categoria').createCategoriaValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/categorias_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/categorias_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'categorias.update': {
    methods: ["PUT","PATCH"]
    pattern: '/categorias/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/categoria').createCategoriaValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/categoria').createCategoriaValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/categorias_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/categorias_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'categorias.destroy': {
    methods: ["DELETE"]
    pattern: '/categorias/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/categorias_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/categorias_controller').default['destroy']>>>
    }
  }
}
