import { ratesData } from '@/pages/loan/constants/ratesData'
import styles from './RatesTab.module.css'
import { Section } from '@/shared/ui/section'

export const RatesTab = () => {
    return (
        <Section className={styles.rates__section}>
            <ul className={styles.rates__list}>
                {ratesData.map((item) => (
                    <li key={item.id} className={styles.rates__list_item}>
                        <span className={styles.list__item_title}>
                            {item.title}
                        </span>
                        {Array.isArray(item.descr) ? (
                            <div className={styles.list__item_descr_multiline}>
                                {item.descr.map((line, idx) => (
                                    <span key={idx}>{line}</span>
                                ))}
                            </div>
                        ) : (
                            <span className={styles.list__item_descr}>
                                {item.descr}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </Section>
    )
}
