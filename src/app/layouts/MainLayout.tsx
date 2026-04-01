import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import styles from './MainLayout.module.css'

export const MainLayout = () => {
    return (
        <div className={styles.app}>
            <Header />

            <main className={styles.content}>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
