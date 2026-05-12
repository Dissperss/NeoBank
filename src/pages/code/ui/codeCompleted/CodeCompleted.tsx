import { Container } from '@/shared/ui/container'
import succesImg from '@/shared/assets/images/loanPage/Offer.png'
import styles from './CodeCompleted.module.css'
import { Button } from '@/shared/ui/button'
import { useNavigate } from 'react-router-dom'

export const CodeCompleted = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <div className={styles.code__completed}>
                <img src={succesImg} alt="Success!" />
                <h2 className={styles.code__completed_title}>
                    Congratulations! You have completed your new credit card.
                </h2>
                <p className={styles.code__completed_text}>
                    Your credit card will arrive soon. Thank you for choosing
                    us!
                </p>
                <Button
                    onClick={() => navigate('/')}
                    className={styles.code__completed_btn}
                >
                    View other offers of our bank
                </Button>
            </div>
        </Container>
    )
}
