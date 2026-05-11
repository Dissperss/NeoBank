import { useNavigate } from 'react-router-dom'
import { Button } from '../button'
import { Container } from '../container'
import styles from './DeniedApplication.module.css'

export const DeniedApplication = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <div>
                <h2 className={styles.denied__application_title}>
                    Your application has been denied
                </h2>
                <p className={styles.denied__application_text}>
                    We were unable to approve your credit application.
                </p>
                <Button
                    className={styles.denied__application_btn}
                    onClick={() => navigate('/loan')}
                >
                    Try again
                </Button>
            </div>
        </Container>
    )
}
