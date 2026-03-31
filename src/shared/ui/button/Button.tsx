import styles from './Button.module.css'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button className={styles.btn} {...props}>
            {children}
        </button>
    )
}
