import { ReactNode } from 'react'
import { Header } from './Header'

interface LayoutProps {
    children?: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="bg-gray-800 h-screen w-screen">
            <Header />

            <main className="flex container flex-col items-center m-auto">
                {children}
            </main>
        </div>
    )
}

export default Layout
