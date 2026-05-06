import type {
    EmploymentScoringFormData,
    PersonalScoringFormData,
} from '@/entities/scoring/types/scoringFormData'

type PersonalScoringFieldsCfg = {
    name: keyof PersonalScoringFormData
    label: string
    type: 'input' | 'select' | 'date'
    required: boolean
    placeholder?: string
    renderIcon: boolean
    options?: {
        value: string
        label: string
    }[]
}

type EmploymentScoringFieldsCfg = {
    name: keyof EmploymentScoringFormData
    label: string
    type: 'input' | 'select' | 'date'
    required: boolean
    placeholder?: string
    renderIcon: boolean
    options?: {
        value: string
        label: string
    }[]
}

export const scoringPersonalFieldsConfig: PersonalScoringFieldsCfg[] = [
    {
        name: 'gender',
        label: "What's your gender",
        type: 'select',
        required: true,
        renderIcon: false,
        options: [
            { value: 'MALE', label: 'Male' },
            { value: 'FEMALE', label: 'Female' },
        ],
    },
    {
        name: 'maritalStatus',
        label: 'Your marital status',
        type: 'select',
        required: true,
        renderIcon: false,
        options: [
            { value: 'MARRIED', label: 'Married' },
            { value: 'DIVORCED', label: 'Divorced' },
            { value: 'SINGLE', label: 'Single' },
            { value: 'WIDOW_WIDOWER', label: 'Widow/Widower' },
        ],
    },
    {
        name: 'dependentAmount',
        label: 'Your number of dependents',
        type: 'select',
        required: true,
        renderIcon: false,
    },
    {
        name: 'passportIssueDate',
        label: 'Date of issue of the passport',
        type: 'date',
        required: true,
        renderIcon: true,
        placeholder: 'Select Date and Time',
    },
    {
        name: 'passportIssueBranch',
        label: 'Division code',
        type: 'input',
        required: true,
        renderIcon: true,
        placeholder: '000000',
    },
]

export const scoringEmploymentFieldsConfig: EmploymentScoringFieldsCfg[] = [
    {
        name: 'employmentStatus',
        label: 'Your employment status',
        type: 'select',
        required: true,
        renderIcon: false,
        options: [
            { value: 'UNEMPLOYED', label: 'Unemployed' },
            { value: 'SELF_EMPLOYED', label: 'Self employed' },
            { value: 'EMPLOYED', label: 'Employed' },
            { value: 'BUSINESS_OWNER', label: 'Business owner' },
        ],
    },
    {
        name: 'employerINN',
        label: 'Your employer INN',
        type: 'input',
        required: true,
        renderIcon: true,
        placeholder: '000000000000',
    },
    {
        name: 'salary',
        label: 'Your salary',
        type: 'input',
        required: true,
        renderIcon: true,
        placeholder: 'For example 100 000',
    },
    {
        name: 'position',
        label: 'Your position',
        type: 'select',
        required: true,
        renderIcon: false,
        options: [
            { value: 'WORKER', label: 'Worker' },
            { value: 'MID_MANAGER', label: 'Middle manager' },
            { value: 'TOP_MANAGER', label: 'Top manager' },
            { value: 'OWNER', label: 'Owner' },
        ],
    },
    {
        name: 'workExperienceTotal',
        label: 'Your work experience total',
        type: 'input',
        required: true,
        renderIcon: true,
        placeholder: 'For example 10',
    },
    {
        name: 'workExperienceCurrent',
        label: 'Your work experience current',
        type: 'input',
        required: true,
        renderIcon: true,
        placeholder: 'For example 2',
    },
]
