'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import CTASection from "./CallToAction";

const courses = [
  { title: "Diploma in Cyber Security", icon: "https://img.freepik.com/premium-vector/cyber-security-privacy-virtual-interface-technology-background_574957-388.jpg", desc: ["Duration : 2 Month", "Leading to International Certification", "Eligibility +2 or Above"] },
  { title: "Mathematics for Cyber Security | Crash Course", icon: "https://i0.wp.com/valuementor.com/wp-content/uploads/2022/08/A-Quick-Guide-to-Black-Box-Penetration-Test-Approach.webp?fit=1600%2C820&ssl=1", desc: ["Duration : 2 Month", "With case studies", "Eligibility +2 or Above"] },
  { title: "PG Diploma in Cyber Security", icon: "https://www.theforage.com/blog/wp-content/uploads/2022/12/what-is-cybersecurity-1024x631.jpg", desc: ["Duration: 6 Months", "International Certification", "Eligibility +2 or Above"] },
  { title: "Cloud Security Specialist", icon: "https://techcrunch.com/wp-content/uploads/2024/06/GettyImages-1422838176.jpg?w=1024", desc: ["Secure cloud", "Access control", "Prevent data leaks."] },
  { title: "Network Defense Tactics", icon: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/308272167/original/fde9b6426dd7351475442477fab7336b80b21a98/perform-penetration-test-on-your-web-app.png", desc: ["Secure networks", "Detect intrusions", "Protect assets."] },
  { title: "Cyber Forensics Pro", icon: "https://i0.wp.com/valuementor.com/wp-content/uploads/2022/08/A-Quick-Guide-to-Black-Box-Penetration-Test-Approach.webp?fit=1600%2C820&ssl=1", desc: ["Analyze breaches", "Gather evidence", "Trace attackers."] },
  { title: "Governance, Risk, and Compliance", icon: "/grc-icon.svg", desc: ["Manage risks", "Implement policies", "Stay compliant."] },
];

export default function AllCourses() {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-950 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-[#91e0ed]">All Courses</h2>
            <p className="mt-4 text-gray-300">
              Explore our industry-relevant cybersecurity courses tailored for professionals and beginners.
            </p>
          </motion.div>

          {/* Grid for courses */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {courses.map((course, idx) => (
              <motion.div
                key={idx}

                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                <div
                  key={idx}
                  className="p-6 rounded-lg shadow-lg flex flex-col justify-between hover:scale-95 transition-transform"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                >

                  <div className="w-full h-40 mb-4 overflow-hidden rounded-t-lg">
                    <img
                      src={course.icon}
                      alt={course.title}
                      className="w-full h-40 mb-4 object-cover rounded-t-lg hover:scale-110 duration-300 transition-transform"
                    /></div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <ul className="list-disc pl-4 text-sm text-gray-300 mb-4">
                    {course.desc.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="w-full text-[#91e0ed] hover:text-black border-2 border-[#91e0ed] px-4 py-2 text-center rounded-sm rounded-br-xl font-bold hover:bg-[#91e0ed]"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Back to Home Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              href="/"
              className="bg-[#91e0ed] text-black px-6 py-3 rounded-lg font-bold hover:bg-white transition-colors"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
