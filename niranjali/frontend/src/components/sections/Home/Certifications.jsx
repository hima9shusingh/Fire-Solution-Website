import React from 'react';
import { Award, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';

const certifications = [
    { name: 'ISO 9001:2015 Certified', icon: Award },
    { name: 'NBC Compliant Designs', icon: CheckCircle2 },
    { name: 'Licensed Fire Agency', icon: ShieldCheck },
    { name: 'NFPA Standards Adherence', icon: FileCheck },
];

export const Certifications = () => {
    return (
        <section className=" py-8 border-y border-white/10">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {certifications.map((cert, index) => (
                        <div key={index} className="flex flex-col items-center justify-center text-center group">
                            <cert.icon className="h-8 w-8 text-blue-500 group-hover:text-orange-500 transition-colors mb-3" strokeWidth={1.5} />
                            <span className="text-xs font-mono uppercase tracking-widest text-blue-500 group-hover:text-orange-500 transition-colors font-bold">
                                {cert.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
