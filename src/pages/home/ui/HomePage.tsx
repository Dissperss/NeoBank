import { Hero } from '@/widgets/hero'
import { Features } from '@/widgets/features'
import { cardDesigns } from '@/shared/data/cardDesigns'
import { ExchangeRates } from '@/widgets/exchangeRates'
import { Map } from '@/widgets/map'
import { Subscribe } from '@/widgets/subscribe'

export const HomePage = () => {
    return (
        <>
            <Hero data={cardDesigns} />
            <Features />
            <ExchangeRates />
            <Map />
            <Subscribe />
        </>
    )
}
