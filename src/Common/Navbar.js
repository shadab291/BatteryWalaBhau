import React, { useState } from "react";
import { Link } from "react-router-dom";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import sharingon from "../Media/BWB_LOGO_prev_ui.png";
import Hamburger from "hamburger-react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className="flex rounded-md justify-between pr-2 pl-4 mt-0 shadow-md bg-color bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 h-16 hidden md:flex bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400">
        <div className="flex items-center">
        <Link to="/"><img className="w-40 mr-2 color-white" src={sharingon} alt="" /></Link>  
        </div>
        <div className="flex space-x-10 text-white mt-4">
          <div className="hover:text-orange-500">
            <DesignServicesIcon className="mb-1 animate-delay-[1ms] mr-1" />
            <Link to="/services">Services</Link>
          </div>
          <div className="hover:text-orange-500">
            <InfoIcon className="mb-1 animate-delay-[1ms] mr-1" />
            <Link to="/about">About</Link>
          </div>
          <div className="text-white hover:text-orange-500">
            <ContactsIcon className="animate-delay-[1ms] mr-1" />
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div>
        <div className="flex rounded-md justify-between items-center bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400 xl:hidden flex lg:hidden md:hidden flex xl:hidden flex 2xl:hidden flex">
        <Link to="/"><img className="w-40 mr-2 color-white" src={sharingon} alt="" /></Link> 
        <div className="flex justify-between text-2xl font-bold  text-white hover:text-orange-500"></div>
          <div className="relative mt-5 text-white" align="right">
            <Hamburger toggled={isOpen} toggle={setOpen} size={22} direction="right" />
          </div>
        </div>{" "}
        {isOpen && (
          <ul className="bg-white text-cyan-950 absolute left-0 w-30 border border-gray-300 rounded-lg shadow-lg">
            <li>
              <Link to="/about" className="block py-2 px-4 hover:text-orange-500">
                <InfoIcon className="mb-1 mr-1" />
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="block py-2 px-4 hover:text-orange-500">
                <DesignServicesIcon className="mb-1 mr-1" />
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-4 hover:text-orange-500">
                <ContactsIcon className="mb-1 mr-1" />
                Contact
              </Link>
            </li>
          </ul>
        )}
        <hr></hr>
      </div>
    </div>
  );
}
