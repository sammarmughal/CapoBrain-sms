import React from "react";
import Logo from "../img/capobrain-logo.png";
import { Link } from "react-router-dom";
import Footer_img from "../img/footer-bg.png";
const Footer = () => {
  return (
    <>
      {/* <footer className="w-full py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link to="/" className="flex justify-center">
              <img
                src={Logo}
                alt="Capobrain logo Affordable School Management Software"
                className="w-60 h-16"
              />
            </Link>
            <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10">
              <li>
                <Link
                  className=" text-gray-800 hover:text-gray-900"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className=" text-gray-800 hover:text-gray-900"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className=" text-gray-800 hover:text-gray-900"
                  to="/privacy-policy"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  className=" text-gray-800 hover:text-gray-900"
                  to="/term-and-services"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link className=" text-gray-800 hover:text-gray-900" to="/help">
                  Help
                </Link>
              </li>
            </ul>
            <div className="flex space-x-10 justify-center items-center mb-14">
              <a
                href="https://www.facebook.com/CapoBrainOfficial"
                target="blank"
                rel="noreferrer"
                className="nav-fill btn-sm-square rounded-circle me-2"
              >
                <i className="fab fa-facebook-f text-xl text-gray-900 hover:text-purple-500"></i>
                <span className="hidden">book</span>
              </a>
              <a
                href="https://twitter.com/BrainCapo"
                target="blank"
                rel="noreferrer"
                className="nav-fill btn-sm-square rounded-circle me-2"
              >
                <i className="fab fa-twitter text-xl text-gray-900 hover:text-purple-500"></i>
                <span className="hidden">tter</span>
              </a>
              <a
                href="https://www.youtube.com/@CapoBrain"
                target="blank"
                rel="noreferrer"
                className="nav-fill btn-sm-square rounded-circle me-2"
              >
                <i className="fab fa-youtube text-xl text-gray-900 hover:text-purple-500"></i>
                <span className="hidden">Tube</span>
              </a>
              <a
                href="https://www.linkedin.com/in/CapoBrain/"
                target="blank"
                rel="noreferrer"
                className="btn-sm-square rounded-circle me-2"
              >
                <i className="fab fa-linkedin-in text-xl text-gray-900 hover:text-purple-500"></i>
                <span className="hidden">In</span>
              </a>
              <a
                href="https://wa.me/923111122144"
                target="blank"
                rel="noreferrer"
                className="nav-fill btn-sm-square rounded-circle me-0"
              >
                <i className="fa-brands fa-whatsapp text-xl text-gray-900 hover:text-purple-500"></i>
                <span className="hidden">sapp</span>
              </a>
            </div>
            <span className="text-lg text-gray-500 text-center block">
              ©<a href="https://pagedone.io/">pagedone</a> 2024, All rights
              reserved.
            </span>
          </div>
        </div>
      </footer> */}
      <footer className="relative z-10 mt-10" style={{
          backgroundImage: `url(${Footer_img})`, 
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}>
        <section className="ft-container pt-4">
          <div className="mx-auto">
            <div className="mx-auto pt-10">
              {/* <Link to="/" className="max-w-3xl mx-auto flex sm:hidden justify-center">
                <img
                  src={Logo}
                  alt="Capobrain logo Affordable School Management Software"
                  className="w-60 h-16"
                />
              </Link> */}
              <div className="sm:flex justify-between py-4">
                <ul className="flex text-lg items-center justify-center gap-4 flex-row md:gap-6 transition-all duration-500 sm:py-10 py-6">
                  <li>
                    <Link
                      className=" text-gray-800 hover:text-purple-500"
                      to="/contact/"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" text-gray-800 hover:text-purple-500"
                      to="/about/"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" text-gray-800 hover:text-purple-500"
                      to="/privacy-policy"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" text-gray-800 hover:text-purple-500"
                      to="/term-and-services"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" text-gray-800 hover:text-purple-500"
                      to="/help/"
                    >
                      Help
                    </Link>
                  </li>
                </ul>
                <div className="flex space-x-4 sm:pt-5 justify-center items-center">
                  <a
                    href="https://www.facebook.com/CapoBrainOfficial"
                    target="blank"
                    rel="noreferrer"
                    className="nav-fill btn-sm-square rounded-circle"
                  >
                    <i className="fab fa-facebook-f text-xl text-gray-900 hover:text-purple-500"></i>
                    <span className="hidden">book</span>
                  </a>
                  <a
                    href="https://www.instagram.com/capobrain?igsh=dzBpYTU3ZGk2bG1z"
                    target="blank"
                    rel="noreferrer"
                    className="nav-fill btn-sm-square rounded-circle me-0"
                  >
                    <i className="fa-brands fa-instagram text-xl text-gray-900 hover:text-purple-500"></i>
                    <span className="hidden">gram</span>
                  </a>
                  <a
                    href="https://twitter.com/BrainCapo"
                    target="blank"
                    rel="noreferrer"
                    className="nav-fill btn-sm-square rounded-circle me-2"
                  >
                    <i className="fab fa-twitter text-xl text-gray-900 hover:text-purple-500"></i>
                    <span className="hidden">tter</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@CapoBrain"
                    target="blank"
                    rel="noreferrer"
                    className="nav-fill btn-sm-square rounded-circle me-2"
                  >
                    <i className="fab fa-youtube text-xl text-gray-900 hover:text-purple-500"></i>
                    <span className="hidden">Tube</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/CapoBrain/"
                    target="blank"
                    rel="noreferrer"
                    className="btn-sm-square rounded-circle me-2"
                  >
                    <i className="fab fa-linkedin-in text-xl text-gray-900 hover:text-purple-500"></i>
                    <span className="hidden">In</span>
                  </a>
               
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="absolute bottom-0 left-0 z-[-1]">
              <svg
                width={217}
                height={150}
                viewBox="0 0 217 229"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-pulse"
              >
                <path
                  d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                  fill="url(#paint0_linear_1179_5)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1179_5"
                    x1="76.5"
                    y1={281}
                    x2="76.5"
                    y2="1.22829e-05"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8467e5" stopOpacity="0.18" />
                    <stop offset={1} stopColor="#7653aa" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute right-10 sm:top-10 bottom-0  z-[-1]">
              <svg
                width={75}
                height={75}
                viewBox="0 0 75 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-pulse"
              >
                <path
                  d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                  fill="url(#paint0_linear_1179_4)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1179_4"
                    x1="-1.63917e-06"
                    y1="37.5"
                    x2={75}
                    y2="37.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8866c0" stopOpacity="0.31" />
                    <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </section>
      </footer>
      <div className="bg-purple-800 py-4  text-gray-100">
        <div className="ft-container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              Capobrain © 2020
              {new Date().getFullYear() > 2020 &&
                ` - ${new Date().getFullYear()}`}{" "}
              All Rights Reserved.
            </div>
            <a
              href="https://technicmentors.com/"
              target="_blank"
              rel="noreferrer"
              className="px-4 w-full text-center sm:w-auto sm:text-left"
            >
              Developed with love by Technic Mentors.
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
