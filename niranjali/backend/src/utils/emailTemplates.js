const generatecontactEmail = (data) => {
    return `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Location:</strong> ${data.location || 'N/A'}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
        <hr>
        <p><small>Received via Niranjali Firesolutions Website</small></p>
    `;
};

const generateInspectionEmail = (data) => {
    return `
        <h2>New Site Inspection Request</h2>
        <h3>Company Details</h3>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>GSTIN:</strong> ${data.gstin || 'N/A'}</p>
        <p><strong>Contact Person:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>

        <h3>Facility Information</h3>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Area:</strong> ${data.area} sq. ft.</p>
        <p><strong>Occupancy:</strong> ${data.occupancy}</p>

        <h3>Requirements</h3>
        <p><strong>Service Type:</strong> ${data.service}</p>
        <p><strong>Notes:</strong> ${data.notes || 'None'}</p>
        <hr>
        <p><small>Received via Niranjali Firesolutions Website</small></p>
    `;
};

module.exports = { generatecontactEmail, generateInspectionEmail };
