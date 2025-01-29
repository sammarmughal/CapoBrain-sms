import React from "react";
import { Link } from "react-router-dom";
import Desktop from "../../img/Ultimate-Guide-to-Capobrain-School-Management-Systems.png";
import { Helmet } from "react-helmet";
import twittercard from "../../img/twiiter-card.jpg";

const UserManual = () => {
  
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Explore the comprehensive user manual for Capobrain Cloud-Based School ERP Software. Learn how to use our School ERP software."
        />
        <meta
          name="keywords"
          content="Capobrain User Manual, Cloud-Based School ERP Software Manual, School ERP User Guide, School Software Manual, Capobrain School Software Guide, How to Use School ERP, School Management User Manual"
        />
        <meta name="robots" content="index, follow" />
        <title>
          User Manual - Ultimate Guide to School Management Systems
        </title>

        <meta
          property="og:title"
          content="User Manual - Capobrain | Learn How to Use Cloud-Based School ERP Software"
        />
        <meta
          property="og:description"
          content="Access the detailed user manual for Capobrain’s Cloud-Based School ERP Software. Get step-by-step instructions on how to manage student data, fees, attendance, and more with our School ERP software."
        />
        <meta property="og:image" content={twittercard} />
        <meta property="og:url" content="https://capobrain.com/usermanual/" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="User Manual - Capobrain | Learn How to Use Cloud-Based School ERP Software"
        />
        <meta
          name="twitter:description"
          content="Read the user manual for Capobrain’s Cloud-Based School ERP Software. Learn how to use all features of our School ERP software to manage school administration, attendance, fees, and more."
        />
        <meta name="twitter:image" content={twittercard} />
        <meta name="twitter:card" content="summary_large_image" />
       <link rel="canonical" href="https://capobrain.com/usermanual/"/>

      </Helmet>

      <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1
              className="heading-hero">
              Ultimate Guide to Capobrain School Management Systems
            </h1>
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
      <div className="cb-container my-4">
        <h2 className="max-w-5xl text-center sm:mb-6 pt-6 sm:pt-16 pb-5  heading-body leading-none tracking-tight sm:text-4xl md:mx-auto">
          {/* <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-18 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-12 sm:block animate-pulse"
            >
              <defs>
                <pattern
                  id="07690130-d013-42bc-83f4-90de7ac68f76"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative"></span>
          </span>{" "} */}
          Capobrain <span> User</span> Guide
        </h2>
        <p className="sm:text-lg sm:mt-4" style={{ textAlign: "justify" }}>
          Discover how to unlock the full potential of{" "}
          CapoBrain’s Educational Software with our <strong>Ultimate Guide to School Management Systems.</strong> This guide provides
          step-by-step instructions on using CapoBrain’s comprehensive features,
          making it the ultimate{" "} online education management system.
        </p>
        <p className="sm:text-lg mt-4" style={{ textAlign: "justify" }}>
          The CapoBrain User Guide covers everything from
          course creation, grade tracking, and{" "}
          attendance management to real-time collaboration
          between students, teachers, and administrators. Learn how to
          efficiently manage resources, access detailed analytics, and implement
          secure access controls through our{" "}
          <strong>Cloud-Based School Management Platform</strong>.
        </p>
        <p className="sm:text-lg mt-4" style={{ textAlign: "justify" }}>
          Whether you're an educator, student, or school administrator, this
          manual ensures you make the most of CapoBrain’s features.
          Revolutionize your experience with{" "}
          <strong>CapoBrain’s ERP software for schools</strong>, empowering
          modern education with innovative, user-friendly tools. Explore all
          functionalities by reading our complete guide today.
        </p>
        <p className="sm:text-lg mt-4" style={{ textAlign: "justify" }}>
          For further resources on online learning and skill development, visit{" "}
          <Link
            to="https://mentorsacademia.com/"
            style={{ textDecoration: "none" }}
            target="blank"
          >
            Mentors Academia
          </Link>
          , our partner platform for modern education solutions.
        </p>
      </div>
      <div className="cb-container mx-auto sm:py-10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="lg:w-4/6 mb-6 lg:mb-12 min-h-fit">
            <h2 className="heading-body">
              Streamlining Education Management
              <br />
              by optimizing every process.
            </h2>
            <p className="mt-4">
             Ultimate Guide to Capobrain School Management Systems a seamless platform
              for educational administration. From attendance tracking to grade
              management, it ensures that educators and staff can efficiently
              handle daily tasks with ease and precision.
            </p>
            <div className="mt-8 flex justify-center sm:justify-normal"> 
              <Link
                className=" btn-anim  text-white rounded-full py-4 px-8"
                to="/usermanual/dashboard"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
          <div className="relative sm:w-1/2 mt-4 lg:mt-0 flex items-center justify-center mx-auto">
            <img
              className="h-full w-full object-cover "
              src={Desktop}
              loading="lazy"
              alt="Ultimate Guide to Capobrain School Management Systems"
              title="Ultimate Guide to Capobrain School Management Systems"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default UserManual;
