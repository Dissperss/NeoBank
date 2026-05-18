import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { HomePage } from './HomePage'

describe('Home page', () => {
    beforeEach(() => {
        render(<HomePage />)
    })

    it('has hero section with title', () => {
        expect(
            screen.getByText(
                'Choose the design you like and apply for card right now',
            ),
        ).toBeInTheDocument()
    })

    it('has features section with title', () => {
        expect(
            screen.getByText('We Provide Many Features You Can Use'),
        ).toBeInTheDocument()
    })

    it('has exchange rates block with title', () => {
        expect(
            screen.getByText('Exchange rate in internet bank'),
        ).toBeInTheDocument()
    })

    it('has map section with title', () => {
        expect(
            screen.getByText('You can use our services anywhere in the world'),
        ).toBeInTheDocument()
    })

    it('has news section with title', () => {
        expect(
            screen.getByText('Current news from the world of finance'),
        ).toBeInTheDocument()
    })

    it('has subscribe section with title', () => {
        expect(screen.getByText('Support')).toBeInTheDocument()
    })
})
