import React from 'react';

export const Team = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom text-center">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-16">Leadership Team</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="group">
                            <div className="aspect-[3/4] bg-gray-200 rounded-sm mb-4 overflow-hidden">
                                <img
                                    src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
                                    alt="Team Member"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">John Doe {i}</h3>
                            <p className="text-sm text-primary font-medium uppercase tracking-wider">Senior Engineer</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
