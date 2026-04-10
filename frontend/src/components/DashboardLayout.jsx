import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { Menu, User, UserCircle } from 'lucide-react'

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
                <div className={`fixed top-0 left-0  w-full ${collapsed ? "md:w-[96%]" : "md:w-[84%]"} ${collapsed ? "md:left-[4%]" : "md:left-[16%]"} z-40`}>
                    <div className="flex items-center justify-between px-4 py-3 bg-gray-900 text-white shadow-md">

                        {/* Left Section */}
                        <div className="flex items-center gap-3">
                            <button
                                className="md:hidden block"
                                onClick={() => setMobileOpen(true)}
                            >
                                <Menu />
                            </button>

                            {/* Optional Logo / Title */}
                            <h1 className="hidden sm:block text-sm md:text-base font-semibold">
                                Atelier Finance
                            </h1>
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-2 sm:gap-4">
                            <div className="flex items-center gap-2 border border-gray-600 px-2 py-1 sm:px-4 sm:py-2 rounded-lg shadow shadow-amber-300 cursor-pointer text-xs sm:text-sm md:text-base">
                                <UserCircle size={18} />
                                <span className=" sm:inline">
                                    Hi, yawimalik786
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Page */}
                <div className="md:mt-16 mt-12">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout