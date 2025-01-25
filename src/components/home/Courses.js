'use client'
import { motion } from "framer-motion";
import Link from "next/link";
const courses = [
  { title: "Diploma in Cyber Security", icon: "https://img.freepik.com/premium-vector/cyber-security-privacy-virtual-interface-technology-background_574957-388.jpg", desc: ["Duration : 2 Month", "Leading to International Certification", "Eligibility +2 or Above"] },
  { title: "Mathematics for Cyber Security", icon: "https://i0.wp.com/valuementor.com/wp-content/uploads/2022/08/A-Quick-Guide-to-Black-Box-Penetration-Test-Approach.webp?fit=1600%2C820&ssl=1", desc: ["Duration : 2 Month", "With case studies", "Eligibility +2 or Above"] },
  { title: "PG Diploma in Cyber Security", icon: "https://www.theforage.com/blog/wp-content/uploads/2022/12/what-is-cybersecurity-1024x631.jpg", desc: ["Duration: 6 Months", "International Certification", "Eligibility +2 or Above"] },
];

export default function Courses() {
  // Display only the first 3 courses
  const coursesToShow = courses.slice(0, 3);

  return (
    <section className="bg-gradient-to-b from-gray-950 to-gray-900 text-white py-20">
      {/* <section className="bg-gray-900 text-white py-20"> */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="text-left">
            <motion.h2
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.35 }}
              className="text-2xl md:text-4xl font-bold text-cyan-300">Our Courses</motion.h2>
            <motion.p
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-4 text-sm md:text-base text-gray-300">
              Explore our industry-relevant cybersecurity courses tailored for professionals and beginners.
            </motion.p>
          </div>

          {/* View All Courses Button */}
          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-right">
            <Link
              href="/courses"
              className="text-sm md:text-base bg-[#91e0ed] text-black px-6 py-3 rounded-lg font-bold hover:bg-white transition-colors flex items-center space-x-2"
            >
              <span>View All Courses</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 12h14" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Grid for courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesToShow.map((course, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg shadow-lg flex flex-col justify-between hover:scale-105 transition-transform"
            >
              <div className="w-full h-40 mb-4 overflow-hidden rounded-t-lg">
                <img
                  src={course.icon}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <ul className="list-disc pl-4 text-sm text-gray-300 mb-4">
                {course.desc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <Link
                href="#"
                className="text-[#91e0ed] hover:text-black border-2 border-[#91e0ed] px-4 py-2 text-center rounded-sm rounded-br-xl font-bold hover:bg-[#91e0ed]"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
