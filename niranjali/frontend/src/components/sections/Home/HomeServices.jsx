import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, Flame, Bell, FileText, Wrench, PenTool } from 'lucide-react';

const services = [
    {
        title: 'Fire Sprinkler Systems',
        id: 'SYS-01',
        desc: 'Automated suppression engineered for high-hazard industrial zones. Includes ESFR, Deluge, and Pre-action systems.',
        icon: Droplets,
        link: '/services/fire-sprinklers'
    },
    {
        title: 'Hydrant Networks',
        id: 'SYS-02',
        desc: 'High-pressure rugged hydrant loops ensuring reliable water supply. Design and execution of yard hydrant systems.',
        icon: Flame,
        link: '/services/fire-hydrant'
    },
    {
        title: 'Detection & Alarm',
        id: 'SYS-03',
        desc: 'Intelligent addressable systems with multi-sensor detection, beam detectors, and aspiration sensing.',
        icon: Bell,
        link: '/services/fire-alarm'
    },
    {
        title: 'Risk Assessment & Audit',
        id: 'AUD-01',
        desc: 'Comprehensive facility auditing and risk analysis to ensure full regulatory compliance (NBC/NFPA).',
        icon: FileText,
        link: '#'
    },
    {
        title: 'AMC & Maintenance',
        id: 'MNT-01',
        desc: 'Rigorous testing protocols and preventative maintenance to guarantee 24/7 system readiness.',
        icon: Wrench,
        link: '#'
    },
    {
        title: 'Fire Protection Design',
        id: 'DSN-01',
        desc: 'End-to-end hydraulic calculations, pump room sizing, and isometric drawings by certified engineers.',
        icon: PenTool,
        link: '#'
    }
];

export const HomeServices = () => {
    return (
        <section className="py-12 md:py-24 bg-gradient-to-b from-[var(--surface-secondary)] to-[var(--surface)] relative border-t border-[var(--border-subtle)] text-justify">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-6 border-b border-[var(--border-subtle)] pb-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="h-1 w-8 bg-primary"></div>
                            <h2 className="text-primary font-mono tracking-widest uppercase text-xs md:text-sm">System Capabilities</h2>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-heading font-bold text-[var(--foreground)]">Core Protection Services</h3>
                    </div>
                    {/* Placeholder for future 'View All' link if needed */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="group bg-[var(--card-bg)] p-8 border border-[var(--border-subtle)] border-t-4 border-t-primary card-hover relative overflow-hidden flex flex-col rounded-sm">
                            {/* Technical Corner Markers - Adjusted for visibility */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--border-subtle)] group-hover:border-primary/50 transition-colors" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--border-subtle)] group-hover:border-primary/50 transition-colors" />

                            {/* Service ID */}
                            <div className="text-xs font-mono text-[var(--text-muted)] mb-6 group-hover:text-primary transition-colors">
                                {service.id} 
                            </div>

                            <div className="h-12 w-12 bg-blue-50 dark:bg-[var(--surface-secondary)] rounded-sm flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-primary/20">
                                <service.icon strokeWidth={1.5} className="h-6 w-6" />
                            </div>

                            <h4 className="text-xl font-heading font-bold text-[var(--foreground)] mb-3 group-hover:text-primary-light transition-colors">{service.title}</h4>
                            <p className="text-[var(--text-muted)] leading-relaxed mb-8 text-md group-hover:text-[var(--text-secondary)] transition-colors flex-grow">
                                {service.desc}
                            </p>

                            <Link to={service.link} className="inline-flex items-center gap-2 text-xs font-bold text-[var(--foreground)] uppercase tracking-wider group-hover:text-primary transition-colors mt-auto">
                                Learn More <ArrowRight className="h-3 w-3" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
