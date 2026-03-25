import React from 'react';

const StatItem = ({ value, label }) => (
    <div className="text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 last:border-0 p-8">
        <div className="text-5xl font-heading font-bold text-blue-500 mb-2">{value}</div>
        <div className="text-xs font-medium text-orange-500 uppercase tracking-widest">{label}</div>
    </div>
);

export const ProjectStats = () => {
    return (
        <section className="bg-dark-secondary border-b border-white/10">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    <StatItem value="120+" label="Projects Executed" />
                    <StatItem value="5M+" label="Sq. Ft. Protected" />
                    <StatItem value="08" label="Industries Covered" />
                    <StatItem value="12" label="States Served" />
                </div>
            </div>
        </section>
    );
};
