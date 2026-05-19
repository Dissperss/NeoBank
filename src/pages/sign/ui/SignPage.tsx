import { useApplicationStore } from '@/entities/application/model/applicationStore'
import { SignDocs } from '@/features/sign/ui'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const SignPage = () => {
    const { applicationId } = useParams()
    const navigate = useNavigate()
    const storeId = useApplicationStore((state) => state.applicationId)

    useEffect(() => {
        if (Number(applicationId) !== storeId) {
            navigate('/loan')
        }
    }, [applicationId, storeId, navigate])

    return <SignDocs />
}
