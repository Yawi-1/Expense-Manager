const router = require('express').Router();

const {
    signup,
    login,
    logout,
    userProfile
} = require('../controllers/user.controllers');

const authMiddleware = require('../middleware/auth.middleware');

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', authMiddleware, logout);
router.get('/profile', authMiddleware, userProfile);

module.exports = router;