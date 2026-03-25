import React from 'react';
import { Factory, Building2, ShieldCheck, Wrench } from 'lucide-react';

const features = [
    {
        title: 'Industrial Safety',
        desc: 'Comprehensive fire suppression for large-scale facilities and hazardous environments.',
        icon: Factory
    },
    {
        title: 'Corporate Compliance',
        desc: 'Meeting global safety standards for commercial high-rises and office complexes.',
        icon: Building2
    },
    {
        title: 'System Maintenance',
        desc: '24/7 expert support and proactive system health monitoring to ensure readiness.',
        icon: Wrench
    },
    {
        title: 'Certified Protection',
        desc: 'ISO certified processes and licensed engineers delivering guaranteed safety.',
        icon: ShieldCheck
    }
];

export const Features = () => {
    return (
        <section className="py-20 bg-[var(--surface-secondary)] border-y border-[var(--border-subtle)]">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-heading font-bold text-light mb-4">Why Choose Niranjali?</h2>
                    <p className="text-[var(--text-muted)] max-w-2xl mx-auto">Decades of expertise in delivering fail-safe fire protection solutions.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item, index) => (
                        <div key={index} className="p-8 bg-[var(--card-bg)] rounded-xl border border-[var(--border-subtle)] border-t-4 border-t-primary card-hover shadow-subtle group">
                            <div className="mb-6 p-3 bg-blue-50 dark:bg-[var(--surface-secondary)] rounded-lg w-fit group-hover:bg-primary/10 transition-colors">
                                <item.icon className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-heading font-semibold text-light mb-3 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-[var(--text-muted)] leading-relaxed group-hover:text-[var(--text-secondary)] transition-colors">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
