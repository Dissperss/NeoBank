import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { ScoringForm } from './ScoringForm'
import { submitScoring } from '@/shared/api/application'
import { useApplicationStore } from '@/entities/application/model/applicationStore'
import { STEP_VALUES } from '@/entities/application/types/enums'

vi.mock('@/shared/api/application', () => ({
    submitScoring: vi.fn(),
}))

vi.mock('react-router-dom', async () => {
    const actual =
        await vi.importActual<typeof import('react-router-dom')>(
            'react-router-dom',
        )

    return {
        ...actual,
        useParams: () => ({ applicationId: '5' }),
    }
})

const renderScoringForm = () =>
    render(
        <MemoryRouter>
            <ScoringForm />
        </MemoryRouter>,
    )

const fillForm = () => {
    fireEvent.change(screen.getByLabelText("What's your gender"), {
        target: { value: 'MALE' },
    })
    fireEvent.change(screen.getByLabelText('Your marital status'), {
        target: { value: 'MARRIED' },
    })
    fireEvent.change(screen.getByLabelText('Your number of dependents'), {
        target: { value: '1' },
    })

    const dateInput = screen.getByPlaceholderText('Select Date and Time')

    fireEvent.focus(dateInput)
    fireEvent.input(dateInput, { target: { value: '2020-01-15' } })

    fireEvent.input(screen.getByLabelText('Division code'), {
        target: { value: '123-456' },
    })

    fireEvent.change(screen.getByLabelText('Your employment status'), {
        target: { value: 'EMPLOYED' },
    })
    fireEvent.input(screen.getByLabelText('Your employer INN'), {
        target: { value: '770708389312' },
    })
    fireEvent.input(screen.getByLabelText('Your salary'), {
        target: { value: '100000' },
    })
    fireEvent.change(screen.getByLabelText('Your position'), {
        target: { value: 'WORKER' },
    })
    fireEvent.input(screen.getByLabelText('Your work experience total'), {
        target: { value: '10' },
    })
    fireEvent.input(screen.getByLabelText('Your work experience current'), {
        target: { value: '3' },
    })
}

describe('ScoringForm', () => {
    beforeEach(() => {
        useApplicationStore.setState({
            error: null,
            isLoading: false,
            currentStep: STEP_VALUES.SCORING,
            maxReachedStep: STEP_VALUES.SCORING,
        })
        vi.clearAllMocks()
    })

    it('renders header, personal and employment sections', () => {
        renderScoringForm()

        expect(
            screen.getByText('Continuation of the application'),
        ).toBeInTheDocument()
        expect(screen.getByText('Employment')).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: /continue/i }),
        ).toBeInTheDocument()
        expect(screen.getByLabelText("What's your gender")).toBeInTheDocument()
    })

    it('calls submitScoring with correct data on submit', async () => {
        vi.mocked(submitScoring).mockResolvedValueOnce({})
        renderScoringForm()

        fillForm()

        fireEvent.click(screen.getByRole('button', { name: /continue/i }))

        await waitFor(() => {
            expect(submitScoring).toHaveBeenCalledWith(5, {
                gender: 'MALE',
                maritalStatus: 'MARRIED',
                dependentAmount: 1,
                passportIssueDate: '2020-01-15',
                passportIssueBranch: '123-456',
                employment: {
                    employmentStatus: 'EMPLOYED',
                    employerINN: '770708389312',
                    salary: 100000,
                    position: 'WORKER',
                    workExperienceTotal: 10,
                    workExperienceCurrent: 3,
                },
            })
        })
    })

    it('shows error message on submit failure', async () => {
        vi.mocked(submitScoring).mockRejectedValueOnce(new Error('API error'))
        renderScoringForm()

        fillForm()

        fireEvent.click(screen.getByRole('button', { name: /continue/i }))

        await waitFor(() => {
            expect(
                screen.getByText('Failed to submit scoring form'),
            ).toBeInTheDocument()
        })
    })
})
