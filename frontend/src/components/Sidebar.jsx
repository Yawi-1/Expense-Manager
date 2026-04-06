import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
    LayoutDashboard,
    ChartNoAxesCombined,
    BadgeIndianRupee,
    User,
    ChevronsLeft,
    ChevronsRight,
    LogOut
} from 'lucide-react'

const Sidebar = ({ collapsed, setCollapsed }) => {



    const linkStyle = ({ isActive }) =>
        `flex items-center ${collapsed ? "justify-center" : "gap-3"} p-3 rounded-lg transition-all duration-200
    ${isActive
            ? "bg-gray-800 text-yellow-400 border-r-4 border-yellow-400"
            : "text-gray-400 hover:bg-gray-800 hover:text-white"
        }`

    return (
        <div
            className={`fixed top-0 left-0 h-screen ${collapsed ? "w-16" : "w-64"
                } bg-gray-900 text-white flex flex-col justify-between p-3 transition-all duration-300`}
        >

            {/* Logo */}

            <h1 className={`text-2xl font-bold text-yellow-400 mb-8 tracking-wide`}>
                {collapsed ? 'AF' : 'Atelier Finance'}
            </h1>


            {/* Links */}
            <div className="flex flex-col gap-2">

                <NavLink to="/dashboard" end className={linkStyle}>
                    <LayoutDashboard size={20} />
                    {!collapsed && "Dashboard"}
                </NavLink>

                <NavLink to="/dashboard/transactions" className={linkStyle}>
                    <BadgeIndianRupee size={20} />
                    {!collapsed && "Transactions"}
                </NavLink>

                <NavLink to="/dashboard/analytics" className={linkStyle}>
                    <ChartNoAxesCombined size={20} />
                    {!collapsed && "Analytics"}
                </NavLink>

                <NavLink to="/dashboard/profile" className={linkStyle}>
                    <User size={20} />
                    {!collapsed && "Profile"}
                </NavLink>

            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setCollapsed(!collapsed)}
                className="flex justify-center items-center p-2 "
            >
                {collapsed ? <ChevronsRight size={16} className='border rounded-full' /> : <ChevronsLeft className='border rounded-full ' />}
            </button>

            {/* Logout */}
            <button className="cursor-pointer  hover:scale-105 bg-red-500 hover:bg-red-600 transition p-2 rounded-lg mt-4">
                {!collapsed ? "Logout" : <LogOut size={16} />}
            </button>

        </div>
    )
}

export default Sidebar