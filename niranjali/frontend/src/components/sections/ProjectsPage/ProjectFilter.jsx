import React, { useState } from 'react';
import { cn } from '../../../utils/cn';

export const ProjectFilter = ({ activeFilter, onFilterChange }) => {
    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'manufacturing', label: 'Manufacturing' },
        { id: 'warehousing', label: 'Warehousing' },
        { id: 'corporate', label: 'Corporate' },
        { id: 'commercial', label: 'Commercial' },
        { id: 'healthcare', label: 'Healthcare' }
    ];

    return (
        <section className="py-8 bg-gray-50 border-y border-gray-200 sticky top-20 z-40">
            <div className="container-custom">
                <div className="flex flex-wrap justify-center gap-4">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => onFilterChange(filter.id)}
                            className={cn(
                                "px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 border",
                                activeFilter === filter.id
                                    ? "bg-primary text-white border-primary shadow-lg"
                                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-800"
                            )}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};
