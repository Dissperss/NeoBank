import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { SignDocs } from './SignDocs'
import { signDocument } from '@/shared/api/document'
import { useApplicationStore } from '@/entities/application/model/applicationStore'

vi.mock('@/shared/assets/icons/signPage/docs.svg?react', () => ({
    default: () => null,
}))

vi.mock('@/shared/api/document', () => ({
    signDocument: vi.fn(),
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

const renderSignDocs = () =>
    render(
        <MemoryRouter>
            <SignDocs />
        </MemoryRouter>,
    )

describe('SignDocs', () => {
    beforeEach(() => {
        useApplicationStore.setState({
            error: null,
            isLoading: false,
        })
        vi.clearAllMocks()
    })

    it('renders header, text, link and disabled Send button', () => {
        renderSignDocs()

        expect(screen.getByText('Signing of documents')).toBeInTheDocument()
        expect(
            screen.getByText('Information on your card'),
        ).toBeInTheDocument()

        const link = screen.getByRole('link', {
            name: /information on your card/i,
        })

        expect(link).toHaveAttribute('href', '/public/credit-card-offer.pdf')

        const sendButton = screen.getByRole('button', { name: /send/i })

        expect(sendButton).toBeDisabled()
    })

    it('enables Send button when checkbox is checked', async () => {
        const user = userEvent.setup()
        renderSignDocs()

        const checkbox = screen.getByRole('checkbox')

        await user.click(checkbox)

        const sendButton = screen.getByRole('button', { name: /send/i })

        expect(sendButton).not.toBeDisabled()
    })

    it('shows SignDocsConfirm after successful send', async () => {
        vi.mocked(signDocument).mockResolvedValueOnce({})
        const user = userEvent.setup()
        renderSignDocs()

        await user.click(screen.getByRole('checkbox'))
        await user.click(screen.getByRole('button', { name: /send/i }))

        await waitFor(() => {
            expect(
                screen.getByText(
                    'Documents have been successfully signed and sent for approval',
                ),
            ).toBeInTheDocument()
        })
    })

    it('does not show confirmation when signDocument fails', async () => {
        vi.mocked(signDocument).mockRejectedValueOnce(new Error('API error'))
        const user = userEvent.setup()
        renderSignDocs()

        await user.click(screen.getByRole('checkbox'))
        await user.click(screen.getByRole('button', { name: /send/i }))

        await waitFor(() => {
            expect(
                screen.getByText('Signing of documents'),
            ).toBeInTheDocument()
        })

        expect(
            screen.queryByText(
                'Documents have been successfully signed and sent for approval',
            ),
        ).not.toBeInTheDocument()
    })
})
