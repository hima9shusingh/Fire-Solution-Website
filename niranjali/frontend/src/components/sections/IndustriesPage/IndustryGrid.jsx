import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const IndustryCard = ({ title, description, risks, requirements, link }) => (
    <div className="bg-dark-secondary p-8 border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300 group flex flex-col h-full">
        <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-primary transition-colors">
            {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed border-b border-gray-200 dark:border-white/5 pb-4">
            {description}
        </p>

        <div className="mb-6 flex-grow">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Key Requirements</h4>
            <ul className="space-y-2">
                {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0"></span>
                        {req}
                    </li>
                ))}
            </ul>
        </div>

        <Link to={link || "#"} className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
            View Solutions <ArrowRight className="h-4 w-4" />
        </Link>
    </div>
);

export const IndustryGrid = () => {
    const industries = [
        {
            title: "Manufacturing Plants",
            description: "High fire load environments with machinery, electrical hazards, and flammable storage risks requiring multi-zone protection.",
            requirements: ["Deluge valve systems", "Foam suppression for chemicals", "Industrial hydrant rings", "Flame detection"],
            link: "/contact"
        },
        {
            title: "Warehousing & Logistics",
            description: "Large open spaces with rack storage present rapid vertical fire spread potential, demanding high-velocity suppression.",
            requirements: ["ESFR Sprinkler systems", "Beam smoke detection", "Internal hose reels", "Aspiration sensing"],
            link: "/contact"
        },
        {
            title: "Corporate Offices",
            description: "High occupancy spaces focused on life safety, safe evacuation, and protection of server rooms and assets.",
            requirements: ["Addressable fire alarms", "PA & Voice evacuation", "Clean agent (Novec) systems", "Sprinkler grids"],
            link: "/contact"
        },
        {
            title: "Commercial Complexes",
            description: "Mixed-use facilities facing risks from retail, food courts, and high footfall, requiring centralized monitoring.",
            requirements: ["Zonal sprinkler control", "Kitchen hood suppression", "Wet riser systems", "Emergency lighting"],
            link: "/contact"
        },
        {
            title: "Hospitals & Healthcare",
            description: "Critical infrastructure operating 24/7 where evacuation is difficult, necessitating superior containment and detection.",
            requirements: ["Compartmentation", "Smoke control systems", "Non-disruptive alarms", "Gas suppression"],
            link: "/contact"
        }
    ];

    return (
        <section className="py-24 bg-dark border-t border-gray-200 dark:border-white/5">
            <div className="container-custom">
                <h2 className="text-3xl font-heading font-bold text-white mb-16 text-center">Industries We Protect</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((ind, index) => (
                        <IndustryCard key={index} {...ind} />
                    ))}
                </div>
            </div>
        </section>
    );
};
