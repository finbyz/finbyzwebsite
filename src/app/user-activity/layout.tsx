import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './user-activity.css'

export default function UserActivityLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="user-activity-layout">
            {children}
        </div>
    )
}
