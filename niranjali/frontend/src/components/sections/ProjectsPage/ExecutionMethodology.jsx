import React from 'react';

const Step = ({ number, title, description }) => (
    <div className="relative pl-12 pb-12 last:pb-0 md:pl-0 md:pb-0 md:border-t md:border-gray-200 md:pt-8">
        <div className="absolute left-0 top-0 md:static text-4xl font-bold text-blue-900 mb-4 font-heading">{number}</div>
        <h3 className="text-lg font-bold text-orange-500 mb-3">{title}</h3>
        <p className="text-gray-900 text-sm leading-relaxed max-w-xs">{description}</p>
    </div>
);

export const ExecutionMethodology = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="mb-16 max-w-3xl">
                    <h2 className="text-3xl font-heading font-bold text-blue-900 mb-6">execution Framework.</h2>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium text-justify">
                        Our project delivery model is standardized to ensure consistency across geographies. From initial risk assessment to final handover, every phase is documented and validated against NBC protocols.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-8">
                    <Step
                        number="01"
                        title="Site Audit"
                        description="Physical inspection of facility layout and hazard identification."
                    />
                    <Step
                        number="02"
                        title="System Design"
                        description="Hydraulic calculations and AutoCAD mapping of piping routes."
                    />
                    <Step
                        number="03"
                        title="Procurement"
                        description="Sourcing of UL/FM listed components from OEM partners."
                    />
                    <Step
                        number="04"
                        title="Installation"
                        description="Site fabrication and erection by certified piping technicians."
                    />
                    <Step
                        number="05"
                        title="Handover"
                        description="Pressure testing, user training, and compliance certification."
                    />
                </div>
            </div>
        </section>
    );
};
