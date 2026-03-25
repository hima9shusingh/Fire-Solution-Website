import React from 'react';

export const ServiceOverview = ({ overview }) => {
    return (
        <section className="py-20 bg-light">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">Overview</h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                        {overview}
                    </p>
                </div>
            </div>
        </section>
    );
};
