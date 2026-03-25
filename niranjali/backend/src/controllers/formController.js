const { contactSchema, inspectionSchema } = require('../validators/formValidators');
const { sendEmail } = require('../services/emailService');
const { generatecontactEmail, generateInspectionEmail } = require('../utils/emailTemplates');

const submitContactForm = async (req, res) => {
    try {
        // Validate Input
        const validationResult = contactSchema.safeParse(req.body);

        if (!validationResult.success) {
            return res.status(400).json({
                success: false,
                message: validationResult.error.issues[0].message,
                errors: validationResult.error.flatten().fieldErrors
            });
        }

        const value = validationResult.data;

        // Generate Email Content
        const emailContent = generatecontactEmail(value);
        const subject = `New Contact Inquiry: ${value.subject}`;

        // Send Email
        const emailResult = await sendEmail(process.env.TO_EMAIL, subject, emailContent);

        if (emailResult.success) {
            res.status(200).json({ success: true, message: 'Your message has been sent successfully.' });
        } else {
            res.status(500).json({ success: false, message: 'Failed to send email. Please try again later.' });
        }
    } catch (err) {
        console.error('Contact Form Error:', err);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

const submitInspectionForm = async (req, res) => {
    try {
        // Validate Input
        const validationResult = inspectionSchema.safeParse(req.body);

        if (!validationResult.success) {
            return res.status(400).json({
                success: false,
                message: validationResult.error.issues[0].message,
                errors: validationResult.error.flatten().fieldErrors
            });
        }

        const value = validationResult.data;

        // Generate Email Content
        const emailContent = generateInspectionEmail(value);
        const subject = `New Inspection Request: ${value.company}`;

        // Send Email
        const emailResult = await sendEmail(process.env.TO_EMAIL, subject, emailContent);

        if (emailResult.success) {
            res.status(200).json({ success: true, message: 'Inspection request submitted successfully.' });
        } else {
            res.status(500).json({ success: false, message: 'Failed to submit request. Please try again later.' });
        }
    } catch (err) {
        console.error('Inspection Form Error:', err);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

module.exports = { submitContactForm, submitInspectionForm };
