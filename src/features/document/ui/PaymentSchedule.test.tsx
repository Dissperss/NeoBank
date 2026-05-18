import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { PaymentSchedule } from './PaymentSchedule'
import {
    getPaymentSсhedule,
    confirmDocument,
} from '@/shared/api/document'
import { useApplicationStore } from '@/entities/application/model/applicationStore'
import { STEP_VALUES } from '@/entities/application/types/enums'

vi.mock('@/shared/api/document', () => ({
    getPaymentSсhedule: vi.fn(),
    confirmDocument: vi.fn(),
}))

vi.mock(
    '@/shared/assets/icons/documentPage/close_modal.svg?react',
    () => ({
        default: () => null,
    }),
)

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual<typeof import('react-router-dom')>(
        'react-router-dom',
    )

    return {
        ...actual,
        useParams: () => ({ applicationId: '5' }),
    }
})

const mockPaymentData = [
    {
        number: 1,
        date: '10.06.2026',
        totalPayment: 5000,
        interestPayment: 1000,
        debtPayment: 4000,
        remainingDebt: 96000,
    },
]

const renderPaymentSchedule = () =>
    render(
        <MemoryRouter>
            <PaymentSchedule />
        </MemoryRouter>,
    )

describe('PaymentSchedule', () => {
    beforeEach(() => {
        useApplicationStore.setState({
            error: null,
            isLoading: false,
            currentStep: STEP_VALUES.DOCUMENTS,
            maxReachedStep: STEP_VALUES.DOCUMENTS,
        })
        vi.clearAllMocks()
    })

    it('shows DeniedApplication when status is CC_DENIED', async () => {
        vi.mocked(getPaymentSсhedule).mockResolvedValueOnce({
            paymentSchedule: [],
            status: 'CC_DENIED',
        })
        renderPaymentSchedule()

        await waitFor(() => {
            expect(
                screen.getByText('Your application has been denied'),
            ).toBeInTheDocument()
        })
    })

    it('renders payment schedule table with data', async () => {
        vi.mocked(getPaymentSсhedule).mockResolvedValueOnce({
            paymentSchedule: mockPaymentData,
            status: 'APPROVED',
        })
        renderPaymentSchedule()

        await waitFor(() => {
            expect(
                screen.getByText('Payment Schedule'),
            ).toBeInTheDocument()
        })

        expect(screen.getByText('5000')).toBeInTheDocument()
        expect(screen.getByText('1000')).toBeInTheDocument()
        expect(screen.getByText('4000')).toBeInTheDocument()
        expect(screen.getByText('96000')).toBeInTheDocument()
    })

    it('shows DocumentFormed after successful send', async () => {
        vi.mocked(getPaymentSсhedule).mockResolvedValueOnce({
            paymentSchedule: mockPaymentData,
            status: 'APPROVED',
        })
        vi.mocked(confirmDocument).mockResolvedValueOnce({})
        const user = userEvent.setup()
        renderPaymentSchedule()

        await waitFor(() => {
            expect(
                screen.getByText('Payment Schedule'),
            ).toBeInTheDocument()
        })

        await user.click(screen.getByRole('checkbox'))
        await user.click(screen.getByRole('button', { name: /send/i }))

        await waitFor(() => {
            expect(
                screen.getByText('Documents are formed'),
            ).toBeInTheDocument()
        })
    })
})
