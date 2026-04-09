import { Plus } from 'lucide-react'
import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'

const Dashboard = () => {
    return (
        <div className='bg-gradient-to-br from-black via-gray-900 to-black text-white w-full min-h-screen p-4'>

            <h1 className='text-3xl md:text-4xl font-mono text-yellow-400'>
                Dashboard.
            </h1>

            {/* Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                <div className='bg-gray-800/60 backdrop-blur-lg border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-all'>
                    <p className='text-gray-400 text-sm mb-2'>Total Balance</p>
                    <h1 className='text-3xl font-bold'>₹0.00</h1>
                </div>

                <div className='bg-gradient-to-br from-green-500/10 to-transparent border border-green-400/30 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-all'>
                    <p className='text-green-400 text-sm mb-2'>Total Income</p>
                    <h1 className='text-3xl font-bold text-green-400'>+ ₹0.00</h1>
                </div>

                <div className='bg-gradient-to-br from-red-500/10 to-transparent border border-red-400/30 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-all'>
                    <p className='text-red-400 text-sm mb-2'>Total Expenses</p>
                    <h1 className='text-3xl font-bold text-red-400'>- ₹0.00</h1>
                </div>
            </div>

            {/* Bottom Section */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10'>

                {/* Pie Chart */}
                <div className='lg:col-span-2 bg-gray-800/60 backdrop-blur-lg border border-gray-700 p-6 rounded-2xl shadow-lg'>
                    <h2 className='text-lg font-semibold mb-4'>Expense Categories</h2>

                    <div className='flex flex-col md:flex-row items-center gap-6'>

                        {/* Chart */}
                        <div className='w-48 h-48'>
                            <PieChart
                                data={[
                                    { title: 'Food', value: 10, color: '#f59e0b' },
                                    { title: 'Bills', value: 15, color: '#ef4444' },
                                    { title: 'Shopping', value: 20, color: '#8b5cf6' },
                                    { title: 'Others', value: 20, color: '#ffeef4' },
                                ]}
                                lineWidth={25}
                                rounded
                                animate
                            />
                        </div>

                        {/* Legend */}
                        <div className='space-y-3'>
                            <div className='flex items-center gap-2'>
                                <span className='w-3 h-3 bg-yellow-500 rounded-full'></span>
                                <p className='text-sm'>Food</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='w-3 h-3 bg-red-500 rounded-full'></span>
                                <p className='text-sm'>Bills</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='w-3 h-3 bg-purple-500 rounded-full'></span>
                                <p className='text-sm'>Shopping</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='w-3 h-3 bg-white rounded-full'></span>
                                <p className='text-sm'>Others</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Recent Transactions */}
                <div className='bg-gray-800/60 backdrop-blur-lg border border-gray-700 p-6 rounded-2xl shadow-lg relative'>
                    <h2 className='text-lg font-semibold mb-4'>Recent Transactions</h2>
                    <p className='text-gray-400 text-center '>No transactions yet</p>
                    <button className='absolute -right-3 -bottom-3 border cursor-pointer hover:scale-105 transition-all duration-200 text-black font-bold bg-yellow-400 rounded-full p-2'><Plus /></button>

                </div>

            </div>

        </div>
    )
}

export default Dashboard