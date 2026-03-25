import React from 'react';

const CertItem = ({ title }) => (
    <div className="flex items-center gap-2 whitespace-nowrap">
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        <span className="text-blue-500 font-mono text-sm uppercase tracking-wider font-semibold">{title}</span>
    </div>
);

export const ComplianceStrip = () => {
    return (
        <section className="py-12 bg-dark border-y border-white/5 overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-wrap justify-between items-center gap-8 opacity-80">
                    <CertItem title="ISO 9001:2015 Certified" />
                    <CertItem title="Govt. Licensed Fire Agency" />
                    <CertItem title="NFPA Member Organization" />
                    <CertItem title="National Building Code Compliant" />
                    <CertItem title="MSME Registered" />
                </div>
            </div>
        </section>
    );
};
