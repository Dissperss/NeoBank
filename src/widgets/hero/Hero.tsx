import { Section } from '@/shared/ui/section'
import { Container } from '@/shared/ui/container'
import { Button } from '@/shared/ui/button'
import { type CardDesign } from '@/shared/data/cardDesigns'
import styles from './Hero.module.css'

type HeroListProps = {
    data: CardDesign[]
}

export const Hero = ({ data }: HeroListProps) => {
    return (
        <Section className={styles.hero__section}>
            <Container>
                <div className={styles.hero__wrapper}>
                    <div className={styles.hero__block}>
                        <h1 className={styles.hero__title}>
                            Choose the design you like and apply for card right
                            now
                        </h1>
                        <Button
                            onClick={() => console.log('Click!')}
                            className={styles.hero__btn}
                        >
                            Choose the card
                        </Button>
                    </div>
                    <ul className={styles.hero__cards_list}>
                        {data.map((card) => (
                            <li key={card.id}>
                                <img src={card.imageUrl} alt={card.name} />
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </Section>
    )
}
