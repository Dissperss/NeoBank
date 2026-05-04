import styles from './TabButton.module.css'

type TabButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string
    isActive?: boolean
} & React.PropsWithChildren

export const TabButton = ({
    children,
    className,
    isActive,
    ...props
}: TabButtonProps) => {
    return (
        <button
            className={`${styles.tab_btn} ${className || ''} ${isActive === true ? styles.tab_btn_active : ''}`}
            aria-selected={isActive ? 'true' : 'false'}
            {...props}
        >
            {children}
        </button>
    )
}
