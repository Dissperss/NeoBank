import type { FormData } from '@/features/prescoring/types/formData'
import { commonClient } from '../common/instance'
import { FORM_API_URL } from '@/shared/config/common'
import type { CreditOffer } from '@/entities/offer/types/offer'

export const sendCreditCardData = async (
    data: FormData,
): Promise<{ applicationId: number; offers: CreditOffer[] }> => {
    try {
        const res = await commonClient.post<CreditOffer>(FORM_API_URL, data)

        if (res.status < 200 || res.status >= 300) {
            throw new Error('Server error')
        }

        const offers = res.data as unknown as CreditOffer[]

        if (!offers || offers.length === 0) {
            throw new Error('Invalid response: empty offers')
        }

        return { applicationId: offers[0].applicationId, offers: offers }
    } catch (error) {
        console.error(error)
        throw new Error(
            `Failed to send application: ${error instanceof Error ? error.message : 'Unknown error'}`,
        )
    }
}
