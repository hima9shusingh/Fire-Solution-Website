import React from 'react';

export const ProjectsHero = () => {
    return (
        <section className="relative py-32 bg-dark border-b border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-dark to-primary/10 pointer-events-none" />
            <div className="container-custom relative z-10">
                <div className="max-w-4xl">

                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-heading font-bold text-[var(--foreground)] mb-6 tracking-tight leading-none">
                        Executed Fire <br />
                        Protection Installations.
                    </h1>
                    <p className="text-xl text-[var(--text-muted)] max-w-2xl font-medium leading-relaxed border-l-2 border-primary pl-6 mt-8 text-justify">
                        Compliance-driven system design and supervised execution across industrial infrastructure. We deliver engineering precision in every weld and wire.
                    </p>
                </div>
            </div>
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>
        </section>
    );
};
