import { currencyClient } from './instance'
import { type ConversionRates } from '@/widgets/sections/exchangeRates/types/currency'

interface ApiResponse {
    conversion_rates: ConversionRates
}

export const getCurrency = async (): Promise<ConversionRates> => {
    try {
        const { data } = await currencyClient.get<ApiResponse>('/RUB')
        if (!data.conversion_rates) {
            throw new Error('Invalid response: missing conversion_rates')
        }
        return data.conversion_rates
    } catch (error) {
        console.error(error)
        throw new Error(
            `Failed to fetch currency rates: ${error instanceof Error ? error.message : 'Unknown error'}`,
        )
    }
}
