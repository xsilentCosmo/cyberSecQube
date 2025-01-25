export default function JoinUsSection() {
  return (
    <section className="bg-gray-900 text-white py-16 md:mt-0 mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#91e0ed]">Get in Touch with Us</h2>
          <p className="text-gray-300 mt-4">
            Ready to start your journey? Fill out the form below, and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Column */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full border-b-2 border-gray-600 bg-transparent focus:border-[#91e0ed] focus:outline-none text-white py-2"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border-b-2 border-gray-600 bg-transparent focus:border-[#91e0ed] focus:outline-none text-white py-2"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full border-b-2 border-gray-600 bg-transparent focus:border-[#91e0ed] focus:outline-none text-white py-2"
                />
              </div>

              {/* Qualification Dropdown */}
              <div>
                <label htmlFor="qualification" className="block text-sm font-medium text-gray-400">
                  Qualification
                </label>
                <select
                  id="qualification"
                  defaultValue="" // This ensures no option is selected initially
                  className="w-full border-b-2 border-gray-600 bg-transparent text-white py-2 focus:outline-none focus:border-[#91e0ed] appearance-none"
                >
                  <option value="" disabled>
                    Select your qualification
                  </option>
                  <option value="plusTwo" className="bg-gray-800 text-gray-300">
                    Plus Two
                  </option>
                  <option value="bachelor" className="bg-gray-800 text-gray-300">
                    Bachelor&apos;s Degree
                  </option>
                  <option value="master" className="bg-gray-800 text-gray-300">
                    Master&apos;s Degree
                  </option>
                  <option value="other" className="bg-gray-800 text-gray-300">
                    Other
                  </option>
                </select>


              </div>


              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#91e0ed] text-black px-6 py-3 rounded-lg font-bold hover:bg-white transition-colors w-full"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information Column */}
          <div className="flex flex-col justify-center bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-gray-300 mb-6">
              Need assistance or have questions? Reach out using the details below.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[#91e0ed]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zm-6 11v-2m0 4h.01"
                  />
                </svg>
                <span className="text-gray-300">+91 9656250000, +91 7994142226</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[#91e0ed]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M3 14h18M3 6h18m-6 8h6M3 8h18"
                  />
                </svg>
                <span className="text-gray-300">info@cybersecqube.com</span>
              </li>
              <li className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[#91e0ed]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20h6m2 0a2 2 0 00-2-2H9a2 2 0 00-2 2h10zM3 4a2 2 0 012-2h14a2 2 0 012 2H3zm0 0h18"
                  />
                </svg>
                <span className="text-gray-300">3rd floor, Capital Tower, Patturaikkal, Thrissur, Kerala 680020</span>
              </li>
            </ul>
            <div className="mt-10 w-full">
              <iframe className="max-h-60 w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.5520828922736!2d76.2114936!3d10.5359014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa3d8a127d306238d%3A0xb3681a1b0fa00e26!2sCyber%20SecQube!5e0!3m2!1sen!2sin!4v1737374864280!5m2!1sen!2sin" style={{ border: "0" }} allowFullScreen="#" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
