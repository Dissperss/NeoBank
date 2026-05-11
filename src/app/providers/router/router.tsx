import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '@/app/layouts/MainLayout'
import { HomePage } from '@/pages/home'
import { LoanPage } from '@/pages/loan'
import { NotFoundPage } from '@/pages/notFound'
import { OfferPage } from '@/pages/offers'
import { ScoringPage } from '@/pages/scoring'
import { DocumentPage } from '@/pages/document'

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
                path: 'loan/:applicationId',
                element: <ScoringPage />,
            },
            {
                path: 'loan/:applicationId/document',
                element: <DocumentPage />,
            },
            // СМЕНИТЬ РОУТЫ ВНИЗУ ПО АНАЛОГИИ ДЛЯ С ДОКУМЕНТСПЕЙДЖ + СДЕЛАТЬ LOCALSTORAGE Для сохранения шагов
            {
                path: 'document/:applicationId/sign',
                // element: <DocumentPage />,
            },
            {
                path: 'document/:applicationId/sign/code',
                // element: <DocumentPage />,
            },
            {
                path: 'loan/:applicationId/deny',
                // element: <DocumentPage />,
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
])
