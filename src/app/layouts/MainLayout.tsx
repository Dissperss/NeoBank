import { Outlet } from 'react-router-dom'

import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

import styles from './MainLayout.module.css'

export const MainLayout = () => {
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
