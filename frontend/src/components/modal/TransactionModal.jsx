import React from 'react'

const TransactionModal = ({
  show,
  setShow,
  form,
  setForm,
  handleSubmit,
  editData
}) => {
  if (!show) return null

  return (
    <div className='fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4'>
      <div className='bg-gray-900 p-6 rounded-xl w-full max-w-md'>

        <h2 className='text-xl mb-4'>
          {editData ? 'Edit Transaction' : 'Add Transaction'}
        </h2>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

          {/* Title */}
          <input
            type='text'
            placeholder='Title'
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className='bg-gray-800 p-2 rounded-lg'
            required
          />

          {/* Amount */}
          <input
            type='number'
            placeholder='Amount'
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            className='bg-gray-800 p-2 rounded-lg'
            required
          />

          {/* Type */}
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className='bg-gray-800 p-2 rounded-lg'
          >
            <option value='expense'>Expense</option>
            <option value='income'>Income</option>
          </select>

          {/* Category */}
          <select
            value={form.category || ''}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className='bg-gray-800 p-2 rounded-lg'
            required
          >
            <option value=''>Select Category</option>

            {/* Expense categories */}
            <option value='Food'>Food</option>
            <option value='Bills'>Bills</option>
            <option value='Shopping'>Shopping</option>
            <option value='Travel'>Travel</option>

            {/* Income categories */}
            <option value='Salary'>Salary</option>
            <option value='Freelance'>Freelance</option>
            <option value='Business'>Business</option>
          </select>

          {/* Date */}
          <input
            type='date'
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className='bg-gray-800 p-2 rounded-lg w-full'
            required
          />

          {/* Remark (Optional) */}
          <textarea
            placeholder='Remark (optional)'
            value={form.remark || ''}
            onChange={(e) => setForm({ ...form, remark: e.target.value })}
            className='bg-gray-800 p-2 rounded-lg resize-none h-20'
          />

          {/* Buttons */}
          <div className='flex justify-between mt-4'>
            <button
              type='button'
              onClick={() => setShow(false)}
              className='text-gray-400'
            >
              Cancel
            </button>

            <button
              type='submit'
              className='bg-yellow-400 text-black px-4 py-2 rounded-lg'
            >
              {editData ? 'Update' : 'Add'}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default TransactionModal