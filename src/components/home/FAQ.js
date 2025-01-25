'use client'
import { motion } from 'framer-motion'
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FAQSection() {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleAccordion = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index)); // Close if already open
    } else {
      setActiveIndexes([...activeIndexes, index]); // Open the selected question
    }
  };

  const faqs = [
    {
      question: "What is our service?",
      answer:
        "We offer top-notch learning programs with hands-on training and real-world experience.",
    },
    {
      question: "How do I enroll?",
      answer:
        "You can enroll by filling out our online form or contacting our support team for more details.",
    },
    {
      question: "What is the course duration?",
      answer: "Our programs range from a few weeks to several months depending on the course.",
    },
    {
      question: "Do you provide certifications?",
      answer: "Yes, we provide internationally recognized certifications upon course completion.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-t from-gray-950 to-gray-900">
      <div className="container mx-auto text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-extrabold text-gray-200 mb-4">
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-lg text-gray-400">
            Get answers to some of the most common questions about our services.
          </motion.p>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap gap-8">
          <div className="flex-1 space-y-4">
            {faqs.slice(0, 2).map((faq, index) => (
              <div
                key={index}
                className="p-5 border-b border-gray-700 hover:bg-gray-800 rounded-sm transition-all"
              >
                <div
                  className="flex items-center justify-start text-xl font-semibold text-gray-100 cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  {/* Expand/Collapse Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: .5 }}
                    className="mr-4">
                    {activeIndexes.includes(index) ? (
                      <FaChevronUp className="text-gray-300" />
                    ) : (
                      <FaChevronDown className="text-gray-300" />
                    )}
                  </motion.div>
                  {/* Question Text */}
                  {faq.question}
                </div>
                <div
                  className={`transition-all duration-[2000ms] ease-in-out overflow-hidden ${activeIndexes.includes(index) ? "max-h-screen" : "max-h-0"
                    }`}
                >
                  {activeIndexes.includes(index) && (
                    <div className="text-gray-400 mt-3 text-left">{faq.answer}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 space-y-4">
            {faqs.slice(2, 4).map((faq, index) => (
              <div
                key={index}
                className="p-5 border-b border-gray-700 hover:bg-gray-800 rounded-sm transition-all"
              >
                <div
                  className="flex items-center justify-start text-xl font-semibold text-gray-100 cursor-pointer"
                  onClick={() => toggleAccordion(index + 2)} // Adjusting index for second column
                >
                  {/* Expand/Collapse Icon */}
                  <div className="mr-4">
                    {activeIndexes.includes(index + 2) ? (
                      <FaChevronUp className="text-gray-300" />
                    ) : (
                      <FaChevronDown className="text-gray-300" />
                    )}
                  </div>
                  {/* Question Text */}
                  {faq.question}
                </div>
                <div
                  className={`transition-all duration-[2000ms] ease-in-out overflow-hidden ${activeIndexes.includes(index + 2) ? "max-h-screen" : "max-h-0"
                    }`}
                >
                  {activeIndexes.includes(index + 2) && (
                    <div className="text-gray-400 mt-3 text-left">{faq.answer}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
