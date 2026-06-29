import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { signupValidator, loginValidator } from '#validators/user'

export default class UsersController {
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(signupValidator)

    const user = await User.create({
      name: payload.name || '',
      email: payload.email,
      password: payload.password,
    })

    return response.created(user)
  }

  // 2. LOGIN (Sign In) - Rota Pública
  async login({ request, response }: HttpContext) {
    const payload = await request.validateUsing(loginValidator)

    try {
      const user = await User.verifyCredentials(payload.email, payload.password)

      const token = await User.accessTokens.create(user)

      return response.ok({
        user,
        token,
      })
    } catch {
      return response.badRequest({ error: 'Credenciais inválidas.' })
    }
  }

  async index() {
    const users = await User.all()
    return users
  }

  async show({ auth, response }: HttpContext) {
    return response.ok(auth.user)
  }
}
