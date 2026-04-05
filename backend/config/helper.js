const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

module.exports = { hashPassword, comparePassword, generateToken };

