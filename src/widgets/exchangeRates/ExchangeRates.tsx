import { useEffect, useState } from 'react'
import type { CurrencyCode } from '@/shared/types/currency'
import { getCurrency } from '@/shared/api/currency'
import { TARGET_CURRENCIES, UPDATE_INTERVAL } from '@/shared/config'
import { Container } from '@/shared/ui/container'
import styles from './ExchangeRates.module.css'
import { Section } from '@/shared/ui/section'
import { Loader } from '@/shared/ui/loader'
import { ErrorMessage } from '@/shared/ui/errorMessage'
import { BankIcon } from './bankIcon'

type DisplayRate = {
    code: CurrencyCode
    rate: number
}

export const ExchangeRates = () => {
    const [rates, setRates] = useState<DisplayRate[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

    async function fetchRates() {
        setLoading(true)
        setError(null)
        try {
            const conversionRates = await getCurrency()

            const filtered: DisplayRate[] = []

            for (let currency of TARGET_CURRENCIES) {
                const rate = conversionRates[currency]
                if (rate && typeof rate === 'number' && rate > 0) {
                    let countedRate = Number((1 / rate).toFixed(2))
                    filtered.push({ code: currency, rate: countedRate })
                }
            }

            if (filtered.length === 0) {
                throw new Error('No valid currencies received')
            }

            setRates(filtered)
            console.log('Rates updated!')
            setLastUpdate(new Date())
            setError(null)
        } catch (error) {
            setError('Не удалось загрузить курсы')
            setRates(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchRates()

        const timerId = setInterval(() => {
            fetchRates()
        }, UPDATE_INTERVAL)

        return () => {
            clearInterval(timerId)
        }
    }, [])

    return (
        <Section className={styles.currency__section}>
            <Container>
                <div className={styles.currency__wrapper}>
                    <header className={styles.currency__header}>
                        <h3 className={styles.currency__header_title}>
                            Exchange rate in internet bank
                        </h3>
                        <time
                            className={styles.currency__header_update}
                            dateTime={lastUpdate?.toISOString()}
                        >
                            Updated every 15 minutes, MSC:{' '}
                            {lastUpdate?.toLocaleString('ru-RU')}
                        </time>
                    </header>
                    {loading ? (
                        <Loader />
                    ) : error ? (
                        <ErrorMessage onRetry={fetchRates} />
                    ) : rates ? (
                        <>
                            <h4 className={styles.currency__subtitle}>
                                Currency
                            </h4>
                            <div className={styles.currency__block}>
                                <ul
                                    className={styles.currency__list}
                                    role="list"
                                    aria-live="polite"
                                    aria-atomic="true"
                                >
                                    {rates.map((rate) => (
                                        <li
                                            key={rate.code}
                                            className={
                                                styles.currency__list_item
                                            }
                                            role="listitem"
                                        >
                                            <span
                                                className={
                                                    styles.list__item_name
                                                }
                                            >
                                                {rate.code}:
                                            </span>
                                            <span
                                                className={
                                                    styles.list__item_value
                                                }
                                            >
                                                {rate.rate}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <BankIcon
                                    className={styles.currency__block_icon}
                                />
                            </div>
                            <a href="/" className={styles.currency__link}>
                                All courses
                            </a>
                        </>
                    ) : null}
                </div>
            </Container>
        </Section>
    )
}
