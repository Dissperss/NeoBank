import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { OfferConfirmation } from './OfferConfirmation'

describe('OfferConfirmation', () => {
    it('renders title', () => {
        render(<OfferConfirmation />)

        expect(
            screen.getByText(
                'The preliminary decision has been sent to your email.',
            ),
        ).toBeInTheDocument()
    })

    it('renders description text', () => {
        render(<OfferConfirmation />)

        expect(
            screen.getByText(
                'In the letter you can get acquainted with the preliminary decision on the credit card.',
            ),
        ).toBeInTheDocument()
    })
})
