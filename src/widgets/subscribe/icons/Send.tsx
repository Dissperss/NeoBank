import SendIcon from '@/shared/assets/icons/subscribe/send.svg?react'

type SendIconProps = {
    className?: string
}

export const Send = ({ className }: SendIconProps) => {
    return <SendIcon className={className} />
}
