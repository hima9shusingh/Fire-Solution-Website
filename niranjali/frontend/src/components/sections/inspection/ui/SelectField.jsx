import React from 'react';
import { ChevronDown } from 'lucide-react';

export const SelectField = ({ label, options, value, onChange, name, required = false, error, placeholder = "Select an option" }) => {
    return (
        <div className="flex flex-col gap-2 relative">
            <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                {label} {required && <span className="text-primary">*</span>}
            </label>
            <div className="relative">
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`
                        w-full bg-dark-secondary border text-white px-4 py-3 outline-none transition-all duration-200 appearance-none
                        rounded-sm cursor-pointer
                        ${value === "" ? 'text-gray-600' : 'text-white'}
                        ${error ? 'border-primary' : 'border-white/10 focus:border-primary/50'}
                    `}
                >
                    <option value="" disabled>{placeholder}</option>
                    {options.map((option) => (
                        <option key={option} value={option} className="bg-dark-secondary text-white">
                            {option}
                        </option>
                    ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <ChevronDown className="h-4 w-4" />
                </div>
            </div>
            {error && <span className="text-primary text-xs">{error}</span>}
        </div>
    );
};
