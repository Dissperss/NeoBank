import { Container } from '@/shared/ui/container'
import { Section } from '@/shared/ui/section'
import { Button } from '@/shared/ui/button'
import ErrorIcon from '@/shared/assets/icons/loanPage/form/error_input_icon.svg?react'
import SuccesIcon from '@/shared/assets/icons/loanPage/form/success_input_icon.svg?react'
import styles from './OffersList.module.css'
import offerImg from '@/shared/assets/images/loanPage/Offer.png'
import type { CreditOffer } from '@/entities/offer/types/offer'

type OfferListProps = {
    offers: CreditOffer[]
    onSelect: (offer: CreditOffer) => void
}

export const OffersList = ({ offers, onSelect }: OfferListProps) => {
    return (
        <Section className={styles.offers__section}>
            <Container>
                <div className={styles.offers__wrapper}>
                    {offers.map((offer, index) => (
                        <div key={index} className={styles.offers__item}>
                            <img
                                className={styles.offers__item_img}
                                src={offerImg}
                                alt="offer image"
                            />
                            <div className={styles.offers__item_inner}>
                                <p className={styles.item__point}>
                                    Requested amount: {offer.requestedAmount} ₽
                                </p>
                                <p className={styles.item__point}>
                                    Total amount: {offer.totalAmount} ₽
                                </p>
                                <p className={styles.item__point}>
                                    For {offer.term} months
                                </p>
                                <p className={styles.item__point}>
                                    Monthly payment:{' '}
                                    {offer.monthlyPayment.toFixed(0)} ₽
                                </p>
                                <p className={styles.item__point}>
                                    Your rate: {offer.rate}%
                                </p>
                                <div className={styles.item__insurance}>
                                    <p className={styles.item__point}>
                                        Insurance included
                                    </p>
                                    {offer.isInsuranceEnabled ? (
                                        <SuccesIcon />
                                    ) : (
                                        <ErrorIcon />
                                    )}
                                </div>
                                <div className={styles.item__salary}>
                                    <p className={styles.item__point}>
                                        Salary client
                                    </p>
                                    {offer.isSalaryClient ? (
                                        <SuccesIcon />
                                    ) : (
                                        <ErrorIcon />
                                    )}
                                </div>
                            </div>
                            <Button
                                onClick={() => onSelect(offer)}
                                className={styles.offers__item_btn}
                            >
                                Select
                            </Button>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
