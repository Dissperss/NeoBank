import { SubscribeBtn } from '../button'
import { SubscribeInput } from '../input'
import styles from './SubscribeForm.module.css'

export const SubscribeForm = () => {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                console.log('email submitted')
            }}
            className={styles.subscribe__form}
        >
            <SubscribeInput />
            <SubscribeBtn />
        </form>
    )
}
