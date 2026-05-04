import { useEffect, useState } from 'react'
import { SubscribeBtn } from '../button'
import { SubscribeInput } from '../input'
import styles from './SubscribeForm.module.css'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { emailValidationShema } from '../../model/emailValidationShema'
import { subscribeEmail } from '@/shared/api/email'

export const SubscribeForm = () => {
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errorText, setErrorText] = useState<string | null>(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(emailValidationShema),
    })

    useEffect(() => {
        const stored = localStorage.getItem('newsletterSubscribed')
        if (stored === 'true') {
            setIsSubscribed(true)
        }
    }, [])

    const onSubmit = async (data: { email: string }) => {
        setIsLoading(true)
        setErrorText(null)
        try {
            await subscribeEmail(data.email)

            setIsSubscribed(true)
            localStorage.setItem('newsletterSubscribed', 'true')
            reset()
        } catch (err) {
            setErrorText('Failed to subscribe. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    if (isSubscribed) {
        return <p className={styles.subscribed}>You're already subscribed!</p>
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.subscribe__form}
        >
            <SubscribeInput register={register('email')} disabled={isLoading} />

            <SubscribeBtn disabled={isLoading} />
            {errors.email && (
                <p className={styles.error}>{errors.email.message}</p>
            )}
            {errorText && <p className={styles.error}>{errorText}</p>}
        </form>
    )
}
