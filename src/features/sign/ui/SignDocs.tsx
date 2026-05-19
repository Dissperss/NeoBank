import { Container } from '@/shared/ui/container'
import styles from './SignDocs.module.css'
import { STEP_NUMBERS } from '@/entities/application/lib/stepDisplay'
import { useApplicationStore } from '@/entities/application/model/applicationStore'
import { useEffect, useState } from 'react'
import { STEP_VALUES } from '@/entities/application/types/enums'
import DocsIcon from '@/shared/assets/icons/signPage/docs.svg?react'
import { Checkbox } from '@/shared/ui/checkbox'
import { Button } from '@/shared/ui/button'
import { signDocument } from '@/shared/api/document'
import { useParams } from 'react-router-dom'
import { SignDocsConfirm } from '@/pages/sign/ui/signDocsConfirm'

export const SignDocs = () => {
    const { applicationId } = useParams()
    const [isChecked, setIsChecked] = useState(false)
    const [isDocumentsSent, setIsDocumentsSent] = useState(false)
    const currentStep = useApplicationStore((state) => state.currentStep)
    const setStep = useApplicationStore((state) => state.setStep)
    const setError = useApplicationStore((state) => state.setError)
    const setMaxReachedStep = useApplicationStore(
        (state) => state.setMaxReachedStep,
    )

    useEffect(() => {
        setStep(STEP_VALUES.SIGN)
        setMaxReachedStep(STEP_VALUES.SIGN)
    }, [])

    const handleSend = async () => {
        if (!isChecked || !applicationId) return

        setError(null)
        try {
            await signDocument(Number(applicationId))
            setIsDocumentsSent(true)
            setStep(STEP_VALUES.CODE)
            setMaxReachedStep(STEP_VALUES.CODE)
        } catch (error) {
            console.error(error)
            setError('Failed to send documents')
        }
    }

    return (
        <Container>
            {isDocumentsSent ? (
                <SignDocsConfirm />
            ) : (
                <div className={styles.sign__docs_wrapper}>
                    <div className={styles.sign__docs_header}>
                        <h2 className={styles.sign__docs_title}>
                            Signing of documents
                        </h2>
                        <p className={styles.sign__docs_step}>
                            Step {STEP_NUMBERS[currentStep]} of 5
                        </p>
                    </div>
                    <p className={styles.sign__docs_text}>
                        Information on interest rates under bank deposit
                        agreements with individuals. Center for Corporate
                        Information Disclosure. Information of a professional
                        participant in the securities market. Information about
                        persons under whose control or significant influence the
                        Partner Banks are. By leaving an application, you agree
                        to the processing of personal data, obtaining
                        information, obtaining access to a credit history, using
                        an analogue of a handwritten signature, an offer, a
                        policy regarding the processing of personal data, a form
                        of consent to the processing of personal data.
                    </p>
                    <a
                        href="/public/credit-card-offer.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.sign__docs_link}
                    >
                        <DocsIcon />
                        <span className={styles.docs__link_text}>
                            Information on your card
                        </span>
                    </a>
                    <div className={styles.sign__docs_footer}>
                        <Checkbox
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                            text="I agree"
                        />
                        <Button
                            onClick={handleSend}
                            disabled={!isChecked}
                            className={styles.docs__footer_btn}
                        >
                            Send
                        </Button>
                    </div>
                </div>
            )}
        </Container>
    )
}
