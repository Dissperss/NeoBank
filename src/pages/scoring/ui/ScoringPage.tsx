import { useApplicationStore } from '@/entities/application/model/applicationStore'
import { STEP_VALUES } from '@/entities/application/types/enums'
import { ScoringForm } from '@/features/scoring/ui'
import { Container } from '@/shared/ui/container'
import { Loader } from '@/shared/ui/loader'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ScoringDecision } from './scoringDecision'

export const ScoringPage = () => {
    const { applicationId } = useParams()
    const navigate = useNavigate()
    const storeId = useApplicationStore((state) => state.applicationId)
    const setStep = useApplicationStore((state) => state.setStep)
    const setMaxReachedStep = useApplicationStore(
        (state) => state.setMaxReachedStep,
    )
    const isLoading = useApplicationStore((state) => state.isLoading)
    const currentStep = useApplicationStore((state) => state.currentStep)
    const steps = Object.values(STEP_VALUES)

    useEffect(() => {
        if (Number(applicationId) !== storeId) {
            navigate('/loan')
        }

        if (
            steps.indexOf(currentStep) !==
                steps.indexOf(STEP_VALUES.DOCUMENTS) ||
            steps.indexOf(currentStep) <= steps.indexOf(STEP_VALUES.DOCUMENTS)
        ) {
            setStep(STEP_VALUES.SCORING)
            setMaxReachedStep(STEP_VALUES.SCORING)
        }
    }, [setStep])

    return (
        <Container>
            {isLoading ? (
                <Loader />
            ) : steps.indexOf(currentStep) >=
              steps.indexOf(STEP_VALUES.DOCUMENTS) ? (
                <ScoringDecision />
            ) : (
                <ScoringForm />
            )}
        </Container>
    )
}
