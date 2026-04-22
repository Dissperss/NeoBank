import type { UseFormRegisterReturn } from 'react-hook-form'
import { FormInput } from '../formInput'
import { FormLabel } from '../formLabel'
import styles from './FormField.module.css'

type FieldProps = {
    registration: UseFormRegisterReturn
    label: string
    htmlFor?: string
    error?: string
    touched?: boolean
    renderIcon: boolean
    id: string
}

export const FormField = ({
    label,
    htmlFor,
    error,
    registration,
    touched,
    renderIcon,
    id,
}: FieldProps) => {
    return (
        <div className={styles.field}>
            <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
            <FormInput
                registration={registration}
                touched={touched}
                error={error}
                renderIcon={renderIcon}
                id={id}
            />
            {error && <span className={styles.field__error}>{error}</span>}
        </div>
    )
}
