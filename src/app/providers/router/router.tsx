import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '@/app/layouts/MainLayout'
import { HomePage } from '@/pages/home'
import { LoanPage } from '@/pages/loan'
import { NotFoundPage } from '@/pages/notFound'
import { OfferPage } from '@/pages/offers'
import { ScoringPage } from '@/pages/scoring'
import { DocumentPage } from '@/pages/document'
import { SignPage } from '@/pages/sign'
import { CodePage } from '@/pages/code'

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
                path: 'loan/:applicationId/document/sign',
                element: <SignPage />,
            },
            {
                path: 'loan/:applicationId/code',
                element: <CodePage />,
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
])
