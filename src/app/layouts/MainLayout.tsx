import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets/header'
// import { Footer } from '@/components/layout/Footer/Footer'

export const MainLayout = () => {
    return (
        <>
            <Header />

            <main className="container">
                <Outlet />
            </main>

            {/* <Footer /> */}
        </>
    )
}
