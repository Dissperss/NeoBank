// export interface FormData {
//     lastName: string
//     firstName: string
//     email: string
//     patronymic?: string
//     term: number
//     birthday: string
//     passportSeries: string
//     passportNumber: string
//     amount?: number
// }
import * as z from 'zod'
import type { validationShema } from '../model/validationShema'

export type FormData = z.infer<typeof validationShema>
