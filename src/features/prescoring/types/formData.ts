import * as z from 'zod'
import type { validationShema } from '../model/validationShema'

export type FormData = z.infer<typeof validationShema>
