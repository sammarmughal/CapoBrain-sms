import React from "react";
import Logo from "../img/capobrain-logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-violet-100">
    <section className="ft-container">
        <div className="">
        <div className="py-8">
        <div className="sm:flex justify-between">
            <nav className="flex flex-wrap justify-center sm:text-lg font-medium">
                <div className="px-3 py-2"><Link to="/contact">Contact</Link></div>
                <div className="px-3 py-2"><Link to="/about">About</Link></div>
                <div className="px-3 py-2"><Link to="/privacy-policy">Privacy</Link></div>
                <div className="px-3 py-2"><Link to="/term-and-services">Terms</Link></div>
                <div className="px-3 py-2"><Link to="/help">Help</Link></div>
            </nav>
            <div className="flex items-center justify-center footerSocialLinks gap-2">
                    <a
                      href="https://www.facebook.com/CapoBrainOfficial"
                      target="blank"
                      rel="noreferrer" 
                      className="nav-fill btn-sm-square rounded-circle me-2"
                    >
                      <i className="fab fa-facebook-f text-xl text-black"></i>
                      <span className="hidden">book</span>
                    </a>
                    <a
                      href="https://twitter.com/BrainCapo"
                      target="blank"
                      rel="noreferrer" 
                      className="nav-fill btn-sm-square rounded-circle me-2"
                    >
                      <i className="fab fa-twitter text-xl text-black"></i>
                      <span className="hidden">tter</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@CapoBrain"
                      target="blank"
                      rel="noreferrer" 
                      className="nav-fill btn-sm-square rounded-circle me-2"
                    >
                      <i className="fab fa-youtube text-xl text-black"></i>
                      <span className="hidden">Tube</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/CapoBrain/"
                      target="blank"
                      rel="noreferrer" 
                      className="btn-sm-square rounded-circle me-2"
                    >
                      <i className="fab fa-linkedin-in text-xl text-black"></i>
                      <span className="hidden">In</span>
                    </a>                 
                    <a
                      href="https://wa.me/923111122144"
                      target="blank"
                      rel="noreferrer" 
                      className="nav-fill btn-sm-square rounded-circle me-0"
                    >
                      <i className="fa-brands fa-whatsapp text-xl text-black"></i>
                      <span className="hidden">sapp</span>
                    </a>
                  </div>
                  </div>
        </div>
          {/* <div className="flex flex-wrap">
            <div className="w-full lg:pr-4 sm:w-2/3 lg:w-4/12">
              <div className="mb-10 w-full">
                <Link to="/" className="mb-6 inline-block max-w-[160px]">
                  <img
                    src={Logo}
                    alt="Capobrain logo Affordable School Management Software"
                    className="max-w-full"
                  />
                </Link>
                <p className="mb-7 text-base text-body-color dark:text-dark-6">
                CapoBrain is an advanced AI-powered education management system designed to streamline school administration. Our customizable software enhances communication among educators, staff, and parents, with essential tools like SIS and fee management creating a seamless, efficient, and paper-free experience for institutions. </p>
              </div>
            </div>

            <LinkGroup header="Resources">
              <NavLink link="/requestdemo" label="Demo & Tutorials" />
              <NavLink link="/usermanual" label="User Manual" />
              <NavLink link="/about" label="About Us" />
              <NavLink link="/help" label="Knowledge Base" />
              <NavLink link="/blog" label="Blog" />
              <NavLink link="/faq" label="FAQs" />

            </LinkGroup>
            <LinkGroup header="Features">
              <NavLink link="/features" label="Features Overview" />
              <NavLink link="/features/data-security" label="Data Security" />
              <NavLink link="/features/school-management-mobile-app" label="Mobile App" />
              <NavLink link="/features/online-daily-diary-feature" label="Online Daily Diary" />
              <NavLink link="/features/streamlined-exam-grading-results-management" label="Exams & Results " />
              <NavLink link="/features/biometric-attendance" label="Biometric Attendance" />

            </LinkGroup>

            <div className="w-full sm:w-1/2 lg:w-4/12">
              <div className="mb-10 w-full">
              <h3 className="lg:mb-9 mb-4 lg:text-lg text-xl font-semibold text-dark">Contact Us</h3>
                  <div className="mt-4 d-flex flex-column contact-link">
                    <adiv className="pb-2" style={{ fontSize: "16px" }}>
                      <i className="fas fa-map-marker-alt  me-2"></i> Mumtaz
                      Market, Main GT Road, Gujranwala Pakistan 
                    </adiv>
                    <div className="py-2" style={{ fontSize: "16px" }}>
                      <i className="fa fa-phone me-2"></i> +92 311 112 2144
                    </div>
                    <div className="py-2 mb-2" style={{ fontSize: "16px" }}>
                      <i className="fas fa-envelope  me-2"></i>{" "}
                      info@capobrain.com
                    </div>
                  </div>
                  <h3 className="mb-3 lg:text-lg text-xl font-semibold text-dark">Follow Us</h3>
                  <div className="flex footerSocialLinks gap-2">
                    <a
                      href="https://www.facebook.com/CapoBrainOfficial"
                      target="blank"
                      rel="noreferrer" 
                      className="nav-fill btn-sm-square rounded-circle me-2"
                    >
                      <i className="fab fa-facebook-f text-black"></i>
                      <span className="hidden">book</span>
                    </a>
                    <a
                      href="https://twitter.com/BrainCapo"
                      target="blank"
                      rel="noreferrer" 
                      className="nav-fill btn-sm-square rounded-circle me-2"
                    >
                      <i className="fab fa-twitter text-black"></i>
                      <span className="hidden">tter</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@CapoBrain"
                      target="blank"
                      rel="noreferrer" 
                      className="nav-fill btn-sm-square rounded-circle me-2"
                    >
                      <i className="fab fa-youtube text-black"></i>
                      <span className="hidden">Tube</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/CapoBrain/"
                      target="blank"
                      rel="noreferrer" 
                      className="btn-sm-square rounded-circle me-2"
                    >
                      <i className="fab fa-linkedin-in text-black"></i>
                      <span className="hidden">In</span>
                    </a>                 
                    <a
                      href="https://wa.me/923111122144"
                      target="blank"
                      rel="noreferrer" 
                      className="nav-fill btn-sm-square rounded-circle me-0"
                    >
                      <i className="fa-brands fa-whatsapp text-black"></i>
                      <span className="hidden">sapp</span>
                    </a>
                  </div>
               
              </div>
            </div>
          </div> */}
        </div>
        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
                  <stop stopColor="#13C296" stopOpacity="0.31" />
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
            {new Date().getFullYear() > 2020 && ` - ${new Date().getFullYear()}`} All Rights Reserved.
          </div>
          <a href="https://technicmentors.com/" target="_blank" rel="noreferrer" className="px-4 w-full text-center sm:w-auto sm:text-left">
            Developed with ❤️ by Technic Mentors.
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="lg:mb-9 mb-4 lg:text-lg text-xl font-semibold text-dark">
            {header}
          </h4>
          <ul className="">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <Link
        to={link}
        className="inline-block text-base leading-loose text-body-color hover:text-purple-800"
      >
        {label}
      </Link>
    </li>
  );
};