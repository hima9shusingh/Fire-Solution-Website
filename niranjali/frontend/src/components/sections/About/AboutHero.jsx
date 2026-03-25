import React from 'react';

export const AboutHero = () => {
    return (
        <section className="relative py-32 bg-dark overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-dark to-primary/10 pointer-events-none" />
            <div className="container-custom relative z-10">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-light mb-8 tracking-tight leading-tight">
                        Engineering Integrity. <br />
                        <span className="text-primary">Compliance Commitment.</span>
                    </h1>
                    <div className="w-24 h-1 bg-primary mb-8"></div>
                    <p className="text-xl md:text-2xl text-[var(--text-muted)] font-light leading-relaxed max-w-2xl"> <b>
                        Niranjali Firesolutions is built on the precise science of fire safety engineering, adhering strictly to national codes and global safety standards.
                        </b>
                    </p>
                </div>
            </div>
        </section>
    );
};
