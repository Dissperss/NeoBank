import { useForm } from 'react-hook-form'
import { AmountControl } from './amountControl'
import styles from './PrescoringForm.module.css'
import { FormWrapper } from '@/shared/ui/form/FormWrapper'
import { FormField } from '@/shared/ui/formComponents/formField'

interface FormData {
    lastName: string
    firstName: string
    email: string
}

export const PrescoringForm = () => {
    const {
        register,
        formState: { errors, touchedFields, isSubmitting },
        handleSubmit,
        reset,
    } = useForm<FormData>({ mode: 'onBlur' })

    const onSubmit = (data: {}) => {
        console.log(JSON.stringify(data))
        reset()
    }

    return (
        <FormWrapper>
            <h3 className={styles.customize__card_title}>
                Customize your card
            </h3>
            <p className={styles.customize__card_step}>Step 1 of 5</p>
            <h3 className={styles.contact__info_title}>Contact Information</h3>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <AmountControl />
                <FormField
                    label="Your last name"
                    htmlFor="lastName"
                    error={errors.lastName?.message}
                    touched={touchedFields.lastName}
                    id="lastName"
                    registration={register('lastName')}
                    renderIcon
                />
            </form>
        </FormWrapper>
    )
}
