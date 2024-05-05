import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DeveloperBadge from '../Components/DeveloperBadge'; // Import the DeveloperBadge component

function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <hr className="border-1 border-gray-300 mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Navigation Section */}
          <div className="footer-section">
            <h2 className="text-lg font-bold mb-3">Navigation</h2>
            <ul className="text-sm text-gray-600">
              <li className="mb-2">
                <Link to="/" className="flex items-center hover:text-gray-900 transition-colors duration-300">
                  <HomeIcon className="mr-2" />
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="flex items-center hover:text-gray-900 transition-colors duration-300">
                  <InfoIcon className="mr-2" />
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center hover:text-gray-900 transition-colors duration-300">
                  <ContactsIcon className="mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="footer-section">
            <h2 className="text-lg font-bold mb-3">Connect</h2>
            <div className="text-sm text-gray-600">
              <p className="flex items-center mb-2">
                <LocationOnIcon className="mr-2" />
                Address: Alankar Pool Rd, Swapnamandir Society, Bharatkunj - 1, Erandwane, Pune, Maharashtra 411038
              </p>
              <p className="flex items-center mb-2">
                <PhoneIcon className="mr-2" />
                Phone: +91 7774050676 / +91 8446137285
              </p>
              <p className="flex items-center">
                <EmailIcon className="mr-2" />
                Email: batterywalabhau@gmail.com
              </p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="footer-section">
            <h2 className="text-lg font-bold mb-3">Social Media</h2>
            <div className="flex items-center">
              <a href="https://www.facebook.com/profile.php?id=61556464873898&sk=about" className="mr-3 text-gray-600 hover:text-blue-500 transition-colors duration-300">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.instagram.com/batterywalabhau/" className="mr-3 text-gray-600 hover:text-pink-500 transition-colors duration-300">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/batterywala-bhau-7222232b7/" className="text-gray-600 hover:text-blue-700 transition-colors duration-300">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>

        {/* Developer Badge */}
        <div className="flex justify-center mt-8">
          <DeveloperBadge photoSrc="/path/to/your/badge-image.png" /> {/* Add DeveloperBadge here */}
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">&copy; <StorefrontIcon className="inline-block" /> Battery Wala Bhau. All rights reserved.</p>
        </div>

        {/* Google Map */}
        <div className="mt-8">
          <div className="iframe-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.6488350173204!2d73.82593593705576!3d18.49955910011786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfec3f049b13%3A0x3742197e3e05d131!2sVidya%20Boutique%20Fashion%20Designer!5e0!3m2!1sen!2suk!4v1708864860960!5m2!1sen!2suk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
