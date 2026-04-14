const Expense = require('../models/expense.model')

const addExpense = async (req, res) => {
    try {
        const userId = req.user.id;
        const { amount, title, type, category, remark } = req.body;

        if (!amount || !title || !type) {
            return res.status(400).json({
                message: "Amount, title and type are required"
            });
        }

        const expense = new Expense({
            userId,
            amount,
            title,
            type,
            category,
            remark
        });

        const savedExpense = await expense.save();

        res.status(201).json({
            message: 'New entry added',
            data: savedExpense
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Internal server error'
        });
    }
}

const getMyExpenses = async (req, res) => {
    try {
        let { limit = 10, page = 1, type, category } = req.query;
        limit = parseInt(limit)
        page = parseInt(page)
        const skip = (page - 1) * limit
        const userId = req.user.id;

        let filter = { userId };
        if (type) filter.type = type
        if (category) filter.category = category

        const expenses = await Expense.find(filter)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const total = await Expense.countDocuments({ userId });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
}

module.exports = { addExpense, getMyExpenses }