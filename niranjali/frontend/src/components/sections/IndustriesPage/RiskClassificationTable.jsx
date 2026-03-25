import React from 'react';

const RiskRow = ({ industry, risks, systems, compliance }) => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 border-b border-gray-200 py-6 last:border-0 hover:bg-gray-50 transition-colors duration-300 px-4">
        <div className="md:col-span-3">
            <span className="md:hidden text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Industry</span>
            <h3 className="font-bold text-gray-900">{industry}</h3>
        </div>
        <div className="md:col-span-3">
            <span className="md:hidden text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Primary Risks</span>
            <p className="text-sm text-primary-dark font-medium">{risks}</p>
        </div>
        <div className="md:col-span-4">
            <span className="md:hidden text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Systems</span>
            <p className="text-sm text-gray-600">{systems}</p>
        </div>
        <div className="md:col-span-2">
            <span className="md:hidden text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Compliance</span>
            <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded-sm block w-fit">{compliance}</span>
        </div>
    </div>
);

export const RiskClassificationTable = () => {
    return (
        <section className="py-24 bg-white ">
            <div className="container-custom">
                <div className="mb-12">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">Risk Classification Matrix</h2>
                    <p className="text-gray-500 text-sm">Comparative analysis of fire hazards across core sectors.</p>
                </div>

                <div className="border border-gray-200 rounded-sm overflow-hidden">
                    {/* Header */}
                    <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-100 py-4 px-4 border-b border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-500">
                        <div className="col-span-3">Industry Sector</div>
                        <div className="col-span-3">Primary Fire Risks</div>
                        <div className="col-span-4">Recommended Systems</div>
                        <div className="col-span-2">Compliance Code</div>
                    </div>

                    {/* Rows */}
                    <RiskRow
                        industry="Manufacturing"
                        risks="Chemical storage, electrical overload"
                        systems="Foam Suppression, Deluge Valves"
                        compliance="NBC Part 4 / Factories Act"
                    />
                    <RiskRow
                        industry="Warehousing"
                        risks="Vertical fire spread (racking)"
                        systems="ESFR Sprinklers, Beam Detectors"
                        compliance="NFPA 13 / NBC"
                    />
                    <RiskRow
                        industry="Corporate Offices"
                        risks="Server room overheat, evacuation"
                        systems="Clean Agent (Novec), PA System"
                        compliance="NBC Group E"
                    />
                    <RiskRow
                        industry="Hospitals"
                        risks="Oxygen storage, immobile patients"
                        systems="Water Mist, Zonal Evacuation"
                        compliance="NBC Group C"
                    />
                    <RiskRow
                        industry="Commercial"
                        risks="Kitchen grease, heavy footfall"
                        systems="Kitchen Hood, Wet Riser"
                        compliance="NBC Group F"
                    />
                </div>
            </div>
        </section>
    );
};
