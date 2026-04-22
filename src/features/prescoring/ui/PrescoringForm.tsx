import { AmountControl } from './amountControl'
import styles from './PrescoringForm.module.css'
import { FormWrapper } from '@/shared/ui/form/FormWrapper'

export const PrescoringForm = () => {
    return (
        <FormWrapper>
            <h3 className={styles.customize__card_title}>
                Customize your card
            </h3>
            <p className={styles.customize__card_step}>Step 1 of 5</p>
            <AmountControl />
            <h3 className={styles.contact__info_title}>Contact Information</h3>
            <form action=""></form>
        </FormWrapper>
    )
}
