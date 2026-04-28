import axios from 'axios'
import {
    BASE_HOST,
    EMAIL_API_BASE_URL,
    EMAIL_API_TIMEOUT,
} from '@/shared/config/email'

export const emailClient = axios.create({
    baseURL: `${BASE_HOST}/${EMAIL_API_BASE_URL}`,
    timeout: EMAIL_API_TIMEOUT,
})
