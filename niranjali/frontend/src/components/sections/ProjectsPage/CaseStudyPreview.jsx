import React from 'react';
import { CheckCircle } from 'lucide-react';

export const CaseStudyPreview = () => {
    return (
        <section className="py-24 bg-white border-t border-gray-200">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Featured Case Study</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                            Tier-1 Automotive Component Manufacturing Plant
                        </h2>

                        <div className="space-y-6 text-gray-600 leading-relaxed mb-8">
                            <p>
                                <strong>Challenge:</strong> The client required a comprehensive fire protection strategy for a facility handling highly flammable lubricants and high-voltage robotic assembly lines. The existing infrastructure was non-compliant with recent NBC amendments.
                            </p>
                            <p>
                                <strong>Engineering Solution:</strong> We designed a hybrid system combining foam deluge suppression for the chemical storage zones and a robust wet sprinkler network for the general assembly area. Hydraulic calculations were optimized to utilize the existing water reservoir capacity.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-sm border border-gray-200">
                            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Project Outcomes</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                                    <span className="text-sm text-gray-700">100% Compliance with NBC 2016 Part 4</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                                    <span className="text-sm text-gray-700">Successful Fire NOC obtained within 12 weeks</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                                    <span className="text-sm text-gray-700">Zero-downtime integration during plant operations</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative h-full min-h-[500px] bg-gray-200 rounded-sm overflow-hidden flex items-center justify-center text-gray-500 font-mono text-sm uppercase tracking-widest">
                        [Detailed Case Study Diagram / Image]
                    </div>
                </div>
            </div>
        </section>
    );
};
