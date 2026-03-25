import React from 'react';

export const ServiceProcess = ({ process }) => {
    return (
        <section className="py-20 bg-gray-50 border-t border-gray-200">
            <div className="container-custom">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">Installation Process</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {process.map((step, index) => (
                        <div key={index} className="relative">
                            <div className="text-6xl font-bold text-gray-200 mb-4">{step.step}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">{step.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed relative z-10">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
