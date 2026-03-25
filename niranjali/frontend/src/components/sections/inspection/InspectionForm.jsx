import React, { useState } from 'react';
import { Button } from '../../ui/Button';

const InputField = ({ label, type = "text", placeholder, name, required = false }) => (
    <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{label} {required && <span className="text-primary">*</span>}</label>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            className="w-full bg-[#0f172a] border border-gray-700 text-gray-200 px-4 py-3 text-base focus:outline-none focus:border-primary transition-colors placeholder-gray-600 rounded-none"
        />
    </div>
);

const SelectField = ({ label, options, name, required = false }) => (
    <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{label} {required && <span className="text-primary">*</span>}</label>
        <select
            name={name}
            required={required}
            className="w-full bg-[#0f172a] border border-gray-700 text-gray-200 px-4 py-3 text-base focus:outline-none focus:border-primary transition-colors rounded-none appearance-none"
        >
            <option value="">Select Option</option>
            {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
    </div>
);

export const InspectionForm = () => {
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        // Convert area to number for validation
        if (data.area) data.area = Number(data.area);

        try {
            const response = await fetch('http://localhost:5000/api/forms/inspection', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('success');
                e.target.reset();
            } else {
                setStatus('error');
                setErrorMessage(result.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Submission Error:', error);
            setStatus('error');
            setErrorMessage('Failed to connect to the server. Please check your internet connection.');
        } finally {
            setLoading(false);
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-dark-secondary border border-green-500/30 p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-green-900/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Successful</h3>
                <p className="text-gray-400 max-w-md mx-auto mb-8">
                    Your site inspection request has been logged in our engineering portal. A technical coordinator will contact you shortly to confirm the schedule.
                </p>
                <Button onClick={() => setStatus(null)} variant="outline" className="text-green-500 border-green-500/50 hover:bg-green-500/10">
                    Submit Another Request
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-[#1e293b] p-8 md:p-12 border border-white/5">
            {/* Block 1: Company Details */}
            <div className="mb-12">
                <h4 className="text-white font-bold border-b border-gray-700 pb-2 mb-6 text-sm uppercase tracking-widest">01. Company Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    <InputField label="Company Name" name="company" placeholder="Legal Entity Name" required />
                    <InputField label="GSTIN (Optional)" name="gstin" placeholder="For Billing Verification" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    <InputField label="Contact Person" name="name" placeholder="Site In-charge Name" required />
                    <InputField label="Phone Number" name="phone" type="tel" placeholder="+91" required />
                </div>
                <InputField label="Official Email" name="email" type="email" placeholder="name@company.com" required />
            </div>

            {/* Block 2: Facility Information */}
            <div className="mb-12">
                <h4 className="text-white font-bold border-b border-gray-700 pb-2 mb-6 text-sm uppercase tracking-widest">02. Facility Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    <InputField label="Facility Location" name="location" placeholder="City / Industrial Area" required />
                    <InputField label="Total Area (Sq. Ft.)" name="area" type="number" placeholder="Approx. Built-up Area" required />
                </div>
                <SelectField label="Occupancy Type" name="occupancy" options={['Industrial / Manufacturing', 'Storage / Warehouse', 'Commercial / Office', 'Hospital / Institutional', 'Residential (High Rise)']} required />
            </div>

            {/* Block 3: System Requirements */}
            <div className="mb-12">
                <h4 className="text-white font-bold border-b border-gray-700 pb-2 mb-6 text-sm uppercase tracking-widest">03. Requirements</h4>
                <SelectField label="Inspection Service" name="service" options={['New System Design & Installation', 'Audit of Existing System', 'Annual Maintenance Contract', 'NBC Compliance Certification']} required />
                <div className="mb-6">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Specific Issues / Notes</label>
                    <textarea
                        name="notes"
                        rows="4"
                        placeholder="Describe any specific risks, non-compliances, or requirements..."
                        className="w-full bg-[#0f172a] border border-gray-700 text-gray-200 px-4 py-3 text-base focus:outline-none focus:border-primary transition-colors placeholder-gray-600 rounded-none resize-none"
                    ></textarea>
                </div>
            </div>

            <Button size="lg" type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary-dark text-white py-5 h-auto text-sm font-bold tracking-widest uppercase rounded-none transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? 'Submitting Request...' : 'Submit Inspection Request'}
            </Button>
            {status === 'error' && (
                <p className="text-red-500 text-sm mt-4 text-center font-bold">{errorMessage}</p>
            )}
            <p className="text-center text-xs text-gray-600 mt-4">
                By submitting, you confirm that you are authorized to request access to the facility.
            </p>
        </form>
    );
};
