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
            <label className={styles.amount__res_title} htmlFor="">
                You have chosen the amount
            </label>
            <div className={styles.amount__res_block}>
                <input
                    style={{ width: `${String(value).length}ch` }}
                    className={styles.res__block_value}
                    type="text"
                    value={value}
                    onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '')
                        onChange(Number(val))
                    }}
                />
                <span className={styles.res__block_currency}>₽</span>
            </div>
        </div>
    )
}
