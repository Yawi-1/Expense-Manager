const router = require('express').Router();

const {
    signup,
    login,
    logout,
    userProfile
} = require('../controllers/user.controllers');

const authMiddleWare = require('../middleware/auth.middleware');

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', authMiddleWare, logout);
router.get('/profile', authMiddleWare, userProfile);

module.exports = router;