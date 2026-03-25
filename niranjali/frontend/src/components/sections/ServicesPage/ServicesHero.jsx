import React from 'react';

export const ServicesHero = () => {
    return (
        <section className="relative py-32 bg-dark border-b border-white/10 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-dark to-primary/10 pointer-events-none" />
            <div className="container-custom relative z-10">
                <div className="inline-block border border-gray-700 px-4 py-1 mb-6">
                    <span className="text-gray-400 font-mono text-xs uppercase tracking-widest">System Architecture & Design</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-light mb-6 tracking-tight leading-tight">
                    Technical Fire <br />
                    Protection Services
                </h1>
                <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto font-light leading-relaxed">
                    Precision-engineered safety systems designed for compliance, durability, and operational efficiency.
                </p>
            </div>
            {/* Blueprint Grid Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#FFF 1px, transparent 1px), linear-gradient(90deg, #FFF 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>
        </section>
    );
};
