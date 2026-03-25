import React from 'react';

export const CompanyOverview = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">Who We Are</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8">
                            Company Overview
                        </h2>
                        <div className="prose prose-lg text-gray-600">
                            <p className="mb-6">
                                Niranjali Firesolutions Limited is a registered, government-certified engineering firm specializing in advanced industrial fire protection systems. We are not just equipment suppliers; we are complete safety partners for factories, warehouses, and corporate infrastructure.
                            </p>
                            <p>
                                Driven by a core team of senior engineers, our operations prioritize strict regulatory compliance and technical precision. From initial risk assessment to multi-state project deployment, we ensure every system meets National Building Code (NBC) and NFPA standards, protecting both life and critical assets.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[400px] w-full bg-gray-200 rounded-sm overflow-hidden">
                        {/* Placeholder for corporate/industrial image */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500 font-mono text-sm uppercase tracking-widest">
                            [Company Infrastructure Image]
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
