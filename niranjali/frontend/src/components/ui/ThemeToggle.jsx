import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle = ({ className = '' }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 hover:bg-white/10 focus:outline-none ${className}`}
            aria-label="Toggle Theme"
        >
            <div className="relative w-6 h-6">
                <Sun
                    className={`absolute inset-0 w-6 h-6 text-yellow-400 transition-all duration-300 transform ${theme === 'dark' ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'
                        }`}
                />
                <Moon
                    className={`absolute inset-0 w-6 h-6 text-primary transition-all duration-300 transform ${theme === 'dark' ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'
                        }`}
                />
            </div>
        </button>
    );
};
