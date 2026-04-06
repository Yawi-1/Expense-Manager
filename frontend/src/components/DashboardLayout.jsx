import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className="flex">

            {/* Sidebar */}
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

            {/* Page Content */}
            <div className={`flex-1 p-5 bg-gray-100 min-h-screen transition-all duration-300 
    ${collapsed ? "ml-16" : "ml-64"}`}
            >
                <Outlet />
            </div>

        </div>
    )
}

export default DashboardLayout