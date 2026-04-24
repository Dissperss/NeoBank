import { Controller, useForm } from 'react-hook-form'
import { AmountControlSlider } from './amountControlSlider'
import { FormWrapper } from '@/shared/ui/form/FormWrapper'
import { FormField } from '@/shared/ui/formComponents/formField'
import { FormInput } from '@/shared/ui/formComponents/formInput'
import { fieldsConfig } from '../config/fieldsConfig'
import { FormSelect } from '@/shared/ui/formComponents/formSelect'

import styles from './PrescoringForm.module.css'
import { AmountControlResult } from './amountControlResult'
import { Button } from '@/shared/ui/button'
import { validationShema } from '../model/validationShema'
import { zodResolver } from '@hookform/resolvers/zod'
import type { FormData } from '../types/formData'

export const PrescoringForm = () => {
    const {
        register,
        formState: { errors, touchedFields, isSubmitting },
        handleSubmit,
        reset,
        control,
    } = useForm<FormData>({
        mode: 'onBlur',
        defaultValues: {
            amount: 150000,
        },
        resolver: zodResolver(validationShema),
    })

    const onSubmit = (data: FormData) => {
        console.log(JSON.stringify(data))
        reset()
    }

    return (
        <FormWrapper>
            <div className={styles.customize__card}>
                <div className={styles.customize__card_block}>
                    <div className={styles.card__block_header}>
                        <h3 className={styles.block__header_title}>
                            Customize your card
                        </h3>
                        <p className={styles.block__header_step}>Step 1 of 5</p>
                    </div>
                    <div className={styles.card__block_slider}>
                        <Controller
                            name="amount"
                            control={control}
                            render={({ field }) => (
                                <AmountControlSlider
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={errors.amount?.message}
                                    touched={touchedFields.amount}
                                    min="15000"
                                    max="600000"
                                    step="1000"
                                />
                            )}
                        />
                    </div>
                </div>
                <div className={styles.customize__card_res}>
                    <Controller
                        name="amount"
                        control={control}
                        render={({ field }) => (
                            <AmountControlResult
                                value={field.value}
                                onChange={field.onChange}
                                error={errors.amount?.message}
                                touched={touchedFields.amount}
                            />
                        )}
                    />
                </div>
            </div>
            <h3 className={styles.contact__info_title}>Contact Information</h3>
            <form
                className={styles.contact__form}
                action=""
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={styles.contact__form_inner}>
                    {fieldsConfig.map((field) => {
                        const registration = register(field.name)
                        return (
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
                                        placeholder={field.placeholder}
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
                                        registration={register(field.name)}
                                        touched={touchedFields[field.name]}
                                        error={errors[field.name]?.message}
                                        renderIcon={field.renderIcon}
                                        placeholder={field.placeholder}
                                        type="text"
                                        onFocus={(e) => {
                                            if (e.target.type !== 'date') {
                                                e.target.type = 'date'
                                            }
                                        }}
                                        onBlur={(e) => {
                                            registration.onBlur(e)
                                            if (!e.target.value)
                                                e.target.type = 'text'
                                        }}
                                    />
                                )}
                            </FormField>
                        )
                    })}
                </div>
                <Button className={styles.contact__form_btn} type="submit">
                    Continue
                </Button>
            </form>
        </FormWrapper>
    )
}
