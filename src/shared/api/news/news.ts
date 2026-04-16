import {
    NEWS_CATEGORY,
    NEWS_COUNTRY,
    NEWS_PAGE_SIZE,
} from '@/shared/config/news'
import { newsClient } from './instance'
import type { Article } from '@/widgets/sections/news/types/news'

interface ApiResponse {
    articles: Article[]
}

export const getNews = async (): Promise<Article[]> => {
    try {
        const { data } = await newsClient.get<ApiResponse>('/top-headlines', {
            params: {
                country: NEWS_COUNTRY,
                category: NEWS_CATEGORY,
                apiKey: import.meta.env.VITE_NEWS_API_KEY,
                pageSize: NEWS_PAGE_SIZE,
            },
        })

        if (!data.articles || !Array.isArray(data.articles)) {
            throw new Error('Invalid response: missing articles')
        }
        return data.articles
    } catch (error) {
        console.error(error)
        throw new Error(
            `Failed to fetch news: ${error instanceof Error ? error.message : 'Unknown error'}`,
        )
    }
}
