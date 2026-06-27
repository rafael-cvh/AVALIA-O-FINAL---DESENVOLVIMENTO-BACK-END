import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { signupValidator, loginValidator } from '#validators/user'

export default class UsersController {
  // 1. REGISTAR (Sign Up) - Rota Pública
  async store({ request, response }: HttpContext) {
    // Valida os dados usando o signupValidator criado acima
    const payload = await request.validateUsing(signupValidator)

    // Criar o utilizador no banco de dados (o Adonis trata de encriptar a password se estiver configurado no Model)
    const user = await User.create({
      // Se no teu model o campo for 'name' em vez de 'fullName', ajusta aqui:
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
      // Verifica as credenciais e gera o token de autenticação
      // Nota: Certifica-te de que o pacote @adonisjs/auth está configurado para o teu provider (ex: tokens ou session)
      const user = await User.verifyCredentials(payload.email, payload.password)

      // Se usares tokens de acesso (API), a sintaxe do Adonis v6 costuma ser:
      const token = await User.accessTokens.create(user)

      return response.ok({
        user,
        token,
      })
    } catch {
      return response.badRequest({ error: 'Credenciais inválidas.' })
    }
  }

  // 3. LISTAR UTILIZADORES (Index) - Rota Protegida (opcional, igual à foto do professor)
  async index() {
    const users = await User.all()
    return users
  }

  // 4. MOSTRAR PERFIL DO UTILIZADOR LOGADO (Show)
  async show({ auth, response }: HttpContext) {
    // Retorna os dados do utilizador que está atualmente autenticado pelo middleware
    return response.ok(auth.user)
  }
}
