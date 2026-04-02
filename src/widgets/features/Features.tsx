import laptopMan from '@/shared/assets/images/features/manWithNotebook.png'
import { Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'
import { Check } from '@/shared/ui/checkIcon'
import styles from './Features.module.css'

const featureList = [
    {
        id: 1,
        text: 'Powerfull online protection.',
    },
    {
        id: 2,
        text: 'Cashback without borders.',
    },
    {
        id: 3,
        text: 'Personal design',
    },
    {
        id: 4,
        text: 'Work anywhere in the world',
    },
]

export const Features = () => {
    return (
        <Section className={styles.features__section}>
            <Container>
                <div className={styles.features__wrapper}>
                    <img src={laptopMan} alt="man with laptop" />
                    <div className={styles.features__block}>
                        <h2 className={styles.features__title}>
                            We Provide Many Features You Can Use
                        </h2>
                        <span className={styles.features__descr}>
                            You can explore the features that we provide with
                            fun and have their own functions each feature
                        </span>
                        <ul className={styles.features__list}>
                            {featureList.map((item) => (
                                <li
                                    key={item.id}
                                    className={styles.features__list_item}
                                >
                                    <Check />
                                    <span className={styles.list__item_text}>
                                        {item.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
