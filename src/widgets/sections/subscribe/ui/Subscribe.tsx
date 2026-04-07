import { Section } from '@/shared/ui/section'
import { Container } from '@/shared/ui/container'
import { SubscribeForm } from './form/SubscribeForm'

import styles from './Subscribe.module.css'

export const Subscribe = () => {
    return (
        <Section className={styles.subscribe__section}>
            <Container>
                <span className={styles.subscribe__support}>Support</span>
                <h2 className={styles.subscribe__title}>
                    Subscribe Newsletter & get
                </h2>
                <h3 className={styles.subscribe__subtitle}>Bank News</h3>
                <SubscribeForm />
            </Container>
        </Section>
    )
}
