import React from 'react'
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
  document.title = "Atelier Finance - Your Personal Finance Companion"

  if (verifyLoading) {
    return (
      <div className='w-full h-screen flex items-center justify-center bg-black text-white'>
        <p className='text-2xl'>Verifying session...</p>
      </div>
    )
  }

  return (
    <div>

      <Routes>
        <Route path='/' element={<PublicRoute><Home /></PublicRoute>} />
        <Route path='/signup' element={<PublicRoute><Signup /></PublicRoute>} />
        <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
        <Route path='*' element={<NotFound />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }>

          {/* Default page (/dashboard) */}
          <Route index element={<DashboardHome />} />

          {/* Nested routes */}
          <Route path="transactions" element={<Transactions />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="profile" element={<Profile />} />

        </Route>
      </Routes>
    </div>
  )
}

export default App