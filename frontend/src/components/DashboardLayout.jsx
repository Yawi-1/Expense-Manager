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
                <div className=" fixed w-full md:w-[84%] top-0 flex items-center  justify-between  p-4 bg-gray-900 text-white">
                    <button className='md:hidden block' onClick={() => setMobileOpen(true)}>
                        <Menu />
                    </button>
                    <h1 className="ml-4 font-semibold">Atelier Finance</h1>
                    <div className=' flex gap-x-4 items-center '>
                        
                        <button className='px-6 py-2 border rounded-lg cursor-pointer'>Reset</button>
                        <button className='px-6 py-2 border rounded-lg cursor-pointer'>Edit</button>
                        <div className='mx-4 shadow shadow-amber-300 cursor-pointer border border-gray-600 px-6 py-2 rounded-lg flex gap-2'>
                            <UserCircle />
                            <span>Hi,yawimalik786</span>
                        </div>
                    </div>
                </div>

                {/* Page */}
                <div className="">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout