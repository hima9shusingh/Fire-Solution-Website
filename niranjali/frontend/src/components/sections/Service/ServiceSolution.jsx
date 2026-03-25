import React from 'react';
import { CheckCircle } from 'lucide-react';

export const ServiceSolution = ({ solution }) => {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Our Engineering Solution</h2>
                        <div className="prose prose-lg text-gray-600">
                            {solution}
                        </div>
                    </div>
                    <div className="bg-gray-100 p-8 rounded-sm border border-gray-200">
                        <h3 className="text-xl font-bold mb-6 text-gray-900">Key Features</h3>
                        <ul className="space-y-4">
                            {[1, 2, 3, 4].map((i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                                    <span className="text-gray-700">Detailed engineering specification feature {i}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
