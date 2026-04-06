import { TARGET_CURRENCIES } from '@/shared/config/currency.ts'

export type CurrencyCode = (typeof TARGET_CURRENCIES)[number]
export type ConversionRates = Record<string, number>
