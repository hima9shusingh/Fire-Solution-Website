import React from 'react';

const CapabilityItem = ({ title, description }) => (
    <div className="p-8 bg-dark-secondary border-l-2 border-primary text-left">
        <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
            {description}
        </p>
    </div>
);

export const ExecutionCapabilities = () => {
    return (
        <section className="py-24 bg-dark text-center border-t border-white/5">
            <div className="container-custom">
                <h2 className="text-3xl font-heading font-bold text-white mb-12">Project Execution Capabilities</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <CapabilityItem
                        title="Hydraulic System Design"
                        description="Advanced flow and pressure calculations to ensure system reliability under peak demand conditions."
                    />
                    <CapabilityItem
                        title="Pump Room Engineering"
                        description="Optimization of pump house layout, suction piping, and vibration isolation for long-term durability."
                    />
                    <CapabilityItem
                        title="Multi-System Integration"
                        description="Seamless interfacing of detection, suppression, and alarm systems into a unified safety network."
                    />
                    <CapabilityItem
                        title="Compliance Documentation"
                        description="End-to-end management of drawings, test reports, and Form-B submissions for regulatory approvals."
                    />
                </div>
            </div>
        </section>
    );
};
