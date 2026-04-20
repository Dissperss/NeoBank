import { AboutCardTab } from '../ui/sections/tabsContent/aboutCardTab'
import { CashbackTab } from '../ui/sections/tabsContent/cashbackTab'
import { RatesTab } from '../ui/sections/tabsContent/ratesAndConditionsTab'

export const tabs = [
    { id: 'about', label: 'About card', content: <AboutCardTab /> },
    { id: 'rates', label: 'Rates and conditions', content: <RatesTab /> },
    { id: 'cashback', label: 'Cashback', content: <CashbackTab /> },
    { id: 'faq', label: 'FAQ', content: 'afsfasfafs' },
]
