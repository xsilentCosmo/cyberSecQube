'use client'
import { useState } from 'react';
import Link from 'next/link';
import ContactInfoBar from './Info';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:relative fixed top-0 left-0 right-0 z-[60]">
      <ContactInfoBar />
      <nav className="bg-gray-950 backdrop-blur-sm text-[#e6f1ff] px-4 py-4 shadow-lg border-b-2 border-gray-900">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gradient-cyber">
            CyberSecQube
          </Link>

          {/* Hamburger Menu Button for Mobile */}
          <button
            className="text-[#e6f1ff] lg:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links (Hidden on small screens) */}
          <div className="hidden lg:flex space-x-6">
            {['Home', 'About', 'Courses', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                className="hover:text-[#91e0ed] transition-all duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Dropdown Menu for Mobile */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-44 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-4 flex flex-col space-y-4 bg-gray-950 px-4 py-4 rounded-lg shadow-lg">
            {['Home', 'About', 'Courses', 'Contact'].map((item) => (
              <Link
                key={item}
                onClick={()=>setIsMenuOpen(false)}
                href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                className="hover:text-[#91e0ed] transition-all duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
