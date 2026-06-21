require('dotenv').config();
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const verifyConnection = async () => {
    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is missing.');
        return false;
    }

    console.log('Resend email service configured.');
    return true;
};

module.exports = { resend, verifyConnection };