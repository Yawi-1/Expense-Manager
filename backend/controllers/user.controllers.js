const User = require('../models/user.model')
const { hashPassword, comparePassword, generateToken } = require('../config/helper')

const signup = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const isEmail = await User.findOne({ email });
        if (isEmail) {
            return res.status(400).json({ message: 'Email already exists' })
        }
        const hashedPassword = await hashPassword(password);
        const user = await User.create({ fullName, email, password: hashedPassword })
        const token = generateToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })
        res.status(201).json({ message: 'Account created successfully', data: { id: user._id, fullName: user.fullName, email: user.email, token } });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Email doesn't exist" })
        }
        const isPassword = await comparePassword(password, user.password)
        if (!isPassword) {
            return res.status(400).json({ message: "Invalid password." })
        }
        const token = generateToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })
        return res.status(200).json({ message: 'Login successfully.', data: { id: user._id, fullName: user.fullName, email: user.email, token } })

    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

const logout = (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logged out" });
};

const userProfile = async (req, res) => {
    try {
        const { id } = req.user
        const user = await User.findById(id);
        if (!user) {
            return res.json({ message: 'User not found' })
        }
        const { fullName, email, profilePic, isVerified, role } = user
        return res.json({ data: { fullName, email, profilePic, isVerified, role } })
    } catch (error) {
        res.json({ message: 'Internal server error' })
    }
}

module.exports = { signup, login, logout, userProfile }