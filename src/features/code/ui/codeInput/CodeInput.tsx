import { useEffect, useRef, useState } from 'react'
import styles from './CodeInput.module.css'
type CodeInputProps = {
    onCodeSubmit: (code: string) => void
}

export const CodeInput = ({ onCodeSubmit }: CodeInputProps) => {
    const [code, setCode] = useState<string[]>(['', '', '', ''])
    const inputsRef = useRef<(HTMLInputElement | null)[]>([])

    useEffect(() => {
        inputsRef.current[0]?.focus()
    }, [])

    const handleChange = (index: number, value: string) => {
        if (!/^\d?$/.test(value)) return

        const newCode = [...code]
        newCode[index] = value
        setCode(newCode)

        if (value && index < 3) {
            inputsRef.current[index + 1]?.focus()
        }

        if (newCode.every((d) => d !== '')) {
            setTimeout(() => onCodeSubmit(newCode.join('')), 100)
        }
    }

    const handleKeydown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputsRef.current[index - 1]?.focus()
        }
    }

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault()

        const pasted = e.clipboardData
            .getData('text')
            .replace(/\D/g, '')
            .slice(0, 4)

        if (!pasted) return

        const newCode = pasted.split('')

        while (newCode.length < 4) {
            newCode.push('')
        }

        setCode(newCode)

        const lastIndex = Math.min(pasted.length - 1, 3)

        inputsRef.current[lastIndex]?.focus()

        if (pasted.length === 4) {
            setTimeout(() => {
                onCodeSubmit(pasted)
            }, 100)
        }
    }

    return (
        <div className={styles.input__block}>
            {code.map((digit, index) => (
                <input
                    key={index}
                    className={styles.input}
                    ref={(el) => {
                        inputsRef.current[index] = el
                    }}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeydown(index, e)}
                    onPaste={handlePaste}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    placeholder="○"
                />
            ))}
        </div>
    )
}
