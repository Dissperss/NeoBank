import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { OfferPage } from './OffersPage'
import { submitApply } from '@/shared/api/application'
import { useApplicationStore } from '@/entities/application/model/applicationStore'
import { STEP_VALUES } from '@/entities/application/types/enums'
import type { CreditOffer } from '@/entities/offer/types/offer'

const mockNavigate = vi.fn()

vi.mock('@/shared/api/application', () => ({
    submitApply: vi.fn(),
}))

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual<typeof import('react-router-dom')>(
        'react-router-dom',
    )

    return {
        ...actual,
        useNavigate: () => mockNavigate,
    }
})

const mockOffers: CreditOffer[] = [
    {
        applicationId: 1,
        requestedAmount: 50000,
        totalAmount: 55000,
        term: 12,
        monthlyPayment: 4800,
        rate: 12.5,
        isInsuranceEnabled: true,
        isSalaryClient: false,
    },
]

const renderOfferPage = () =>
    render(
        <MemoryRouter>
            <OfferPage />
        </MemoryRouter>,
    )

describe('OfferPage', () => {
    beforeEach(() => {
        useApplicationStore.setState({
            applicationId: 5,
            offers: mockOffers,
            selectedOffer: null,
            error: null,
            isLoading: false,
            currentStep: STEP_VALUES.PRESCORING,
            maxReachedStep: null,
            agreementChecked: false,
        })
        vi.clearAllMocks()
    })

    it('redirects to /loan when no offers', () => {
        useApplicationStore.setState({ offers: null })
        renderOfferPage()

        expect(mockNavigate).toHaveBeenCalledWith('/loan')
    })

    it('sets step to OFFERS on mount', () => {
        renderOfferPage()

        const state = useApplicationStore.getState()
        expect(state.currentStep).toBe(STEP_VALUES.OFFERS)
        expect(state.maxReachedStep).toBe(STEP_VALUES.OFFERS)
    })

    it('renders OffersList by default', () => {
        renderOfferPage()

        expect(
            screen.getByText('Requested amount: 50000 ₽'),
        ).toBeInTheDocument()
        expect(screen.getByText('Select')).toBeInTheDocument()
    })

    it('shows Loader when isLoading', () => {
        useApplicationStore.setState({ isLoading: true })
        renderOfferPage()

        expect(screen.getByText('Загрузка...')).toBeInTheDocument()
    })

    it('shows ErrorMessage when error exists', () => {
        useApplicationStore.setState({ error: 'Something went wrong' })
        renderOfferPage()

        expect(screen.getByText('Something went wrong')).toBeInTheDocument()
        expect(screen.getByText('Repeat')).toBeInTheDocument()
    })

    it('shows OfferConfirmation when offer is selected', () => {
        useApplicationStore.setState({ selectedOffer: mockOffers[0] })
        renderOfferPage()

        expect(
            screen.getByText(
                'The preliminary decision has been sent to your email.',
            ),
        ).toBeInTheDocument()
    })

    it('calls submitApply and updates step on select', async () => {
        vi.mocked(submitApply).mockResolvedValueOnce({})
        renderOfferPage()

        fireEvent.click(screen.getByText('Select'))

        await waitFor(() => {
            expect(submitApply).toHaveBeenCalledWith(mockOffers[0])
        })

        const state = useApplicationStore.getState()
        expect(state.currentStep).toBe(STEP_VALUES.SCORING)
        expect(state.maxReachedStep).toBe(STEP_VALUES.SCORING)
    })

    it('shows error when submitApply fails on select', async () => {
        vi.mocked(submitApply).mockRejectedValueOnce(new Error('API error'))
        renderOfferPage()

        fireEvent.click(screen.getByText('Select'))

        await waitFor(() => {
            expect(
                screen.getByText('Failed to select offer'),
            ).toBeInTheDocument()
        })
    })

    it('retries submitApply on Retry button click', async () => {
        useApplicationStore.setState({
            selectedOffer: mockOffers[0],
            error: 'Failed to select offer',
            isLoading: false,
        })
        renderOfferPage()

        await waitFor(() => {
            expect(screen.getByText('Repeat')).toBeInTheDocument()
        })

        vi.mocked(submitApply).mockResolvedValueOnce({})
        fireEvent.click(screen.getByText('Repeat'))

        await waitFor(() => {
            expect(submitApply).toHaveBeenCalledWith(mockOffers[0])
        })
    })
})
