import React, { useState } from 'react'
import { Check, Eye, EyeOff } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
const Signup = () => {
  const [accept, setAccept] = useState(false);
  const [showPassword, setShowPassword] = useState(false)
  const { signup, loading } = useAuth()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    if (!formData.email || !formData.password || !formData.username) {
      alert("Please fill all fields")
      return
    }
     await signup(formData)
  }
  return (
    <div className='w-full h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center text-white'>

      {/* Card */}
      <div className='w-[380px] p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl'>

        {/* Heading */}
        <h1 className='text-yellow-400 text-3xl font-bold text-center mb-2'>
          Atelier Finance
        </h1>
        <p className='text-gray-400 text-center mb-6 text-sm'>
          The workspace for luminous precision
        </p>

        {/* Form */}
        <form className='flex flex-col gap-4' onSubmit={handleSignup}>

          {/* Name */}
          <div>
            <label className='text-xs uppercase font-semibold text-gray-300'>Full Name</label>
            <input
              name="username"
              type="text"
              placeholder='Alex Sterling'
              className='w-full mt-1 p-3 rounded-xl bg-white/10 border border-white/10 focus:border-white/30 outline-none uppercase'
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className='text-xs uppercase font-semibold text-gray-300'>Email Address</label>
            <input
              name='email'
              type="email"
              placeholder='user@example.com'
              className='w-full mt-1 p-3 rounded-xl bg-white/10 border border-white/10 focus:border-white/30 outline-none'
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className='relative'>
            <label className='text-xs uppercase font-semibold text-gray-300'>Security Key</label>
            <input
              name='password'
              value={formData.password}
              onChange={handleChange}
              type={`${showPassword ? "text" : "password"}`}
              placeholder='••••••••'
              className='w-full mt-1 p-3 rounded-xl bg-white/10 border border-white/10 focus:border-white/30 outline-none'
            />
            <span onClick={() => setShowPassword(!showPassword)} className='cursor-pointer absolute top-[55%] right-2'>
              {!showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <input type="checkbox" name="" id="checkbox" className='hidden' />
            <label htmlFor="checkbox" onClick={() => setAccept(!accept)}>
              <div className='w-4 cursor-pointer h-4 border rounded-full flex items-center justify-center'>
                {accept && <Check className='w-6 h-6 text-blue-400' />}
              </div>
            </label>
            <label className='text-sm' >I accept <a href='/' className='text-yellow-400'>Terms of Service</a> and <a href='/' className='text-yellow-400'>Privacy Policy.</a></label>
          </div>
          {/* Button */}
          <button
            disabled={!accept}
            className={`mt-4 py-3 rounded-xl font-semibold transition 
    ${accept ? 'bg-yellow-400 cursor-pointer text-black' : 'bg-gray-600 cursor-not-allowed'}`}
          >
            Create Account
          </button>

        </form>
        {/* Footer */}
        <p className='text-center text-gray-400 text-sm mt-6'>
          Already have an account? <Link to='/login' className='text-white cursor-pointer hover:underline'>Sign In</Link>
        </p>

      </div>

    </div>
  )
}

export default Signup