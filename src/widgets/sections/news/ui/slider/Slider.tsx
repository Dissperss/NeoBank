import { Loader } from '@/shared/ui/loader'
import { ErrorMessage } from '@/shared/ui/errorMessage'

import type { Article } from '../../types/news'
import styles from './Slider.module.css'
import { SliderImg } from '../sliderImg'

interface SliderProps {
    news: Article[] | null
    isLoading: boolean
    errorText: string | null
    fetchNews: () => Promise<void>
}

export const Slider = ({
    news,
    isLoading,
    errorText,
    fetchNews,
}: SliderProps) => {
    if (isLoading) {
        return <Loader />
    }

    if (errorText) {
        return <ErrorMessage onRetry={fetchNews} />
    }

    return (
        <div className={styles.slider__viewport}>
            <ul className={styles.slider__wrapper} role="list">
                {news?.map((item) => (
                    <li
                        key={item.url}
                        className={styles.slider__slide}
                        role="listitem"
                    >
                        <SliderImg
                            src={item.urlToImage}
                            alt="news_img"
                            className={styles.slider__slide_img}
                        />
                        <p className={styles.slider__slide_title}>
                            {item.title}
                        </p>
                        <p className={styles.slider__slide_text}>
                            {item.description ? item.description : ''}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
