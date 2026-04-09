import React from 'react'

const DeleteModal = ({ show, setShow, onDelete }) => {
  if (!show) return null

  return (
    <div className='fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4'>
      <div className='bg-gray-900 p-6 rounded-xl w-full max-w-sm text-center'>

        <h2 className='text-lg mb-4'>Delete Transaction?</h2>

        <div className='flex justify-between mt-6'>
          <button
            onClick={() => setShow(false)}
            className='text-gray-400'
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className='bg-red-500 px-4 py-2 rounded-lg'
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  )
}

export default DeleteModal