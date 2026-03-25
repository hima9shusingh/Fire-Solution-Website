const express = require('express');
const router = express.Router();
const { submitContactForm, submitInspectionForm } = require('../controllers/formController');

// POST /api/forms/contact
router.post('/contact', submitContactForm);

// POST /api/forms/inspection
router.post('/inspection', submitInspectionForm);

module.exports = router;
