import { Time } from '@/features/time/ui'
import { Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'
import { ErrorMessage } from '@/shared/ui/errorMessage'
import { Loader } from '@/shared/ui/loader'

import { useRates } from '../hooks'
import styles from './ExchangeRates.module.css'
import { Rates } from './rates'

export const ExchangeRates = () => {
    const { rates, isLoading, errorText, lastUpdate, fetchRates } = useRates()

    return (
        <Section className={styles.currency__section}>
            <Container>
                <div className={styles.currency__wrapper}>
                    <header className={styles.currency__header}>
                        <h3 className={styles.currency__header_title}>
                            Exchange rate in internet bank
                        </h3>
                        <Time
                            className={styles.currency__header_update}
                            dateTime={lastUpdate}
                        />
                    </header>
                    {isLoading ? (
                        <div className={styles.currency__content}>
                            <Loader />
                        </div>
                    ) : errorText ? (
                        <div className={styles.currency__content}>
                            <ErrorMessage
                                message={errorText}
                                onRetry={fetchRates}
                            />
                        </div>
                    ) : (
                        <Rates rates={rates} />
                    )}
                </div>
            </Container>
        </Section>
    )
}
