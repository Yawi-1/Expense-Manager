import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { user, login, loading } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  console.log(user)

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(formData)

    // TODO: add auth logic
    console.log("Login clicked")
  }

  return (
    <div className='w-full h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center text-white'>

      {/* Card */}
      <div className='w-[380px] p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl'>

        {/* Heading */}
        <h1 className='text-3xl font-bold text-center mb-2'>
          Atelier Finance
        </h1>
        <p className='text-gray-400 text-center mb-6 text-sm'>
          Welcome back to your workspace
        </p>

        {/* Form */}
        <form className='flex flex-col gap-4' onSubmit={handleLogin}>

          {/* Email */}
          <div>
            <label className='text-xs uppercase font-semibold text-gray-300'>
              Email Address
            </label>
            <input
              name='email'
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder='user@example.com'
              className='w-full mt-1 p-3 rounded-xl bg-white/10 border border-white/10 focus:border-white/30 outline-none'
            />
          </div>

          {/* Password */}
          <div className='relative'>
            <label className='text-xs uppercase font-semibold text-gray-300'>
              Security Key
            </label>
            <input
              name='password'
              value={formData.password}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              placeholder='••••••••'
              className='w-full mt-1 p-3 rounded-xl bg-white/10 border border-white/10 focus:border-white/30 outline-none'
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className='cursor-pointer absolute top-[55%] right-2'
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>

          {/* Forgot Password */}
          <div className='flex justify-end'>
            <Link
              to="/forgot-password"
              className='text-sm text-yellow-400 hover:underline'
            >
              Forgot Password?
            </Link>
          </div>

          {/* Button */}
          <button
            className='mt-2 bg-yellow-400 text-black font-semibold py-3 rounded-xl hover:bg-yellow-300 transition'
          >
            Sign In
          </button>

        </form>

        {/* Footer */}
        <p className='text-center text-gray-400 text-sm mt-6'>
          Don’t have an account?{" "}
          <Link to="/signup" className='text-white hover:underline'>
            Create one
          </Link>
        </p>

      </div>

    </div>
  )
}

export default Login