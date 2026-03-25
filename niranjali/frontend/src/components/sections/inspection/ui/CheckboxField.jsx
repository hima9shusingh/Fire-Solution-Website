import React from 'react';
import { Check } from 'lucide-react';

export const CheckboxField = ({ label, checked, onChange, name, required = false, error }) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center mt-0.5">
                    <input
                        type="checkbox"
                        name={name}
                        checked={checked}
                        onChange={onChange}
                        className="peer sr-only"
                    />
                    <div className={`
                        w-5 h-5 border rounded-sm flex items-center justify-center transition-all duration-200
                        ${checked ? 'bg-primary border-primary' : 'bg-dark-secondary border-white/20 group-hover:border-white/40'}
                    `}>
                        <Check className={`h-3.5 w-3.5 text-white ${checked ? 'opacity-100' : 'opacity-0'}`} />
                    </div>
                </div>
                <span className="text-sm text-gray-400 select-none group-hover:text-gray-300 transition-colors">
                    {label} {required && <span className="text-primary">*</span>}
                </span>
            </label>
            {error && <span className="text-primary text-xs pl-8">{error}</span>}
        </div>
    );
};
