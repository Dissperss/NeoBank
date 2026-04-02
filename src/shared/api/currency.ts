import axios from 'axios'
import {
    CURRENCY_API_BASE_URL,
    CURRENCY_API_TIMEOUT,
} from '@/shared/config/currency'

const api = axios.create({
    baseURL: CURRENCY_API_BASE_URL,
    timeout: CURRENCY_API_TIMEOUT,
})

export const getCurrency = async () => {
    try {
        const { data } = await api.get('/RUB')
        return data.conversion_rates
    } catch (error) {
        console.error(error)
    }
}
