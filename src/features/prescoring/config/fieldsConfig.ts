import type { FormData } from '../types/formData'

type FieldsCfg = {
    name: keyof FormData
    label: string
    type: 'input' | 'select' | 'date'
    required: boolean
    placeholder?: string
    renderIcon: boolean
    options?: {
        value: number
        label: string
    }[]
}

export const fieldsConfig: FieldsCfg[] = [
    {
        name: 'lastName',
        label: 'Your last name',
        type: 'input',
        required: true,
        placeholder: 'For Example Doe',
        renderIcon: true,
    },
    {
        name: 'firstName',
        label: 'Your first name',
        type: 'input',
        required: true,
        placeholder: 'For Example Jhon',
        renderIcon: true,
    },
    {
        name: 'patronymic',
        label: 'Your patronymic',
        type: 'input',
        required: false,
        placeholder: 'For Example Victorovich',
        renderIcon: false,
    },
    {
        name: 'term',
        label: 'Select term',
        type: 'select',
        required: true,
        options: [
            { value: 6, label: '6 month' },
            { value: 12, label: '12 month' },
            { value: 18, label: '18 month' },
            { value: 24, label: '24 month' },
        ],
        renderIcon: false,
    },
    {
        name: 'email',
        label: 'Your email',
        type: 'input',
        required: true,
        placeholder: 'test@gmail.com',
        renderIcon: true,
    },
    {
        name: 'birthday',
        label: 'Your date of birth',
        type: 'date',
        required: true,
        placeholder: 'Select Date and Time',
        renderIcon: true,
    },
    {
        name: 'passportSeries',
        label: 'Your passport series',
        type: 'input',
        required: true,
        placeholder: '0000',
        renderIcon: true,
    },
    {
        name: 'passportNumber',
        label: 'Your passport number',
        type: 'input',
        required: true,
        placeholder: '000000',
        renderIcon: true,
    },
]
