import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-black text-white'>
      <h1 className='text-6xl font-bold'>404</h1>
      <p className='text-gray-400 mt-2'>Page Not Found</p>

      <Link
        to="/"
        className='mt-6 px-6 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400'
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFound