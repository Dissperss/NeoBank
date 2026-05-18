import { Container } from '@/shared/ui/container'
import styles from './OfferConfirmation.module.css'

export const OfferConfirmation = () => {
    return (
        <Container>
            <div className={styles.offer__confirm}>
                <h2 className={styles.offer__confirm_title}>
                    The preliminary decision has been sent to your email.
                </h2>
                <p className={styles.offer__confirm_text}>
                    In the letter you can get acquainted with the preliminary
                    decision on the credit card.
                </p>
            </div>
        </Container>
    )
}
