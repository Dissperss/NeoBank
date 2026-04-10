import { SliderSwapperBtn } from '../sliderSwapperBtn'
import ArrowLeftIcon from '@/shared/assets/icons/news/arrow_left.svg?react'
import ArrowRightIcon from '@/shared/assets/icons/news/arrow_right.svg?react'
import styles from './SliderSwapper.module.css'

export const SliderSwapper = () => {
    return (
        <div className={styles.slider__swapper_wrapper}>
            <SliderSwapperBtn className={styles.swapper__btn_left}>
                <ArrowLeftIcon />
            </SliderSwapperBtn>
            <SliderSwapperBtn className={styles.swapper__btn_right}>
                <ArrowRightIcon />
            </SliderSwapperBtn>
        </div>
    )
}
