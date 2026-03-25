import React from 'react';
import { Button } from '../../ui/Button';

const ProjectCard = ({ title, industry, location, area, system }) => (
    <div className="bg-[#1e293b] border border-white/5 hover:border-white/20 p-8 transition-all duration-300 group">
        <div className="flex justify-between items-start mb-6">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest bg-black/30 px-2 py-1">{industry}</span>
            <span className="text-xs font-mono text-blue-500">{location}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm mb-6 max-w-sm line-clamp-2">
            Execution of turnkey fire safety systems including {system} and comprehensive alarm integration.
        </p>
        <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
            <div>
                <span className="text-xs text-gray-400 block font-medium">Area Protected</span>
                <span className="text-sm font-bold text-gray-300">{area}</span>
            </div>
            <button className="text-xs font-bold text-primary uppercase tracking-wider hover:text-white transition-colors">
                View Specs
            </button>
        </div>
    </div>
);

export const ProjectArchive = () => {
    return (
        <section className="py-24 bg-[#0B1120] border-b border-white/5">
            <div className="container-custom">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-2">Project Archive</h2>
                        <p className="text-gray-500 text-sm">Select installations from our industrial portfolio.</p>
                    </div>
                    <div className="hidden md:flex gap-2">
                        {['All', 'Manufacturing', 'Warehousing', 'Corporate'].map((filter) => (
                            <button key={filter} className="text-xs font-bold uppercase tracking-wider px-4 py-2 border border-white/10 text-gray-400 hover:bg-white/5 hover:text-white transition-all">
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ProjectCard
                        title="Textile Manufacturing Unit"
                        industry="Manufacturing"
                        location="Surat, Gujarat"
                        area="120,000 Sq. Ft."
                        system="Hydrant & Sprinkler Network"
                    />
                    <ProjectCard
                        title="Pharmaceutical Plant"
                        industry="Healthcare"
                        location="Baddi, HP"
                        area="85,000 Sq. Ft."
                        system="Clean Agent Suppression"
                    />
                    <ProjectCard
                        title="Automotive Assembly Line"
                        industry="Automobile"
                        location="Pune, MH"
                        area="250,000 Sq. Ft."
                        system="Foam Suppression System"
                    />
                    <ProjectCard
                        title="Corporate IT Park"
                        industry="Corporate"
                        location="Noida, UP"
                        area="500,000 Sq. Ft."
                        system="Addressable Alarm & PA"
                    />
                    <ProjectCard
                        title="Chemical Storage Warehouse"
                        industry="Logistics"
                        location="Kolkata, WB"
                        area="60,000 Sq. Ft."
                        system="Deluge Valve System"
                    />
                    <ProjectCard
                        title="Multi-Specialty Hospital"
                        industry="Healthcare"
                        location="Patna, Bihar"
                        area="150,000 Sq. Ft."
                        system="Mist & Detection System"
                    />
                </div>

                <div className="mt-12 text-center">
                    <Button variant="outline" className="text-white border-white/20 hover:bg-white hover:text-black rounded-none px-8 py-3 text-xs tracking-widest">
                        Load More Projects
                    </Button>
                </div>
            </div>
        </section>
    );
};
