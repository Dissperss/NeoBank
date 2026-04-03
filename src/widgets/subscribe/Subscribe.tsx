import { Section } from '@/shared/ui/section'
import { Container } from '@/shared/ui/container'
import { Email, Send } from './icons'
import styles from './Subscribe.module.css'

export const Subscribe = () => {
    return (
        <Section className={styles.subscribe__section}>
            <Container>
                <span className={styles.subscribe__support}>Support</span>
                <h2 className={styles.subscribe__title}>
                    Subscribe Newsletter & get
                </h2>
                <h3 className={styles.subscribe__subtitle}>Bank News</h3>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        console.log('email submitted')
                    }}
                    className={styles.subscribe__form}
                >
                    <label
                        className={styles.subscribe__form_label}
                        htmlFor="subscribe-email"
                    >
                        <Email />
                        <input
                            className={styles.subscribe__form_input}
                            id="subscribe-email"
                            type="email"
                            name="email"
                            placeholder="Your email"
                            aria-label="email address"
                        />
                    </label>
                    <button className={styles.subscribe__form_btn}>
                        <span className={styles.form__btn_icon}>
                            <Send />
                        </span>
                        <span className={styles.form__btn_text}>Subscribe</span>
                    </button>
                </form>
            </Container>
        </Section>
    )
}
