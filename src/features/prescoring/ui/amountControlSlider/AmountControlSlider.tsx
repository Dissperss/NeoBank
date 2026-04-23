import styles from './AmountControlSlider.module.css'
import { inputBgController } from './utils/inputBgController'

type AmountControlProps = {
    value?: number
    onChange: (value: number) => void
    error?: string
    touched?: boolean
    min?: string
    max?: string
    step?: string
}

export const AmountControlSlider = ({
    value,
    onChange,
    error,
    touched,
    min,
    max,
    step,
}: AmountControlProps) => {
    const minNum = Number(min)
    const maxNum = Number(max)
    const { percent } = inputBgController({
        value: value ?? minNum,
        max: maxNum,
        min: minNum,
    })

    return (
        <>
            <div className={styles.amount__control}>
                <label
                    className={styles.amount__control_title}
                    htmlFor="amountControl"
                >
                    Select amount
                </label>
                <div className={styles.control__slider_wrapper}>
                    <output className={styles.slider__output_value}>
                        {value}
                    </output>
                    <input
                        style={
                            {
                                '--progress': `${percent}%`,
                            } as React.CSSProperties
                        }
                        className={styles.slider__input_range}
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                        id="amountControl"
                        onChange={(e) => onChange(Number(e.target.value))}
                    />
                    <div className={styles.slider__acceptable_values}>
                        <span className={styles.amount__control_min}>
                            {min}
                        </span>
                        <span className={styles.amount__control_max}>
                            {max}
                        </span>
                    </div>
                </div>
            </div>

            {touched && (error ? <span>Error</span> : '')}
        </>
    )
}
