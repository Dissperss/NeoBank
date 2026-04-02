import CheckIcon from '@/shared/assets/icons/checkIcon.svg?react'

type CheckIconProps = {
    className?: string
}

export const Check = ({ className }: CheckIconProps) => {
    return <CheckIcon className={className} />
}
