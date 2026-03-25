import React from 'react';
import { Button } from '../../ui/Button';
import { ArrowRight } from 'lucide-react';

export const FeaturedProject = () => {
    return (
        <section className="py-0 bg-white border-b border-gray-200">
            <div className="grid lg:grid-cols-2 min-h-[700px]">
                {/* Content Side */}
                <div className="p-8 lg:p-24 flex flex-col justify-center bg-[#F5F5F5]">
                    <span className="text-primary font-mono text-xs font-bold uppercase tracking-widest mb-6">Featured Case Study</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                        Automated Warehousing Facility <br />
                        <span className="text-orange-500">Bhiwandi, Maharashtra</span>
                    </h2>

                    <div className="grid grid-cols-2 gap-8 mb-12 border-y border-gray-300 py-8">
                        <div>
                            <h4 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">Scope</h4>
                            <p className="font-bold text-gray-900">Turnkey Fire Protection (Design to Handover)</p>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">Area</h4>
                            <p className="font-bold text-gray-900">450,000 Sq. Ft.</p>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">Systems</h4>
                            <p className="font-bold text-gray-900">ESFR Sprinklers, Beam Detection, Hydrant Ring</p>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">Compliance</h4>
                            <p className="font-bold text-gray-900">NBC 2016 / FM Global Standards</p>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Engineering Challenge</h3>
                        <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                            The facility featured 12-meter high racking systems, creating severe vertical fire spread risks. Standard sprinklers were insufficient. We implemented a high-volume ESFR (Early Suppression Fast Response) system, requiring precision hydraulic balancing to ensure adequate pressure at the remotest head without an in-rack network, optimizing both safety and operational storage space.
                        </p>
                    </div>

                    <div>
                        <Button size="lg" className="bg-transparent text-ornage-500 border-2 border-ornage-600 hover:bg-orange-500 hover:text-white rounded-50 px-8 font-bold uppercase tracking-wider flex items-center gap-2">
                            Read Full Technical Report <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Image Side */}
                <div className="relative h-[400px] lg:h-auto bg-gray-800">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-mono text-sm uppercase tracking-widest">
                        [Image: High-Bay Warehouse Sprinkler Installation]
                    </div>
                    <div className="absolute inset-0 bg-black/20" />
                </div>
            </div>
        </section>
    );
};
