import * as z from 'zod'

export const validationShema = z.object({
    amount: z
        .number()
        .min(15000, { message: 'Minimum amount is 15000' })
        .max(600000, { message: 'Maximum amount is 600000' }),
    lastName: z
        .string()
        .trim()
        .min(2, { message: "Last name can't be empty" })
        .regex(/^[A-Za-z]+$/, 'Only latin letters'),
    firstName: z
        .string()
        .trim()
        .min(2, { message: "First name can't be empty" })
        .regex(/^[A-Za-z]+$/, 'Only latin letters'),
    patronymic: z.string().trim().optional().or(z.literal('')),
    term: z.union([z.literal(6), z.literal(12), z.literal(18), z.literal(24)]),
    email: z.email('Invalid email').trim(),
    birthday: z.string().refine(
        (date) => {
            const parsed = new Date(date)
            if (isNaN(parsed.getTime())) return false

            const today = new Date()
            const age = today.getFullYear() - parsed.getFullYear()

            return age >= 18
        },
        { message: 'You must be at least 18 years old' },
    ),
    passportSeries: z
        .string()
        .length(4, { message: 'Series must be 4 digits' })
        .regex(/^\d+$/),
    passportNumber: z
        .string()
        .length(6, { message: 'Number must be 6 digits' })
        .regex(/^\d+$/),
})
