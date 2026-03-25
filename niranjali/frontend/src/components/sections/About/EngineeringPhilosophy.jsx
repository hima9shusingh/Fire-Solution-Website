import React from 'react';

export const EngineeringPhilosophy = () => {
    return (
        <section className="py-32 bg-white text-justify">
            <div className="container-custom">
                <div className="max-w-5xl">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-gray-900 leading-tight mb-12">
                        We don't just install systems. <br />
                        <span className="text-gray-400">We engineer resilience.</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Precision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Every sprinkler head layout and hydraulic calculation is double-checked against specific hazard classifications. We leave no room for ambiguity when life safety is at stake.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Uncompromising Quality</h3>
                            <p className="text-gray-600 leading-relaxed">
                                From the grade of piping to the reliability of pumps, we specify only industry-leading components that ensure your system performs exactly when needed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
