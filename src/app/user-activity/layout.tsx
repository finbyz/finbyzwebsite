import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './user-activity.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function UserActivityLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="user-activity-layout min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-1 pt-20 bg-[#0b1220]">
                <div className="min-h-full">
                    {children}
                </div>
            </main>

        </div>
    )
}
