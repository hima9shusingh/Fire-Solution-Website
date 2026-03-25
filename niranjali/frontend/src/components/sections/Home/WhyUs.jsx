import React from 'react';
import { ShieldCheck, Scale, MapPin, Zap } from 'lucide-react';

const reasons = [
    {
        title: 'Engineering-Led Design',
        desc: 'Solutions designed by licensed fire safety engineers, ensuring systems are optimized for your specific layout.',
        icon: ShieldCheck
    },
    {
        title: 'Code & Compliance',
        desc: 'Deep expertise in National Building Code (NBC) & NFPA standards to ensure glitch-free statutory approvals.',
        icon: Scale
    },
    {
        title: 'Multi-State Deployment',
        desc: 'Scalable project execution capabilities across multiple states with standardized quality protocols.',
        icon: MapPin
    },
    {
        title: 'Rapid Technical Response',
        desc: 'Dedicated engineering support teams for fast turnaround on audits, designs, and emergency maintenance.',
        icon: Zap
    }
];

export const WhyUs = () => {
    return (
        <section className="py-12 md:py-24 bg-gradient-to-br from-[var(--surface)] to-[var(--surface-secondary)] border-t border-[var(--border-subtle)] relative overflow-hidden">
            {/* Ambient Orange Glow */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-8 md:mb-16 max-w-3xl mx-auto">
                    <span className="text-primary font-mono text-xs tracking-widest uppercase mb-3 block">Why Niranjali</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-[var(--foreground)] mb-6">Engineered for Resilience</h2>
                    <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                        We don't just sell equipment; we engineer complete safety ecosystems. From initial hydraulic calculations to final NOC certification, we are your technical partners.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <div key={index} className="group p-8 bg-[var(--card-bg)] border border-[var(--border-subtle)] hover:border-primary/40 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center">
                            <div className="p-4 bg-primary/10 rounded-full text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg shadow-primary/5">
                                <reason.icon className="h-8 w-8" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-[var(--foreground)] mb-4 group-hover:text-primary-light transition-colors">
                                {reason.title}
                            </h3>
                            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                {reason.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
