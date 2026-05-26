import { issuingData, usingData } from '@/pages/loan/constants/faqData'
import { Accordion } from '@/shared/ui/accordion'
import { Section } from '@/shared/ui/section'
import styles from './FaqTab.module.css'

export const FaqTab = () => {
    return (
        <Section className={styles.faq__section}>
            <h2 className={styles.faq__title}>Issuing and receiving a card</h2>
            <Accordion items={issuingData} allowMultiple={false} />

            <h2 className={styles.faq__title}>Using a credit card</h2>
            <Accordion items={usingData} allowMultiple={false} />
        </Section>
    )
}
