import React from 'react';

export const IntroSection = () => {
    return (
        <section className="py-12 bg-white border-b border-gray-100">
            <div className="container-custom max-w-4xl text-center">
                <p className="text-gray-600 leading-relaxed">
                    Our site inspection process involves a comprehensive engineering evaluation of your facility's layout, existing fire systems, and potential hazards.
                    Following the assessment, our team will provide a detailed technical proposal outlining optimized fire protection strategies aligned with
                    <span className="font-semibold text-gray-900"> National Building Code (NBC) </span> and <span className="font-semibold text-gray-900"> NFPA standards</span>.
                </p>
            </div>
        </section>
    );
};
