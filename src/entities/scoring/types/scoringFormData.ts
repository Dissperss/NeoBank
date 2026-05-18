import * as z from 'zod'

import type {
    employmentSchema,
    scoringValidationShema,
} from '../model/scoringValidationShema'

export type ScoringFormData = z.infer<typeof scoringValidationShema>

export type EmploymentScoringFormData = z.infer<typeof employmentSchema>
