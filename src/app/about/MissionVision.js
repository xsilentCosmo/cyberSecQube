import { FaShieldAlt, FaChalkboardTeacher, FaLaptopCode, FaHandsHelping, FaTrophy, FaUsers } from 'react-icons/fa';

export default function MissionVision() {
  return (
    <section className="relative py-20 px-8">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]  to-gray-950 opacity-80"></div>
      
      {/* Section Header */}
      <div className="relative text-center z-10 max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold teborder-2 text-cyan-300 border-cyan-500 mb-4 leading-tight">Our Mission & Vision</h2>
        <p className="text-xl text-white opacity-90 mb-12">
          At Cyber SecQube, we&apos;re creating a safer digital world through education, awareness, and expert solutions.
        </p>
      </div>

      {/* Mission and Vision Content */}
      <div className="relative z-10">
        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          {/* Mission Section */}
          <div className="relative overflow-hidden rounded-lg p-12 bg-gradient-to-b from-[#1a1a2e] to-gray-950 shadow-xl">
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] border-2 border-cyan-500 opacity-20 rounded-full"></div>
            <h3 className="text-3xl font-bold text-cyan-500 mb-6">Our Mission</h3>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-full border-2 border-cyan-500">
                  <FaShieldAlt className="text-3xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Empowering Professionals</h4>
                  <p className="text-gray-400">Offering specialized training to develop skilled cybersecurity experts.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-full border-2 border-cyan-500">
                  <FaChalkboardTeacher className="text-3xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Promoting Awareness</h4>
                  <p className="text-gray-400">Educating individuals and businesses about the importance of cybersecurity.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-full border-2 border-cyan-500">
                  <FaLaptopCode className="text-3xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Delivering Practical Solutions</h4>
                  <p className="text-gray-400">Equipping learners with hands-on experience and industry-relevant skills to handle real-world challenges.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-full border-2 border-cyan-500">
                  <FaHandsHelping className="text-3xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Supporting Organizational Security</h4>
                  <p className="text-gray-400">Helping businesses strengthen their defense mechanisms against cyber threats.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="relative overflow-hidden rounded-lg p-12 bg-gradient-to-b from-[#1a1a2e] to-gray-950 shadow-xl">
            <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] border-2 border-cyan-500 opacity-20 rounded-full"></div>
            <h3 className="text-3xl font-bold text-cyan-500 mb-6">Our Vision</h3>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-full border-2 border-cyan-500">
                  <FaTrophy className="text-3xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Driving Innovation in Cybersecurity Training</h4>
                  <p className="text-gray-400">Using the latest technologies and methodologies for effective learning.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-full border-2 border-cyan-500">
                  <FaUsers className="text-3xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Creating a Cyber-Resilient Society</h4>
                  <p className="text-gray-400">Reducing vulnerabilities and promoting proactive cyber defense strategies.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-full border-2 border-cyan-500">
                  <FaHandsHelping className="text-3xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Fostering Collaboration</h4>
                  <p className="text-gray-400">Partnering with governments, organizations, and educational institutions to strengthen global cybersecurity.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-full border-2 border-cyan-500">
                  <FaShieldAlt className="text-3xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Being a Trusted Authority</h4>
                  <p className="text-gray-400">Establishing a reputation as a reliable source for world-class cybersecurity training and expertise.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
