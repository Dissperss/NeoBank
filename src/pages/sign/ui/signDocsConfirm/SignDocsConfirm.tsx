import { Container } from '@/shared/ui/container'
import styles from './SignDocsConfirm.module.css'

export const SignDocsConfirm = () => {
    return (
        <Container>
            <div className={styles.docs__confirm}>
                <h2 className={styles.docs__confirm_title}>
                    Documents have been successfully signed and sent for
                    approval
                </h2>
                <p className={styles.docs__confirm_text}>
                    Within 10 minutes you will be sent a PIN code to your email
                    for confirmation
                </p>
            </div>
        </Container>
    )
}
