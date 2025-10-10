import React from "react";
import Link from "next/link";
import Image from "next/image";
// Assuming you have these icons and data available
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
// Make sure to update the path for your logo
import mainlogo from "@/assests/logo.png";

// Use the same structure/data source as your navbar for consistency
// Assuming the navbar data is an array of objects like: [{ id: 1, name: "Home", path: "/" }, ...]
const footerNav = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Services", path: "/services" },
  { id: 3, name: "Portfolio", path: "/portfolio" },
  { id: 4, name: "About Us", path: "/about" },
  { id: 5, name: "Contact", path: "/contact" },
  { id: 6, name: "Cyber Security", path: "/cyber-security" },
];

function Footer() {
  return (
    // Main Footer Container - Dark background for a premium look
    <footer className="bg-gray-800 text-gray-300 pt-10 pb-6 border-t-8 border-blue-600">
      <div className="lg:w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 1. Logo and Description Section (Leftmost) */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={mainlogo}
                alt="Mahi Technocrafts Logo"
                className="h-10 w-auto filter invert" // 'invert' is optional if your logo needs it on a dark background
              />
            </Link>
            <p className="text-sm leading-relaxed">
              We are a dedicated team of innovators providing top-notch web
              development, cyber security, and IT solutions tailored to
              accelerate your business growth.
            </p>
          </div>

          {/* 2. Quick Links Section (Navigation Links) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-blue-600 pb-1 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className="hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Information Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-blue-600 pb-1 inline-block">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                Mahi Technocrafts, Hamidia Road, Bhopal, Madhya Pradesh 462001
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-400 flex-shrink-0" />
                <a href="tel:+916267144122" className="hover:text-blue-400">
                  +91 6267144122
                </a>{" "}
                ||
                <a href="tel:+919009594537" className="hover:text-blue-400">
                  +91 9009594537
                </a>
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:support@mahitechnocrafts.in"
                  className="hover:text-blue-400"
                >
                  support@mahitechnocrafts.in
                </a>
              </p>
            </div>
          </div>

          {/* 4. Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-blue-600 pb-1 inline-block">
              Connect
            </h3>
            <div className="flex space-x-4 text-3xl">
              <a
                href="https://www.linkedin.com/company/mahi-technocrafts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-blue-500 hover:text-blue-400 transition-colors duration-200"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/mahi_technocrafts/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-pink-500 hover:text-pink-400 transition-colors duration-200"
              >
                <FaInstagram />
              </a>
              {/* Add more social media icons here if needed */}
            </div>
          </div>
        </div>

        {/* --- Footer Bottom (Copyright) --- */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Mahi Technocrafts. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
