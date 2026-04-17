import LimitsIcon from '@/shared/assets/icons/loanPage/aboutCardTabContent/limits.svg?react'
import PercentIcon from '@/shared/assets/icons/loanPage/aboutCardTabContent/percent.svg?react'
import DeliveryIcon from '@/shared/assets/icons/loanPage/aboutCardTabContent/delivery.svg?react'
import InstallmentIcon from '@/shared/assets/icons/loanPage/aboutCardTabContent/installment.svg?react'
import AtmIcon from '@/shared/assets/icons/loanPage/aboutCardTabContent/atm.svg?react'

export const aboutCardTabContent = [
    {
        title: 'Up to 50 000 ₽',
        descr: 'Cash and transfers without commission and percent',
        isAccent: false,
        id: '1',
        icon: <LimitsIcon />,
    },
    {
        title: 'Up to 160 days',
        descr: 'Without percent on the loan',
        isAccent: true,
        id: '2',
        icon: <PercentIcon />,
    },
    {
        title: 'Free delivery',
        descr: 'We will deliver your card by courier at a convenient place and time for you',
        isAccent: false,
        id: '3',
        icon: <DeliveryIcon />,
    },
    {
        title: 'Up to 12 months',
        descr: 'No percent. For equipment, clothes and other purchases in installments',
        isAccent: true,
        id: '4',
        icon: <InstallmentIcon />,
    },
    {
        title: 'Convenient deposit and withdrawal',
        descr: 'At any ATM. Top up your credit card for free with cash or transfer from other cards',
        isAccent: false,
        id: '5',
        icon: <AtmIcon />,
    },
]
