import React from 'react';

export const IndustriesHero = () => {
    return (
        <section className="relative py-32 bg-dark overflow-hidden text-justify">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-dark to-primary/10 pointer-events-none" />
            <div className="container-custom relative z-10">
                <div className="max-w-4xl">
                    <div className="inline-block border border-gray-700 px-3 py-1 mb-6">
                        <span className="text-gray-400 font-mono text-xs uppercase tracking-widest">Sector-Specific Engineering</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-[var(--foreground)] mb-6 tracking-tight leading-none">
                        Risk-Adaptive <br />
                        Fire Protection.
                    </h1>
                    <p className="text-xl text-[var(--text-muted)] max-w-2xl font-medium leading-relaxed border-l-2 border-primary pl-6 mt-8">
                        We don't apply generic solutions. We analyze the unique combustion risks, occupancy patterns, and regulatory demands of your specific industry.
                    </p>
                </div>
            </div>
        </section>
    );
};
