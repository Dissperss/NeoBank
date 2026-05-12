import { confirmDocument, getPaymentSсhedule } from '@/shared/api/document'
import { Container } from '@/shared/ui/container'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './PaymentSchedule.module.css'
import { STEP_NUMBERS } from '@/entities/application/lib/stepDisplay'
import { useApplicationStore } from '@/entities/application/model/applicationStore'
import { TableTitle } from '@/shared/ui/tableTitle'
import type { PaymentScheduleItem } from '@/entities/application/types/application'
import { Button } from '@/shared/ui/button'
import { Checkbox } from '@/shared/ui/checkbox'
import { STEP_VALUES } from '@/entities/application/types/enums'
import { DeniedApplication } from '@/shared/ui/deniedApplication'
import { denyApplication } from '@/shared/api/application'
import { ModalDeny } from '@/shared/ui/modalDeny'
import { DocumentFormed } from '@/pages/document/ui/documentFormed'

export const PaymentSchedule = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [isDocumentsSent, setIsDocumentsSent] = useState(false)
    const [sortField, setSortField] = useState<
        keyof PaymentScheduleItem | null
    >(null)
    const [isDenied, setIsDenied] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')
    const [paymentData, setPaymentData] = useState<PaymentScheduleItem[]>([])
    const [status, setStatus] = useState<string>('')
    const { applicationId } = useParams()
    const currentStep = useApplicationStore((state) => state.currentStep)
    const setStep = useApplicationStore((state) => state.setStep)
    const setMaxReachedStep = useApplicationStore(
        (state) => state.setMaxReachedStep,
    )

    useEffect(() => {
        const getData = async () => {
            try {
                const { paymentSchedule, status: appStatus } =
                    await getPaymentSсhedule(Number(applicationId))

                setPaymentData(paymentSchedule)
                setStatus(appStatus)
            } catch (error) {
                console.error(error)
                setPaymentData([])
            } finally {
                setStep(STEP_VALUES.DOCUMENTS)
                setMaxReachedStep(STEP_VALUES.DOCUMENTS)
            }
        }

        getData()
    }, [])

    const sortedData = useMemo(() => {
        if (!sortField) return paymentData

        return [...paymentData].sort((a, b) => {
            const aVal = a[sortField]
            const bVal = b[sortField]

            if (sortDir === 'asc') return aVal > bVal ? 1 : -1
            return aVal < bVal ? 1 : -1
        })
    }, [paymentData, sortField, sortDir])

    const handleSort = (field: keyof PaymentScheduleItem) => {
        if (sortField === field) {
            setSortDir((prev) => (prev === 'asc' ? 'desc' : 'asc'))
        } else {
            setSortField(field)
            setSortDir('desc')
        }
    }

    const handleDeny = async () => {
        try {
            await denyApplication(Number(applicationId))
            setIsDenied(true)
        } catch (error) {
            console.error(error)
        }
    }

    const handleSend = async () => {
        if (!isChecked) return
        try {
            await confirmDocument(Number(applicationId))
            setIsDocumentsSent(true)
            setStep(STEP_VALUES.SIGN)
            setMaxReachedStep(STEP_VALUES.SIGN)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            {isDocumentsSent ? (
                <DocumentFormed />
            ) : (
                <>
                    <ModalDeny
                        isOpen={isModalOpen}
                        onClose={() => {
                            setIsModalOpen(false)
                            setIsDenied(false)
                        }}
                        onDeny={handleDeny}
                        isDenied={isDenied}
                    />
                    <Container>
                        <div className={styles.payment__wrapper}>
                            {status === 'CC_DENIED' ||
                            status === 'REQUEST_DENIED' ? (
                                <DeniedApplication />
                            ) : (
                                <>
                                    <header className={styles.payment__header}>
                                        <h2
                                            className={
                                                styles.payment__header_title
                                            }
                                        >
                                            Payment Schedule
                                        </h2>
                                        <p
                                            className={
                                                styles.payment__header_step
                                            }
                                        >
                                            Step {STEP_NUMBERS[currentStep]} of
                                            5
                                        </p>
                                    </header>
                                    <table className={styles.payment__table}>
                                        <thead
                                            className={
                                                styles.payment__table_header
                                            }
                                        >
                                            <tr
                                                className={
                                                    styles.table__header__title
                                                }
                                            >
                                                <th>
                                                    <TableTitle
                                                        onClick={() =>
                                                            handleSort('number')
                                                        }
                                                        sortDirection={
                                                            sortField ===
                                                            'number'
                                                                ? sortDir
                                                                : null
                                                        }
                                                        titleText="number"
                                                    />
                                                </th>
                                                <th>
                                                    <TableTitle
                                                        onClick={() =>
                                                            handleSort('date')
                                                        }
                                                        sortDirection={
                                                            sortField === 'date'
                                                                ? sortDir
                                                                : null
                                                        }
                                                        titleText="date"
                                                    />
                                                </th>
                                                <th>
                                                    <TableTitle
                                                        onClick={() =>
                                                            handleSort(
                                                                'totalPayment',
                                                            )
                                                        }
                                                        sortDirection={
                                                            sortField ===
                                                            'totalPayment'
                                                                ? sortDir
                                                                : null
                                                        }
                                                        titleText="total payment"
                                                    />
                                                </th>
                                                <th>
                                                    <TableTitle
                                                        onClick={() =>
                                                            handleSort(
                                                                'interestPayment',
                                                            )
                                                        }
                                                        sortDirection={
                                                            sortField ===
                                                            'interestPayment'
                                                                ? sortDir
                                                                : null
                                                        }
                                                        titleText="interest payment"
                                                    />
                                                </th>
                                                <th>
                                                    <TableTitle
                                                        onClick={() =>
                                                            handleSort(
                                                                'debtPayment',
                                                            )
                                                        }
                                                        sortDirection={
                                                            sortField ===
                                                            'debtPayment'
                                                                ? sortDir
                                                                : null
                                                        }
                                                        titleText="debt payment"
                                                    />
                                                </th>
                                                <th>
                                                    <TableTitle
                                                        onClick={() =>
                                                            handleSort(
                                                                'remainingDebt',
                                                            )
                                                        }
                                                        sortDirection={
                                                            sortField ===
                                                            'remainingDebt'
                                                                ? sortDir
                                                                : null
                                                        }
                                                        titleText="remaining debt"
                                                    />
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody
                                            className={
                                                styles.payment__table_inner
                                            }
                                        >
                                            {sortedData.map((item) => (
                                                <tr
                                                    key={item.number}
                                                    className={
                                                        styles.payment__table_row
                                                    }
                                                >
                                                    <td
                                                        className={
                                                            styles.payment__table_value
                                                        }
                                                    >
                                                        {item.number}
                                                    </td>
                                                    <td
                                                        className={
                                                            styles.payment__table_value
                                                        }
                                                    >
                                                        {item.date}
                                                    </td>
                                                    <td
                                                        className={
                                                            styles.payment__table_value
                                                        }
                                                    >
                                                        {item.totalPayment}
                                                    </td>
                                                    <td
                                                        className={
                                                            styles.payment__table_value
                                                        }
                                                    >
                                                        {item.interestPayment}
                                                    </td>
                                                    <td
                                                        className={
                                                            styles.payment__table_value
                                                        }
                                                    >
                                                        {item.debtPayment}
                                                    </td>
                                                    <td
                                                        className={
                                                            styles.payment__table_value
                                                        }
                                                    >
                                                        {item.remainingDebt}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className={styles.payment__footer}>
                                        <Button
                                            onClick={() => setIsModalOpen(true)}
                                            className={styles.footer__deny_btn}
                                        >
                                            Deny
                                        </Button>
                                        <div className={styles.footer__right}>
                                            <Checkbox
                                                checked={isChecked}
                                                onChange={(e) =>
                                                    setIsChecked(
                                                        e.target.checked,
                                                    )
                                                }
                                                text="I agree with the payment schedule"
                                            />
                                            <Button
                                                onClick={handleSend}
                                                disabled={!isChecked}
                                                className={
                                                    styles.footer__send_btn
                                                }
                                            >
                                                Send
                                            </Button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </Container>
                </>
            )}
        </>
    )
}
