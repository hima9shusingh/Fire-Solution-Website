require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { verifyConnection } = require('./config/emailConfig');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

const formRoutes = require('./routes/formRoutes');

// Routes
app.use('/api/forms', formRoutes);

app.get('/', (req, res) => {
    res.send('Niranjali Firesolutions API is running.');
});

// Start Server
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    await verifyConnection();
});
