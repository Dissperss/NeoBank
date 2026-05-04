export interface RateItem {
    id: string
    title: string
    descr: string | string[]
}

export const ratesData: RateItem[] = [
    {
        title: 'Card currency',
        descr: 'Rubles, dollars, euro',
        id: '1',
    },
    {
        title: 'Interest free period',
        descr: '0% up to 160 days',
        id: '2',
    },
    {
        title: 'Payment system',
        descr: 'Mastercard, Visa',
        id: '3',
    },
    {
        title: 'Maximum credit limit on the card',
        descr: '600 000 ₽',
        id: '4',
    },
    {
        title: 'Replenishment and withdrawal',
        descr: 'At any ATM. Top up your credit card for free with cash or transfer from other cards',
        id: '5',
    },
    {
        title: 'Max cashback per month',
        descr: '15 000 ₽',
        id: '6',
    },
    {
        title: 'Transaction Alert',
        descr: [
            '60 ₽ — SMS or push notifications',
            '0 ₽ — card statement, information about transactions in the online bank',
        ],
        id: '7',
    },
]
