import React from 'react';

export const EngineeringResponse = () => {
    return (
        <section className="py-32 bg-[#F5F5F5] border-y border-gray-200">
            <div className="container-custom">
                <div className="max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 leading-tight mb-8">
                        Our Engineering Response
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-12 text-justify">
                        "We approach every project as a unique risk equation. By isolating specific variables—fuel load, ventilation, and occupancy—we derive a fire protection strategy that is both compliant and practically effective."
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <span className="text-4xl font-bold text-blue-500 block mb-2">01</span>
                            <h4 className="font-bold text-gray-900 mb-2">Quantifiable Analysis</h4>
                            <p className="text-sm text-gray-500">Calculating fire load density in MJ/m².</p>
                        </div>
                        <div>
                            <span className="text-4xl font-bold text-blue-500 block mb-2">02</span>
                            <h4 className="font-bold text-gray-900 mb-2">Normative Mapping</h4>
                            <p className="text-sm text-gray-500">Aligning design with NBC 2016 Part 4.</p>
                        </div>
                        <div>
                            <span className="text-4xl font-bold text-blue-500 block mb-2">03</span>
                            <h4 className="font-bold text-gray-900 mb-2">Hydraulic Validation</h4>
                            <p className="text-sm text-gray-500">Ensuring adequate pressure at the remotest outlet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
