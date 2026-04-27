import platinum from '@/shared/assets/images/loanPage/platinumCard.png'
import styles from './CardPromo.module.css'
import { Section } from '@/shared/ui/section'
import { Button } from '@/shared/ui/button'
import { conditions } from '../constants/conditions'
import { Tooltip } from '@/shared/ui/tooltip'

export const CardPromo = () => {
    return (
        <Section className={styles.card__promo_section}>
            <div className={styles.card__promo_wrapper}>
                <div className={styles.card__promo_block}>
                    <h2 className={styles.promo__block_title}>
                        Platinum digital credit card
                    </h2>
                    <p className={styles.promo__block_text}>
                        Our best credit card. Suitable for everyday spending and
                        shopping. Cash withdrawals and transfers without
                        commission and interest.
                    </p>
                    <div className={styles.promo__block_conditons}>
                        {conditions.map((item) => (
                            <div
                                key={item.id}
                                className={styles.block__conditions_item}
                            >
                                <span className={styles.conditions__item_title}>
                                    {item.title}
                                </span>
                                <span className={styles.conditions__item_text}>
                                    {item.text}
                                </span>
                                <Tooltip
                                    className={styles.conditions__item_tooltip}
                                    text={item.tooltip}
                                />
                            </div>
                        ))}
                    </div>
                    <Button onClick={() => console.log('Click!')}>
                        Apply for card
                    </Button>
                </div>
                <img
                    className={styles.card__promo_img}
                    src={platinum}
                    alt="platinum card"
                />
            </div>
        </Section>
    )
}
