import SendIcon from '@/shared/assets/icons/subscribe/send.svg?react'

import styles from './SubscribeBtn.module.css'

export const SubscribeBtn = () => {
    return (
        <button type="submit" className={styles.subscribe__form_btn}>
            <span className={styles.form__btn_icon}>
                <SendIcon />
            </span>
            <span className={styles.form__btn_text}>Subscribe</span>
        </button>
    )
}
