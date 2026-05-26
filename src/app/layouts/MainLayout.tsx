import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

import styles from './MainLayout.module.css'
import { useEffect, useState } from 'react'
import { useApplicationStore } from '@/entities/application/model/applicationStore'
import { stepToRoute } from '@/entities/application/lib/stepToRoute'

export const MainLayout = () => {
    const applicationId = useApplicationStore((state) => state.applicationId)
    const currentStep = useApplicationStore((state) => state.currentStep)
    const navigate = useNavigate()
    const location = useLocation()
    const [hasRedirected, setHasRedirected] = useState(false)

    useEffect(() => {
        if (hasRedirected || !applicationId) return

        const isKnownRoute =
            location.pathname === '/' || location.pathname.startsWith('/loan')

        if (isKnownRoute) {
            const route = stepToRoute(currentStep, applicationId)
            if (route && location.pathname !== route) {
                navigate(route, { replace: true })
            }
        }

        setHasRedirected(true)
    }, [hasRedirected, applicationId, currentStep, navigate, location.pathname])

    return (
        <>
            <Header />

            <main className={styles.content}>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}
