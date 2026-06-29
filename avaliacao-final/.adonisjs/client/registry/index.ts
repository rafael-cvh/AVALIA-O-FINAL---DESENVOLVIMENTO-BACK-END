/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'access_tokens.store': {
    methods: ["POST"],
    pattern: '/session',
    tokens: [{"old":"/session","type":0,"val":"session","end":""}],
    types: placeholder as Registry['access_tokens.store']['types'],
  },
  'access_tokens.destroy': {
    methods: ["DELETE"],
    pattern: '/session',
    tokens: [{"old":"/session","type":0,"val":"session","end":""}],
    types: placeholder as Registry['access_tokens.destroy']['types'],
  },
  'user.index': {
    methods: ["GET","HEAD"],
    pattern: '/user',
    tokens: [{"old":"/user","type":0,"val":"user","end":""}],
    types: placeholder as Registry['user.index']['types'],
  },
  'user.store': {
    methods: ["POST"],
    pattern: '/user',
    tokens: [{"old":"/user","type":0,"val":"user","end":""}],
    types: placeholder as Registry['user.store']['types'],
  },
  'user.show': {
    methods: ["GET","HEAD"],
    pattern: '/user/:id',
    tokens: [{"old":"/user/:id","type":0,"val":"user","end":""},{"old":"/user/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['user.show']['types'],
  },
  'user.update': {
    methods: ["PUT","PATCH"],
    pattern: '/user/:id',
    tokens: [{"old":"/user/:id","type":0,"val":"user","end":""},{"old":"/user/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['user.update']['types'],
  },
  'user.destroy': {
    methods: ["DELETE"],
    pattern: '/user/:id',
    tokens: [{"old":"/user/:id","type":0,"val":"user","end":""},{"old":"/user/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['user.destroy']['types'],
  },
  'produto.index': {
    methods: ["GET","HEAD"],
    pattern: '/produto',
    tokens: [{"old":"/produto","type":0,"val":"produto","end":""}],
    types: placeholder as Registry['produto.index']['types'],
  },
  'produto.show': {
    methods: ["GET","HEAD"],
    pattern: '/produto/:id',
    tokens: [{"old":"/produto/:id","type":0,"val":"produto","end":""},{"old":"/produto/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['produto.show']['types'],
  },
  'categorias.index': {
    methods: ["GET","HEAD"],
    pattern: '/categorias',
    tokens: [{"old":"/categorias","type":0,"val":"categorias","end":""}],
    types: placeholder as Registry['categorias.index']['types'],
  },
  'categorias.show': {
    methods: ["GET","HEAD"],
    pattern: '/categorias/:id',
    tokens: [{"old":"/categorias/:id","type":0,"val":"categorias","end":""},{"old":"/categorias/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['categorias.show']['types'],
  },
  'produto.store': {
    methods: ["POST"],
    pattern: '/produto',
    tokens: [{"old":"/produto","type":0,"val":"produto","end":""}],
    types: placeholder as Registry['produto.store']['types'],
  },
  'produto.update': {
    methods: ["PUT","PATCH"],
    pattern: '/produto/:id',
    tokens: [{"old":"/produto/:id","type":0,"val":"produto","end":""},{"old":"/produto/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['produto.update']['types'],
  },
  'produto.destroy': {
    methods: ["DELETE"],
    pattern: '/produto/:id',
    tokens: [{"old":"/produto/:id","type":0,"val":"produto","end":""},{"old":"/produto/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['produto.destroy']['types'],
  },
  'categorias.store': {
    methods: ["POST"],
    pattern: '/categorias',
    tokens: [{"old":"/categorias","type":0,"val":"categorias","end":""}],
    types: placeholder as Registry['categorias.store']['types'],
  },
  'categorias.update': {
    methods: ["PUT","PATCH"],
    pattern: '/categorias/:id',
    tokens: [{"old":"/categorias/:id","type":0,"val":"categorias","end":""},{"old":"/categorias/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['categorias.update']['types'],
  },
  'categorias.destroy': {
    methods: ["DELETE"],
    pattern: '/categorias/:id',
    tokens: [{"old":"/categorias/:id","type":0,"val":"categorias","end":""},{"old":"/categorias/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['categorias.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
