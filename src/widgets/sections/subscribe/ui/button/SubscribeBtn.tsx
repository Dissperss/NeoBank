import SendIcon from '@/shared/assets/icons/subscribe/send.svg?react'

import styles from './SubscribeBtn.module.css'

type SubscribeBtnProps = {
    disabled?: boolean
}

export const SubscribeBtn = ({ disabled }: SubscribeBtnProps) => {
    return (
        <button
            disabled={disabled}
            type="submit"
            className={styles.subscribe__form_btn}
        >
            <span className={styles.form__btn_icon}>
                <SendIcon />
            </span>
            <span className={styles.form__btn_text}>Subscribe</span>
        </button>
    )
}
