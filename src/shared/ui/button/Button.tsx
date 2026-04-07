import styles from './Button.module.css'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string
} & React.PropsWithChildren

export const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button className={`${styles.btn} ${className || ''}`} {...props}>
            {children}
        </button>
    )
}
