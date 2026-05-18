import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { PrescoringForm } from './PrescoringForm'
import { useApplicationStore } from '@/entities/application/model/applicationStore'
import { STEP_VALUES } from '@/entities/application/types/enums'
import { sendCreditCardData } from '@/shared/api/form'

const mockNavigate = vi.fn()

vi.mock('@/shared/api/form', () => ({
    sendCreditCardData: vi.fn(),
}))

vi.mock('react-router-dom', async () => {
    const actual =
        await vi.importActual<typeof import('react-router-dom')>(
            'react-router-dom',
        )

    return {
        ...actual,
        useNavigate: () => mockNavigate,
    }
})

const renderPrescoringForm = () =>
    render(
        <MemoryRouter>
            <PrescoringForm />
        </MemoryRouter>,
    )

const fillForm = () => {
    fireEvent.input(screen.getByLabelText('Your last name'), {
        target: { value: 'Ivanov' },
    })

    fireEvent.input(screen.getByLabelText('Your first name'), {
        target: { value: 'Ivan' },
    })

    fireEvent.input(screen.getByLabelText('Your patronymic'), {
        target: { value: 'Ivanovich' },
    })

    fireEvent.change(screen.getByLabelText('Select term'), {
        target: { value: '12' },
    })

    fireEvent.input(screen.getByLabelText('Your email'), {
        target: { value: 'ivanov@gmail.com' },
    })

    const dateInput = screen.getByPlaceholderText('Select Date and Time')

    fireEvent.focus(dateInput)
    fireEvent.input(dateInput, { target: { value: '2001-01-15' } })

    fireEvent.input(screen.getByLabelText('Your passport series'), {
        target: { value: '3456' },
    })

    fireEvent.input(screen.getByLabelText('Your passport number'), {
        target: { value: '234567' },
    })
}

describe('PrescoringForm', () => {
    beforeEach(() => {
        useApplicationStore.setState({
            applicationId: null,
            offers: null,
            selectedOffer: null,
            error: null,
            isLoading: false,
            currentStep: STEP_VALUES.PRESCORING,
            maxReachedStep: STEP_VALUES.PRESCORING,
            agreementChecked: false,
        })
        vi.clearAllMocks()
    })

    it('renders header and contact section', () => {
        renderPrescoringForm()

        expect(screen.getByText('Customize your card')).toBeInTheDocument()
        expect(screen.getByText('Contact Information')).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: /continue/i }),
        ).toBeInTheDocument()
        expect(screen.getByLabelText('Your last name')).toBeInTheDocument()
    })

    it('calls sendCreditCardData with correct data on submit', async () => {
        vi.mocked(sendCreditCardData).mockResolvedValueOnce({
            applicationId: 5,
            offers: [],
        })
        renderPrescoringForm()

        fillForm()

        fireEvent.click(screen.getByRole('button', { name: /continue/i }))

        await waitFor(() => {
            expect(sendCreditCardData).toHaveBeenCalledWith({
                amount: 150000,
                term: 12,
                firstName: 'Ivan',
                lastName: 'Ivanov',
                middleName: 'Ivanovich',
                email: 'ivanov@gmail.com',
                birthdate: '2001-01-15',
                passportSeries: '3456',
                passportNumber: '234567',
            })
        })

        expect(mockNavigate).toHaveBeenCalled()
    })

    it('does not navigate on API failure', async () => {
        vi.mocked(sendCreditCardData).mockRejectedValueOnce(
            new Error('API error'),
        )
        renderPrescoringForm()

        fillForm()

        fireEvent.click(screen.getByRole('button', { name: /continue/i }))

        await waitFor(() => {
            expect(sendCreditCardData).toHaveBeenCalled()
        })

        expect(mockNavigate).not.toHaveBeenCalled()
    })
})
