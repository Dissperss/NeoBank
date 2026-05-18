import { describe, it, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { DeniedApplication } from './DeniedApplication'
import { MemoryRouter } from 'react-router-dom'

const mockNavigate = vi.fn()

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

describe('Denied application', () => {
    it('renders title', () => {
        render(
            <MemoryRouter>
                <DeniedApplication />
            </MemoryRouter>,
        )

        expect(
            screen.getByText('Your application has been denied'),
        ).toBeInTheDocument()
    })

    it('renders text', () => {
        render(
            <MemoryRouter>
                <DeniedApplication />
            </MemoryRouter>,
        )

        expect(
            screen.getByText(
                'We were unable to approve your credit application.',
            ),
        ).toBeInTheDocument()
    })

    it('renders button and navigates to loan on click', () => {
        render(
            <MemoryRouter>
                <DeniedApplication />
            </MemoryRouter>,
        )

        const btn = screen.getByText('Try again')
        expect(btn).toBeInTheDocument()

        fireEvent.click(btn)
        expect(mockNavigate).toHaveBeenCalledWith('/loan')
    })
})
