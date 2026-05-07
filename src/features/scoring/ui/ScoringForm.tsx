import { scoringValidationShema } from '@/entities/scoring/model/scoringValidationShema'
import { FormWrapper } from '@/shared/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styles from './ScoringForm.module.css'
import type { ScoringFormData } from '@/entities/scoring/types/scoringFormData'
import {
    scoringEmploymentFieldsConfig,
    scoringPersonalFieldsConfig,
} from '../config/scoringFieldsConfig'
import { FormInput } from '@/shared/ui/formComponents/formInput'
import { FormSelect } from '@/shared/ui/formComponents/formSelect'

export const ScoringForm = () => {
    const navigate = useNavigate()
    const {
        register,
        formState: { errors, touchedFields, isSubmitting },
        handleSubmit,
        reset,
        control,
    } = useForm({
        mode: 'onBlur',
        resolver: zodResolver(scoringValidationShema),
    })

    const onSubmit = async (data: ScoringFormData) => {
        try {
        } catch (error) {}
    }

    return (
        <FormWrapper>
            <header className={styles.scoring__form_header}>
                <h2 className={styles.scoring__form_title}>
                    Continuation of the application
                </h2>
                <p className={styles.scoring__form_text}>Step 2 of 5</p>
            </header>
            <form
                className={styles.scoring__form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={styles.scoring__form_personal}>
                    {scoringPersonalFieldsConfig.map((field) => {
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
                                        submitted={isSubmitting}
                                    />
                                )}
                                {field.type === 'select' && (
                                    <FormSelect
                                        registration={register(field.name, {
                                            required: field.required,
                                            valueAsNumber: true,
                                        })}
                                        id={field.name}
                                        options={field.options}
                                        touched={touchedFields[field.name]}
                                        error={errors[field.name]?.message}
                                        submitted={isSubmitting}
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
                                        submitted={isSubmitting}
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
                <div className={styles.scoring__form_employment}>
                    {scoringEmploymentFieldsConfig.map((field) => {
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
                                        submitted={isSubmitting}
                                    />
                                )}
                                {field.type === 'select' && (
                                    <FormSelect
                                        registration={register(field.name, {
                                            required: field.required,
                                            valueAsNumber: true,
                                        })}
                                        id={field.name}
                                        options={field.options}
                                        touched={touchedFields[field.name]}
                                        error={errors[field.name]?.message}
                                        submitted={isSubmitting}
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
                                        submitted={isSubmitting}
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
            </form>
        </FormWrapper>
    )
}
