// components/Faq.js
'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const faqData = [
  {
    question: "What services do you provide?",
    answer: "We design and develop modern websites and mobile applications tailored to your business needs.",
  },
  {
    question: "Do you create custom designs?",
    answer: "Yes, all our designs are fully customized to reflect your brand identity and goals.",
  },
  {
    question: "Will my website work on all devices?",
    answer: "Absolutely. All our websites and applications are fully responsive and work perfectly on all devices.",
  },
  {
    question: "Do you ensure quality and smooth delivery?",
    answer: "We focus on delivering high-quality projects with a smooth and professional workflow from start to finish.",
  },
  {
    question: "Can you add special features to my project?",
    answer: "Yes, we can integrate features such as contact forms, payment systems, WhatsApp, and third-party services.",
  },
  {
    question: "Do you help with hosting and domain setup?",
    answer: "Yes, we assist with choosing hosting, connecting the domain, and launching your project online.",
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
