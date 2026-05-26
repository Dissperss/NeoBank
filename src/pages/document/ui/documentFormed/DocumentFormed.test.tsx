import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DocumentFormed } from './DocumentFormed'

describe('Document formed', () => {
    it('renders title', () => {
        render(<DocumentFormed />)

        expect(screen.getByText('Documents are formed')).toBeInTheDocument()
    })

    it('renders text', () => {
        render(<DocumentFormed />)

        expect(
            screen.getByText(
                'Documents for signing will be sent to your email',
            ),
        ).toBeInTheDocument()
    })

    it('renders container with correct test id', () => {
        const { container } = render(<DocumentFormed />)

        expect(container.firstChild).toBeInTheDocument()
    })
})
