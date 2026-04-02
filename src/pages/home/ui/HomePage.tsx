import { Hero } from '@/widgets/hero'
import { cardDesigns } from '@/shared/data/cardDesigns'

export const HomePage = () => {
    return (
        <>
            <Hero data={cardDesigns} />
        </>
    )
}
