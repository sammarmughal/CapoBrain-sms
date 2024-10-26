import React, { useState } from "react";
import navLogo from "../img/capobrain-logo.png";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

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
      <header className="fixed w-full lg:bg-transparent bg-white z-50">
        <nav className="cb-container w-full flex items-center justify-between px-4 py-3 md:px-8 lg:px-16">
          <Link className="flex-shrink-0" to="/">
            <img
              src={navLogo}
              width="224"
              height="56"
              className="h-12 w-auto"
              style={{ maxWidth: "14rem" }}
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
            {/* Icon bars */}
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
            className={`lg:flex lg:space-x-8 ${
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
                <a href="#" className="nav-list">
                  About
                </a>
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
                  className="flex items-center nav-list focus:outline-none justify-between"
                >
                  Help Center
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="none"
                    viewBox="0 0 20 20"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                    />
                  </svg>
                </button>
                <div
                  className={`mv-navi__drawer ${
                    dropdownOpen ? "hidden" : "block"
                  } lg:absolute top-full lg:mt-0 mt-2 left-0 w-full lg::block`}
                >
                  <ul className="flex flex-col dropmenu">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-800"
                      >
                        Knowledgebase
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-800"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-800"
                      >
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-800"
                      >
                        Generate Ticket
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-800"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <div className="lg:hidden">
                <a href="#" className="">
                  Request a Demo
                </a>
              </div>
            </ul>
          </div>
          <div className="lg:flex hidden">
            <a href="#" className="btn-a">
              Request a Demo
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
