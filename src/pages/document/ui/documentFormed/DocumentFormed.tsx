import { Container } from '@/shared/ui/container'
import styles from './DocumentFormed.module.css'

export const DocumentFormed = () => {
    return (
        <Container>
            <div className={styles.docs__formed}>
                <h2 className={styles.docs__formed_title}>
                    Documents are formed
                </h2>
                <p className={styles.docs__formed_text}>
                    Documents for signing will be sent to your email
                </p>
            </div>
        </Container>
    )
}
