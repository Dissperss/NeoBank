import { useEffect, useState } from 'react'

export const useSlider = (totalItems: number) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const maxIndex = totalItems - 1

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1)
        }
    }

    const handleNext = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex((prev) => prev + 1)
        }
    }

    useEffect(() => {
        if (totalItems === 0) {
            setCurrentIndex(0)
        } else if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex)
        }
    }, [totalItems, currentIndex, maxIndex])

    return {
        handleNext,
        handlePrev,
        currentIndex,
        maxIndex,
    }
}
