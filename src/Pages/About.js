import React, { useState, useEffect } from "react";
import bgp from "../img/background-pattern-desktop.svg";
import about_bg from "../img/about-background-school-management-system.jpg";
import open from "../img/icon-plus.svg";
import close from "../img/icon-minus.svg";
import avatar from "../img/icon-star.svg";
import phone from "../img/capobrain-phone.png";
import tablet from "../img/capobrain-tab.png";
import Desktop from "../img/capobrain-desktop.png";
import About from "../img/about-us-sms.jpg";
import Testimonials from "../Components/Testimonials";
const AboutSection = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Features", path: "javascript:void(0)" },
    { title: "Integrations", path: "javascript:void(0)" },
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Pricing", path: "javascript:void(0)" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const testimonials = [
    {
      text: "I have been using pagedone for several months now, and I must say that it has made my life a lot easier. The platform's intuitive interface and ease of use have allowed me to manage my finances more effectively and make informed investment decisions. I particularly like the product's auto-tracking feature, which has saved me a lot of time and effort.",
      imgSrc: "#",
      alt: "Emily's testimonial image",
    },
    {
      text: "I have been using pagedone for several months now, and I must say that it has made my life a lot easier. The platform's intuitive interface and ease of use have allowed me to manage my finances more effectively and make informed investment decisions. I particularly like the product's auto-tracking feature, which has saved me a lot of time and effort.",
      imgSrc: "#",
      alt: "Ethan's testimonial image",
    },
    {
      text: "I have been using pagedone for several months now, and I must say that it has made my life a lot easier. The platform's intuitive interface and ease of use have allowed me to manage my finances more effectively and make informed investment decisions. I particularly like the product's auto-tracking feature, which has saved me a lot of time and effort.",
      imgSrc: "#",
      alt: "Olivia's testimonial image",
    },
  ];
  const servicesData = [
    {
      title: "Web Development & Design",
      description:
        "Custom web applications tailored to your business needs. We use cutting-edge technologies to deliver fast, responsive, and scalable solutions.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
    },
    {
      title: "Mobile App Development",
      description:
        "Innovative mobile applications for iOS and Android. We create user-friendly apps that engage your audience and drive business growth.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      ),
    },
    {
      title: "Custom Software Development",
      description:
        "Our software development services include comprehensive business solutions tailored to meet specific needs through effective design, development, and testing processes.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
    },
    {
      title: "Cybersecurity",
      description:
        "Protect your digital assets with our comprehensive cybersecurity solutions. We offer threat detection, risk assessment, and security consulting services.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
        />
      ),
    },
    {
      title: "Cloud Solutions",
      description:
        "Leverage the power of cloud computing for your business. We provide cloud migration, management, and optimization services to enhance your IT infrastructure.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      ),
    },
    {
      title: "AI & Machine Learning",
      description:
        "Harness the power of artificial intelligence and machine learning. We develop smart solutions that automate processes and provide valuable predictions.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
        />
      ),
    },
  ];  
  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <a href="javascript:void(0)">
        <img
          src="https://www.floatui.com/logo-dark.svg"
          width={120}
          height={50}
          alt="Float UI logo"
        />
      </a>
      <div className="md:hidden">
        <button
          className="menu-btn text-gray-400 hover:text-gray-300"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
  return (
    <>
      <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1 className="mb-3 text-3xl font-bold leading-[1.2] text-white sm:text-5xl">
            Transforming Education with the 
                      <br />
                      Premier School Management System                    </h1>
            <p className="max-w-2xl mx-auto text-gray-200">
              Invest intelligently and discover a better way to manage your
              entire wealth easily with our School Management System (SMS).
            </p>
          </div>
        </div>
        <div
          className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
      </section>
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-9">
            <div className="img-box flex items-center">
              <img
                src={Desktop}
                width="1519"
                height="557"
                loading="eager"
                alt="Meditation on iPhone"
                className="lg:mx-auto object-cover hidden lg:flex"
              />
              <img
                src={tablet}
                width="319"
                height="557"
                loading="eager"
                alt="Meditation on iPhone"
                className="lg:mx-auto object-cover hidden sm:flex lg:hidden"
              />
              <img
                src={phone}
                width="319"
                height="557"
                loading="eager"
                alt="Meditation on iPhone"
                className="lg:mx-auto object-cover flex sm:hidden"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center lg:col-span-2">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-3xl lg:text-4xl text-black mb-9 max-lg:text-center relative">
                  Welcome To Capobrain School Management Software{" "}
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Introducing Capobrain, a leading school management system
                  (SMS) designed to streamline operations and enhance efficiency
                  for educational institutions. Whether you are managing a
                  bustling school or a sprawling university, our school
                  management system integrates all aspects of campus life. From
                  student admissions and attendance tracking to staff management
                  and curriculum planning, Capobrain simplifies complex
                  administrative tasks, making it the ideal solution for modern
                  educational environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-3xl lg:text-4xl text-black mb-9 max-lg:text-center">
                  We are Creative Since 2020
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Our School Management Platform goes beyond aesthetics,
                  prioritizing accessibility and usability. Every element, from
                  the tiniest detail to the grandest layout, enhances
                  functionality and user satisfaction.
                </p>
              </div>
            </div>
            <div className="img-box">
              <img
                src={About}
                alt="About Us School Management System"
                className="block object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="cb-container relative mx-auto py-8">
        <div className="absolute top-20 left-2 w-[250px] sm:w-[500px] h-[500px] bg-[#D1208A80] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-32 w-[250px] sm:w-[500px] h-[500px] bg-[#FFB20080] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-2000"></div>
        <div className="hidden xl:block absolute bottom-10 left-32 w-[250px] sm:w-[500px] h-[500px] bg-[#FFB20080] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-10 right-52 w-[250px] sm:w-[500px] h-[500px] bg-[#CAEEF580] rounded-full mix-blend-multiply filter blur-[150px] opacity-70 animate-blob animation-delay-4000"></div>
        <h1 className="sm:text-4xl text-3xl font-bold text-center text-black mb-12 animate-fade-in">
          Technic Mentors IT Consulting Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#7a12d4]  mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {service.icon}
              </svg>
              <h2 className="text-xl font-semibold text-[#7a12d4]  mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="pt-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope sm:text-4xl text-3xl text-center text-gray-900 font-bold mb-14">
            Our results in numbers
          </h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl transform transition-all duration-300 hover:scale-105 animate-fade-in shadow-lg shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  50+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                  Schools Using Our Software
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                  Trusted by over 500 schools to streamline operations, manage student data, and enhance educational outcomes.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white transform transition-all duration-300 hover:scale-105 animate-fade-in p-6 rounded-2xl shadow-lg shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  120+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                  Students Managed
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                  Our platform manages data for over 120,000 students, ensuring seamless academic and administrative workflows.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white transform transition-all duration-300 hover:scale-105 animate-fade-in p-6 rounded-2xl shadow-lg shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                99%
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                  Customer Satisfaction Rate
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                  Achieving a 99% satisfaction rate by delivering reliable, user-friendly, and efficient software solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
};

export default AboutSection;
