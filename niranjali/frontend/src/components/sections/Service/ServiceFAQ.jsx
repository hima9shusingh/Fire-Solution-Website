import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-sm">
            <button
                className="flex justify-between items-center w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-bold text-gray-900">{question}</span>
                {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
            </button>
            {isOpen && (
                <div className="px-6 pb-4 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                    {answer}
                </div>
            )}
        </div>
    );
};

export const ServiceFAQ = ({ faqs }) => {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom max-w-3xl">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};
