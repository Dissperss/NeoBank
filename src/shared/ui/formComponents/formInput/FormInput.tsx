import ErrorIcon from '@/shared/assets/icons/loanPage/form/error_input_icon.svg?react'
import SuccesIcon from '@/shared/assets/icons/loanPage/form/success_input_icon.svg?react'
import styles from './FormInput.module.css'
import type { UseFormRegisterReturn } from 'react-hook-form'

type FormInputProps = {
    registration: UseFormRegisterReturn
    error?: string
    touched?: boolean
    renderIcon?: boolean | null
    type?: string
    id?: string
}

export const FormInput = ({
    registration,
    error,
    touched,
    renderIcon,
    id,
}: FormInputProps) => {
    return (
        <div className={styles.input__wrapper}>
            <input
                {...registration}
                name={registration.name}
                onChange={registration.onChange}
                onBlur={registration.onBlur}
                ref={registration.ref}
                id={id}
            />
            {renderIcon && touched && (error ? <ErrorIcon /> : <SuccesIcon />)}
        </div>
    )
}
