const express = require('express');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser')
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;


// Middlewares
app.use(express.json());
app.use(cookieParser())


// Routes
const userRoutes = require('./routes/user.routes')
app.use('/api/user', userRoutes)


app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Database connection and server
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);
    }
}
startServer()

