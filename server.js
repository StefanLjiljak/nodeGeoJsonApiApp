const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db')

// Load Env vars
dotenv.config({ path: './config/config.env' })

// Connect to database
connectDB()

const app = express();

// Body parser
app.use(express.json());

// Set static folder in order that Node knows where HTML file is
app.use(express.static(path.join(__dirname, 'public')))

// Enable CORS
app.use(cors());

// Routes
app.use('/api/v1/stores', require('./routes/stores'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))