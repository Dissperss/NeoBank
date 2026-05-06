export const STEP_VALUES = {
    PRESCORING: 'prescoring',
    OFFERS: 'offers',
    SCORING: 'scoring',
    DOCUMENTS: 'documents',
    SIGN: 'sign',
    CODE: 'code',
    COMPLETE: 'complete',
} as const

export type StepEnum = (typeof STEP_VALUES)[keyof typeof STEP_VALUES]

export const APPLICATION_STATUS = {
    REQUEST_DENIED: 'REQUEST_DENIED',
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
} as const

export type ApplicationStatus =
    (typeof APPLICATION_STATUS)[keyof typeof APPLICATION_STATUS]
