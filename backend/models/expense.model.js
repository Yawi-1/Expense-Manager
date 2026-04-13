const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true // 🔥 Index 1
    },
    amount: {
        type: Number,
        min: 0,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        enum: ['Income', 'Expense'],
        required: true,
        index: true 
    },
    category: {
        type: String,
        enum: [
            'Food',
            'Travel',
            'Shopping',
            'Bills',
            'Entertainment',
            'Health',
            'Salary',
            'Investment',
            'Other'
        ],
        default: 'Other',
        index: true 
    },
    remark: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
})

expenseSchema.index({ userId: 1, createdAt: -1 })

module.exports = mongoose.model('Expense', expenseSchema)