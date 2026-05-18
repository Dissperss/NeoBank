import styles from './Checkbox.module.css'

type CheckboxProps = {
    text: string
    checked?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
}

export const Checkbox = ({
    text,
    className,
    onChange,
    checked,
}: CheckboxProps) => {
    return (
        <div className={`${styles.checkbox__block} ${className || ''}`}>
            <input
                checked={checked}
                className={styles.checkbox__block_input}
                onChange={onChange}
                type="checkbox"
            />
            <span className={styles.checkbox__block_text}>{text}</span>
        </div>
    )
}
