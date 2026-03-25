import React from 'react';
import { Map } from 'lucide-react';

export const CoverageSection = () => {
    return (
        <section className="py-24 bg-white border-t border-gray-200">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Service Coverage</h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Headquartered with centralized engineering operations in the National Capital Region (NCR), we deploy specialized project teams across North and Eastern India. Our localized execution capabilities ensure timely delivery and consistent quality.
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-2 mb-4">Operational Regions</h3>
                            <ul className="grid grid-cols-2 gap-4">
                                {['NCR Region', 'Uttar Pradesh', 'Bihar', 'Jharkhand', 'West Bengal'].map((region) => (
                                    <li key={region} className="flex items-center gap-3 text-gray-700">
                                        <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                                        <span className="font-medium">{region}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="bg-gray-100 rounded-sm h-[400px] w-full flex flex-col items-center justify-center text-gray-400 border border-gray-200">
                        <Map className="h-16 w-16 mb-4 opacity-20" strokeWidth={1} />
                        <span className="font-mono text-sm tracking-widest uppercase opacity-50">[Map Visualization Scope]</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
