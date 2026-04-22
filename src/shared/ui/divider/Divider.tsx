import styles from './Divider.module.css'

type DividerProps = {
    className?: string
}

export const Divider = ({ className }: DividerProps) => {
    return <span className={`${styles.divider} ${className || ''}`}></span>
}
