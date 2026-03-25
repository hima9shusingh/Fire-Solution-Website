import React from 'react';
import { Shield, Target } from 'lucide-react';

export const MissionVision = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-primary/10 rounded-sm">
                                    <Shield className="h-6 w-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold font-heading">Our Mission</h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                To provide engineered fire protection systems that not only meet compliance standards but offer genuine resilience against disaster. We believe safety is a prerequisite for progress.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-primary/10 rounded-sm">
                                    <Target className="h-6 w-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold font-heading">Our Vision</h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                To be the most trusted fire safety partner for the industrial sector, known for technical excellence, ethical practices, and uncompromised quality.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-gray-100 rounded-sm overflow-hidden relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
                                alt="Engineers discussing plans"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/5 rounded-sm -z-0" />
                    </div>
                </div>
            </div>
        </section>
    );
};
