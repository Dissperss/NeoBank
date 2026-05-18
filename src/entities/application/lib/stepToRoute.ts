import { STEP_VALUES, type StepEnum } from '../types/enums'

export const stepToRoute = (
    step: StepEnum,
    applicationId: number,
): string | null => {
    switch (step) {
        case STEP_VALUES.PRESCORING:
            return '/loan'
        case STEP_VALUES.OFFERS:
            return `/loan/${applicationId}/offer`
        case STEP_VALUES.SCORING:
            return `/loan/${applicationId}`
        case STEP_VALUES.DOCUMENTS:
            return `/loan/${applicationId}/document`
        case STEP_VALUES.SIGN:
            return `/loan/${applicationId}/document/sign`
        case STEP_VALUES.CODE:
            return `/loan/${applicationId}/code`
        case STEP_VALUES.COMPLETE:
            return `/loan/${applicationId}/code`
        default:
            return null
    }
}
