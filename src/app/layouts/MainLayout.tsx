import { Outlet } from 'react-router-dom'
// import { Footer } from '@/components/layout/Footer/Footer'
// import { Header } from '@/components/layout/Header/Header'

export const MainLayout = () => {
    return (
        <>
            {/* <Header /> */}

            <main className="container">
                <Outlet />
            </main>

            {/* <Footer /> */}
        </>
    )
}
