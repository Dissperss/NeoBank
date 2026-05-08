import { FormLabel } from '../formLabel'
import styles from './FormField.module.css'

type FieldProps = {
    label: string
    htmlFor?: string
    error?: string
    className?: string
} & React.PropsWithChildren

export const FormField = ({
    label,
    htmlFor,
    error,
    className,
    children,
}: FieldProps) => {
    return (
        <div className={`${styles.field} ${className || ''}`}>
            <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
            {children}
            {error && <span className={styles.field__error}>{error}</span>}
        </div>
    )
}
