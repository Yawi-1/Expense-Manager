const { addExpense, getMyExpenses } = require('../controllers/expense.controller');
const authMiddleware = require('../middleware/auth.middleware')
const router = require('express').Router();

router.post('/add', authMiddleware, addExpense)
router.get('/', authMiddleware, getMyExpenses)

module.exports = router


