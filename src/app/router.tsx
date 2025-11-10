import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './layout'

const createAppRouter = () =>
    createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {
                    path: '/',
                    lazy: () => import('@/app/routes/home')
                },
                {
                    path: '/new-student',
                    lazy: () => import('@/app/routes/page-student-register')
                },
                {
                    path: '/new-employer',
                    lazy: () => import('@/app/routes/page-employer-register')
                },
                {
                    path: '/new-instructor',
                    lazy: () => import('@/app/routes/page-instructor-register')
                },
                {
                    path: '*',
                    lazy: () => import('@/app/routes/not-found')
                }
            ]
        }
    ])

export default function AppRouter() {
    return <RouterProvider router={createAppRouter()} />
}
