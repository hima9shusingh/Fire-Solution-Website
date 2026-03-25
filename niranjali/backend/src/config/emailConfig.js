require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const verifyConnection = async () => {
    try {
        await transporter.verify();
        console.log('Email service connected successfully.');
        return true;
    } catch (error) {
        console.error('Email service connection failed:', error.message);
        if (error.code === 'EAUTH') {
            console.error('\x1b[33m%s\x1b[0m', 'HINT: You are using Gmail. You must use an App Password, not your regular password.');
            console.error('\x1b[33m%s\x1b[0m', 'See: https://support.google.com/accounts/answer/185833');
        }
        return false;
    }
};

module.exports = { transporter, verifyConnection };
