import styles from './Button.module.css'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string
    type?: string
} & React.PropsWithChildren

export const Button = ({
    children,
    className,
    type,
    ...props
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={`${styles.btn} ${className || ''}`}
            {...props}
        >
            {children}
        </button>
    )
}
