import React from 'react';
import { Button } from '../../ui/Button';

export const ContactCTA = () => {
    return (
        <section className="py-24 bg-[var(--surface)] text-center transition-colors duration-300">
            <div className="container-custom max-w-3xl mx-auto">
                <h2 className="text-3xl font-heading font-bold text-[var(--foreground)] mb-6">
                    Need an immediate compliance audit?
                </h2>
                <p className="text-[var(--text-muted)] mb-8 max-w-xl mx-auto font-medium">
                    Our certified engineers are available for site visits across North and East India within 48 hours of request confirmation.
                </p>
                <div className="flex justify-center">
                    <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-10 py-4 h-auto text-sm font-bold tracking-widest uppercase rounded-none shadow-xl shadow-primary/20 transition-all duration-300">
                        Schedule Site Assessment
                    </Button>
                </div>
            </div>
        </section>
    );
};
