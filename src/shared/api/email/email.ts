import { EMAIL_API_URL } from '@/shared/config/email'
import { commonClient } from '../common/instance'

interface ApiResponse {
    message: string
}

export const subscribeEmail = async (email: string): Promise<void> => {
    try {
        const data = await commonClient.post<ApiResponse>(EMAIL_API_URL, {
            email,
        })

        if (data.status >= 200 && data.status < 3000) {
            throw new Error('Invalid response: missing data')
        }
    } catch (error) {
        console.error(error)
        throw new Error(
            `Failed to subscribe: ${error instanceof Error ? error.message : 'Unknown error'}`,
        )
    }
}
