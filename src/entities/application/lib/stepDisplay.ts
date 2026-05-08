import type { StepEnum } from '../types/enums'
import { STEP_VALUES } from '../types/enums'

export const STEP_NUMBERS: Record<StepEnum, number> = {
    [STEP_VALUES.PRESCORING]: 1,
    [STEP_VALUES.OFFERS]: 1,
    [STEP_VALUES.SCORING]: 2,
    [STEP_VALUES.DOCUMENTS]: 3,
    [STEP_VALUES.SIGN]: 4,
    [STEP_VALUES.CODE]: 4,
    [STEP_VALUES.COMPLETE]: 5,
}
