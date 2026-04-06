import Bank from '@/shared/assets/icons/exchange/bank_building.svg?react'

type BankIconsProps = {
    className?: string
}

export const BankIcon = ({ className }: BankIconsProps) => {
    return <Bank className={className} />
}
