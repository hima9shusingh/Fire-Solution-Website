import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '../../ui/Button';

export const MapSection = () => {
    return (
        <section className="h-[500px] w-full bg-gray-100 relative overflow-hidden border-t border-gray-200">
            <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center text-gray-500">
                <MapPin className="h-10 w-10 mb-2 opacity-50" />
                <span className="font-mono text-sm tracking-widest uppercase">Interactive Map Loading...</span>
            </div>

            {/* Overlay Card for Address - Repositioned */}
            <div className="absolute top-10 left-4 md:left-20 bg-white p-8 shadow-2xl border-l-4 border-primary max-w-sm">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Visit Our Office</h4>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    123 Industrial Estate, Phase 2, Tech Park Zone<br />
                    City - 560001, Karnataka, India
                </p>
                <a
                    href="https://www.google.com/maps/search/?api=1&query=123+Industrial+Estate+Phase+2+Tech+Park+Zone+City+560001+Karnataka+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                >
                    <Button variant="outline" size="sm" className="w-full border-gray-300 text-gray-700 hover:border-primary hover:text-primary">
                        Get Directions
                    </Button>
                </a>
            </div>
        </section>
    );
};
