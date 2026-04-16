import { cardDesigns } from '@/shared/data/cardDesigns'
import { ExchangeRates } from '@/widgets/sections/exchangeRates'
import { Features } from '@/widgets/sections/features'
import { Hero } from '@/widgets/sections/hero'
import { Map } from '@/widgets/sections/map'
import { News } from '@/widgets/sections/news/ui/News'
import { Subscribe } from '@/widgets/sections/subscribe'

export const HomePage = () => {
    return (
        <>
            <Hero data={cardDesigns} />
            <Features />
            <ExchangeRates />
            <Map />
            <News />
            <Subscribe />
        </>
    )
}
