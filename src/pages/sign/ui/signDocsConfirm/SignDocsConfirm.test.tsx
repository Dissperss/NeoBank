import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SignDocsConfirm } from './SignDocsConfirm'

describe('Sign docs confirm', () => {
    it('renders title', () => {
        render(<SignDocsConfirm />)

        expect(
            screen.getByText(
                'Documents have been successfully signed and sent for approval',
            ),
        ).toBeInTheDocument()
    })

    it('renders text', () => {
        render(<SignDocsConfirm />)

        expect(
            screen.getByText(
                'Within 10 minutes you will be sent a PIN code to your email for confirmation',
            ),
        ).toBeInTheDocument()
    })

    it('renders container with correct test id', () => {
        const { container } = render(<SignDocsConfirm />)

        expect(container.firstChild).toBeInTheDocument()
    })
})
