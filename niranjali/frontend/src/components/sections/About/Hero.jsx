import React from 'react';

export const Hero = () => {
    return (
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center bg-dark">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-dark to-primary/10 z-0" />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092921461-eab62e47a71e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"
            />
            <div className="container-custom relative z-20">
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
                    Protecting Life & Assets
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                    Since 2010, we've engineering fire safety solutions for India's most critical infrastructure.
                </p>
            </div>
        </section>
    );
};
