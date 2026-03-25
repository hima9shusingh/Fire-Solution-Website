import React from 'react';

const TimelineItem = ({ year, title, description }) => (
    <div className="relative pl-12 pb-12 last:pb-0 border-l border-gray-200 last:border-0 ml-4">
        <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 bg-primary rounded-full"></div>
        <span className="text-sm font-mono font-bold text-primary block mb-2">{year}</span>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed max-w-md">
            {description}
        </p>
    </div>
);

export const CompanyTimeline = () => {
    return (
        <section className="py-24 bg-white text-justify">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-heading font-bold text-gray-900 mb-8 sticky top-24">
                            Our History of <br />
                            Engineering Excellence
                        </h2>
                    </div>
                    <div>
                        <TimelineItem
                            year="2015"
                            title="Establishment"
                            description="Founded by a team of senior fire safety engineers with a vision to bring technical rigor to the Indian fire protection market."
                        />
                        <TimelineItem
                            year="2018"
                            title="Government Certification"
                            description="Achieved 'A-Class' Fire Safety Agency certification, authorizing us to undertake high-risk industrial projects."
                        />
                        <TimelineItem
                            year="2021"
                            title="Expansion to NCR & East India"
                            description="Established centralized engineering operations in Delhi-NCR and expanded project execution teams to Bihar and West Bengal."
                        />
                        <TimelineItem
                            year="2024"
                            title="100+ Major Projects"
                            description="Crossed the milestone of 100 executed industrial projects, protecting over 5 million sq. ft. of infrastructure."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
