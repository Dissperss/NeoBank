import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '@/app/layouts/MainLayout'
import { HomePage } from '@/pages/home'
import { LoanPage } from '@/pages/loan'
import { NotFoundPage } from '@/pages/notFound'
import { OfferPage } from '@/pages/offers'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'loan',
                element: <LoanPage />,
            },
            {
                path: 'loan/:applicationId/offer',
                element: <OfferPage />,
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
])
