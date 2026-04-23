import type { UseFormRegisterReturn } from 'react-hook-form'
import { FormLabel } from '../formLabel'
import styles from './FormField.module.css'

type FieldProps = {
    label: string
    htmlFor?: string
    error?: string
} & React.PropsWithChildren

export const FormField = ({ label, htmlFor, error, children }: FieldProps) => {
    return (
        <div className={styles.field}>
            <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
            {children}
            {error && <span className={styles.field__error}>{error}</span>}
        </div>
    )
}
