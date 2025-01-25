'use client'
import { motion } from "framer-motion";
export default function CTASection() {
  return (
    <motion.section
    initial={{ scale:1.5}}
    whileInView={{scale:1}}
    transition={{duration:0.3}}
    className="bg-cover bg-center bg-[url('http://cybersecqube.com/wp-content/uploads/2024/12/pexels-photo-6963098.jpeg')] text-white py-16 relative">
      {/* Background dimming overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">Ready to Start Your Cyber Security Journey?</h2>
        <p className="md:text-lg mb-8 md:text-balance">
          Join our professional courses and gain the skills to thrive in the world of cybersecurity. Whether you&apos;re just starting out or looking to upskill, we have the right course for you.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="/courses"
            className="hover:animate-bounce hover:border-2 border-[#91e0ed] hover:bg-black hover:text-[#91e0ed] px-6 py-3 rounded-lg font-bold bg-[#91e0ed] text-black transition-colors"
          >
            Join Us Now
          </a>

          <a
            href="/contact"
            className="hover:animate-bounce bg-transparent border-2 border-[#91e0ed] text-[#91e0ed] px-6 py-3 rounded-lg font-bold hover:bg-[#91e0ed] hover:text-black transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Optional Subtext */}
        <p className="mt-6 text-sm text-gray-300">
          Not sure which course to choose? <a href="/contact" className="text-white font-semibold hover:text-gray-300">Contact our team</a> for personalized guidance.
        </p>
      </div>
    </motion.section>
  );
}
