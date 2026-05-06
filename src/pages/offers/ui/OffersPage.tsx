import { useEffect, useState } from 'react'

import { Tabs } from '@/shared/ui/tabs/ui'
import { Container } from '@/shared/ui/container'
import { CardPromo } from '@/pages/loan/ui/sections/cardPromo'
import { CardInstruction } from '@/pages/loan/ui/sections/cardInstruction/ui'
import { OffersList } from '@/features/offerSelection/ui'
import { tabs } from '@/pages/loan/lib/tabsConfig'
import { useNavigate, useParams } from 'react-router-dom'
import { useApplicationStore } from '@/entities/application/model/applicationStore'
import { STEP_VALUES } from '@/entities/application/types/enums'

export const OfferPage = () => {
    const [activeTab, setActiveTab] = useState(0)
    const params = useParams()
    const { applicationId } = useParams()
    const navigate = useNavigate()
    const id = useApplicationStore((state) => state.applicationId)
    const offers = useApplicationStore((state) => state.offers)
    const setMaxReachedStep = useApplicationStore(
        (state) => state.setMaxReachedStep,
    )

    if (!offers) {
        navigate('/loan')
        return null
    }

    if (offers?.length === 0 || offers === null) {
        navigate('/loan')
    }

    useEffect(() => {
        setMaxReachedStep(STEP_VALUES.OFFERS)
    }, [])

    return (
        <Container>
            <CardPromo />
            <Tabs tabs={tabs} activeIndex={activeTab} onChange={setActiveTab} />
            <CardInstruction />
            <OffersList offers={offers} />
        </Container>
    )
}
