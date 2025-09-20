import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



function Footer() {
  return (
    <div className="bg-[#EF7722] w-full text-white sm:max-h-screen flex items-end">
      {/* Main content area */}
      <main className="flex-grow"></main>

      {/* Footer */}
      <footer className="w-full text-gray-300 py-12 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          {/* Logo and Copyright */}
          <div className="flex flex-col space-y-4 max-w-sm">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-white">Foodie</span>
            </div>
            <p className="text-sm">© 2025 Foodie Limited</p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Company Section */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Corporate
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    One
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Instamart
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Dineout
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Contact Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Help & Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Partner With Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Ride With Us
                  </Link>
                </li>
              </ul>
              <h3 className="font-bold text-lg mb-4 mt-6 text-white">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Available in Section */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">
                Available in:
              </h3>
              <ul className="space-y-2">
                <li>Bangalore</li>
                <li>Gurgaon</li>
                <li>Hyderabad</li>
                <li>Delhi</li>
                <li>Mumbai</li>
                <li>Pune</li>
              </ul>
              <div className="relative mt-6">
                <select className="appearance-none w-full border border-white text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white">
                  <option className="text-black">685 cities</option>
                  <option className="text-black">Other City 1</option>
                  <option className="text-black">Other City 2</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Life at Foodie Section */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">
                Life at Foodie
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Explore
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Snackables
                  </Link>
                </li>
              </ul>
              <h3 className="font-bold text-lg mb-4 mt-6 text-white">
                Social Links
              </h3>
              <div className="flex space-x-4">
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/prem-maurya-8640b5319/"
                  aria-label="LinkedIn"
                  className="hover:text-white transition-colors duration-300"
                >
                 <FaLinkedin color={"white"} size={24} />
                </Link>
                <Link
                  target="_blank"
                  to="https://www.instagram.com/premmaurya222"
                  aria-label="Instagram"
                  className="hover:text-white transition-colors duration-300"
                >
                  <FaInstagram color={"white"} size={24} />
                </Link>
                <Link
                  target="_blank"
                  to="https://www.github.com/Premkmaurya"
                  aria-label="github"
                  className="hover:text-white transition-colors duration-300"
                >
                 <FaGithub color={"white"} size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
