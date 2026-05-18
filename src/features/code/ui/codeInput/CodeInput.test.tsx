import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { CodeInput } from './CodeInput'

describe('CodeInput', () => {
    it('renders 4 input fields', () => {
        render(<CodeInput onCodeSubmit={() => {}} />)

        const inputs = screen.getAllByTestId(/^code-input-\d$/)

        expect(inputs).toHaveLength(4)
    })

    it('accepts digit and moves focus to next input', async () => {
        const user = userEvent.setup()
        render(<CodeInput onCodeSubmit={() => {}} />)

        const firstInput = screen.getByTestId('code-input-0')
        const secondInput = screen.getByTestId('code-input-1')

        await user.type(firstInput, '5')

        expect(firstInput).toHaveValue('5')
        expect(document.activeElement).toBe(secondInput)
    })

    it('ignores non-digit input', async () => {
        const user = userEvent.setup()
        render(<CodeInput onCodeSubmit={() => {}} />)

        const firstInput = screen.getByTestId('code-input-0')

        await user.type(firstInput, 'a')

        expect(firstInput).toHaveValue('')
    })

    it('moves focus back on Backspace when field is empty', async () => {
        const user = userEvent.setup()
        render(<CodeInput onCodeSubmit={() => {}} />)

        const firstInput = screen.getByTestId('code-input-0')
        const secondInput = screen.getByTestId('code-input-1')

        await user.type(firstInput, '3')
        await user.type(secondInput, '{Backspace}')

        expect(document.activeElement).toBe(firstInput)
    })

    it('calls onCodeSubmit when all 4 digits are entered', async () => {
        const user = userEvent.setup()
        const onCodeSubmit = vi.fn()
        render(<CodeInput onCodeSubmit={onCodeSubmit} />)

        const firstInput = screen.getByTestId('code-input-0')
        const secondInput = screen.getByTestId('code-input-1')
        const thirdInput = screen.getByTestId('code-input-2')
        const fourthInput = screen.getByTestId('code-input-3')

        await user.type(firstInput, '1')
        await user.type(secondInput, '2')
        await user.type(thirdInput, '3')
        await user.type(fourthInput, '4')

        await waitFor(() => {
            expect(onCodeSubmit).toHaveBeenCalledWith('1234')
        })
    })
})
