const { resend } = require('../config/emailConfig');

const sendEmail = async (to, subject, htmlContent) => {
    try {
        const { data, error } = await resend.emails.send({
            from: process.env.FROM_EMAIL,
            to: [to],
            subject,
            html: htmlContent
        });

        if (error) {
            throw new Error(error.message);
        }

        console.log('Email sent through Resend:', data.id);

        return {
            success: true,
            message: 'Email sent successfully',
            data
        };
    } catch (error) {
        console.error('Resend error:', error.message);

        return {
            success: false,
            message: 'Failed to send email',
            error
        };
    }
};

module.exports = { sendEmail };