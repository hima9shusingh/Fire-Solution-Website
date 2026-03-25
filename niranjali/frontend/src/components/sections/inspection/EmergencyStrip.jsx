import React from 'react';
import { Phone, ShieldAlert } from 'lucide-react';

export const EmergencyStrip = () => {
    return (
        <section className="bg-white py-12 border-t border-gray-200">
            <div className="container-custom max-w-4xl">
                <div className="border border-primary/20 bg-primary/5 rounded-sm p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-full text-primary">
                            <ShieldAlert className="h-6 w-6" />
                        </div>
                        <div>
                            <h4 className="text-primary-dark font-bold mb-1">Emergency Support</h4>
                            <p className="text-primary-dark/80 text-sm">For urgent industrial incidents or system failures, usage of this form may result in delays. Contact our 24/7 emergency line immediately.</p>
                        </div>
                    </div>
                    <div className="shrink-0">
                        <a href="tel:9939555664" className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary-dark transition-colors">
                            <Phone className="h-5 w-5" />
                            9939555664
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
