import React from "react";
import Logo from "../img/capobrain-logo.png"
const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-violet-100 pb-10 pt-10">
    <section className="max-w-[1200px] mx-auto">
        <div className="container px-8 lg:px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:px-4 sm:w-2/3 lg:w-4/12">
              <div className="mb-10 w-full">
                <a href="/#" className="mb-6 inline-block max-w-[160px]">
                  <img
                    src={Logo}
                    alt="logo"
                    className="max-w-full"
                  />
                </a>
                <p className="mb-7 text-base text-body-color dark:text-dark-6">
                CapoBrain is an advanced AI-powered education management system that streamlines educational administration. Our customizable school management software solutions enhance communication among educators, staff, and parents, providing essential features like student information systems (SIS) and fee management. Revolutionize your institution with CapoBrain for a seamless, paper-free environment.
                </p>
              </div>
            </div>

            <LinkGroup header="Resources">
              <NavLink link="/#" label="SaaS Development" />
              <NavLink link="/#" label="Our Products" />
              <NavLink link="/#" label="User Flow" />
              <NavLink link="/#" label="User Strategy" />
            </LinkGroup>
            <LinkGroup header="Company">
              <NavLink link="/#" label="About TailGrids" />
              <NavLink link="/#" label="Contact & Support" />
              <NavLink link="/#" label="Success History" />
              <NavLink link="/#" label="Setting & Privacy" />
            </LinkGroup>

            <div className="w-full sm:w-1/2 lg:w-4/12">
              <div className="mb-10 w-full">
              <h3 className="mb-9 text-lg font-semibold text-dark">Contact Us</h3>
                  <div className="mt-4 d-flex flex-column contact-link">
                    <adiv className="pb-2" style={{ fontSize: "16px" }}>
                      <i className="fas fa-map-marker-alt  me-2"></i> Mumtaz
                      Market, Main GT Road, Gujranwala
                    </adiv>
                    <div className="py-2" style={{ fontSize: "16px" }}>
                      <i className="fa fa-phone me-2"></i> +923 111 122 144
                    </div>
                    <div className="py-2 mb-2" style={{ fontSize: "16px" }}>
                      <i className="fas fa-envelope  me-2"></i>{" "}
                      info@capobrain.com
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-dark">Follow Us</h3>
                  <div className="flex footerSocialLinks gap-2">
                    <a
                      href="https://www.facebook.com/CapoBrainOfficial"
                      target="blank"
                      className="nav-fill btn-sm-square rounded-circle me-2"
                    >
                      <i className="fab fa-facebook-f text-black"></i>
                      <span className="hidden">book</span>
                    </a>
                    <a
                      href="https://twitter.com/BrainCapo"
                      target="blank"
                      className="nav-fill btn-sm-square rounded-circle me-2"
                    >
                      <i className="fab fa-twitter text-black"></i>
                      <span className="hidden">tter</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@CapoBrain"
                      target="blank"
                      className="nav-fill btn-sm-square rounded-circle me-2"
                    >
                      <i className="fab fa-youtube text-black"></i>
                      <span className="hidden">Tube</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/CapoBrain/"
                      target="blank"
                      className="btn-sm-square rounded-circle me-2"
                    >
                      <i className="fab fa-linkedin-in text-black"></i>
                      <span className="hidden">In</span>
                    </a>
                    {/* <a
                      href="https://www.instagram.com/CapoBrain"
                      target="blank"
                      className="nav-fill btn-sm-square rounded-circle me-2"
                    >
                      <i className="fa-brands fa-instagram text-black"></i>
                      <span className="hidden">gram</span>
                    </a> */}
                    <a
                      href="https://wa.me/923111122144"
                      target="blank"
                      className="nav-fill btn-sm-square rounded-circle me-0"
                    >
                      <i className="fa-brands fa-whatsapp text-black"></i>
                      <span className="hidden">sapp</span>
                    </a>
                  </div>
               
              </div>
            </div>
          </div>
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
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-dark">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};