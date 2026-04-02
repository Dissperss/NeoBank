import { Hero } from '@/widgets/hero'
import { Features } from '@/widgets/features'
import { cardDesigns } from '@/shared/data/cardDesigns'

export const HomePage = () => {
    return (
        <>
            <Hero data={cardDesigns} />
            <Features />
        </>
    )
}
