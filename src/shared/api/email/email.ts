import { emailClient } from './instance'

interface ApiResponse {
    message: string
}

export const subscribeEmail = async (email: string): Promise<ApiResponse> => {
    try {
        const { data } = await emailClient.post<ApiResponse>('', {
            email,
        })

        if (!data) {
            throw new Error('Invalid response: missing data')
        }

        return data
    } catch (error) {
        console.error(error)
        throw new Error(
            `Failed to subscribe: ${error instanceof Error ? error.message : 'Unknown error'}`,
        )
    }
}
