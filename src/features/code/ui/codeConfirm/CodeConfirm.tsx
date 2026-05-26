import { Container } from '@/shared/ui/container'
import styles from './CodeConfirm.module.css'
import { CodeInput } from '../codeInput'
import { useParams } from 'react-router-dom'
import { verifyCode } from '@/shared/api/document'
import { useState } from 'react'
import { useApplicationStore } from '@/entities/application/model/applicationStore'
import { STEP_VALUES } from '@/entities/application/types/enums'
import { CodeCompleted } from '@/pages/code/ui/codeCompleted'

export const CodeConfirm = () => {
    const { applicationId } = useParams()
    const [isConfirmed, setIsConfirmed] = useState(false)
    const error = useApplicationStore((state) => state.error)
    const setError = useApplicationStore((state) => state.setError)
    const setStep = useApplicationStore((state) => state.setStep)
    const setMaxReachedStep = useApplicationStore(
        (state) => state.setMaxReachedStep,
    )

    const handleCodeSubmit = async (code: string) => {
        if (!applicationId) return
        try {
            setError(null)
            await verifyCode(Number(applicationId), Number(code))
            setIsConfirmed(true)
            setStep(STEP_VALUES.COMPLETE)
            setMaxReachedStep(STEP_VALUES.COMPLETE)
        } catch {
            setError('Invalid confirmation code')
        }
    }

    return (
        <Container>
            {isConfirmed ? (
                <CodeCompleted />
            ) : (
                <div className={styles.code__wrapper}>
                    <h2 className={styles.code__title}>
                        Please enter confirmation code
                    </h2>
                    <CodeInput onCodeSubmit={handleCodeSubmit} />
                    {error && <p className={styles.code__error}>{error}</p>}
                </div>
            )}
        </Container>
    )
}
