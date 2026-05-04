import * as z from 'zod'

export const emailValidationShema = z.object({
    email: z.email('Invalid email').trim(),
})
