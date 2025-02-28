"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'How does the claim process work?',
    answer: 'Our process is simple: fill out our quick form, get a free consultation with a specialized attorney, and let us handle the paperwork while you focus on recovery. Our team will work to maximize your compensation for medical bills, lost wages, and pain and suffering.'
  },
  {
    id: 2,
    question: 'How much does it cost to file a claim?',
    answer: 'There are no upfront costs to file a claim with us. Our partner attorneys work on a contingency fee basis, which means they only get paid if you win your case. The fee is typically a percentage of your settlement amount.'
  },
  {
    id: 3,
    question: 'How long does the claim process take?',
    answer: 'The timeline varies depending on the complexity of your case, the severity of injuries, and the cooperation of the rideshare company. Simple cases may settle in a few months, while more complex cases could take a year or longer. We work to resolve your claim as quickly as possible while still securing maximum compensation.'
  },
  {
    id: 4,
    question: 'What types of compensation can I receive?',
    answer: 'You may be eligible for compensation covering medical expenses, lost wages, pain and suffering, emotional distress, and in some cases, punitive damages. The exact amount depends on the specifics of your case, including the severity of injuries and impact on your life.'
  },
  {
    id: 5,
    question: 'What if I was partially at fault for the accident?',
    answer: 'You may still be eligible for compensation even if you were partially at fault. Many states follow comparative negligence laws, which allow you to recover damages reduced by your percentage of fault. Our attorneys can evaluate your case and explain how local laws apply to your situation.'
  },
  {
    id: 6,
    question: 'Do I need to have medical records to file a claim?',
    answer: 'While having medical records strengthens your case, you can start the claim process without them. We can help you obtain the necessary medical documentation. However, it\'s crucial to seek medical attention as soon as possible after an accident, even if injuries seem minor.'
  }
];

const FAQItem: React.FC<{ faq: FAQItem }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
        <span className="ml-6 flex-shrink-0 text-blue-600">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-600">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about rideshare injury claims and our process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Don't see your question? Contact us for immediate assistance.
          </p>
          <a
            href="tel:1-800-555-1234"
            className="btn-primary inline-flex items-center"
          >
            <FaChevronDown className="mr-2 transform rotate-90" />
            Call 1-800-555-1234
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 