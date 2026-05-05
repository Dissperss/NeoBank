export interface ApplicationResponse {
    id: number
    client: ClientData
    credit: CreditData
    status: string
    creationDate: string
    signDate: string
    sesCode: string
    statusHistory: StatusHistoryItem[]
}

export interface ClientData {
    firstName: string
    lastName: string
    middleName?: string
    email: string
    gender: 'MALE' | 'FEMALE'
    birthdate: string
    passportSeries: string
    passportNumber: string
    passportIssueDate: string
    passportIssueBranch: string
    maritalStatus: 'MARRIED' | 'DIVORCED' | 'SINGLE' | 'WIDOW_WIDOWER'
    dependentAmount: number
    employment: {
        employmentStatus:
            | 'UNEMPLOYED'
            | 'SELF_EMPLOYED'
            | 'EMPLOYED'
            | 'BUSINESS_OWNER'
        employerINN: string
        salary: number
        position: 'WORKER' | 'MID_MANAGER' | 'TOP_MANAGER' | 'OWNER'
        workExperienceTotal: number
        workExperienceCurrent: number
    }
    account?: string
}

export interface CreditData {
    amount: number
    term: number
    monthlyPayment: number
    rate: number
    psk: number
    isInsuranceEnabled: boolean
    isSalaryClient: boolean
    paymentSchedule: PaymentScheduleItem[]
}

export interface PaymentScheduleItem {
    number: number
    date: string
    totalPayment: number
    interestPayment: number
    debtPayment: number
    remainingDebt: number
}

export interface StatusHistoryItem {
    status: string
    time: string
    changeType: string
}
