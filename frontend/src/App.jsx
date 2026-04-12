import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'
import DashboardHome from './Pages/DashboardHome'
import DashboardLayout from './components/DashboardLayout'
import Transactions from './Pages/Transactions'
import Analytics from './Pages/Analytics'
import Profile from './Pages/Profile'
import { useAuth } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
import NotFound from './Pages/NotFound'

const App = () => {

  const { verifyLoading } = useAuth()

  const messages = [
    "Preparing your financial dashboard...",
    "Syncing your transactions securely...",
    "Analyzing your spending insights..."
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  document.title = "Atelier Finance - Your Personal Finance Companion"


  if (verifyLoading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6">

        <h1 className="text-5xl font-semibold tracking-tight mb-6 animate-slide-up bg-gradient-to-r  from-indigo-400 via-yellow-400 to-indigo-500 bg-clip-text text-transparent">
          Atelier Finance
        </h1>

      
        <div className="relative w-16 h-16 mb-10">
          <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-indigo-500 border-r-purple-500 rounded-full animate-spin"></div>
        </div>

        {/* 💎 BIG MODERN PARAGRAPH */}
        <p className="max-w-xl text-center text-xl md:text-2xl font-light leading-relaxed text-gray-300 tracking-wide transition-all duration-300">
          {messages[index]}
        </p>

        {/* ✨ subtle bottom hint */}
        <p className="mt-4 text-sm text-gray-500">
          Crafting your personalized experience
        </p>

      </div>
    )
  }

  // ✅ MAIN APP
  return (
    <div>
      <Routes>
        <Route path='/' element={<PublicRoute><Home /></PublicRoute>} />
        <Route path='/signup' element={<PublicRoute><Signup /></PublicRoute>} />
        <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
        <Route path='*' element={<NotFound />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="profile" element={<Profile />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App