import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const IndustryCard = ({ title, link }) => (
    <Link to={link || '#'} className="group block p-8 bg-dark-secondary border border-white/5 hover:border-primary/40 transition-all">
        <h3 className="text-xl font-bold text-light mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <span className="text-xs text-gray-500 uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
            View Sector <ArrowRight className="h-3 w-3" />
        </span>
    </Link>
);

export const IndustriesSupport = () => {
    return (
        <section className="py-24 bg-dark border-t border-white/5">
            <div className="container-custom">
                <h2 className="text-3xl font-heading font-bold text-light mb-12 text-center">Industries We Serve</h2>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <IndustryCard title="Manufacturing" link="/industries/manufacturing" />
                    <IndustryCard title="Warehousing" link="/industries/warehousing" />
                    <IndustryCard title="Corporate Office" link="/industries/corporate" />
                    <IndustryCard title="Commercial" link="/industries/commercial" />
                    <IndustryCard title="Healthcare" link="/industries/healthcare" />
                </div>
            </div>
        </section>
    );
};
