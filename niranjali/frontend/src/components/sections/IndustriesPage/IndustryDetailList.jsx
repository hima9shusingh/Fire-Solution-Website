import React from 'react';

const IndustrySection = ({ title, description, risks, image, isReversed, index }) => (
    <section className={`py-24 border-b border-[var(--border-subtle)] text-[var(--foreground)] text-justify`}>
        <div className="container-custom">
            <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                {/* Text Side */}
                <div className="lg:w-1/2">
                    <span className="text-primary font-mono text-sm font-bold uppercase tracking-widest mb-4 block">Sector 0{index}</span>
                    <h2 className="text-4xl font-heading font-bold text-[var(--foreground)] mb-6">{title}</h2>
                    <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-8 font-semibold">
                        {description}
                    </p>

                    <div className="bg-[var(--card-bg)] border-l-4 border-primary p-6 shadow-sm">
                        <h4 className="text-sm font-bold text-[var(--foreground)] uppercase tracking-widest mb-4">Critical Risk Factors</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {risks.map((risk, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-[var(--text-muted)] font-medium">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"></span>
                                    {risk}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Image Side */}
                <div className="lg:w-1/2">
                    <div className="aspect-[4/3] bg-[var(--surface-secondary)] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-[var(--border-subtle)]">
                        <div className="absolute inset-0 flex items-center justify-center text-[var(--text-muted)] font-mono text-sm uppercase tracking-widest">
                            [Image: {title}]
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export const IndustryDetailList = () => {
    return (
        <div>
            <IndustrySection
                index="1"
                title="Industrial Manufacturing"
                description="Production facilities house complex hazards including combustible dust, flammable liquids, and high-voltage machinery. A standard sprinkler system is often insufficient; specialized suppression tailored to the specific raw materials is required."
                risks={['Class B Flammable Liquids', 'Combustible Dust Explosion', 'Electrical Short Circuits', 'Machinery Overheating']}
                isReversed={false}
            />
            <IndustrySection
                index="2"
                title="Warehousing & Logistics"
                description="Modern high-bay warehousing presents a unique challenge: vertical fire spread can outpace standard activation times. We utilize Early Suppression Fast Response (ESFR) technology to combat high-challenge fire loads without the need for in-rack sprinklers."
                risks={['High-Rack Storage', 'Rapid Vertical Spread', 'Obstructed Water Discharge', 'Packaging Material Load']}
                isReversed={true}
            />
            <IndustrySection
                index="3"
                title="Healthcare Infrastructure"
                description="In hospitals, the priority shifts to 'defend-in-place' strategies. Since patient evacuation is difficult, our systems focus on rapid containment and smoke management to maintain breathable air quality in non-affected zones."
                risks={['Oxygen-Enriched Atmosphere', 'Immobile Occupants', 'Chemical/Lab Hazards', 'Critical Power Continuity']}
                isReversed={false}
            />
        </div>
    );
};
