import React from 'react';

const ProcessStep = ({ number, title, description }) => (
    <div className="relative pt-8 md:pt-0 group">
        <div className="text-4xl md:text-6xl font-bold text-[var(--border-subtle)] mb-4 font-heading group-hover:text-primary/20 transition-colors">{number}</div>
        <div className="border-t-2 border-primary w-12 mb-6"></div>
        <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">{title}</h3>
        <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-xs">{description}</p>
    </div>
);

export const ServiceProcess = () => {
    return (
        <section className="py-24 bg-[var(--surface-secondary)] border-b border-[var(--border-subtle)]">
            <div className="container-custom">
                <div className="grid md:grid-cols-4 gap-12">
                    <ProcessStep
                        number="01"
                        title="Site Analysis"
                        description="Conducting fire load calculation and hazard classification based on facility layout."
                    />
                    <ProcessStep
                        number="02"
                        title="System Design"
                        description="AutoCAD mapping of piping routes and hydraulic optimization for peak efficiency."
                    />
                    <ProcessStep
                        number="03"
                        title="Installation"
                        description="Precision execution by certified technicians adhering to approved drawings."
                    />
                    <ProcessStep
                        number="04"
                        title="Commissioning"
                        description="Final pressure testing and compliance certification before system handover."
                    />
                </div>
            </div>
        </section>
    );
};
