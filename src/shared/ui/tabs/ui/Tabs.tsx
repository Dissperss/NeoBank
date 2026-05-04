import { TabButton } from './tabButton'
import { Section } from '../../section'
import styles from './Tabs.module.css'
import type { ReactElement } from 'react'

type TabsProps = {
    tabs: {
        id: string
        label: string
        content?: ReactElement
    }[]
    activeIndex: number
    onChange: (index: number) => void
}

export const Tabs = ({ tabs, activeIndex, onChange }: TabsProps) => {
    return (
        <Section className={styles.tabs__section}>
            <div className={styles.tabs__wrapper}>
                {tabs.map((item, index) => (
                    <TabButton
                        key={item.id}
                        isActive={activeIndex === index}
                        onClick={() => onChange(index)}
                    >
                        {item.label}
                    </TabButton>
                ))}
            </div>
            {tabs[activeIndex]?.content}
        </Section>
    )
}
