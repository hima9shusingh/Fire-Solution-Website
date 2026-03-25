import React from 'react';
import { Button } from '../../ui/Button';

export const ServiceCTA = () => {
    return (
        <section className="py-20 bg-primary text-white text-center">
            <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to secure your facility?</h2>
                <p className="text-xl text-primary-light mb-8 max-w-2xl mx-auto">
                    Contact our engineering team for a free site assessment and technical consultation.
                </p>
                <div className="flex justify-center gap-4">
                    <Button size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-xl">
                        Get a Quote
                    </Button>
                    <Button variant="outline" size="lg" className="border-white hover:bg-white/10 text-white">
                        Contact Us
                    </Button>
                </div>
            </div>
        </section>
    );
};
