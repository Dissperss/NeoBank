import { scoringValidationShema } from '@/entities/scoring/model/scoringValidationShema'
import { FormWrapper } from '@/shared/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './ScoringForm.module.css'
import {
    scoringEmploymentFieldsConfig,
    scoringPersonalFieldsConfig,
} from '../config/scoringFieldsConfig'
import { FormInput } from '@/shared/ui/formComponents/formInput'
import { FormSelect } from '@/shared/ui/formComponents/formSelect'
import { FormField } from '@/shared/ui/formComponents/formField'
import type { ScoringFormData } from '@/entities/scoring/types/scoringFormData'
import { Button } from '@/shared/ui/button'
import { Loader } from '@/shared/ui/loader'
import { submitScoring } from '@/shared/api/application'
import { useApplicationStore } from '@/entities/application/model/applicationStore'
import { STEP_VALUES } from '@/entities/application/types/enums'
import { STEP_NUMBERS } from '@/entities/application/lib/stepDisplay'
import { ErrorMessage } from '@/shared/ui/errorMessage'

export const ScoringForm = () => {
    const { applicationId } = useParams()
    const setStep = useApplicationStore((state) => state.setStep)
    const setLoading = useApplicationStore((state) => state.setLoading)
    const setError = useApplicationStore((state) => state.setError)
    const error = useApplicationStore((state) => state.error)
    const setMaxReachedStep = useApplicationStore(
        (state) => state.setMaxReachedStep,
    )
    const currentStep = useApplicationStore((state) => state.currentStep)
    const {
        register,
        formState: { errors, touchedFields, isSubmitting },
        handleSubmit,
    } = useForm<ScoringFormData>({
        mode: 'onBlur',
        resolver: zodResolver(scoringValidationShema),
    })

    const onSubmit = async (data: ScoringFormData) => {
        setError(null)
        setLoading(true)
        try {
            const res = await submitScoring(Number(applicationId), data)
            setLoading(false)
            setStep(STEP_VALUES.DOCUMENTS)
            setMaxReachedStep(STEP_VALUES.DOCUMENTS)
        } catch (error) {
            setLoading(false)
            setError('Failed to submit scoring form')
        }
    }

    return (
        <FormWrapper>
            <header className={styles.scoring__form_header}>
                <h2 className={styles.scoring__form_title}>
                    Continuation of the application
                </h2>
                <p className={styles.scoring__form_text}>
                    Step {STEP_NUMBERS[currentStep]} of 5
                </p>
            </header>
            <form
                className={styles.scoring__form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={styles.scoring__form_personal}>
                    {scoringPersonalFieldsConfig.map((field) => {
                        const registration = register(field.name, {
                            required: field.required,
                            valueAsNumber: field.valueAsNumber ?? false,
                        })
                        return (
                            <FormField
                                className={styles.form__personal_fields}
                                key={field.name}
                                label={field.label}
                                htmlFor={field.name}
                                error={errors[field.name]?.message}
                            >
                                {field.type === 'input' && (
                                    <FormInput
                                        registration={register(field.name, {
                                            required: field.required,
                                            valueAsNumber:
                                                field.valueAsNumber ?? false,
                                        })}
                                        id={field.name}
                                        touched={
                                            touchedFields[field.name] as
                                                | boolean
                                                | undefined
                                        }
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
                                            valueAsNumber:
                                                field.valueAsNumber ?? false,
                                        })}
                                        id={field.name}
                                        options={field.options}
                                        touched={
                                            touchedFields[field.name] as
                                                | boolean
                                                | undefined
                                        }
                                        error={errors[field.name]?.message}
                                        submitted={isSubmitting}
                                    />
                                )}
                                {field.type === 'date' && (
                                    <FormInput
                                        registration={register(field.name, {
                                            required: field.required,
                                            valueAsNumber:
                                                field.valueAsNumber ?? false,
                                        })}
                                        touched={
                                            touchedFields[field.name] as
                                                | boolean
                                                | undefined
                                        }
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
                <h2 className={styles.form__employment_title}>Employment</h2>
                <div className={styles.scoring__form_employment}>
                    {scoringEmploymentFieldsConfig.map((field) => {
                        const registration = register(
                            `employment.${field.name}`,
                            {
                                required: field.required,
                                valueAsNumber: field.valueAsNumber ?? false,
                            },
                        )
                        return (
                            <FormField
                                key={`employment.${field.name}`}
                                label={field.label}
                                htmlFor={`employment.${field.name}`}
                                error={errors.employment?.[field.name]?.message}
                            >
                                {field.type === 'input' && (
                                    <FormInput
                                        registration={register(
                                            `employment.${field.name}`,
                                            {
                                                required: field.required,
                                                valueAsNumber:
                                                    field.valueAsNumber ??
                                                    false,
                                            },
                                        )}
                                        id={`employment.${field.name}`}
                                        touched={
                                            touchedFields.employment?.[
                                                field.name
                                            ]
                                        }
                                        error={
                                            errors.employment?.[field.name]
                                                ?.message
                                        }
                                        renderIcon={field.renderIcon}
                                        placeholder={field.placeholder}
                                        submitted={isSubmitting}
                                    />
                                )}
                                {field.type === 'select' && (
                                    <FormSelect
                                        registration={register(
                                            `employment.${field.name}`,
                                            {
                                                required: field.required,
                                                valueAsNumber:
                                                    field.valueAsNumber ??
                                                    false,
                                            },
                                        )}
                                        id={`employment.${field.name}`}
                                        options={field.options}
                                        touched={
                                            touchedFields.employment?.[
                                                field.name
                                            ]
                                        }
                                        error={
                                            errors.employment?.[field.name]
                                                ?.message
                                        }
                                        submitted={isSubmitting}
                                    />
                                )}
                                {field.type === 'date' && (
                                    <FormInput
                                        registration={register(
                                            `employment.${field.name}`,

                                            {
                                                required: field.required,
                                                valueAsNumber:
                                                    field.valueAsNumber ??
                                                    false,
                                            },
                                        )}
                                        touched={
                                            touchedFields.employment?.[
                                                field.name
                                            ]
                                        }
                                        error={
                                            errors.employment?.[field.name]
                                                ?.message
                                        }
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
                {isSubmitting ? (
                    <Loader />
                ) : error ? (
                    <ErrorMessage
                        message={error}
                        onRetry={handleSubmit(onSubmit)}
                    />
                ) : (
                    <Button
                        className={styles.scoring__form_btn}
                        type="submit"
                        disabled={isSubmitting}
                    >
                        Continue
                    </Button>
                )}
            </form>
        </FormWrapper>
    )
}
