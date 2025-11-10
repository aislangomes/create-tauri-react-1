import { Header } from '@/components/header'
import { Outlet } from 'react-router'

export default function Layout() {
    return (
        <div className="flex-col gap-2.5">
            <Header />
            <main className="flex items-center justify-center">
                <Outlet />
            </main>
        </div>
    )
}
