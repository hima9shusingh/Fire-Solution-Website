import React from 'react';
import { Button } from '../../ui/Button';

export const AboutCTA = () => {
    return (
        <section className="py-24 bg-[#F9F9F9] text-center border-t border-gray-200">
            <div className="container-custom max-w-2xl mx-auto">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                    Ready to upgrade your fire safety standards?
                </h2>
                <div className="flex justify-center">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 focus:outline-2 focus:outline-offset-2 focus:outline-orange-500 active:bg-orange-700 ...">
                        Contact Our Engineers
                    </Button>
                </div>
            </div>
        </section>
    );
};
