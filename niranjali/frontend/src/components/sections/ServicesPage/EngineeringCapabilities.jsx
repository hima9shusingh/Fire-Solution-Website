import React from 'react';

const EngineeringItem = ({ title, description }) => (
    <div className="p-8 border-l-4 border-l-primary hover:bg-[var(--surface-secondary)] transition-colors duration-300">
        <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">{title}</h3>
        <p className="text-[var(--text-muted)] text-sm leading-relaxed">
            {description}
        </p>
    </div>
);

export const EngineeringCapabilities = () => {
    return (
        <section className="bg-[var(--background)] border-t border-[var(--border-subtle)]">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[var(--border-subtle)]">
                    <EngineeringItem
                        title="Hydraulic Engineering"
                        description="Advanced flow calculations ensuring optimal pressure distribution across complex piping networks."
                    />
                    <EngineeringItem
                        title="Code Compliance"
                        description="Rigorous adherence to NBC 2016, IS Standards, and local fire department regulations."
                    />
                    <EngineeringItem
                        title="Project Management"
                        description="Structured execution plans with critical path tracking for timely project delivery."
                    />
                    <EngineeringItem
                        title="Integrated Safety"
                        description="Holistic design combining detection, suppression, and evacuation systems into one framework."
                    />
                </div>
            </div>
        </section>
    );
};
