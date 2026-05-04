import { Section } from '@/shared/ui/section'
import styles from './AboutCardTab.module.css'
import { aboutCardTabContent } from '@/pages/loan/constants/aboutCardTabContent'

export const AboutCardTab = () => {
    return (
        <Section className={styles.about__card_section}>
            <ul className={styles.about__card_list}>
                {aboutCardTabContent.map((item) => (
                    <li
                        className={`${styles.card__list_item} ${item.isAccent ? styles.background__accent : styles.background__default}`}
                        key={item.id}
                    >
                        {item.icon}
                        <span className={styles.list__item_title}>
                            {item.title}
                        </span>
                        <span className={styles.list__item_text}>
                            {item.descr}
                        </span>
                    </li>
                ))}
            </ul>
        </Section>
    )
}
