import { useEffect, useState } from 'react'

import { UPDATE_INTERVAL } from '@/shared/config/currency'
import { getCurrency } from '@/shared/api/currency'
import { getMappedCurrency } from '../utils/getMappedCurrency'

import { type DisplayRate } from '../types/currency'

export const useRates = () => {
    const [rates, setRates] = useState<DisplayRate[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [errorText, setErrorText] = useState<string | null>(null)
    const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

    async function fetchRates() {
        setIsLoading(true)
        setErrorText(null)
        try {
            const conversionRates = await getCurrency()

            const filtered = getMappedCurrency(conversionRates)

            if (filtered.length === 0) {
                throw new Error('No valid currencies received')
            }

            setRates(filtered)
            setLastUpdate(new Date())
        } catch (error) {
            setErrorText('Не удалось загрузить курсы')
            setRates(null)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchRates()

        const timerId = setInterval(() => {
            fetchRates()
        }, UPDATE_INTERVAL)

        return () => {
            clearInterval(timerId)
        }
    }, [])

    return {
        rates,
        isLoading,
        errorText,
        lastUpdate,
        fetchRates,
    }
}
