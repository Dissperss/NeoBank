import { useState } from 'react'
import { CardPromo } from './sections/cardPromo'
import { tabs } from '../lib/tabsConfig'
import { Tabs } from '@/shared/ui/tabs/ui'
import { Container } from '@/shared/ui/container'

export const LoanPage = () => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <Container>
            <CardPromo />
            <Tabs tabs={tabs} activeIndex={activeTab} onChange={setActiveTab} />
        </Container>
    )
}
