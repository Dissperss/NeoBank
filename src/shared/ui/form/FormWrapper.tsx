import styles from './FormWrapper.module.css'

type FormProps = {
    className?: string
} & React.PropsWithChildren

export const FormWrapper = ({ className, children }: FormProps) => {
    return (
        <div className={`${styles.form__wrapper} ${className || ''}`}>
            {children}
        </div>
    )
}
