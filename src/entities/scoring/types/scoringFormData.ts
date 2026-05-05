import * as z from 'zod'

import type { scoringValidationShema } from '../model/scoringValidationShema'

export type ScoringFormData = z.infer<typeof scoringValidationShema>
