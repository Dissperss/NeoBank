import axios from 'axios'
import {
    CURRENCY_API_BASE_URL,
    CURRENCY_API_TIMEOUT,
} from '@/shared/config/currency'
import { type ConversionRates } from '../types/currency'

interface ApiResponse {
    conversion_rates: ConversionRates
}

const api = axios.create({
    baseURL: CURRENCY_API_BASE_URL,
    timeout: CURRENCY_API_TIMEOUT,
})

export const getCurrency = async (): Promise<ConversionRates> => {
    try {
        const { data } = await api.get<ApiResponse>('/RUB')
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
