import ErrorIcon from '@/shared/assets/icons/loanPage/form/error_input_icon.svg?react'
import SuccesIcon from '@/shared/assets/icons/loanPage/form/success_input_icon.svg?react'
import styles from './FormInput.module.css'

type FormInputProps = {
    type: string
    placeholder: string
    required: boolean
    name: string
    className?: string
    id: string
    renderIcon: boolean | null
}

export const FormInput = ({
    renderIcon,
    type,
    placeholder,
    required,
    name,
    className,
    id,
}: FormInputProps) => {
    return (
        <div className={styles.input__wrapper}>
            <input
                type={type}
                placeholder={placeholder}
                className={`${styles.form__input} ${className || ''}`}
                required={required}
                name={name}
                id={id}
            />
            <ErrorIcon />
            <SuccesIcon />
        </div>
    )
}
