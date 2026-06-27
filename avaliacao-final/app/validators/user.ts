import vine from '@vinejs/vine'

// Regras partilhadas para email e password
const emailRule = () => vine.string().email().maxLength(254)
const passwordRule = () => vine.string().minLength(8).maxLength(32)

/**
 * Validador para criação de conta (Sign Up)
 */
export const signupValidator = vine.compile(
  vine.object({
    // Se a tua migration de users tiver 'name' ou 'fullName', mantem o padrão.
    // O teu professor usou fullName como opcional (.nullable()) na imagem:
    name: vine.string().nullable(),

    // Garante que o email é único na tabela 'users'
    email: emailRule().unique({ table: 'users', column: 'email' }),

    password: passwordRule(),

    // Garante que a confirmação é idêntica à password
    passwordConfirmation: passwordRule().sameAs('password'),
  })
)

/**
 * Validador para autenticação (Login)
 */
export const loginValidator = vine.compile(
  vine.object({
    email: emailRule(),
    password: vine.string(),
  })
)
