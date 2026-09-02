import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { FAQItem } from '../types';
import { ScrollReveal } from './ScrollReveal';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      question: "What are the payment options available?",
      answer: "Payment can be made using Visa, MasterCard, RuPay, Net Banking, UPI or Cash."
    },
    {
      id: "faq-2",
      question: "What is the nearest landmark?",
      answer: "Radha Driving School is located near Adyar Signal on L B Road, Adyar, Chennai-600020."
    },
    {
      id: "faq-3",
      question: "What are the working hours?",
      answer: "Monday to Saturday: 6:00 AM – 8:00 PM. Sunday: 9:00 AM – 12:00 PM."
    },
    {
      id: "faq-4",
      question: "Are Lady Instructors available for women learners?",
      answer: "Yes. Dedicated lady instructors are available for women learners seeking personalized, patient 1-on-1 instruction."
    },
    {
      id: "faq-5",
      question: "Do you offer simulator motor training?",
      answer: "Yes. We offer simulator motor training to help learners build initial vehicle control and confidence in a safe virtual environment."
    },
    {
      id: "faq-6",
      question: "Does the school provide two-wheeler motor training?",
      answer: "Yes. Motor training for two-wheelers (motorcycles and scooters) is offered alongside four-wheeler car driving training."
    },
    {
      id: "faq-7",
      question: "Does the school provide driving license consultation?",
      answer: "Yes. Driving license consultation and RTO process guidance are included among our key services."
    }
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FAF8F5] bg-radha-pattern relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#064E3B] bg-[#F4EFE6] px-4 py-1.5 rounded-full border border-[#D97706]/40 shadow-sm inline-block">
              COMMON QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064E3B] tracking-tight">
              Frequently Asked <span className="gradient-text-gold">Questions</span>
            </h2>
            <p className="text-gray-600 text-base">
              Everything you need to know about Radha Driving School in Adyar, Chennai.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <ScrollReveal key={faq.id} delay={idx * 50}>
                <div
                  className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#D97706] shadow-glow-gold'
                      : 'bg-white hover:bg-[#FAF8F5] border-[#E8DEC8]'
                  }`}
                >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-[#D97706]' : 'text-[#064E3B]'}`} />
                    <span className="text-base sm:text-lg font-extrabold text-[#064E3B] leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-lg bg-[#F4EFE6] text-[#064E3B] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#064E3B] bg-[#D97706]/20' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-gray-700 font-medium border-t border-[#E8DEC8] leading-relaxed animate-fadeIn">
                    <p className="pl-8">{faq.answer}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          );
        })}
        </div>

      </div>
    </section>
  );
};

