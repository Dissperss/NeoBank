import styles from './AmountControlResult.module.css'

type AmountControlResultProps = {
    value?: number
    onChange: (value: number) => void
    error?: string
    touched?: boolean
}

export const AmountControlResult = ({
    value,
    onChange,
}: AmountControlResultProps) => {
    return (
        <div className={styles.amount__res}>
            <label className={styles.amount__res_title}>
                You have chosen the amount
            </label>
            <div className={styles.amount__res_block}>
                <input
                    style={{ width: `${String(value).length}ch` }}
                    className={styles.res__block_value}
                    type="text"
                    value={value}
                    onChange={(e) => {
                        // Проверка на число
                        const regExp = /\D/g
                        const val = e.target.value.replace(regExp, '')
                        onChange(Number(val))
                    }}
                />
                <span className={styles.res__block_currency}>₽</span>
            </div>
        </div>
    )
}
