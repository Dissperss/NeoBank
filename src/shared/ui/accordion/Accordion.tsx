import type { FaqItem } from '@/pages/loan/constants/faqData'
import { useState } from 'react'
import styles from './Accordion.module.css'
import ExpandIcon from '@/shared/assets/icons/loanPage/faqTabContent/Expand_up.svg?react'

type AccordionProps = {
    items: FaqItem[]
    allowMultiple?: boolean
}

export const Accordion = ({ items, allowMultiple }: AccordionProps) => {
    const [openId, setOpenId] = useState<string | null>(null)
    const [openBloks, setOpenBloks] = useState<string[]>([])

    return (
        <ul className={styles.accordion__list}>
            {items.map((item) => {
                const isOpen = allowMultiple
                    ? openBloks.includes(item.id)
                    : openId === item.id
                return (
                    <li className={styles.accordion__list_item} key={item.id}>
                        <div className={styles.list__item_header}>
                            <span className={styles.list__item_title}>
                                {item.question}
                            </span>
                            <button
                                type="button"
                                aria-expanded={isOpen}
                                className={styles.list__item_btn}
                                onClick={() => {
                                    if (!allowMultiple) {
                                        setOpenId(
                                            openId === item.id ? null : item.id,
                                        )
                                    } else {
                                        setOpenBloks((prev) =>
                                            prev.includes(item.id)
                                                ? prev.filter(
                                                      (id) => id !== item.id,
                                                  )
                                                : [...prev, item.id],
                                        )
                                    }
                                }}
                            >
                                <ExpandIcon
                                    className={`${styles.item__btn_icon} ${isOpen ? styles.item__btn_icon_expanded : ''}`}
                                />
                            </button>
                        </div>
                        {(allowMultiple
                            ? openBloks.includes(item.id)
                            : openId === item.id) && (
                            <span className={styles.list__item_text}>
                                {item.answer}
                            </span>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}
