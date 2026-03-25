import React from 'react';

export const IndustriesCoverage = () => {
    return (
        <section className="py-24 bg-white text-center">
            <div className="container-custom max-w-3xl mx-auto">
                <h2 className="text-xl font-heading font-bold text-gray-900 mb-8 uppercase tracking-widest">
                    Operational Footprint
                </h2>
                <div className="flex flex-wrap justify-center gap-4 text-sm font-mono text-gray-500">
                    <span className="border border-gray-200 px-4 py-2 bg-gray-50">Delhi NCR</span>
                    <span className="border border-gray-200 px-4 py-2 bg-gray-50">Uttar Pradesh</span>
                    <span className="border border-gray-200 px-4 py-2 bg-gray-50">Bihar</span>
                    <span className="border border-gray-200 px-4 py-2 bg-gray-50">Jharkhand</span>
                    <span className="border border-gray-200 px-4 py-2 bg-gray-50">West Bengal</span>
                    <span className="border border-gray-200 px-4 py-2 bg-gray-50">Odisha</span>
                </div>
            </div>
        </section>
    );
};
