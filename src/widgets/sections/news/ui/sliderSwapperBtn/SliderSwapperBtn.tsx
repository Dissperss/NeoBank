import styles from './SliderSwapperBtn.module.css'

type SliderSwapperBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string
} & React.PropsWithChildren

export const SliderSwapperBtn = ({
    className,
    children,
    ...props
}: SliderSwapperBtnProps) => {
    return (
        <button
            className={`${styles.slider__swapper_btn} ${className || ''}`}
            {...props}
        >
            {children}
        </button>
    )
}
