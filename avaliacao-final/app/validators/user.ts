import vine from '@vinejs/vine'

const emailRule = () => vine.string().email().maxLength(254)
const passwordRule = () => vine.string().minLength(8).maxLength(32)

export const signupValidator = vine.compile(
  vine.object({
    name: vine.string().nullable(),
    email: emailRule().unique({ table: 'users', column: 'email' }),
    password: passwordRule(),
    passwordConfirmation: passwordRule().sameAs('password'),
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: emailRule(),
    password: vine.string(),
  })
)
