import React from 'react';

export const InputField = ({ label, type = "text", placeholder, value, onChange, name, required = false, error }) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                {label} {required && <span className="text-primary">*</span>}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`
                    w-full bg-dark-secondary border text-white px-4 py-3 outline-none transition-all duration-200
                    placeholder:text-gray-600 rounded-sm
                    ${error ? 'border-primary' : 'border-white/10 focus:border-primary/50'}
                `}
            />
            {error && <span className="text-primary text-xs">{error}</span>}
        </div>
    );
};
