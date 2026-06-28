import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

router.post('/session', [controllers.AccessTokens, 'store'])
router.delete('/session', [controllers.AccessTokens, 'destroy']).use(middleware.auth())

router.resource('/user', controllers.Users).apiOnly()

router.get('/produto', [controllers.Produtos, 'index'])
router.get('/produto/:id', [controllers.Produtos, 'show'])

router.get('/categorias', [controllers.Categorias, 'index'])
router.get('/categorias/:id', [controllers.Categorias, 'show'])

router
  .group(() => {
    // CRUD de Produtos (Modificações)
    router.post('/produto', [controllers.Produtos, 'store'])
    router.put('/produto/:id', [controllers.Produtos, 'update'])
    router.delete('/produto/:id', [controllers.Produtos, 'destroy'])

    // CRUD de Categorias (Modificações)
    router.post('/categorias', [controllers.Categorias, 'store'])
    router.put('/categorias/:id', [controllers.Categorias, 'update'])
    router.delete('/categorias/:id', [controllers.Categorias, 'destroy'])
  })
  .use(middleware.auth())
