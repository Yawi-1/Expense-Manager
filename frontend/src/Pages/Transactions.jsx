import React, { useState } from 'react'
import TransactionModal from '../components/modal/TransactionModal'
import DeleteModal from '../components/modal/DeleteModal'

const dummyData = [
  { id: 1, title: 'Groceries', amount: 500, type: 'expense', date: '2026-04-01' },
  { id: 2, title: 'Salary', amount: 20000, type: 'income', date: '2026-04-02' },
  { id: 3, title: 'Shopping', amount: 1500, type: 'expense', date: '2026-04-05', remark:"Thisis a " },
]

const Transactions = () => {
  const [transactions, setTransactions] = useState(dummyData)

  const [search, setSearch] = useState('')
  const [minAmount, setMinAmount] = useState('')
  const [maxAmount, setMaxAmount] = useState('')
  const [date, setDate] = useState('')

  const [showModal, setShowModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)

  const [editData, setEditData] = useState(null)
  const [selectedId, setSelectedId] = useState(null)

  const [form, setForm] = useState({
    title: '',
    amount: '',
    type: 'expense',
    category: '',
    date: '',
    remark: ''
  })

  // Filter
  const filtered = transactions.filter((t) => {
    return (
      t.title.toLowerCase().includes(search.toLowerCase()) &&
      (minAmount === '' || t.amount >= minAmount) &&
      (maxAmount === '' || t.amount <= maxAmount) &&
      (date === '' || t.date === date)
    )
  })

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault()

    if (editData) {
      setTransactions(transactions.map(t =>
        t.id === editData.id ? { ...form, id: t.id } : t
      ))
    } else {
      setTransactions([...transactions, { ...form, id: Date.now() }])
    }

    setShowModal(false)
    setEditData(null)
    setForm({ title: '', amount: '', type: 'expense', date: '' })
  }

  // Edit
  const handleEdit = (item) => {
    setEditData(item)
    setForm(item)
    setShowModal(true)
  }

  // Delete
  const handleDelete = () => {
    setTransactions(transactions.filter(t => t.id !== selectedId))
    setDeleteModal(false)
  }

  return (
    <div className='bg-gradient-to-br from-black via-gray-900 to-black text-white w-full min-h-screen p-4'>

      {/* Header */}
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl md:text-4xl font-mono text-yellow-400'>
          Transactions.
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className='bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold'
        >
          + Add
        </button>
      </div>

      {/* Filters */}
      <div className='flex flex-col sm:flex-row flex-wrap gap-3 mt-6'>

        <input
          type='text'
          placeholder='Search title...'
          className='bg-gray-800 p-2 rounded-lg w-full sm:flex-1'
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type='number'
          placeholder='Min ₹'
          className='bg-gray-800 p-2 rounded-lg w-full sm:w-auto'
          onChange={(e) => setMinAmount(e.target.value)}
        />

        <input
          type='number'
          placeholder='Max ₹'
          className='bg-gray-800 p-2 rounded-lg w-full sm:w-auto'
          onChange={(e) => setMaxAmount(e.target.value)}
        />

        <input
          type='date'
          className='bg-gray-800 p-2 rounded-lg w-full sm:w-auto'
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Scrollable Transactions */}
      <div className='mt-6 h-[60vh] overflow-y-auto pr-2 space-y-4'>
        {filtered.length === 0 ? (
          <p className='text-gray-400'>No transactions found</p>
        ) : (
          filtered.map((t) => (
            <div
              key={t.id}
              className='flex justify-between items-center bg-gray-800/60 border border-gray-700 p-4 rounded-xl'
            >
              <div>
                <p className='font-semibold'>{t.title}</p>
                <p className='text-sm text-gray-400'>{t.date}</p>
                <p className='text-xs text-gray-500'>{t.category}</p>
                {t.remark && (
                  <p className='text-xs text-gray-500 italic'>{t.remark}</p>
                )}
              </div>

              <div className='flex items-center gap-4'>
                <span className={`font-bold ${t.type === 'income' ? 'text-green-400' : 'text-red-400'}`}>
                  {t.type === 'income' ? '+' : '-'} ₹{t.amount}
                </span>

                <button
                  onClick={() => handleEdit(t)}
                  className='text-yellow-400 text-sm'
                >
                  Edit
                </button>

                <button
                  onClick={() => {
                    setSelectedId(t.id)
                    setDeleteModal(true)
                  }}
                  className='text-red-400 text-sm'
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modals */}
      <TransactionModal
        show={showModal}
        setShow={setShowModal}
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
        editData={editData}
      />

      <DeleteModal
        show={deleteModal}
        setShow={setDeleteModal}
        onDelete={handleDelete}
      />

    </div>
  )
}

export default Transactions