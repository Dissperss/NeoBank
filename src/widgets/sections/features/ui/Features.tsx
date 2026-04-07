import { Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'
import { featureList } from '../constants/featureList'
import laptopMan from '@/shared/assets/images/features/manWithNotebook.png'

import styles from './Features.module.css'
import { FeatureListItem } from './featureListItem'

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
                                <FeatureListItem key={item.id} item={item} />
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
