import { BASED_CURRENCY_AMOUNT, TARGET_CURRENCIES } from '@/shared/config'

import type { ConversionRates, DisplayRate } from '../types/currency'

export const getMappedCurrency = (
    actualCurrencies: ConversionRates,
): DisplayRate[] => {
    const filtered: DisplayRate[] = []

    for (const currency of TARGET_CURRENCIES) {
        const rate = actualCurrencies[currency]
        if (rate && typeof rate === 'number' && rate > 0) {
            const countedRate = Number((BASED_CURRENCY_AMOUNT / rate).toFixed(2)) // Единицу меняем на BASE_CURRENCY_AMOUNT (константа)
            filtered.push({ code: currency, rate: countedRate })
        }
    }

    return filtered
}
