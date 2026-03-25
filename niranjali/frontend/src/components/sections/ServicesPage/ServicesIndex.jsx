import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const servicesData = [
    {
        id: 'sprinklers',
        title: 'Fire Sprinkler Systems',
        description: 'Automated water-based suppression systems designed for rapid response. We specialize in wet, dry, and pre-action systems tailored to specific hazard classifications.',
        capabilities: ['Hydraulic Calculation & Design', 'Wet & Dry Riser Systems', 'Pre-action for Sensitive Zones', 'Grooved & Welded Piping'],
        compliance: ['NBC Part 4', 'NFPA 13', 'IS 15105'],
        link: '/services/fire-sprinklers'
    },
    {
        id: 'hydrants',
        title: 'Industrial Hydrant Networks',
        description: 'High-pressure external and internal hydrant rings ensuring complete facility coverage. Engineered for robust performance under emergency flow conditions.',
        capabilities: ['Ring Main Engineering', 'Monitor & Hose Reel Installation', 'Pump Room Integration', 'Pressure Testing & Commissioning'],
        compliance: ['IS 13039', 'TAC Guidelines', 'Local Fire Brigade Norms'],
        link: '/services/fire-hydrant'
    },
    {
        id: 'alarms',
        title: 'Detection & Alarm Systems',
        description: 'Advanced early warning systems integrating smoke, heat, and beam detection. Our addressable logic ensures pinpoint accuracy in identifying fire locations.',
        capabilities: ['Addressable & Conventional Panels', 'Beam & Aspiration Detection', 'Public Address Integration', 'BMS Interfacing'],
        compliance: ['IS 2189', 'NFPA 72', 'NBC 2016'],
        link: '/services/fire-alarm'
    },
    {
        id: 'special',
        title: 'Specialized Suppression',
        description: 'Gas-based and chemical suppression solutions for critical assets where water damage is a risk, such as server rooms and electrical panels.',
        capabilities: ['Novec 1230 / FM200 Systems', 'CO2 Flooding', 'Kitchen Hood Suppression', 'Foam Bladder Tanks'],
        compliance: ['NFPA 2001', 'UL Listed Components', 'PESO Approval'],
        link: '/contact'
    }
];

export const ServicesIndex = () => {
    const [activeService, setActiveService] = useState('sprinklers');

    return (
        <section className="bg-white border-b border-gray-200 min-h-screen text-justify">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row">
                    {/* Left Sticky Nav - 30% width */}
                    <div className="lg:w-1/3 lg:border-r border-gray-200 py-16 lg:pr-12 relative">
                        <div className="sticky top-24">
                            <h3 className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-8">Service Index</h3>
                            <nav className="space-y-1">
                                {servicesData.map((service) => (
                                    <button
                                        key={service.id}
                                        onClick={() => {
                                            setActiveService(service.id);
                                            document.getElementById(service.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className={`w-full text-left px-4 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 border-l-2 ${activeService === service.id
                                            ? 'border-primary text-gray-900 bg-gray-50'
                                            : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                            }`}
                                    >
                                        {service.title}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Right Content - 70% width */}
                    <div className="lg:w-2/3 lg:pl-16 py-16">
                        <div className="space-y-24">
                            {servicesData.map((service) => (
                                <div key={service.id} id={service.id} className="scroll-mt-32">
                                    <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
                                        <h2 className="text-3xl font-heading font-bold text-gray-900">{service.title}</h2>
                                        <span className="text-gray-400 font-mono text-xl">0{servicesData.indexOf(service) + 1}</span>
                                    </div>

                                    <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-8">
                                        {service.description}
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                                        <div>
                                            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">Core Capabilities</h4>
                                            <ul className="space-y-3">
                                                {service.capabilities.map((cap, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                                        <span className="w-1.5 h-1.5 bg-primary rounded-none mt-1.5 shrink-0"></span>
                                                        {cap}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">Compliance</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {service.compliance.map((comp, i) => (
                                                    <span key={i} className="text-xs font-mono text-gray-600 border border-gray-200 px-2 py-1 bg-gray-50">
                                                        {comp}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <Link
                                        to={service.link}
                                        className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider hover:gap-3 transition-all border-b border-primary/20 pb-1 hover:border-primary"
                                    >
                                        View Technical Specs <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
