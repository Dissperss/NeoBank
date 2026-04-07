interface TimeProps {
    dateTime?: Date | null
    className?: string
}

export const Time = ({ dateTime, className }: TimeProps) => {
    if (!dateTime) return null

    return (
        <time className={className} dateTime={dateTime.toISOString()}>
            Updated every 15 minutes, MSC: {dateTime.toLocaleString('ru-RU')}
        </time>
    )
}
