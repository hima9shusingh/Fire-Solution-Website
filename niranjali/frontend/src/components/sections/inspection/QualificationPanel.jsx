import React from 'react';

export const QualificationPanel = () => {
    return (
        <div className="bg-gray-50 border border-gray-200 p-8 h-fit sticky top-24">
            <h3 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                Inspection Guidelines
            </h3>

            <div className="space-y-8">
                <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Ideal Facility Types</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Manufacturing Plants</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> High-Bay Warehouses</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Corporate Parks (Over 50k sq.ft)</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"></span> Hospitals & Hotels</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Before We Visit</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Please ensure availability of existing fire layout drawings (if any) and access to pump rooms/utility areas.
                    </p>
                </div>

                <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Timeline</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Site visits are typically scheduled within 48-72 hours of request validation.
                    </p>
                </div>
            </div>
        </div>
    );
};
