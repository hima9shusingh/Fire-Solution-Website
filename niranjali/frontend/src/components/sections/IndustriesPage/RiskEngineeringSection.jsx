import React from 'react';

const ApproachItem = ({ title, description }) => (
    <div className="p-8 bg-gray-50 border border-gray-200 text-left h-full">
        <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
            {description}
        </p>
    </div>
);

export const RiskEngineeringSection = () => {
    return (
        <section className="py-24 bg-white border-t border-gray-200">
            <div className="container-custom">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">Risk-Based Engineering Approach</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ApproachItem
                        title="Fire Load Assessment"
                        description="Calculating the potential energy output of a fire based on stored materials to determine suppression density."
                    />
                    <ApproachItem
                        title="Infrastructure Design"
                        description="Tailoring system architecture to building layout, ceiling height, and occupancy type for maximum efficiency."
                    />
                    <ApproachItem
                        title="Regulatory Alignment"
                        description="Ensuring all designs meet specific NBC occupancy classifications and local fire department norms."
                    />
                    <ApproachItem
                        title="Maintenance Strategy"
                        description="Designing systems with long-term serviceability in mind to ensure operational longevity."
                    />
                </div>
            </div>
        </section>
    );
};
