import React from 'react';

const ApproachCard = ({ step, title, description }) => (
    <div className="bg-dark-secondary p-8 border border-white/5 relative group hover:border-primary/30 transition-all duration-300 h-full flex flex-col justify-start">
        <span className="text-5xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">
            0{step}
        </span>
        <h3 className="text-xl font-heading font-bold text-white mb-4 relative z-10 group-hover:text-primary transition-colors">
            {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed relative z-10">
            {description}
        </p>
    </div>
);

export const EngineeringApproach = () => {
    return (
        <section className="py-24 bg-dark border-t border-white/5">
            <div className="container-custom">
                <div className="mb-16">
                    <h2 className="text-4xl font-heading font-bold text-white">Our Engineering Approach</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ApproachCard
                        step={1}
                        title="Risk Assessment & Fire Load Analysis"
                        description="Comprehensive evaluation of facility hazards, combustible materials, and structural risks to determine precise protection requirements."
                    />
                    <ApproachCard
                        step={2}
                        title="Code-Compliant System Design"
                        description="Engineering layouts and hydraulic calculations adhering strictly to NBC, specific IS codes, and NFPA guidelines."
                    />
                    <ApproachCard
                        step={3}
                        title="Supervised Installation & Commissioning"
                        description="Execution by certified technicians under engineer supervision, concluding with rigorous testing and handover."
                    />
                    <ApproachCard
                        step={4}
                        title="Maintenance & Compliance Support"
                        description="Scheduled AMCs and mandatory audits to ensure system readiness and ongoing regulatory adherence."
                    />
                </div>
            </div>
        </section>
    );
};
