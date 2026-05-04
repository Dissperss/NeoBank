import styles from './Tooltip.module.css'

type TooltipProps = {
    text: string
    className?: string
} & React.PropsWithChildren

export const Tooltip = ({ text, className, children }: TooltipProps) => {
    return (
        <div className={`${styles.tooltip__wrapper} ${className || ''}`}>
            <span className={styles.tooltip}>{text}</span>
        </div>
    )
}
