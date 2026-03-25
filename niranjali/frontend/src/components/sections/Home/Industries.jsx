import React from 'react';
import { Factory, Warehouse, Building2, Store, HeartPulse, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
    {
        title: 'Manufacturing Plants',
        desc: 'High-fire-load environments requiring robust hydrant & sprinkler systems.',
        icon: Factory,
        link: '/industries'
    },
    {
        title: 'Warehousing & Logistics',
        desc: 'Advanced detection and ESFR suppression for high-rack storage.',
        icon: Warehouse,
        link: '/industries'
    },
    {
        title: 'Corporate Offices',
        desc: 'Aesthetic integration of safety systems for high-occupancy towers.',
        icon: Building2,
        link: '/industries'
    },
    {
        title: 'Commercial Complexes',
        desc: 'Scalable protection for mixed-use retail and entertainment zones.',
        icon: Store,
        link: '/industries'
    },
    {
        title: 'Hospitals',
        desc: 'Critical care protection with localized mist & gas suppression.',
        icon: HeartPulse,
        link: '/industries'
    }
];

export const Industries = () => {
    return (
        <section className="py-12 md:py-24 bg-[var(--background)] border-t border-[var(--border-subtle)]">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-6">
                    <div>
                        <span className="text-primary font-mono text-xs tracking-widest uppercase mb-2 block">Sectors We Serve</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-light">Industries We Protect</h2>
                    </div>
                    <Link to="/industries" className="text-sm font-bold text-light uppercase tracking-wider flex items-center gap-2 hover:text-primary transition-colors">
                        View All Sectors <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {industries.map((industry, index) => (
                        <Link to={industry.link} key={index} className="group block h-full">
                            <div className="bg-[var(--surface-secondary)] p-6 h-full border border-[var(--border-subtle)] border-t-4 border-t-[#0066CC] dark:border-t-primary card-hover relative overflow-hidden flex flex-col rounded-sm">
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <industry.icon className="h-16 w-16 text-[var(--text-muted)] dark:text-white" />
                                </div>

                                <industry.icon className="h-8 w-8 text-[#0066CC] mb-6" strokeWidth={1.5} />

                                <h3 className="text-lg font-bold text-light mb-3 group-hover:text-black transition-colors">{industry.title}</h3>
                                <p className="text-sm text-gray-700 mb-6 leading-relaxed flex-grow group-hover:text-black transition-colors group-hover:font-bold">
                                    {industry.desc}
                                </p>

                                <div className="mt-auto pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-gray-700 group-hover:text-[#0066CC] transition-colors group-hover:font-bold">
                                    <span>EXPLORE</span>
                                    <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
