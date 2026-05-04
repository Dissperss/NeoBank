import styles from './FormLabel.module.css'

type FormLabelProps = {
    className?: string
    htmlFor?: string
} & React.PropsWithChildren

export const FormLabel = ({ className, htmlFor, children }: FormLabelProps) => {
    return (
        <label
            htmlFor={htmlFor}
            className={`${styles.form__label} ${className || ''}`}
        >
            {children}
        </label>
    )
}
