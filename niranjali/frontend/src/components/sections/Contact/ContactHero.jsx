import React from 'react';

export const ContactHero = () => {
    return (
        <section className="relative py-32 bg-dark border-b border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-dark to-primary/10 pointer-events-none" />
            <div className="container-custom relative z-10">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-[var(--foreground)] mb-6 tracking-tight leading-none">
                        Contact Our <br />
                        <span className="text-primary">Engineering Team.</span>
                    </h1>
                    <p className="text-xl text-[var(--text-muted)] max-w-2xl font-medium text-justify leading-relaxed border-l-2 border-primary pl-6 mt-8">
                        Discuss compliance-focused fire protection solutions for your facility. We provide technical consultation for new installations and system retrofits.
                    </p>
                </div>
            </div>
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>
        </section>
    );
};
