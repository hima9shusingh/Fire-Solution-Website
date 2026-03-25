import React from 'react';
import { Button } from '../../ui/Button';

export const InspectionCTA = () => {
    return (
        <section className="py-20 bg-[#F5F5F5] text-center border-t border-gray-200">
            <div className="container-custom max-w-3xl mx-auto">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                    Begin Your Compliance Assessment
                </h2>
                <div className="flex justify-center">
                    <Button size="lg" className="bg-dark hover:bg-black text-white px-10 py-4 h-auto text-sm font-bold tracking-widest uppercase rounded-none shadow-none transition-all duration-300">
                        Scroll Up to Form
                    </Button>
                </div>
            </div>
        </section>
    );
};
