import { useEffect, useState } from 'react'

import { Tabs } from '@/shared/ui/tabs/ui'
import { Container } from '@/shared/ui/container'
import { CardPromo } from '@/pages/loan/ui/sections/cardPromo'
import { CardInstruction } from '@/pages/loan/ui/sections/cardInstruction/ui'
import { OffersList } from '@/features/offerSelection/ui'
import { tabs } from '@/pages/loan/lib/tabsConfig'
import { useNavigate } from 'react-router-dom'
import { useApplicationStore } from '@/entities/application/model/applicationStore'
import { STEP_VALUES } from '@/entities/application/types/enums'
import type { CreditOffer } from '@/entities/offer/types/offer'
import { submitApply } from '@/shared/api/application'
import { Loader } from '@/shared/ui/loader'
import { ErrorMessage } from '@/shared/ui/errorMessage'
import { OfferConfirmation } from '@/features/offerSelection/ui/offerConfirmation'

export const OfferPage = () => {
    const [activeTab, setActiveTab] = useState(0)

    const navigate = useNavigate()
    const selectOffer = useApplicationStore((state) => state.selectOffer)
    const selectedOffer = useApplicationStore((state) => state.selectedOffer)
    const error = useApplicationStore((state) => state.error)
    const setError = useApplicationStore((state) => state.setError)
    const setLoading = useApplicationStore((state) => state.setLoading)
    const isLoading = useApplicationStore((state) => state.isLoading)
    const offers = useApplicationStore((state) => state.offers)
    const setMaxReachedStep = useApplicationStore(
        (state) => state.setMaxReachedStep,
    )
    const setStep = useApplicationStore((state) => state.setStep)

    const onSelect = async (offer: CreditOffer) => {
        setError(null)
        selectOffer(offer)
        setLoading(true)
        try {
            await submitApply(offer)
            setLoading(false)
            setStep(STEP_VALUES.SCORING)
            setMaxReachedStep(STEP_VALUES.SCORING)
        } catch (error) {
            setLoading(false)
            setError('Failed to select offer')
        }
    }

    const onRetry = async () => {
        setError(null)
        setLoading(true)
        try {
            await submitApply(selectedOffer!)
            setStep(STEP_VALUES.SCORING)
            setMaxReachedStep(STEP_VALUES.SCORING)
        } catch (error) {
            setError('Error while sending the apply')
        }
    }

    if (!offers) {
        navigate('/loan')
        return null
    }

    useEffect(() => {
        setStep(STEP_VALUES.OFFERS)
        setMaxReachedStep(STEP_VALUES.OFFERS)
    }, [setStep, setMaxReachedStep])

    return (
        <Container>
            <CardPromo />
            <Tabs tabs={tabs} activeIndex={activeTab} onChange={setActiveTab} />
            <CardInstruction />
            {isLoading ? (
                <Loader />
            ) : error !== null ? (
                <ErrorMessage message={error} onRetry={onRetry} />
            ) : selectedOffer !== null ? (
                <OfferConfirmation />
            ) : (
                <OffersList onSelect={onSelect} offers={offers} />
            )}
        </Container>
    )
}
