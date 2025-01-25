'use client'
import {
  FaHandshake,
  FaClock,
  FaUserTie,
  FaCertificate,
  FaBuilding,
} from "react-icons/fa";
import { PiVideoConference } from "react-icons/pi";
import { motion } from "framer-motion";

export default function OurValues() {
  return (
    <section className="bg-gray-950 py-20 px-6 md:px-12">
      <div className="container mx-auto text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: .45 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-200 mb-4">
            Why Choose Us?
          </motion.h2>
          <motion.p
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: .4 }}
            className="text-base md:text-lg text-gray-400">
            We provide an unparalleled learning environment to help you succeed.
          </motion.p>
        </div>

        {/* Value Cards - Grid layout with specific border removals */}
        <div className="grid md:grid-cols-3 gap-">
          {[
            {
              icon: <FaHandshake />,
              title: "100% Placement & Internship Assistance",
            },
            {
              icon: <PiVideoConference />,
              title: "Hands-on Training & Experience",
            },
            {
              icon: <FaClock />,
              title: "Flexible Study Options",
            },
            {
              icon: <FaUserTie />,
              title: "Industry Experts & Certified Trainers",
            },
            {
              icon: <FaCertificate />,
              title: "International Certifications",
            },
            {
              icon: <FaBuilding />,
              title: "World-Class Infrastructure",
            },
          ].map((value, index) => (
            <div
              key={index}
              className={`bg-gray-950 border border-gray-800 p-8 shadow-md hover:shadow-xl transition-all flex flex-col items-center ${
                // Apply border removals based on card's position in the grid
                index === 0 && "border-t-0 border-l-0" // First card, remove top and left borders
                } ${index === 1 && "border-t-0" // Second card, remove top border
                } ${index === 2 && "border-t-0 border-r-0" // Third card, remove top and right borders
                } ${index === 3 && "border-b-0 border-l-0" // Fourth card, remove bottom and left borders
                } ${index === 4 && "border-b-0" // Fifth card, remove bottom border
                } ${index === 5 && "border-b-0 border-r-0" // Sixth card, remove bottom and right borders
                }`}
            >
              {/* Icon Container */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: .5 }}
                className="flex items-center justify-center w-16 h-16 rounded-full mb-6">
                <div className="text-cyan-400 text-3xl">{value.icon}</div>
              </motion.div>
              {/* Title */}
              <motion.h3
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: .5 }}
                className="text-lg md:text-xl font-semibold text-gray-100 mb-2 text-center">
                {value.title}
              </motion.h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
