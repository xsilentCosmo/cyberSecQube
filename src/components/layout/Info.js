import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function ContactInfoBar() {
  return (
    <div className="bg-gray-900 text-white py-3 md:block hidden">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Social Icons (Left Side) */}
        <div className="flex items-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#91e0ed] hover:text-white">
            <FaFacebookF className="text-xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#91e0ed] hover:text-white">
          <FaXTwitter className="text-xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#91e0ed] hover:text-white">
            <FaInstagram className="text-xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#91e0ed] hover:text-white">
            <FaLinkedinIn className="text-xl" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#91e0ed] hover:text-white">
            <FaYoutube className="text-xl" />
          </a>
        </div>

        {/* Contact Information (Right Side) */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-[#91e0ed] text-xl" />
            <span className="text-sm">+91  9656250000</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-[#91e0ed] text-xl" />
            <span className="text-sm">mail@cybersecube.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
