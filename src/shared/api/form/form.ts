import type { FormData } from '@/features/prescoring/types/formData'
import { commonClient } from '../common/instance'

interface ApiResponse {
    applicationId: number
}

const FORM_API_URL = 'application'

export const sendCreditCardData = async (
    data: FormData,
): Promise<{ applicationId: number }> => {
    try {
        const res = await commonClient.post<ApiResponse>(FORM_API_URL, data)

        if (res.status < 200 || res.status >= 300) {
            throw new Error('Server error')
        }

        if (!res.data.applicationId) {
            throw new Error('Invalid response: missing applicationId')
        }

        return { applicationId: res.data.applicationId }
    } catch (error) {
        console.error(error)
        throw new Error(
            `Failed to send application: ${error instanceof Error ? error.message : 'Unknown error'}`,
        )
    }
}
