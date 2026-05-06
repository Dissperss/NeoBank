type offersCfg = {
    id: string
    requestedAmount: number
    totalAmount: number
    term: number
    monthlyPayment: string
    rate: number
    isInsuranceEnabled: boolean
    isSalaryClient: boolean
}

export const offersConfig: offersCfg[] = [
    {
        id: '1',
        requestedAmount: 200000,
        totalAmount: 200000,
        term: 24,
        monthlyPayment: '9 697',
        rate: 15,
        isInsuranceEnabled: false,
        isSalaryClient: false,
    },
    {
        id: '2',
        requestedAmount: 200000,
        totalAmount: 200000,
        term: 24,
        monthlyPayment: '9 788',
        rate: 11,
        isInsuranceEnabled: true,
        isSalaryClient: false,
    },
    {
        id: '3',
        requestedAmount: 200000,
        totalAmount: 200000,
        term: 24,
        monthlyPayment: '9 603',
        rate: 14,
        isInsuranceEnabled: false,
        isSalaryClient: true,
    },
    {
        id: '4',
        requestedAmount: 200000,
        totalAmount: 200000,
        term: 24,
        monthlyPayment: '9 690',
        rate: 10,
        isInsuranceEnabled: true,
        isSalaryClient: true,
    },
]
