import EmailIcon from '@/shared/assets/icons/subscribe/email.svg?react'

import styles from './SubscribeInput.module.css'
import type { UseFormRegisterReturn } from 'react-hook-form'

type SubscribeInputProps = {
    register: UseFormRegisterReturn
    disabled?: boolean
}

export const SubscribeInput = ({ register }: SubscribeInputProps) => {
    return (
        <label
            className={styles.subscribe__form_label}
            htmlFor="subscribe-email"
        >
            <EmailIcon />
            <input
                {...register}
                className={styles.subscribe__form_input}
                id="subscribe-email"
                type="email"
                placeholder="Your email"
                aria-label="email address"
            />
        </label>
    )
}
