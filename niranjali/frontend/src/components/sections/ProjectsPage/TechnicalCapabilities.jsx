import React from 'react';

const Capability = ({ title }) => (
    <div className="flex items-center gap-3">
        <span className="w-1.5 h-1.5 bg-primary"></span>
        <span className="text-sm font-bold text-blue-900 uppercase tracking-wide">{title}</span>
    </div>
);

export const TechnicalCapabilities = () => {
    return (
        <section className="py-12 bg-dark-secondary border-t border-white/5">
            <div className="container-custom">
                <div className="grid md:grid-cols-4 gap-6">
                    <Capability title="Hydraulic System Design" />
                    <Capability title="Pump Room Engineering" />
                    <Capability title="Multi-System Integration" />
                    <Capability title="Compliance Documentation" />
                </div>
            </div>
        </section>
    );
};
