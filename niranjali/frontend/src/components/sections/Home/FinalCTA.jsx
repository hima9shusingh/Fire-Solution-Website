import React from 'react';
import { Button } from '../../ui/Button';
import { Link } from 'react-router-dom';

export const FinalCTA = () => {
    return (
        <section className="py-24 bg-[#050A14] border-t border-white/5 relative overflow-hidden text-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                    Schedule a Compliance-Focused <br />
                    <span className="text-primary">Site Inspection</span>
                </h2>
                <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-light">
                    Ensure your facility meets all NBC & NFPA safety standards with a comprehensive engineering audit from Niranjali Firesolutions.
                </p>
                <Link to="/request-inspection">
                    <Button size="lg" className="bg-primary hover:bg-primary-light text-white px-12 h-16 text-lg font-bold tracking-wider rounded-sm shadow-xl shadow-primary/20">
                        Request Inspection
                    </Button>
                </Link>
            </div>
        </section>
    );
};
