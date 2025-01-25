'use client'
import React from "react";
import MissionVision from "./MissionVision";
import CTASection from "@/components/CallToAction";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  // Animation variants for elements
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInDelayed = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      className="bg-gray-950 text-white"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Hero Section */}
      <motion.div
        className="bg-[url('https://gdsgroup.com/app/uploads/2022/05/Cybersecurity.jpg')] bg-cover bg-center text-center py-32 px-4 relative"
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-50 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          <h1 className="text-5xl font-bold text-cyan-300">About Us</h1>
          <p className="text-gray-300 mt-4">
            Your trusted partner in cybersecurity education and awareness.
          </p>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-12 py-16"
        variants={fadeInDelayed}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Image */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-lg"
            variants={fadeIn}
          >
            <Image
              src="http://cybersecqube.com/wp-content/uploads/2024/12/pexels-photo-5380642.jpeg"
              alt="About Us"
              width={1000}
              height={500}
              className="w-full h-auto transform scale-x-[-1] object-center"
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={fadeInDelayed}>
            <h2 className="text-4xl font-bold text-cyan-300 mb-6">Who We Are</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              At Cyber SecQube, we are committed to providing top-notch
              education and resources to individuals and organizations to
              strengthen their cybersecurity capabilities. Our expert team is
              dedicated to creating a safe and secure digital world.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              With a focus on practical knowledge, hands-on training, and
              real-world scenarios, we ensure that our learners are well-prepared
              to tackle modern cybersecurity challenges.
            </p>
            <Link
              href={"/contact"}
              className="bg-[#91e0ed] text-black font-bold py-3 px-6 rounded-lg hover:bg-white transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Our Mission Section */}
      <MissionVision />

      {/* Call to Action Section */}
      <CTASection />
    </motion.section>
  );
}
