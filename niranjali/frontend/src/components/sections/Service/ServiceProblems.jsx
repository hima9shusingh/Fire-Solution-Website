import React from 'react';

export const ServiceProblems = ({ problems }) => {
    return (
        <section className="py-20 bg-dark text-white">
            <div className="container-custom">
                <h2 className="text-3xl font-heading font-bold mb-12 text-center">Industry Challenges</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-sm">
                            <h3 className="text-xl font-bold mb-4 text-primary">{problem.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{problem.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
