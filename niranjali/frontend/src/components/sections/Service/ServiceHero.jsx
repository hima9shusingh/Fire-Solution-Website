import React from 'react';

export const ServiceHero = ({ title, subtitle, image }) => {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center">
            <div className="absolute inset-0 bg-[#0B1120]">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-[#0B1120] to-primary/10 z-0" />
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-overlay"
                    style={{ backgroundImage: `url(${image})` }}
                />
            </div>
            <div className="container-custom relative z-20 pt-10 text-center">
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                    {title}
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                    {subtitle}
                </p>
            </div>
        </section>
    );
};
