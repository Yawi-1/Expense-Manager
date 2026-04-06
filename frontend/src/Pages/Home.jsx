import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white'>

            {/* Navbar */}
            <header className='flex justify-between items-center px-6 md:px-16 py-4 border-b border-gray-800 backdrop-blur-md'>
                <h1 className='text-xl md:text-2xl font-bold text-yellow-400 tracking-wide'>
                    Atelier Finance
                </h1>
               

                <div className='flex items-center gap-4'>
                    <Link 
                        to='/login' 
                        className='px-2 py-1 md:px-4 md:py-1.5 rounded-lg border border-gray-600 hover:bg-gray-800 transition'
                    >
                        Login
                    </Link>

                    <Link 
                        to='/signup' 
                        className='px-2 py-1 md:px-4 md:py-1.5 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition'
                    >
                        Signup
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className='flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-10'>
                
                {/* Left */}
                <div className='max-w-xl space-y-6'>
                    <h2 className='text-4xl md:text-5xl font-bold leading-tight'>
                        Track Your Expenses <br />
                        <span className='text-yellow-400'>
                            Take Control of Your Money
                        </span>
                    </h2>

                    <p className='text-gray-400 text-lg'>
                        A simple and powerful way to manage your spending, set budgets,
                        and gain insights into your financial habits.
                    </p>

                    <div className='flex gap-4'>
                        <Link 
                            to='/signup' 
                            className='px-6 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition'
                        >
                            Get Started
                        </Link>

                        <Link 
                            to='/login' 
                            className='px-6 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition'
                        >
                            Login
                        </Link>
                    </div>
                </div>

                {/* Right - Preview Card */}
                <div className='w-full max-w-md'>
                    <div className='bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg'>
                        <h3 className='text-lg font-semibold mb-4 text-yellow-400'>
                            Dashboard Preview
                        </h3>

                        <div className='space-y-3 text-sm text-gray-400'>
                            <div className='flex justify-between'>
                                <span>Total Expenses</span>
                                <span>₹----</span>
                            </div>

                            <div className='flex justify-between'>
                                <span>Budget</span>
                                <span>₹----</span>
                            </div>

                            <div className='flex justify-between'>
                                <span>Remaining</span>
                                <span>₹----</span>
                            </div>
                        </div>

                        <div className='mt-4 h-2 bg-gray-800 rounded-full overflow-hidden'>
                            <div className='w-1/2 h-full bg-yellow-400'></div>
                        </div>

                        <p className='text-xs text-gray-500 mt-3'>
                            Sign up to unlock full insights
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className='px-6 md:px-16 py-16'>
                <h2 className='text-3xl font-bold text-center mb-12'>
                    Features
                </h2>

                <div className='grid md:grid-cols-4 gap-6'>
                    
                    <div className='bg-gray-900 p-6 rounded-xl border border-gray-800 hover:scale-105 transition'>
                        <h3 className='text-yellow-400 font-semibold mb-2'>💸 Expense Tracking</h3>
                        <p className='text-gray-400 text-sm'>
                            Easily add and manage your daily expenses.
                        </p>
                    </div>

                    <div className='bg-gray-900 p-6 rounded-xl border border-gray-800 hover:scale-105 transition'>
                        <h3 className='text-yellow-400 font-semibold mb-2'>📊 Analytics</h3>
                        <p className='text-gray-400 text-sm'>
                            Visualize your spending with smart insights.
                        </p>
                    </div>

                    <div className='bg-gray-900 p-6 rounded-xl border border-gray-800 hover:scale-105 transition'>
                        <h3 className='text-yellow-400 font-semibold mb-2'>🎯 Budget Control</h3>
                        <p className='text-gray-400 text-sm'>
                            Set budgets and track your limits.
                        </p>
                    </div>

                    <div className='bg-gray-900 p-6 rounded-xl border border-gray-800 hover:scale-105 transition'>
                        <h3 className='text-yellow-400 font-semibold mb-2'>🔐 Secure</h3>
                        <p className='text-gray-400 text-sm'>
                            Your data is safe with secure authentication.
                        </p>
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className='px-6 md:px-16 py-16 text-center'>
                <h2 className='text-3xl font-bold mb-4'>
                    Start managing your finances today
                </h2>

                <p className='text-gray-400 mb-6'>
                    Join now and take control of your money.
                </p>

                <Link 
                    to='/signup' 
                    className='px-6 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition'
                >
                    Get Started Free
                </Link>
            </section>

            {/* Footer */}
            <footer className='text-center text-gray-500 text-sm pb-6 border-t border-gray-800 pt-6'>
                © 2026 Atelier Finance. All rights reserved.
            </footer>

        </div>
    )
}

export default Home