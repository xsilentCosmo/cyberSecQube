import React from 'react'

function About() {
    const points = [
        'Hands-on training with real-world scenarios.',
        'Experienced instructors with industry expertise.',
        'Globally recognized certifications.',
        'Flexible online and in-person training options.',
        'Lifetime access to course materials.',
      ];
  return (
    <div>
        <section className="bg-gradient-to-b from-00375e to-91e0ed text-white py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose CyberSecube?</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <li
              key={index}
              className="bg-dark-gray rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <p className="text-lg">{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
    </div>
  )
}

export default About