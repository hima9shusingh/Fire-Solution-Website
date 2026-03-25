import React from 'react';

const Step = ({ number, title, description }) => (
    <div className="text-center px-4">
        <div className="text-6xl font-bold text-[var(--border-subtle)] mb-6">{number}</div>
        <h3 className="text-xl font-bold text-light mb-3">{title}</h3>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xs mx-auto">{description}</p>
    </div>
);

export const ExecutionModel = () => {
    return (
        <section className="py-24 bg-[var(--background)] border-t border-[var(--border-subtle)]">
            <div className="container-custom">
                <h2 className="text-3xl font-heading font-bold text-light mb-16 text-center">Our Industry-Specific Execution Model</h2>
                <div className="grid md:grid-cols-4 gap-12 md:gap-4 border-b border-[var(--border-subtle)] pb-12 md:border-b-0 md:pb-0">
                    <Step
                        number="01"
                        title="Site Evaluation"
                        description="In-depth analysis of site conditions, existing infrastructure, and specific industrial process risks."
                    />
                    <Step
                        number="02"
                        title="Risk Analysis"
                        description="Quantifying fire loads and identifying vulnerabilities in the current protection strategy."
                    />
                    <Step
                        number="03"
                        title="System Design"
                        description="Engineering custom solutions that integrate seamlessly with your facility's daily operations."
                    />
                    <Step
                        number="04"
                        title="Compliance Verification"
                        description="Rigorous testing and certification to ensure the system meets all statutory requirements."
                    />
                </div>
            </div>
        </section>
    );
};
