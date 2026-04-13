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
    currentIndex: number
}

export const Slider = ({
    news,
    isLoading,
    errorText,
    fetchNews,
    currentIndex,
}: SliderProps) => {
    if (isLoading) {
        return <Loader />
    }

    if (errorText) {
        return <ErrorMessage onRetry={fetchNews} />
    }

    const offset = currentIndex * (320 + 80)

    return (
        <div className={styles.slider__viewport}>
            <ul
                className={styles.slider__wrapper}
                role="list"
                style={{ transform: `translateX(-${offset}px)` }}
            >
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
                        <a
                            className={styles.slider__slide_link}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.title}
                        </a>
                        <p className={styles.slider__slide_text}>
                            {item.description ? item.description : ''}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
