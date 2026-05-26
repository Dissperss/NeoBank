import { describe, it, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { CodeCompleted } from './CodeCompleted'
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

describe('Code completed', () => {
    it('renders title', () => {
        render(
            <MemoryRouter>
                <CodeCompleted />
            </MemoryRouter>,
        )

        expect(
            screen.getByText(
                'Congratulations! You have completed your new credit card.',
            ),
        ).toBeInTheDocument()
    })

    it('renders text', () => {
        render(
            <MemoryRouter>
                <CodeCompleted />
            </MemoryRouter>,
        )

        expect(
            screen.getByText(
                'Your credit card will arrive soon. Thank you for choosing us!',
            ),
        ).toBeInTheDocument()
    })

    it('renders button and navigates to home on click', () => {
        render(
            <MemoryRouter>
                <CodeCompleted />
            </MemoryRouter>,
        )

        const btn = screen.getByText('View other offers of our bank')
        expect(btn).toBeInTheDocument()

        fireEvent.click(btn)
        expect(mockNavigate).toHaveBeenCalledWith('/')
    })
})
