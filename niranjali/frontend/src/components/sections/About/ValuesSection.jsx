import React from 'react';

const ValueItem = ({ title, description }) => (
    <div className="p-8 bg-dark-secondary border-l-2 border-primary text-left">
        <h3 className="text-xl font-heading font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
            {description}
        </p>
    </div>
);

export const ValuesSection = () => {
    return (
        <section className="py-24 bg-dark text-center border-t border-white/5">
            <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-16">Our Commitment</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <ValueItem
                        title="Engineering Integrity"
                        description="We approach every project with technical rigor. Our solutions are calculated, validated, and designed to perform when failure is not an option."
                    />
                    <ValueItem
                        title="Compliance Assurance"
                        description="We actively navigate the regulatory landscape, ensuring our clients remain compliant with evolving fire safety codes and statutory requirements."
                    />
                    <ValueItem
                        title="Long-Term Partnership"
                        description="Our responsibility extends beyond installation. We build enduring relationships through reliable maintenance, honest consulting, and responsive support."
                    />
                </div>
            </div>
        </section>
    );
};
