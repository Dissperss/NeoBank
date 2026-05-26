import { describe, it, expect, beforeEach } from 'vitest'
import { useApplicationStore } from './applicationStore'
import { STEP_VALUES } from '../types/enums'

describe('applicationStore', () => {
    beforeEach(() => {
        useApplicationStore.getState().reset()
    })

    it('has correct initial state', () => {
        const state = useApplicationStore.getState()

        expect(state.applicationId).toBeNull()
        expect(state.currentStep).toBe(STEP_VALUES.PRESCORING)
        expect(state.maxReachedStep).toBeNull()
        expect(state.error).toBeNull()
        expect(state.offers).toBeNull()
    })

    it('setApplicationId resets state and sets new id', () => {
        const store = useApplicationStore.getState()

        store.setStep(STEP_VALUES.DOCUMENTS)
        store.setMaxReachedStep(STEP_VALUES.DOCUMENTS)
        store.setError('some error')

        store.setApplicationId(42)

        const state = useApplicationStore.getState()

        expect(state.applicationId).toBe(42)
        expect(state.currentStep).toBe(STEP_VALUES.PRESCORING)
        expect(state.maxReachedStep).toBe(STEP_VALUES.PRESCORING)
        expect(state.offers).toBeNull()
    })

    it('setMaxReachedStep only moves forward', () => {
        const store = useApplicationStore.getState()

        store.setMaxReachedStep(STEP_VALUES.DOCUMENTS)
        expect(useApplicationStore.getState().maxReachedStep).toBe(
            STEP_VALUES.DOCUMENTS,
        )

        store.setMaxReachedStep(STEP_VALUES.PRESCORING)
        expect(useApplicationStore.getState().maxReachedStep).toBe(
            STEP_VALUES.DOCUMENTS,
        )

        store.setMaxReachedStep(STEP_VALUES.CODE)
        expect(useApplicationStore.getState().maxReachedStep).toBe(
            STEP_VALUES.CODE,
        )
    })

    it('reset restores initial state', () => {
        const store = useApplicationStore.getState()

        store.setApplicationId(42)
        store.setStep(STEP_VALUES.DOCUMENTS)
        store.setOffers([])

        store.reset()

        const state = useApplicationStore.getState()

        expect(state.applicationId).toBeNull()
        expect(state.currentStep).toBe(STEP_VALUES.PRESCORING)
        expect(state.maxReachedStep).toBeNull()
        expect(state.offers).toBeNull()
    })
})
