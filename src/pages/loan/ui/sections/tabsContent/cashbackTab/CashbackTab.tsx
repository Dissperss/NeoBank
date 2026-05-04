import { Section } from '@/shared/ui/section'
import styles from './CashbackTab.module.css'
import { cashbackData } from '@/pages/loan/constants/cashbackData'

export const CashbackTab = () => {
    return (
        <Section className={styles.cashback__section}>
            <ul className={styles.cashback__list} role="list">
                {cashbackData.map((item) => (
                    <li
                        className={`${styles.cashback__list_item} ${item.isAccent ? styles.background__accent : styles.background__default}`}
                        key={item.id}
                        role="listitem"
                    >
                        <span className={styles.list__item_title}>
                            {item.title}
                        </span>
                        <span className={styles.list__item_percent}>
                            {item.percent}
                        </span>
                    </li>
                ))}
            </ul>
        </Section>
    )
}
