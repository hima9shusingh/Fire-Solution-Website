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
            className="w-full bg-[#0f172a] border border-gray-700 text-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors rounded-none appearance-none"
        >
            <option value="">Select Option</option>
            {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
    </div>
);

export const ContactForm = () => {
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('http://localhost:5000/api/forms/contact', {
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

    return (
        <section className="py-24 bg-[#0B1120]">
            <div className="container-custom">
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Form Side */}
                    <div className="lg:col-span-7">
                        <h2 className="text-3xl font-heading font-bold text-white mb-8">Send us a message</h2>

                        {status === 'success' ? (
                            <div className="bg-dark-secondary border-l-4 border-green-500 p-8">
                                <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully</h3>
                                <p className="text-gray-400">Our engineering team will review your inquiry and respond within 24 hours.</p>
                                <button onClick={() => setStatus(null)} className="text-sm text-green-500 font-bold mt-4 hover:text-green-400 uppercase tracking-wide">Send Another Message</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-x-6">
                                    <InputField label="Company Name" name="company" placeholder="e.g. Acme Industries Ltd." required />
                                    <InputField label="Contact Person" name="name" placeholder="Full Name" required />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                                    <InputField label="Official Email" name="email" type="email" placeholder="name@company.com" required />
                                    <InputField label="Phone Number" name="phone" type="tel" placeholder="+91" required />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                                    <InputField label="Location / City" name="location" placeholder="Facility Location" />
                                    <SelectField label="Inquiry Type" name="subject" options={['New Installation', 'System Maintenance', 'Safety Audit', 'Vendor Registration']} required />
                                </div>

                                <div className="mb-8">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Message Content <span className="text-primary">*</span></label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        required
                                        placeholder="Please describe your requirements or project details..."
                                        className="w-full bg-[#0f172a] border border-gray-700 text-gray-200 px-4 py-3 text-base focus:outline-none focus:border-primary transition-colors placeholder-gray-600 rounded-none resize-none"
                                    ></textarea>
                                </div>

                                <Button size="lg" type="submit" disabled={loading} className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white px-12 py-4 h-auto text-sm font-bold tracking-widest uppercase rounded-none transition-all duration-300 border-2 border-transparent disabled:opacity-50 disabled:cursor-not-allowed">
                                    {loading ? 'Sending...' : 'Submit Inquiry'}
                                </Button>
                                {status === 'error' && (
                                    <p className="text-red-500 text-sm mt-4 font-bold">{errorMessage}</p>
                                )}
                            </form>
                        )}
                    </div>

                    {/* Info Side */}
                    <div className="lg:col-span-5 bg-dark-secondary p-12 border border-white/5 h-fit">
                        <h3 className="text-xl font-bold text-orange-600 mb-8 border-b border-white/10 pb-4">Headquarters</h3>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-md font-bold text-orange-600 uppercase tracking-widest mb-2">Registered Office</h4>
                                <p className="text-blue-900 leading-relaxed">
                                    Niranjali Fire solutions private Limited<br />
                                    404, 4th Floor, Rajeev Ranjan complex<br />
                                    Ashiyana Digha Road, Patna, Bihar - 800014<br />
                                    India
                                </p>
                            </div>

                            <div>
                                <h4 className="text-md font-bold text-orange-600 uppercase tracking-widest mb-2">Operating Hours</h4>
                                <p className="text-blue-900">
                                    Monday - Saturday<br />
                                    09:00 AM - 06:00 PM (IST)
                                </p>
                            </div>

                            <div>
                                <h4 className="text-md font-bold text-orange-600 uppercase tracking-widest mb-2">Service Regions</h4>
                                <ul className="text-blue-900 space-y-1">
                                    <li>Delhi NCR</li>
                                    <li>Uttar Pradesh</li>
                                    <li>Bihar & Jharkhand</li>
                                    <li>West Bengal</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
