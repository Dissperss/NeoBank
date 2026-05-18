import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { ModalDeny } from './ModalDeny'

vi.mock(
    '@/shared/assets/icons/documentPage/close_modal.svg?react',
    () => ({
        default: () => null,
    }),
)

const renderModalDeny = (props: Partial<React.ComponentProps<typeof ModalDeny>> = {}) =>
    render(
        <MemoryRouter>
            <ModalDeny
                isOpen={false}
                onClose={vi.fn()}
                onDeny={vi.fn()}
                {...props}
            />
        </MemoryRouter>,
    )

describe('ModalDeny', () => {
    it('renders nothing when isOpen is false', () => {
        const { container } = renderModalDeny({ isOpen: false })

        expect(container).toBeEmptyDOMElement()
    })

    it('shows confirm state with Deny and Cancel buttons', () => {
        renderModalDeny({ isOpen: true })

        expect(
            screen.getByText('You exactly sure, you want to cancel this application?'),
        ).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: /deny/i }),
        ).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: /cancel/i }),
        ).toBeInTheDocument()
    })

    it('calls onDeny when Deny button is clicked', async () => {
        const onDeny = vi.fn()
        const user = userEvent.setup()
        renderModalDeny({ isOpen: true, onDeny })

        await user.click(screen.getByRole('button', { name: /deny/i }))

        expect(onDeny).toHaveBeenCalledTimes(1)
    })

    it('shows success state after deny', () => {
        renderModalDeny({ isOpen: true, isDenied: true })

        expect(
            screen.getByText('Your application has been deny!'),
        ).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: /go home/i }),
        ).toBeInTheDocument()
    })
})
