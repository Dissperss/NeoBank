import type { CreditOffer } from '@/entities/offer/types/offer'
import {
    STEP_VALUES,
    type ApplicationStatus,
    type StepEnum,
} from '../types/enums'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { getApplicationStatus } from '@/shared/api/application'

export interface ApplicationState {
    applicationId: number | null
    offers: CreditOffer[] | null
    selectedOffer: CreditOffer | null
    applicationStatus: ApplicationStatus | null
    currentStep: StepEnum
    maxReachedStep: StepEnum | null
    agreementChecked: boolean
    isLoading: boolean
    error: string | null
}

interface ApplicationActions {
    setApplicationId: (id: number) => void
    setOffers: (offers: CreditOffer[]) => void
    selectOffer: (offer: CreditOffer) => void
    setStatus: (status: ApplicationStatus | null) => void
    setStep: (step: StepEnum) => void
    setMaxReachedStep: (step: StepEnum) => void
    setAgreementChecked: (checked: boolean) => void
    setLoading: (loading: boolean) => void
    setError: (error: string | null) => void
    reset: () => void
}

export const useApplicationStore = create<
    ApplicationState & ApplicationActions
>()(
    persist(
        (set) => ({
            applicationId: null,
            offers: null,
            selectedOffer: null,
            applicationStatus: null,
            currentStep: STEP_VALUES.PRESCORING,
            maxReachedStep: null,
            agreementChecked: false,
            isLoading: false,
            error: null,
            setApplicationId: (id) =>
                set({
                    applicationId: id,
                    currentStep: STEP_VALUES.PRESCORING,
                    maxReachedStep: STEP_VALUES.PRESCORING,
                    offers: null,
                    selectedOffer: null,
                    applicationStatus: null,
                    agreementChecked: false,
                }),
            setOffers: (offers) =>
                set({
                    offers: offers,
                }),
            selectOffer: (offer) =>
                set({
                    selectedOffer: offer,
                }),
            setStatus: (status) =>
                set({
                    applicationStatus: status,
                }),
            setStep: (step) =>
                set({
                    currentStep: step,
                }),
            setMaxReachedStep: (step) =>
                set((state) => {
                    const steps = Object.values(STEP_VALUES)
                    const currentMaxIndex = state.maxReachedStep
                        ? steps.indexOf(state.maxReachedStep)
                        : -1
                    const newIndex = steps.indexOf(step)

                    return {
                        maxReachedStep:
                            newIndex > currentMaxIndex
                                ? step
                                : state.maxReachedStep,
                    }
                }),
            setAgreementChecked: (checked) =>
                set({ agreementChecked: checked }),
            setLoading: (loading) => set({ isLoading: loading }),
            setError: (error) => set({ error }),
            reset: () =>
                set({
                    applicationId: null,
                    offers: null,
                    selectedOffer: null,
                    applicationStatus: null,
                    currentStep: STEP_VALUES.PRESCORING,
                    maxReachedStep: null,
                    agreementChecked: false,
                    isLoading: false,
                    error: null,
                }),
        }),
        {
            name: 'application-store',
            partialize: (state) => ({
                applicationId: state.applicationId,
                offers: state.offers,
                selectedOffer: state.selectedOffer,
                applicationStatus: state.applicationStatus,
                currentStep: state.currentStep,
                maxReachedStep: state.maxReachedStep,
                agreementChecked: state.agreementChecked,
            }),
            onRehydrateStorage: () => {
                return (state) => {
                    if (
                        state?.applicationId &&
                        state?.currentStep === STEP_VALUES.PRESCORING
                    ) {
                        getApplicationStatus(state.applicationId).then(
                            (res) => {
                                state.setStatus(res.status as ApplicationStatus)
                            },
                        )
                    }
                }
            },
        },
    ),
)
