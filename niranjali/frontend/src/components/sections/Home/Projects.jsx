import React from 'react';

export const Projects = () => {
    return (
        <section className="py-12 md:py-24 bg-[var(--surface-secondary)] border-t border-[var(--border-subtle)]">
            <div className="container-custom text-center">
                <h2 className="text-3xl font-heading font-bold text-[var(--foreground)] mb-8 md:mb-12">Featured Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="aspect-video bg-[var(--card-bg)] rounded-sm flex items-center justify-center border border-dashed border-[var(--border-subtle)]">
                            <span className="text-[var(--text-muted)] font-medium">Project Highlight #{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
