import styles from './AmountControl.module.css'

export const AmountControl = () => {
    return (
        <>
            <div className={styles.amount__control}>
                <label htmlFor="amountControl">Select amount </label>
                <div className={styles.slider__wrapper}>
                    <span>150000</span>
                    <input
                        type="range"
                        min="150000"
                        max="600000"
                        step="1000"
                        value="150000"
                        id="amountControl"
                    />
                    <span>600000</span>
                </div>
                <output>Текущее значение</output>
            </div>
            <div className={styles.amount__res}>
                <label htmlFor="">You have chosen the amount</label>
                <input type="number" />
            </div>
        </>
    )
}
