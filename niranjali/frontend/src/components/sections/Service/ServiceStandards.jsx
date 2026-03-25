import React from 'react';

export const ServiceStandards = ({ standards }) => {
    return (
        <section className="py-16 bg-dark-secondary border-t border-white/5">
            <div className="container-custom text-center">
                <h2 className="text-2xl font-heading font-bold text-white mb-8">Compliance & Standards</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {standards.map((std, index) => (
                        <span key={index} className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm font-medium">
                            {std}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};
