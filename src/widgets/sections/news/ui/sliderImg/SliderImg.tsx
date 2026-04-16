import { useEffect, useState } from 'react'
import ImgErrorIcon from '@/shared/assets/icons/news/img_error.svg?react'
import styles from './SliderImg.module.css'

type SliderImgProps = {
    src: string | null | undefined
    alt?: string
    className?: string
}

export const SliderImg = ({ src, alt, className }: SliderImgProps) => {
    const [hasError, setHasError] = useState<boolean>(false)

    const errorElement = (
        <div className={styles.slider__img_placeholder}>
            <ImgErrorIcon />
            <span className={styles.img__placeholder_text}>No image</span>
        </div>
    )

    useEffect(() => {
        setHasError(false)
    }, [src])

    const handleError = () => {
        setHasError(true)
    }

    if (!src || src === '') {
        return errorElement
    }

    if (hasError) {
        return errorElement
    }

    return (
        <img className={className} src={src} alt={alt} onError={handleError} />
    )
}
