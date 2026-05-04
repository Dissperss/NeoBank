interface CashbackItem {
    title: string
    percent: string
    isAccent: boolean
    id: string
}

export const cashbackData: CashbackItem[] = [
    {
        title: 'For food delivery, cafes and restaurants',
        percent: '5%',
        isAccent: false,
        id: '1',
    },
    {
        title: 'In supermarkets with our subscription',
        percent: '5%',
        isAccent: true,
        id: '2',
    },
    {
        title: "In clothing stores and children's goods",
        percent: '2%',
        isAccent: false,
        id: '3',
    },
    {
        title: 'Other purchases and payment of services and fines',
        percent: '1%',
        isAccent: true,
        id: '4',
    },
    {
        title: 'Shopping in online stores',
        percent: 'up to 3%',
        isAccent: false,
        id: '5',
    },
    {
        title: 'Purchases from our partners',
        percent: '30%',
        isAccent: true,
        id: '6',
    },
]
