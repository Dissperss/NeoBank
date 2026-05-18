import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { AmountControlSlider } from './AmountControlSlider'

describe('AmountControlSlider', () => {
    it('renders label', () => {
        render(
            <AmountControlSlider
                value={150000}
                onChange={() => {}}
                min="150000"
                max="600000"
            />,
        )

        expect(screen.getByText('Select amount')).toBeInTheDocument()
    })

    it('renders min and max values', () => {
        render(
            <AmountControlSlider
                value={250000}
                onChange={() => {}}
                min="150000"
                max="600000"
            />,
        )

        expect(screen.getByText('150000')).toBeInTheDocument()
        expect(screen.getByText('600000')).toBeInTheDocument()
    })

    it('renders current value in output', () => {
        render(
            <AmountControlSlider
                value={300000}
                onChange={() => {}}
                min="150000"
                max="600000"
            />,
        )

        const output = screen.getByText('300000')
        expect(output).toBeInTheDocument()
        expect(output.tagName).toBe('OUTPUT')
    })

    it('calls onChange with numeric value on slider change', () => {
        const onChange = vi.fn()
        render(
            <AmountControlSlider
                value={150000}
                onChange={onChange}
                min="150000"
                max="600000"
            />,
        )

        const slider = screen.getByRole('slider')
        fireEvent.change(slider, { target: { value: '200000' } })

        expect(onChange).toHaveBeenCalledWith(200000)
    })

    it('shows error when touched and error provided', () => {
        render(
            <AmountControlSlider
                value={150000}
                onChange={() => {}}
                min="150000"
                max="600000"
                touched={true}
                error="Required field"
            />,
        )

        expect(screen.getByText('Error')).toBeInTheDocument()
    })

    it('does not show error when not touched', () => {
        render(
            <AmountControlSlider
                value={150000}
                onChange={() => {}}
                min="150000"
                max="600000"
                touched={false}
                error="Required field"
            />,
        )

        expect(screen.queryByText('Error')).not.toBeInTheDocument()
    })
})
