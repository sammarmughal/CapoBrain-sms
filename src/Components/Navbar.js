import React, { useState } from "react";
import navLogo from "../img/capobrain-logo-white.png";
import navLogoMob from "../img/capobrain-logo.png";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <header className="absolute w-full lg:bg-transparent bg-white z-50">
        <nav className="cb-container w-full flex items-center justify-between px-4 py-3 md:px-8 lg:px-16">
          <Link className="hidden lg:flex flex-shrink-0 pt-1" to="/">
            <img
              src={navLogo}
              width="224"
              height="57"
              className="h-12  w-full object-fit"
              style={{ maxWidth: "18rem" }}
              alt="school-management-software"
            />
            <span className="hidden">School Management Software</span>
          </Link>
          <Link className="lg:hidden flex flex-shrink-0 pt-1" to="/">
            <img
              src={navLogoMob}
              width="224"
              height="100"
              className="h-12 w-full object-fit"
              style={{ maxWidth: "18rem" }}
              alt="school-management-software"
            />
            <span className="hidden">School Management Software</span>
          </Link>
          <div
            onClick={handleToggle}
            className={`mv-navi__burger ${
              isOpen ? "active" : ""
            } cursor-pointer w-5 h-3 relative lg:hidden flex flex-col justify-between`}
          >
            <span
              className={`line line-1 ${
                isOpen
                  ? "rotate-45 transform origin-center bg-red-500"
                  : "bg-black"
              }`}
            />
            <span />
            <IoMdMenu
              className={`line line-2 ${isOpen ? "opacity-0" : "bg-black"}`}
            />
            <span
              className={`line line-3 ${
                isOpen
                  ? "-rotate-45 transform origin-center bg-red-500"
                  : "bg-black"
              }`}
            />
          </div>
          <div
            className={`lg:flex lg:space-x-8 pt-1 ${
              isOpen ? "block" : "hidden"
            } lg:block`}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6  nav-mob">
              <li>
                <a href="#" className="nav-list">
                  Home
                </a>
              </li>
              <li>
                <Link to="/about" className="nav-list">
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="nav-list">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="nav-list">
                  User Manual
                </a>
              </li>
              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center nav-list focus:outline-none"
                >
                  Help Center
                  <RiArrowDropDownLine className="w-8 h-8" />
                </button>
                <div
                  className={`mv-navi__drawer ${
                    dropdownOpen ? "hidden" : "block"
                  } lg:absolute top-full  lg:mt-2 left-0 w-full lg::block`}
                >
                  <ul className="flex flex-col dropmenu lg:py-2">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2  hover:text-[#ba62fd]"
                      >
                        Knowledgebase
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:text-[#ba62fd]"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:text-[#ba62fd]"
                      >
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:text-[#ba62fd]"
                      >
                        Generate Ticket
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:text-[#ba62fd]"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <div className="lg:hidden gap-2 block">
                <a href="#" className="">
                  Log in
                </a>
              </div>
              <div className="lg:hidden gap-2 block">
                <a href="#" className="">
                  Request a Demo
                </a>
              </div>
            </ul>
          </div>
          <div className="lg:flex hidden justify-around items-center">
            <a
              href="#"
              className="text-white mr-3 font-medium text-lg nav-list"
            >
              Log in
            </a>
            <a href="#" className="btn h-[2.2rem]">
              Request a Demo
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
