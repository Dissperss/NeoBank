import { useForm } from 'react-hook-form'
import { AmountControl } from './amountControl'
import styles from './PrescoringForm.module.css'
import { FormWrapper } from '@/shared/ui/form/FormWrapper'
import { FormField } from '@/shared/ui/formComponents/formField'
import { FormInput } from '@/shared/ui/formComponents/formInput'
import { fieldsConfig } from '../config/fieldsConfig'
import { FormSelect } from '@/shared/ui/formComponents/formSelect'
import type { FormData } from '../types/formData'

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
                {fieldsConfig.map((field) => (
                    <FormField
                        key={field.name}
                        label={field.label}
                        htmlFor={field.name}
                        error={errors[field.name]?.message}
                    >
                        {field.type === 'input' && (
                            <FormInput
                                registration={register(field.name)}
                                id={field.name}
                                touched={touchedFields[field.name]}
                                error={errors[field.name]?.message}
                                renderIcon={field.renderIcon}
                            />
                        )}
                        {field.type === 'select' && (
                            <FormSelect
                                registration={register(field.name, {
                                    required: field.required,
                                })}
                                id={field.name}
                                options={field.options}
                                touched={touchedFields[field.name]}
                                error={errors[field.name]?.message}
                            />
                        )}
                        {field.type === 'date' && (
                            <FormInput
                                type="date"
                                registration={register(field.name)}
                                touched={touchedFields[field.name]}
                                error={errors[field.name]?.message}
                                renderIcon={field.renderIcon}
                            />
                        )}
                    </FormField>
                ))}
            </form>
        </FormWrapper>
    )
}
