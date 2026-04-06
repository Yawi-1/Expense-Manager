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
const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>

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