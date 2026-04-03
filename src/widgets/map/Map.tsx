import { Section } from '@/shared/ui/section'
import { Container } from '@/shared/ui/container'
import map from '@/shared/assets/images/map/map.png'
import styles from './Map.module.css'

export const Map = () => {
    return (
        <Section className={styles.map__section}>
            <Container>
                <h2 className={styles.map__title}>
                    You can use our services anywhere in the world
                </h2>
                <h3 className={styles.map__subtitle}>
                    Withdraw and transfer money online through our application
                </h3>
                <img className={styles.map__img} src={map} alt="map" />
            </Container>
        </Section>
    )
}
