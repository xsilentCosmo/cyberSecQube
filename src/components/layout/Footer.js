import Link from "next/link";
import { FaSquareThreads, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#091b27] text-white py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">About CyberSecQube</h4>
            <p className="text-sm">
              Empowering individuals and organizations with the knowledge and tools needed to navigate the cybersecurity landscape safely and confidently.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="text-sm hover:text-[#91e0ed]">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-[#91e0ed]">About</Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm hover:text-[#91e0ed]">Courses</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-[#91e0ed]">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <p className="text-sm">
              Email: <Link href="mailto:contact@cybersecqube.com" className="hover:text-[#91e0ed]">mail@cybersecqube.com</Link>
            </p>
            <p className="text-sm">Phone: +91 9656250000</p>
            <p className="text-sm">
              Address: 3rd floor, Capital Tower, Patturaikkal, Thrissur, Kerala 680020
            </p>
          </div>

          {/* Social Media Section */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="grid grid-cols-3 gap-8">
              <Link href="https://www.facebook.com/cybersecqube" className="text-xl hover:text-[#91e0ed]">
                <FaFacebookF />
              </Link>
              <Link href="https://x.com/CyberSecQube" className="text-xl hover:text-[#91e0ed]">
                <FaXTwitter />
              </Link>
              <Link href="https://www.linkedin.com/company/cyber_secqube" className="text-xl hover:text-[#91e0ed]">
                <FaLinkedinIn />
              </Link>
              <Link href="https://instagram.com/Cyber_SecQube" className="text-xl hover:text-[#91e0ed]">
                <FaInstagram />
              </Link>
              <Link href="https://www.youtube.com/channel/UCyberSecQube" className="text-xl hover:text-[#91e0ed]">
                <FaYoutube />
              </Link>
              <Link href="https://www.threads.net/CyberSecQube" className="text-xl hover:text-[#91e0ed]">
                <FaSquareThreads />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider Line and Footer Bottom Section */}
        <hr className="my-8 border-gray-700" />
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} CyberSecQube. All rights reserved | Powered by QuantQuotient
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
