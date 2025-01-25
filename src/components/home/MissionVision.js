'use client'
import React from 'react';
import { FaEye } from 'react-icons/fa';
import { TbTargetArrow } from "react-icons/tb";
import { motion } from 'framer-motion';
import { Typewriter } from '../Typewriter';

function MissionVision() {
  return (
    <section className="py-20 px-8 bg-gray-950">
      <div className="container mx-auto text-center max-w-7xl">
        {/* <h2 className="text-5xl font-bold text-[#3db8d1] mb-6">Our Mission & Vision</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Vision */}
          <div className="bg-[#1f1f2bc1] border-2 border-cyan-700 p-8 rounded-lg shadow-lg">
            <motion.div
              initial={{ scale: 5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: .5 }}
              className="flex items-center justify-center mb-4">
              <FaEye className="text-4xl text-[#3db8d1]" />
            </motion.div>
            <motion.h3
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: .5 }}
            className="text-2xl md:text-3xl font-semibold text-[#3db8d1] mb-4">Our Vision</motion.h3>
            <Typewriter className="text-justify md:text-center md:text-lg text-gray-300 mb-6 text-balance"
              text="Our vision is to empower students and aspiring professionals with the skills and knowledge to thrive in the cybersecurity field, preparing them to tackle evolving digital threats and contribute to a safer digital future."
              />
              {/* <p className="text-lg text-gray-300 mb-6">
                Our vision is to lead the charge in fostering global cybersecurity by equipping professionals, businesses, and communities with the tools and knowledge to stay ahead of threats.
              </p> */}
          </div>

          {/* Right Column: Mission */}
          <div className="bg-[#1f1f2bc1] border-2 border-cyan-700 p-8 rounded-lg shadow-lg">
            <motion.div
              initial={{ scale: 5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: .5 }}
              className="flex items-center justify-center mb-4">
              <TbTargetArrow className="text-4xl text-[#3db8d1]" />
            </motion.div>
            <motion.h3
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: .5 }}
              className="text-2xl md:text-3xl font-semibold text-[#3db8d1] mb-4">Our Mission</motion.h3>
            <Typewriter className="text-justify md:text-center md:text-lg text-gray-300 mb-6 text-balance"
              text="At Cyber SecQube, we provide comprehensive cybersecurity training to students, equipping them with the expertise needed to build successful careers and stay ahead in the ever-changing landscape of cybersecurity."
            />
            {/* <p className="text-lg text-gray-300 mb-6">
              At Cyber SecQube, we strive to empower individuals and organizations to navigate the ever-evolving digital landscape safely and confidently. Through expert training, awareness programs, and innovative solutions, we&apos;re shaping a cyber-resilient future.
            </p> */}
          </div>
        </div>

      </div>
    </section>
  );
}

export default MissionVision;
