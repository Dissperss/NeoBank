import { emailClient } from './instance'

interface ApiResponse {
    message: string
}

export const subscribeEmail = async (email: string): Promise<void> => {
    try {
        const data = await emailClient.post<ApiResponse>('', {
            email,
        })

        if (data.status !== 200) {
            throw new Error('Invalid response: missing data')
        }
    } catch (error) {
        console.error(error)
        throw new Error(
            `Failed to subscribe: ${error instanceof Error ? error.message : 'Unknown error'}`,
        )
    }
}
