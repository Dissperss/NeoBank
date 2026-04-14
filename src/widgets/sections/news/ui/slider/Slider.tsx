import { Loader } from '@/shared/ui/loader'
import { ErrorMessage } from '@/shared/ui/errorMessage'

import type { Article } from '../../types/news'
import styles from './Slider.module.css'
import { SliderImg } from '../sliderImg'
import { useRef } from 'react'
import { useSliderDimensions } from '../../hooks'

interface SliderProps {
    news: Article[]
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

    const firstSlideRef = useRef<HTMLLIElement>(null)
    const ulRef = useRef<HTMLUListElement>(null)

    const { cardWidth, gap } = useSliderDimensions(
        ulRef as React.RefObject<HTMLElement>,
        firstSlideRef as React.RefObject<HTMLElement>,
    )

    const offset = cardWidth && gap ? currentIndex * (cardWidth + gap) : 0

    return (
        <div className={styles.slider__viewport}>
            <ul
                className={styles.slider__wrapper}
                role="list"
                style={{ transform: `translateX(-${offset}px)` }}
                ref={ulRef}
            >
                {news.map((item, index) => (
                    <li
                        key={item.url}
                        className={styles.slider__slide}
                        role="listitem"
                        ref={index === 0 ? firstSlideRef : null}
                    >
                        <SliderImg
                            src={item.urlToImage}
                            alt="News img"
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
