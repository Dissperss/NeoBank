import * as z from 'zod'

export const employmentSchema = z.object({
    employmentStatus: z.union([
        z.literal('UNEMPLOYED'),
        z.literal('SELF_EMPLOYED'),
        z.literal('EMPLOYED'),
        z.literal('BUSINESS_OWNER'),
    ]),
    employerINN: z.string().regex(/^\d{12}$/, {
        message: 'Department code must be 12 digits',
    }),
    salary: z.number({ message: 'Enter your salary' }).positive(),
    position: z.union([
        z.literal('WORKER'),
        z.literal('MID_MANAGER'),
        z.literal('TOP_MANAGER'),
        z.literal('OWNER'),
    ]),
    workExperienceTotal: z.coerce
        .number()
        .min(1, { message: 'Enter your total work experience' })
        .max(99, { message: "Total experience can't be more than 2 digits" }),
    workExperienceCurrent: z.coerce
        .number()
        .min(1, { message: 'Enter your current work experience' })
        .max(99, { message: "Current experience can't be more than 2 digits" }),
})

export const scoringValidationShema = z.object({
    gender: z.enum(['MALE', 'FEMALE'], {
        message: 'Select one of the options',
    }),
    maritalStatus: z.enum(['MARRIED', 'DIVORCED', 'SINGLE', 'WIDOW_WIDOWER'], {
        message: 'Select one of the options',
    }),
    dependentAmount: z.coerce
        .number()
        .positive({ message: 'Select one of the options' }),
    passportIssueDate: z.string().refine(
        (issueDate) => {
            const date = new Date(issueDate)
            if (isNaN(date.getTime())) return false
            return date <= new Date()
        },
        { message: 'Incorrect date of passport issue date' },
    ),
    passportIssueBranch: z.string().regex(/^\d{3}-\d{3}$/, {
        message: 'The series must be 6 digits',
    }),
    employment: employmentSchema,
})
