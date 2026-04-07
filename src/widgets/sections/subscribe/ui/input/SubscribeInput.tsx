import EmailIcon from '@/shared/assets/icons/subscribe/email.svg?react'
import styles from './SubscribeInput.module.css'

export const SubscribeInput = () => {
    return (
        <label
            className={styles.subscribe__form_label}
            htmlFor="subscribe-email"
        >
            <EmailIcon />
            <input
                className={styles.subscribe__form_input}
                id="subscribe-email"
                type="email"
                name="email"
                placeholder="Your email"
                aria-label="email address"
            />
        </label>
    )
}
