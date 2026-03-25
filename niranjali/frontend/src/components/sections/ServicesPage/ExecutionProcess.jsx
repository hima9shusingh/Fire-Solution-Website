import React from 'react';

const ProcessStep = ({ number, title, description }) => (
    <div className="relative pl-8 md:pl-0">
        <div className="hidden md:block absolute top-0 left-6 bottom-0 w-px bg-gray-200 -z-10 last:hidden"></div>
        <div className="text-5xl font-bold text-gray-200 mb-4">{number}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed max-w-xs">{description}</p>
    </div>
);

export const ExecutionProcess = () => {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-200">
            <div className="container-custom">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-16 text-center">Our Project Execution Process</h2>
                <div className="grid md:grid-cols-4 gap-8 md:gap-4 text-left">
                    <ProcessStep
                        number="01"
                        title="Inspection & Risk Assessment"
                        description="Detailed site audit to identify fire hazards and determine the appropriate protection strategy."
                    />
                    <ProcessStep
                        number="02"
                        title="Design & Proposal"
                        description="Engineering layouts, hydraulic calculations, and BOM creation based on relevant safety codes."
                    />
                    <ProcessStep
                        number="03"
                        title="Installation & Commissioning"
                        description="Precise on-site execution followed by rigorous pressure testing and system functional checks."
                    />
                    <ProcessStep
                        number="04"
                        title="Handover & Compliance"
                        description="Final documentation, user training, and assistance with regulatory approvals."
                    />
                </div>
            </div>
        </section>
    );
};
