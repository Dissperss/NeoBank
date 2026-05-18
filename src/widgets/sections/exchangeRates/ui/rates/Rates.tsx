import BankIcon from '@/shared/assets/icons/exchange/bank_building.svg?react'
import { ErrorMessage } from '@/shared/ui/errorMessage'
import { Loader } from '@/shared/ui/loader'

import styles from './Rates.module.css'
import { type DisplayRate } from '../../types/currency'

interface RatesProps {
    isLoading: boolean
    errorText: string | null
    rates: DisplayRate[] | null
    fetchRates: () => Promise<void>
}

export const Rates = ({
    isLoading,
    errorText,
    rates,
    fetchRates,
}: RatesProps) => {
    if (isLoading) {
        return <Loader />
    }

    if (errorText) {
        return <ErrorMessage message={errorText} onRetry={fetchRates} />
    }

    return (
        <>
            <h4 className={styles.currency__subtitle}>Currency</h4>
            <div className={styles.currency__block}>
                <ul
                    className={styles.currency__list}
                    role="list"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {rates?.map((rate) => (
                        <li
                            key={rate.code}
                            className={styles.currency__list_item}
                            role="listitem"
                        >
                            <span className={styles.list__item_name}>
                                {rate.code}:
                            </span>
                            <span className={styles.list__item_value}>
                                {rate.rate}
                            </span>
                        </li>
                    ))}
                </ul>
                <BankIcon className={styles.currency__block_icon} />
            </div>
            <a href="/" className={styles.currency__link}>
                All courses
            </a>
        </>
    )
}
