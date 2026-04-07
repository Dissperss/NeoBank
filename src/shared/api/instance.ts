import axios from 'axios'

import { CURRENCY_API_BASE_URL, CURRENCY_API_TIMEOUT } from '../config'

export const currencyClient = axios.create({
    baseURL: CURRENCY_API_BASE_URL,
    timeout: CURRENCY_API_TIMEOUT,
})
