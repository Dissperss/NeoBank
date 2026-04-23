import ErrorIcon from '@/shared/assets/icons/loanPage/form/error_input_icon.svg?react'
import SuccesIcon from '@/shared/assets/icons/loanPage/form/success_input_icon.svg?react'
import styles from './FormInput.module.css'
import type { UseFormRegisterReturn } from 'react-hook-form'
import type { InputHTMLAttributes } from 'react'

type FormInputProps = {
    registration: UseFormRegisterReturn
    error?: string
    touched?: boolean
    renderIcon?: boolean | null
    type?: string
    id?: string
    placeholder?: string
} & InputHTMLAttributes<HTMLInputElement>

export const FormInput = ({
    registration,
    error,
    touched,
    renderIcon,
    id,
    type,
    placeholder,
    ...props
}: FormInputProps) => {
    return (
        <div className={styles.input__wrapper}>
            <input
                {...registration}
                {...props}
                onBlur={(e) => {
                    registration.onBlur(e)
                    props.onBlur?.(e)
                }}
                onChange={(e) => {
                    registration.onChange(e)
                    props.onChange?.(e)
                }}
                className={styles.form__input}
                id={id}
                type={type}
                placeholder={placeholder}
            />
            {renderIcon &&
                touched &&
                (error ? (
                    <ErrorIcon className={styles.input__error_icon} />
                ) : (
                    <SuccesIcon className={styles.input__success_icon} />
                ))}
        </div>
    )
}
