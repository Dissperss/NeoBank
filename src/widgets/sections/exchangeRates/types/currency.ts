import { TARGET_CURRENCIES } from '@/shared/config/currency'

export type CurrencyCode = (typeof TARGET_CURRENCIES)[number]
export type ConversionRates = Record<string, number>

export type DisplayRate = {
    code: CurrencyCode
    rate: number
}
