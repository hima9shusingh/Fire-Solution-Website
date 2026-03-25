const { z } = require('zod');

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^[0-9]{10,15}$/, "Phone number must be between 10 and 15 digits"),
    company: z.string().optional(),
    location: z.string().optional(),
    subject: z.string().min(3, "Subject must be at least 3 characters").max(100, "Subject must be less than 100 characters"),
    message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters")
});

const inspectionSchema = z.object({
    company: z.string().min(2, "Company name must be at least 2 characters").max(100, "Company name must be less than 100 characters"),
    gstin: z.string().optional(),
    name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
    phone: z.string().regex(/^[0-9]{10,15}$/, "Phone number must be between 10 and 15 digits"),
    email: z.string().email("Invalid email address"),
    location: z.string().min(3, "Location must be at least 3 characters").max(100, "Location must be less than 100 characters"),
    area: z.number().min(100, "Area must be at least 100 sq ft"),
    occupancy: z.string().min(1, "Occupancy type is required"),
    service: z.string().min(1, "Service type is required"),
    notes: z.string().max(500, "Notes must be less than 500 characters").optional()
});

module.exports = { contactSchema, inspectionSchema };
