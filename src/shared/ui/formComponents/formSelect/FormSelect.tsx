import styles from './FormSelect.module.css'
import type { UseFormRegisterReturn } from 'react-hook-form'

type FormSelectProps = {
    registration: UseFormRegisterReturn
    id: string
    options?: {
        value: number
        label: string
    }[]
    touched?: boolean
    error?: string
    submitted: boolean
}

export const FormSelect = ({
    registration,
    id,
    options,
    error,
    touched,
    submitted,
}: FormSelectProps) => {
    const hasError = !!error && (touched || submitted)
    return (
        <select
            className={`${styles.form__select} ${hasError ? styles.form__select_error : ''}`}
            {...registration}
            id={id}
        >
            {options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    )
}
