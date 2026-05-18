import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { AmountControlResult } from './AmountControlResult'

describe('AmountControlResult', () => {
    it('renders label', () => {
        render(<AmountControlResult value={150000} onChange={() => {}} />)

        expect(
            screen.getByText('You have chosen the amount'),
        ).toBeInTheDocument()
    })

    it('displays current value', () => {
        render(<AmountControlResult value={250000} onChange={() => {}} />)

        expect(screen.getByDisplayValue('250000')).toBeInTheDocument()
    })

    it('shows rouble symbol', () => {
        render(<AmountControlResult value={150000} onChange={() => {}} />)

        expect(screen.getByText('₽')).toBeInTheDocument()
    })

    it('calls onChange with numeric value on input', () => {
        const onChange = vi.fn()
        render(<AmountControlResult value={150000} onChange={onChange} />)

        const input = screen.getByRole('textbox')
        fireEvent.input(input, { target: { value: '200000' } })

        expect(onChange).toHaveBeenCalledWith(200000)
    })

    it('filters non-digit characters', () => {
        const onChange = vi.fn()
        render(<AmountControlResult value={150000} onChange={onChange} />)

        const input = screen.getByRole('textbox')
        fireEvent.input(input, { target: { value: '200abc000' } })

        expect(onChange).toHaveBeenCalledWith(200000)
    })
})
