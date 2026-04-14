import { useEffect, useState } from 'react'

export const useSliderDimensions = (
    parentElem: React.RefObject<HTMLElement>,
    childElem: React.RefObject<HTMLElement>,
) => {
    const [dimensions, setDimensions] = useState({ cardWidth: 0, gap: 0 })

    useEffect(() => {
        const updateDimensions = () => {
            if (parentElem.current && childElem.current) {
                const gap = parseFloat(getComputedStyle(parentElem.current).gap)
                const cardWidth = childElem.current.offsetWidth
                setDimensions({ cardWidth, gap })
            }
        }

        updateDimensions()

        window.addEventListener('resize', updateDimensions)

        return () => {
            window.removeEventListener('resize', updateDimensions)
        }
    }, [parentElem, childElem])

    return dimensions
}
