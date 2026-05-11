import styles from './Checkbox.module.css'

type CheckboxProps = {
    text: string
    className?: string
}

export const Checkbox = ({ text, className }: CheckboxProps) => {
    return (
        <div className={`${styles.checkbox__block} ${className || ''}`}>
            <input className={styles.checkbox__block_input} type="checkbox" />
            <span className={styles.checkbox__block_text}>{text}</span>
        </div>
    )
}
