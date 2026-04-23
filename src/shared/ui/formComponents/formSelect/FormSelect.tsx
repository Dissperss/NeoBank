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
}

export const FormSelect = ({ registration, id, options }: FormSelectProps) => {
    return (
        <select className={styles.form__select} {...registration} id={id}>
            {options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    )
}
