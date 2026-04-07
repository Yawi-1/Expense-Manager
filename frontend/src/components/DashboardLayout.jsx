import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { Menu } from 'lucide-react'

const DashboardLayout = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <div className="flex">

            {/* Sidebar */}
            <Sidebar
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
            />

            {/* Main Content */}
            <div
                className={`flex-1 min-h-screen bg-gray-100 transition-all duration-300
                ${collapsed ? "md:ml-16" : "md:ml-64"}`}
            >

                {/* 🔥 Mobile Topbar */}
                <div className="md:hidden fixed w-full top-0 flex items-center p-4 bg-gray-900 text-white">
                    <button onClick={() => setMobileOpen(true)}>
                        <Menu />
                    </button>
                    <h1 className="ml-4 font-semibold">Atelier Finance</h1>
                </div>

                {/* Page */}
                <div className="p-4 md:p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout