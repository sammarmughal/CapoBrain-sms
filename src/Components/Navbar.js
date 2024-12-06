import React, { useState, useEffect } from "react";
import navLogo from "../img/capobrain-logo-white.png";
import navLogoMob from "../img/capobrain-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdLogin } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [dropdownUser, setDropdownUser] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };
  const toggleUserDropdown = () => {
    setDropdownUser((prev) => !prev);
  };
  const closeDropdown = () => setDropdownUser(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("User"));
    if (user) {
      setIsLoggedIn(true);
      if (user.email === "capobrain@gmail.com") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
  }, []);
  const handleLogout = () => {
    sessionStorage.removeItem("User");
    setIsLoggedIn(false);
    navigate("/userlogin");
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleGenerateTicketClick = () => {
    if (isLoggedIn) {
      if (isAdmin) {
        navigate("/adminpanel/tickets");
      } else {
        navigate("/userprofile/generated-tickets");
      }
    } else {
      navigate("/userlogin");
    }
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
              alt="school-management-system"
            />
            <span className="hidden">School Management System</span>
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
                <Link to="/" className="nav-list" onClick={handleToggle}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-list" onClick={handleToggle}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="nav-list"
                  onClick={handleToggle}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/usermanual"
                  className="nav-list"
                  onClick={handleToggle}
                >
                  User Manual
                </Link>
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
                      <Link
                        to="/help"
                        onClick={() => {
                          handleToggle();
                          toggleDropdown();
                        }}
                        className="block px-4 py-2  hover:text-purple-600"
                      >
                        Knowledgebase
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        onClick={() => {
                          handleToggle();
                          toggleDropdown();
                        }}
                        className="block px-4 py-2 hover:text-purple-600"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faq"
                        onClick={() => {
                          handleToggle();
                          toggleDropdown();
                        }}
                        className="block px-4 py-2 hover:text-purple-600"
                      >
                        FAQs
                      </Link>
                    </li>
                    <li>
                      {/* <Link
                        to="/userlogin"
                        onClick={() => {
                          handleToggle();
                          toggleDropdown();
                        }}
                        className="block px-4 py-2 hover:text-purple-600"
                      >
                        Generate Ticket
                      </Link> */}
                      <button
                        onClick={handleGenerateTicketClick}
                        className="block px-4 py-2 hover:text-purple-600"
                      >
                        Generate Ticket
                      </button>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        onClick={() => {
                          handleToggle();
                          toggleDropdown();
                        }}
                        className="block px-4 py-2 hover:text-purple-600"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <div className="lg:hidden gap-2 block">
                {isLoggedIn ? (
                  <div className="relative dropdown">
                    <FaUserCircle
                      onClick={toggleUserDropdown}
                      className="w-8 h-8 text-purple-800 hover:text-violet-400 cursor-pointer"
                    />
                    {dropdownUser && (
                      <div className=" mt-2 w-full z-10">
                        <Link
                          to={isAdmin ? "/adminpanel" : "/userprofile"}
                          className="block px-4 py-2 text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition"
                        >
                          Profile
                        </Link>
                        <button
                          onClick={() => {
                            handleLogout();
                            closeDropdown();
                          }}
                          className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to="/userlogin"
                    onClick={handleToggle}
                    className="flex items-center"
                  >
                    <MdLogin className="w-6 h-6 text-purple-800 hover:text-violet-400" />
                  </Link>
                )}
              </div>
              <div className="lg:hidden gap-2 block">
                <Link
                  to="/requestdemo"
                  onClick={handleToggle}
                  className="flex items-center gap-1"
                >
                  Request a Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
              </div>
            </ul>
          </div>
          <div className="lg:flex hidden justify-around items-center">
            {isLoggedIn ? (
              <div className="relative group mr-4 dropdown">
                <FaUserCircle
                  className="w-8 h-8 text-gray-200 hover:text-white cursor-pointer"
                  onClick={toggleUserDropdown}
                />
                {dropdownUser && (
                  <div className="absolute bg-[#0f131a] shadow-md rounded-lg mt-2 right-0 w-40">
                    <Link
                      to={isAdmin ? "/adminpanel" : "/userprofile"}
                      className="block px-4 py-2 text-gray-200 hover:text-purple-600"
                      onClick={toggleUserDropdown}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        toggleUserDropdown();
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-200 hover:text-purple-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/userlogin"
                className="text-white mr-3 flex gap-1 items-center hover:text-violet-400 font-medium text-lg nav-list"
              >
                <MdLogin className="w-5 h-5 text-white hover:text-violet-400" />
              </Link>
            )}

            <Link to="/requestdemo" className="btn h-[2.2rem]">
              Request a Demo{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
