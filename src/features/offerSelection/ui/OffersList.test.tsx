import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { OffersList } from './OffersList'
import type { CreditOffer } from '@/entities/offer/types/offer'

const mockOffers: CreditOffer[] = [
    {
        applicationId: 1,
        requestedAmount: 50000,
        totalAmount: 55000,
        term: 12,
        monthlyPayment: 4800,
        rate: 12.5,
        isInsuranceEnabled: true,
        isSalaryClient: false,
    },
    {
        applicationId: 2,
        requestedAmount: 100000,
        totalAmount: 115000,
        term: 24,
        monthlyPayment: 5200,
        rate: 9.5,
        isInsuranceEnabled: false,
        isSalaryClient: true,
    },
]

describe('OffersList', () => {
    it('renders multiple offers', () => {
        render(<OffersList offers={mockOffers} onSelect={() => {}} />)

        expect(screen.getByText('Requested amount: 50000 ₽')).toBeInTheDocument()
        expect(screen.getByText('Requested amount: 100000 ₽')).toBeInTheDocument()
        expect(screen.getAllByText('Select')).toHaveLength(2)
    })

    it('calls onSelect with correct offer when button clicked', () => {
        const onSelect = vi.fn()
        render(<OffersList offers={mockOffers} onSelect={onSelect} />)

        const buttons = screen.getAllByText('Select')
        fireEvent.click(buttons[0])

        expect(onSelect).toHaveBeenCalledWith(mockOffers[1])
    })

    it('shows insurance enabled status for each offer', () => {
        render(<OffersList offers={mockOffers} onSelect={() => {}} />)

        expect(screen.getAllByText('Insurance included')).toHaveLength(2)
    })

    it('shows salary client status for each offer', () => {
        render(<OffersList offers={mockOffers} onSelect={() => {}} />)

        expect(screen.getAllByText('Salary client')).toHaveLength(2)
    })
})
