import { useNavigate } from 'react-router-dom'
import { Button } from '@/shared/ui/button'
import err from '@/shared/assets/images/notFoundPage/404.png'
import styles from './NotFoundPage.module.css'
import { Container } from '@/shared/ui/container'

export const NotFoundPage = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <div className={styles.not__found_wrapper}>
                <div className={styles.not__found_block}>
                    <h2 className={styles.not__found_title}>Oops....</h2>
                    <h2 className={styles.not__found_subtitle}>
                        Page not found
                    </h2>
                    <p className={styles.not__found_text}>
                        This Page doesn`t exist or was removed! We suggest you
                        go back.
                    </p>
                    <Button
                        className={styles.not__found_btn}
                        onClick={() => navigate('/')}
                    >
                        Go back
                    </Button>
                </div>
                <img src={err} alt="Error, page not found" />
            </div>
        </Container>
    )
}
