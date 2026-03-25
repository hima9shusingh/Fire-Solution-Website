import React from 'react';
import { Button } from '../../ui/Button';

export const ServicesCTA = () => {
    return (
        <section className="py-24 bg-white text-center">
            <div className="container-custom max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8 leading-tight">
                    Discuss Your Facility's <br />
                    Fire Protection Needs
                </h2>
                <div className="flex justify-center">
                    <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-12 py-5 h-auto text-xl font-bold tracking-widest uppercase rounded-sm shadow-xl transition-all duration-300 border-2 border-transparent hover:border-black">
                        Request Site Inspection
                    </Button>
                </div>
                <p className="mt-6 text-gray-700 text-sm font-mono uppercase tracking-wider">
                    Engineers available for consultation
                </p>
            </div>
        </section>
    );
};
