import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { CodeConfirm } from './CodeConfirm'
import { verifyCode } from '@/shared/api/document'
import { useApplicationStore } from '@/entities/application/model/applicationStore'

vi.mock('@/shared/api/document', () => ({
    verifyCode: vi.fn(),
}))

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual<typeof import('react-router-dom')>(
        'react-router-dom',
    )

    return {
        ...actual,
        useParams: () => ({ applicationId: '5' }),
    }
})

const renderCodeConfirm = () =>
    render(
        <MemoryRouter>
            <CodeConfirm />
        </MemoryRouter>,
    )

describe('CodeConfirm', () => {
    beforeEach(() => {
        useApplicationStore.setState({
            error: null,
            isLoading: false,
        })
        vi.clearAllMocks()
    })

    it('renders title and CodeInput initially', () => {
        renderCodeConfirm()

        expect(
            screen.getByText('Please enter confirmation code'),
        ).toBeInTheDocument()
        expect(screen.getAllByTestId(/^code-input-\d$/)).toHaveLength(4)
    })

    it('shows CodeCompleted after successful verification', async () => {
        vi.mocked(verifyCode).mockResolvedValueOnce({})
        renderCodeConfirm()

        const user = userEvent.setup()
        const inputs = screen.getAllByTestId(/^code-input-\d$/)

        await user.type(inputs[0], '1')
        await user.type(inputs[1], '2')
        await user.type(inputs[2], '3')
        await user.type(inputs[3], '4')

        await waitFor(() => {
            expect(
                screen.getByText(
                    'Congratulations! You have completed your new credit card.',
                ),
            ).toBeInTheDocument()
        })
    })

    it('displays error message when verification fails', async () => {
        vi.mocked(verifyCode).mockRejectedValueOnce(new Error('Invalid code'))
        renderCodeConfirm()

        const user = userEvent.setup()
        const inputs = screen.getAllByTestId(/^code-input-\d$/)

        await user.type(inputs[0], '1')
        await user.type(inputs[1], '2')
        await user.type(inputs[2], '3')
        await user.type(inputs[3], '4')

        await waitFor(() => {
            expect(
                screen.getByText('Invalid confirmation code'),
            ).toBeInTheDocument()
        })
    })
})
