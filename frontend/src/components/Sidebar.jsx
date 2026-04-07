import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
    LayoutDashboard,
    ChartNoAxesCombined,
    BadgeIndianRupee,
    User,
    ChevronsLeft,
    ChevronsRight,
    LogOut,
} from 'lucide-react'

const Sidebar = ({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) => {

    const location = useLocation()

    // 🔥 Auto close on route change
    React.useEffect(() => {
        setMobileOpen(false)
    }, [location.pathname])

    const linkStyle = ({ isActive }) =>
        `flex items-center ${collapsed ? "justify-center" : "gap-3"} p-3 rounded-lg transition-all duration-200
        ${isActive
            ? "bg-gray-800 text-yellow-400 border-r-4 border-yellow-400"
            : "text-gray-400 hover:bg-gray-800 hover:text-white"
        }`

    return (
        <>
            {/* Overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 z-50 h-screen bg-gray-900 text-white flex flex-col justify-between p-3 transition-all duration-300
                ${collapsed ? "w-16" : "w-64"}
                ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0`}
            >

                {/* Logo */}
                <h1 className="text-2xl font-bold text-yellow-400 mb-8">
                    {collapsed ? 'AF' : 'Atelier Finance'}
                </h1>

                {/* Links */}
                {/* Links */}
                <div className="flex flex-col gap-2 flex-1">

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

                {/* Bottom */}
                <div className="flex flex-col gap-3 mt-auto">

                    {/* Desktop Collapse */}
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="hidden md:flex justify-center items-center p-2"
                    >
                        {collapsed
                            ? <ChevronsRight size={16} className='border rounded-full' />
                            : <ChevronsLeft size={16} className='border rounded-full' />
                        }
                    </button>

                    {/* Logout */}
                    <button className="bg-red-500 hover:bg-red-600 p-2 rounded-lg">
                        {!collapsed ? "Logout" : <LogOut size={16} />}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar