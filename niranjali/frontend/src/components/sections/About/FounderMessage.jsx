import React from 'react';

export const FounderMessage = () => {
    return (
        <section className="py-0 bg-[#F5F5F5]">
            <div className="grid lg:grid-cols-2 min-h-[600px]">
                {/* Image Side */}
                <div className="relative bg-gray-800 h-[400px] lg:h-auto">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-mono text-sm uppercase tracking-widest">
                        [Founder Portrait - Corporate Style]
                    </div>
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-24 flex flex-col justify-center text-justify">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                        "Safety is not a product. <br />
                        It is an engineering discipline."
                    </h2>
                    <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
                        <p>
                            <b>At Niranjali Firesolutions, we treat every facility as a unique engineering challenge. We do not sell equipment; we assist our partners in mitigating risk through code-compliant design and flawless execution.</b>
                        </p>
                        <p>
                            <b>In an industry often clouded by transactional relationships, we stand firm on our commitment to long-term compliance and operational integrity.</b>
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-300">
                        <h4 className="text-gray-900 font-bold text-lg">Founder Name</h4>
                        <p className="text-primary text-sm uppercase tracking-wider font-mono mt-1"><b>Managing Director</b></p>
                    </div>
                </div>
            </div>
        </section>
    );
};
