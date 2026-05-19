import { useApplicationStore } from '@/entities/application/model/applicationStore'
import { PaymentSchedule } from '@/features/document/ui'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const DocumentPage = () => {
    const { applicationId } = useParams()
    const navigate = useNavigate()
    const storeId = useApplicationStore((state) => state.applicationId)

    useEffect(() => {
        if (Number(applicationId) !== storeId) {
            navigate('/loan')
        }
    }, [applicationId, storeId, navigate])

    return <PaymentSchedule />
}
