import React from 'react';
import { Button } from '../../ui/Button';

export const IndustriesCTA = () => {
    return (


        <section className="py-24 bg-[var(--surface-secondary)] text-center border-t-4 border-primary">
            <div className="container-custom max-w-2xl mx-auto">
                <h2 className="text-3xl font-heading font-bold text-[var(--foreground)] mb-8">
                    Discuss your facility's risk profile.
                </h2>
                <div className="flex justify-center">
                    <Button size="lg" variant="primary" className="px-10 py-4 h-auto text-sm font-bold tracking-widest uppercase rounded-none transition-all duration-300 shadow-xl shadow-primary/20">
                        Request Gap Analysis
                    </Button>
                </div>
            </div>
        </section>
    );
};
