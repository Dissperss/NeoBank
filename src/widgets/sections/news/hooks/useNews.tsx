import { useEffect, useState } from 'react'
import { getNews } from '@/shared/api/news'
import type { Article } from '../types/news'
import { getMappedNews } from '../utils/getMappedNews'
import { NEWS_UPDATE_INTERVAL } from '@/shared/config/news'

export const useNews = () => {
    const [news, setNews] = useState<Article[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [errorText, setErrorText] = useState<string | null>(null)

    async function fetchNews() {
        setIsLoading(true)
        setErrorText(null)

        try {
            const newsArticle = await getNews()

            const filtered = getMappedNews(newsArticle)

            if (filtered.length === 0) {
                throw new Error('No valid news received')
            }

            setNews(filtered)
        } catch (error) {
            setErrorText('Не удалось загрузить новости')
            setNews(null)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchNews()

        const timerId = setInterval(() => {
            fetchNews()
        }, NEWS_UPDATE_INTERVAL)

        return () => {
            clearInterval(timerId)
        }
    }, [])

    return {
        news,
        isLoading,
        errorText,
        fetchNews,
    }
}
