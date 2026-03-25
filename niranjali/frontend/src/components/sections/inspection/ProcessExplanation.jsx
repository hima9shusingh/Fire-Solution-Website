import React from 'react';

const Step = ({ number, title, description }) => (
    <div className="relative">
        <div className="text-5xl font-bold text-gray-200 mb-2 font-heading">{number}</div>
        <h3 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wider">{title}</h3>
        <p className="text-gray-500 text-xs leading-relaxed max-w-xs">{description}</p>
    </div>
);

export const ProcessExplanation = () => {
    return (
        <section className="py-16 bg-white border-b border-gray-200">
            <div className="container-custom">
                <div className="mb-10">
                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Process Workflow</h2>
                    <h3 className="text-2xl font-heading font-bold text-gray-900">What to Expect</h3>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    <Step
                        number="01"
                        title="Site Risk Evaluation"
                        description="Physical identification of fire load and hazards."
                    />
                    <Step
                        number="02"
                        title="Engineering Assessment"
                        description="Hydraulic analysis and system coverage review."
                    />
                    <Step
                        number="03"
                        title="Compliance Review"
                        description="Gap analysis against NBC 2016 Part 4."
                    />
                    <Step
                        number="04"
                        title="Proposal Submission"
                        description="Detailed BOQ and technical rectification plan."
                    />
                </div>
            </div>
        </section>
    );
};
