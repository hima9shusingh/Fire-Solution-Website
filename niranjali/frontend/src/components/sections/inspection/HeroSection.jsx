import React from 'react';
import { ClipboardCheck } from 'lucide-react';

export const HeroSection = () => {
    return (
        <section className="bg-dark py-20 border-b border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                {/* Abstract technical lines */}
                <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/20" />
                <div className="absolute bottom-0 left-0 w-2/3 h-1/2 border-t border-white/20" />
            </div>
            <div className="container-custom relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                    <ClipboardCheck className="h-4 w-4" />
                    <span className="uppercase tracking-wider text-xs">Site Assessment</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                    Request a Site Inspection
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                    Schedule a technical evaluation with our engineering team for compliance-driven fire protection planning.
                </p>
            </div>
        </section>
    );
};
