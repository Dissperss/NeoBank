import axios from 'axios'
import { NEWS_API_BASE_URL, NEWS_API_TIMEOUT } from '@/shared/config/news'

export const newsClient = axios.create({
    baseURL: NEWS_API_BASE_URL,
    timeout: NEWS_API_TIMEOUT,
})
