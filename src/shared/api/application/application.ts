import {
    ADMIN_API_PREFIX,
    APPLY_API_PREFIX,
    FORM_API_URL,
    REGISTRATION_API_PREFIX,
} from '@/shared/config/common/common'
import { commonClient } from '../common/instance'
import type { ScoringFormData } from '@/entities/scoring/types/scoringFormData'
import type { CreditOffer } from '@/entities/offer/types/offer'
import type { ApplicationResponse } from '@/entities/application/types/application'

export const getApplicationStatus = async (
    applicationId: number,
): Promise<ApplicationResponse> => {
    try {
        const res = await commonClient.get(
            `${ADMIN_API_PREFIX}/${FORM_API_URL}/${applicationId}`,
        )
        return res.data
    } catch (error) {
        console.error(error)

        throw new Error(
            `Failed to get application status: ${error instanceof Error ? error.message : 'Unknown error'}`,
        )
    }
}

export const submitScoring = async (
    applicationId: number,
    data: ScoringFormData,
) => {
    try {
        const res = await commonClient.post(
            `${FORM_API_URL}/${REGISTRATION_API_PREFIX}/${applicationId}`,
            data,
        )

        if (res.status < 200 || res.status >= 300) {
            throw new Error('Server error')
        }

        if (!res.data.applicationId) {
            throw new Error('Invalid response: missing applicationId')
        }

        return res.data
    } catch (error) {
        console.error(error)

        throw new Error(
            `Failed to submit scoring: ${error instanceof Error ? error.message : 'Unknown error'}`,
        )
    }
}

export const submitApply = async (data: CreditOffer) => {
    try {
        const res = await commonClient.post(
            `${FORM_API_URL}/${APPLY_API_PREFIX}`,
            data,
        )

        if (res.status < 200 || res.status >= 300) {
            throw new Error('Server error')
        }

        if (!res.data.applicationId) {
            throw new Error('Invalid response: missing applicationId')
        }

        return res.data
    } catch (error) {
        console.error(error)

        throw new Error(
            `Failed to submit apply: ${error instanceof Error ? error.message : 'Unknown error'}`,
        )
    }
}
