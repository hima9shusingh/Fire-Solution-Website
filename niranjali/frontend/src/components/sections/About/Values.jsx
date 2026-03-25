import React from 'react';
import { Award, Shield, Users } from 'lucide-react';

export const Values = () => {
    return (
        <section className="py-24 bg-[var(--surface-secondary)] border-t border-[var(--border-subtle)]">
            <div className="container-custom text-center">
                <h2 className="text-3xl font-heading font-bold text-[var(--foreground)] mb-16">Core Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: 'Technical Excellence', icon: Award, desc: 'We don\'t cut corners. Every system is designed by certified engineers.' },
                        { title: 'Uncompromised Safety', icon: Shield, desc: 'Safety is non-negotiable. We adhere strictly to NBC and NFPA codes.' },
                        { title: 'Client Partnership', icon: Users, desc: 'We build long-term relationships, supporting you from design to maintenance.' }
                    ].map((item, index) => (
                        <div key={index} className="bg-[var(--card-bg)] p-8 rounded-sm border border-[var(--border-subtle)] hover:border-primary/50 transition-colors">
                            <item.icon className="h-10 w-10 text-primary mb-6 mx-auto" strokeWidth={1.5} />
                            <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">{item.title}</h3>
                            <p className="text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
