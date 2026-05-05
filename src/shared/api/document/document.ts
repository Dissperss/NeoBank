import {
    ADMIN_API_PREFIX,
    CODE_API_PREFIX,
    DENY_API_PREFIX,
    FORM_API_URL,
    SIGN_API_PREFIX,
} from '@/shared/config/common'
import { commonClient } from '../common/instance'
import { DOCUMENT_API_URL } from '@/shared/config/document'

export const getPaymentSсhedule = async (applicationId: number) => {
    try {
        const res = await commonClient.get(
            `${ADMIN_API_PREFIX}/${FORM_API_URL}/${applicationId}`,
        )

        return res.data
    } catch (error) {
        console.error(error)

        throw new Error(
            `Failed to get payment shedule: ${error instanceof Error ? error.message : 'Unknown error'}`,
        )
    }
}

export const confirmDocument = async (applicationId: number) => {
    try {
        const res = await commonClient.post(
            `${DOCUMENT_API_URL}/${applicationId}`,
        )

        if (res.status < 200 || res.status >= 300) {
            throw new Error('Server error')
        }

        return res.data
    } catch (error) {
        console.error(error)

        throw new Error(
            `Failed to confirm document: ${error instanceof Error ? error.message : 'Unknown error'}`,
        )
    }
}

export const signDocument = async (applicationId: number) => {
    try {
        const res = await commonClient.post(
            `${DOCUMENT_API_URL}/${applicationId}/${SIGN_API_PREFIX}`,
        )

        if (res.status < 200 || res.status >= 300) {
            throw new Error('Server error')
        }

        return res.data
    } catch (error) {
        console.error(error)

        throw new Error(
            `Failed to sign document: ${error instanceof Error ? error.message : 'Unknown error'}`,
        )
    }
}

export const verifyCode = async (
    applicationId: number,
    data: { code: string },
) => {
    try {
        const res = await commonClient.post(
            `${DOCUMENT_API_URL}/${applicationId}/${SIGN_API_PREFIX}/${CODE_API_PREFIX}`,
            data,
        )

        if (res.status < 200 || res.status >= 300) {
            throw new Error('Server error')
        }

        return res.data
    } catch (error) {
        console.error(error)

        throw new Error(
            `Failed to verify code: ${error instanceof Error ? error.message : 'Unknown error'}`,
        )
    }
}

export const denyApplication = async (applicationId: number) => {
    try {
        const res = await commonClient.post(
            `${DOCUMENT_API_URL}/${applicationId}/${DENY_API_PREFIX}`,
        )

        if (res.status < 200 || res.status >= 300) {
            throw new Error('Server error')
        }

        return res.data
    } catch (error) {
        console.error(error)

        throw new Error(
            `Failed to deny application: ${error instanceof Error ? error.message : 'Unknown error'}`,
        )
    }
}
