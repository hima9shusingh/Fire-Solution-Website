import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ title, description, capabilities, link }) => (
    <div className="bg-dark-secondary p-8 border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300 group flex flex-col h-full">
        <h3 className="text-2xl font-heading font-bold text-light mb-4 group-hover:text-primary transition-colors">
            {title}
        </h3>
        <p className="text-[var(--text-muted)] text-sm mb-6 leading-relaxed">
            {description}
        </p>
        <ul className="space-y-2 mb-8 flex-grow">
            {capabilities.map((cap, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0"></span>
                    {cap}
                </li>
            ))}
        </ul>
        <Link to={link || "#"} className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
            View Details <ArrowRight className="h-4 w-4" />
        </Link>
    </div>
);

export const ServiceGrid = () => {
    const services = [
        {
            title: "Fire Sprinkler Systems",
            description: "Automated water-based suppression systems designed for rapid fire control in large-volume industrial spaces.",
            capabilities: ["Hydraulic design & calculation", "Wet / Dry system configuration", "Pump room engineering", "High-pile storage protection"],
            link: "/services/fire-sprinklers"
        },
        {
            title: "Fire Hydrant Networks",
            description: "Robust external and internal piping networks ensuring reliable water access for emergency firefighting.",
            capabilities: ["Underground yard piping", "Standpipe systems", "Pressure regulation", "Fire brigade inlet connections"],
            link: "/services/fire-hydrant"
        },
        {
            title: "Fire Alarm & Detection",
            description: "Early warning systems integrating smoke, heat, and flame detectors with centralized control logic.",
            capabilities: ["Addressable & conventional panels", "Beam detection for warehouses", "Aspiration sensoring", "Emergency voice evacuation"],
            link: "/services/fire-alarm"
        },
        {
            title: "Fire Risk Assessment",
            description: "Technical capability audits to identify gaps in fire safety and recommend engineering mitigation strategies.",
            capabilities: ["Fire load calculation", "Gap analysis reporting", "Evacuation planning", "Compliance verification"],
            link: "/request-inspection"
        },
        {
            title: "Annual Maintenance (AMC)",
            description: "Comprehensive service contracts to ensure systems remain operational and compliant year-round.",
            capabilities: ["Quarterly system testing", "Pump performance checks", "Valve & gauge inspection", "Compliance documentation"],
            link: "/contact"
        },
        {
            title: "Project Engineering",
            description: "Complete turnkey execution including hydraulic calculation, isometric drawing, and regulatory approvals.",
            capabilities: ["End-to-end system design", "Multi-system integration", "PMC & Site supervision", "Regulatory liaison"],
            link: "/contact"
        }
    ];

    return (
        <section className="py-24 bg-dark border-t border-gray-200 dark:border-white/5">
            <div className="container-custom">
                <h2 className="text-3xl font-heading font-bold text-light mb-16 text-center">Our Core Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};
