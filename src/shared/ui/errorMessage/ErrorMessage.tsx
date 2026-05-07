import { Button } from '../button'
import styles from './ErrorMessage.module.css'

type ErrorMessageProps = {
    onRetry: () => void | Promise<void>
    message: string
}

export const ErrorMessage = ({ onRetry, message }: ErrorMessageProps) => {
    return (
        <div className={styles.error__block}>
            <p className={styles.error__text}>{message}</p>
            <Button className={styles.error__btn} onClick={onRetry}>
                Repeat
            </Button>
        </div>
    )
}
