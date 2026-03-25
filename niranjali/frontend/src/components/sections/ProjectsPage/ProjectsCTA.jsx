import React from 'react';
import { Button } from '../../ui/Button';

export const ProjectsCTA = () => {
    return (
        <section className="py-24 bg-white text-center border-t border-gray-200">
            <div className="container-custom max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 leading-tight">
                    Plan Your Fire Protection Installation <br />
                    <span className="text-gray-400">with Our Engineering Team</span>
                </h2>
                <div className="flex justify-center">
                    <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-10 py-4 h-auto text-lg font-bold tracking-widest uppercase rounded-none shadow-none transition-all duration-300">
                        Request Site Inspection
                    </Button>
                </div>
            </div>
        </section>
    );
};
