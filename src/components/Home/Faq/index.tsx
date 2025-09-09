// components/Faq.js
'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const faqData = [
    {
        question: "What is Great Syria?",
        answer: "Great Syria is a digital platform that provides web development, educational solutions, and modern technology services.",
    },
    {
        question: "Is Crypgo available worldwide?",
        answer: "Yes, Crypgo is accessible from most countries around the globe.",
    },
    {
        question: "Which cryptocurrencies are supported on Crypgo?",
        answer: "We support Bitcoin, Ethereum, Litecoin, and many more. Over 100 cryptocurrencies are available.",
    },
    {
        question: "Is my personal information secure with Crypgo?",
        answer: "Yes, we prioritize your security with advanced encryption and compliance protocols.",
    },
    {
        question: "Do you work with businesses and individuals?",
        answer: "Yes, Great Syria collaborates with startups, NGOs, educators, and individuals to create tailored digital solutions.",
    },
    {
        question: "Does Crypgo offer advanced trading tools?",
        answer: "Yes, Crypgo provides charts, APIs, and tools suitable for both beginners and professionals.",
    },
];


const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id='faq' className="py-16 text-white bg-darkmode">
            <div className="container">
                <div className="mx-auto px-4">
                    
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <p className="text-primary uppercase text-sm tracking-wide">FAQs</p>
                        <h2 className="text-3xl md:text-4xl font-semibold mt-2">Frequently Asked Questions</h2>
                        <p className="text-gray-400 mt-3">Answers to the most common questions about our services</p>
                    </div>

                    {/* FAQ List */}
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/5 rounded-xl p-5 cursor-pointer transition-all duration-300 hover:bg-white/10"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium">{item.question}</h3>
                                    <Image
                                        src={"/images/icons/plus-icon.svg"}
                                        alt='plus-icon'
                                        width={20}
                                        height={20}
                                        className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
                                    />
                                </div>

                                <div
                                    className={`mt-2 text-gray-400 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className="py-2">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
