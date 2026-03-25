import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../ui/Button';

const ProjectCard = ({ title, industry, location, summary, systems, image }) => (
    <div className="bg-[#1e293b] border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300 group flex flex-col h-full overflow-hidden">
        {/* Image Placeholder */}
        <div className="h-64 bg-gray-800 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-xs uppercase tracking-widest">
                [Project Image: {industry}]
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
        </div>

        <div className="p-8 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-4">
                <span className="text-primary text-xs font-bold uppercase tracking-wider">{industry}</span>
                <span className="text-gray-500 text-xs font-mono">{location}</span>
            </div>

            <h3 className="text-xl font-heading font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                {title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed border-b border-gray-200 dark:border-white/5 pb-6">
                {summary}
            </p>

            <div className="mb-8 flex-grow">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Systems Installed</h4>
                <div className="flex flex-wrap gap-2">
                    {systems.map((sys, index) => (
                        <span key={index} className="text-xs text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded-sm border border-gray-200 dark:border-white/5">
                            {sys}
                        </span>
                    ))}
                </div>
            </div>

            <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:border-primary hover:text-primary justify-between group-hover:bg-white/5">
                View Case Study <ArrowRight className="h-4 w-4" />
            </Button>
        </div>
    </div>
);

export const ProjectGrid = ({ filter = 'all' }) => {
    // Placeholder Data - In a real app, this would verify the 'filter' prop
    const projects = [
        {
            title: "Fire Sprinkler & Hydrant Installation for Manufacturing Facility",
            industry: "Manufacturing",
            location: "Noida, UP",
            summary: "End-to-end design and commissioning of a wet riser system covering 20,000 sq ft of high-risk production area.",
            systems: ["Wet Riser Sprinklers", "Yard Hydrant Ring", "Pleasejockey Pump", "Main Fire Pump"],
        },
        {
            title: "Warehousing Safety Upgrade and Detection System",
            industry: "Warehousing",
            location: "Bhiwandi, Maharashtra",
            summary: "Retrofitting an operational logistics hub with beam detectors and high-velocity water spray systems for rack storage.",
            systems: ["Beam Detection", "HVWS System", "Automatic Alarm Panel"],
        },
        {
            title: "Corporate HQ Fire Safety Management System",
            industry: "Corporate",
            location: "Gurgaon, Haryana",
            summary: "Integrated fire alarm and voice evacuation system for a 12-story corporate tower with centralized BMS integration.",
            systems: ["Addressable Fire Alarm", "PA System", "BMS Integration", "Floor Control Valves"],
        },
        {
            title: "Hospital Critical Infrastructure Protection",
            industry: "Healthcare",
            location: "Patna, Bihar",
            summary: "Installation of clean agent suppression for server rooms and localized sprinkler zoning for patient wards.",
            systems: ["Novec 1230 System", "Zonal Sprinklers", "Smoke Extraction"],
        },
        {
            title: "Shopping Complex Fire Fighting Upgrade",
            industry: "Commercial",
            location: "Lucknow, UP",
            summary: "Compliance overhaul requiring hydraulic recalculation and pump room modernization for a mixed-use mall.",
            systems: ["Hydraulic Calculation", "Pump Room Retrofit", "Kitchen Suppression"],
        },
        {
            title: "Automotive Plant Turnkey Project",
            industry: "Manufacturing",
            location: "Manesar, Haryana",
            summary: "Complete turnkey fire protection execution for a new automotive assembly line including NOC facilitation.",
            systems: ["Deluge System", "Foam System", "Fire NOC Liaison"],
        }
    ];

    // Filter Logic (Simple implementation for UI demo)
    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.industry.toLowerCase() === filter.toLowerCase());

    return (
        <section className="py-24 bg-[#0B1120]">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
