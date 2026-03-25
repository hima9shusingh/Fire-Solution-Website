import React from 'react';
import { Phone, AlertTriangle } from 'lucide-react';
import { Button } from '../../ui/Button';

export const EmergencyBanner = () => {
    return (
        <section className="bg-primary py-10 border-t border-primary-dark">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div className="flex items-center gap-4">
                        <div className="bg-white/10 p-3 rounded-sm hidden md:block">
                            <AlertTriangle className="h-8 w-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-heading font-bold text-white mb-1">Critical System Failure?</h3>
                            <p className="text-white/90 font-medium tracking-wide">
                                24/7 Emergency Response Team for industrial incidents.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="tel:+919876543210">
                            <Button className="bg-white text-primary hover:bg-gray-100 border-0 font-bold px-8 h-12 text-lg shadow-lg">
                                <Phone className="h-5 w-5 mr-2" />
                                Call Emergency
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
