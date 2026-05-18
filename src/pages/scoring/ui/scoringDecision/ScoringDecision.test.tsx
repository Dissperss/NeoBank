import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ScoringDecision } from './ScoringDecision'

describe('ScoringDecision', () => {
    it('renders title', () => {
        render(<ScoringDecision />)

        expect(
            screen.getByText('Wait for a decision on the application'),
        ).toBeInTheDocument()
    })

    it('renders description text', () => {
        render(<ScoringDecision />)

        expect(
            screen.getByText(
                'The answer will come to your mail within 10 minutes',
            ),
        ).toBeInTheDocument()
    })

    it('renders container with correct test id', () => {
        const { container } = render(<ScoringDecision />)

        expect(container.firstChild).toBeInTheDocument()
    })
})
