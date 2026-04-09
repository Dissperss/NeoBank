import type { Article } from '../types/news'
import { cleanHtmlString } from './cleanHtmlString'

export const getMappedNews = (actualNews: Article[]) => {
    const filtered = actualNews.map((item) => {
        const newItem = { ...item }
        if (!newItem.urlToImage || newItem.urlToImage === '') {
            newItem.urlToImage = null
        }
        newItem.description = newItem.description
            ? cleanHtmlString(newItem.description)
            : null
        return newItem
    })

    return filtered
}
