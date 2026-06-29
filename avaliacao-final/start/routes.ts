import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

router.post('/session', [controllers.AccessTokens, 'store'])
router.delete('/session', [controllers.AccessTokens, 'destroy']).use(middleware.auth())
// CRUD
router.resource('/user', controllers.Users).apiOnly()

// Qualquer um acessa deslogado
router.resource('/produto', controllers.Produtos).apiOnly().only(['index', 'show'])
router.resource('/categorias', controllers.Categorias).apiOnly().only(['index', 'show'])

router //bglh de modificar os produtos e categoria
  .group(() => {
    router.resource('/produto', controllers.Produtos).apiOnly().except(['index', 'show'])
    router.resource('/categorias', controllers.Categorias).apiOnly().except(['index', 'show'])
  })
  .use(middleware.auth())
