import { useApplicationStore } from '@/entities/application/model/applicationStore'
import { CodeConfirm } from '@/features/code/ui/codeConfirm'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const CodePage = () => {
    const { applicationId } = useParams()
    const navigate = useNavigate()
    const storeId = useApplicationStore((state) => state.applicationId)

    useEffect(() => {
        if (Number(applicationId) !== storeId) {
            navigate('/loan')
        }
    }, [applicationId, storeId, navigate])

    return <CodeConfirm />
}
