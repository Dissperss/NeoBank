import { Button } from '../button'
import CloseModal from '@/shared/assets/icons/documentPage/close_modal.svg?react'
import styles from './ModalDeny.module.css'
import { useNavigate } from 'react-router-dom'

type ModalDenyProps = {
    isOpen: boolean
    onClose: () => void
    onDeny: () => void
    isDenied?: boolean
}

export const ModalDeny = ({
    isOpen,
    onClose,
    onDeny,
    isDenied,
}: ModalDenyProps) => {
    const navigate = useNavigate()

    if (!isOpen) return null

    return (
        <div className={styles.modal__overlay}>
            <div className={styles.modal__wrapper}>
                {isDenied ? (
                    <>
                        <header className={styles.modal__header}>
                            <h3 className={styles.modal__header_title}>
                                Deny application
                            </h3>
                            <button
                                onClick={() => navigate('/')}
                                className={styles.modal__header_btn}
                            >
                                <CloseModal />
                            </button>
                        </header>
                        <p className={styles.modal__text}>
                            Your application has been deny!
                        </p>
                        <Button
                            onClick={() => navigate('/')}
                            className={styles.modal__home_btn}
                        >
                            Go home
                        </Button>
                    </>
                ) : (
                    <>
                        <header className={styles.modal__header}>
                            <h3 className={styles.modal__header_title}>
                                Deny application
                            </h3>
                            <button
                                onClick={onClose}
                                className={styles.modal__header_btn}
                            >
                                <CloseModal />
                            </button>
                        </header>
                        <p className={styles.modal__text}>
                            You exactly sure, you want to cancel this
                            application?
                        </p>
                        <div className={styles.modal__footer}>
                            <Button
                                className={styles.modal__deny_btn}
                                onClick={onDeny}
                            >
                                Deny
                            </Button>
                            <Button
                                className={styles.modal__cancel_btn}
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
