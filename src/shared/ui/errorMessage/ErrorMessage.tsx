import { Button } from '../button'
import styles from './ErrorMessage.module.css'

type ErrorMessageProps = {
    onRetry: () => void | Promise<void>
}

export const ErrorMessage = ({ onRetry }: ErrorMessageProps) => {
    return (
        <>
            <p className={styles.error__text}>Error loading data</p>
            <Button onClick={onRetry}>Repeat</Button>
        </>
    )
}
