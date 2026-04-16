import { SliderSwapperBtn } from '../sliderSwapperBtn'
import ArrowLeftIcon from '@/shared/assets/icons/news/arrow_left.svg?react'
import ArrowRightIcon from '@/shared/assets/icons/news/arrow_right.svg?react'
import styles from './SliderSwapper.module.css'

type SliderSwapperProps = {
    handleNext: () => void
    handlePrev: () => void
    currentIndex: number
    maxIndex: number
}

export const SliderSwapper = ({
    handlePrev,
    handleNext,
    currentIndex,
    maxIndex,
}: SliderSwapperProps) => {
    return (
        <div className={styles.slider__swapper_wrapper}>
            <SliderSwapperBtn
                className={styles.swapper__btn_left}
                disabled={currentIndex === 0}
                onClick={handlePrev}
            >
                <ArrowLeftIcon />
            </SliderSwapperBtn>
            <SliderSwapperBtn
                className={styles.swapper__btn_right}
                disabled={currentIndex === maxIndex}
                onClick={handleNext}
            >
                <ArrowRightIcon />
            </SliderSwapperBtn>
        </div>
    )
}
