import styles from './FormWrapper.module.css'

type FormProps = {
    className?: string
} & React.PropsWithChildren

export const FormWrapper = ({ className, children }: FormProps) => {
    return (
        <form className={`${styles.form} ${className || ''}`} action="">
            {children}
        </form>
    )
}
