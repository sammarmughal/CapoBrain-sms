import React from "react";
import FeaturesContent from "../Components/Features";
import capobrain from "../img/Capobrainheader.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Features = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Explore the powerful features of Capobrain's School Management System. Our School ERP software offers a range of tools to streamline administrative tasks, improve communication, manage student data, and more. Affordable, customizable, and mobile-friendly solutions for schools of all sizes."
        />
        <meta
          name="keywords"
          content="Capobrain, School Management Software, School ERP Features, School Software Features, Student Information System, School Fee Management, School Attendance Software, Timetable Scheduling, Parent-Teacher Communication, School Exam Management, Mobile-Friendly School ERP, Customizable School Software"
        />
        <meta name="robots" content="index, follow" />
        <title>
          Features - Capobrain | School Management Software with Advanced Tools
        </title>

        <meta
          property="og:title"
          content="Features - Capobrain | School Management Software with Advanced Tools"
        />
        <meta
          property="og:description"
          content="Discover the advanced features of Capobrain's School Management System. Our ERP software offers tools like fee management, student attendance, timetable scheduling, and more to help schools in Pakistan manage their operations efficiently."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="YOUR_FEATURES_PAGE_URL" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Features - Capobrain | School Management Software with Advanced Tools"
        />
        <meta
          name="twitter:description"
          content="Explore Capobrain’s School Management System features, including student information, fee management, attendance tracking, and more. Our customizable, mobile-friendly School ERP software helps schools streamline operations."
        />
        <meta name="twitter:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1 className="heading-hero">
              Standout Features of Our Comprehensive
              <br />
              School Management System
            </h1>
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
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-3 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block animate-pulse"
              >
                <defs>
                  <pattern
                    id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative mr-1.5">The &#32;</span>
            </span>
            &#32;Key Features of Capobrain's School Management System
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Over 20+ Modules you&nbsp;
             <i className="fa fa-heart heart heartcolor text-red-600"></i> to use CapoBrain
          </p>
        </div>
        <FeaturesContent />
      </section>
      <section className="relative isolate overflow-hidden bg-purple-900">
        <div className="flex z-50 items-center justify-center py-20 relative">
          <div className="max-w-full z-50 flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Learn more about our <br />
              <span className="text--500">
                
                Advanced School Management Software
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Maximize efficiency with CapoBrain, your school management software. Simplify operations and prioritize student success.
            </p>
            <div className="mt-5 flex items-center justify-center gap-x-6">
              <Link
                to="/requestdemo"
                className="base-button min-h-fit mx-0 btn-a btn-b bg-white text-[#7a12d4]"
                rel="noreferrer"
              >
                Get in touch with us →
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <div
              className="aspect-[1108/632] absolute z-75 w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            ></div>
            <div className="bg-purple-800 opacity-85 z-30 inset-0 absolute"></div>
            <img
              src={capobrain}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <svg
            className="absolute inset-0 z-10  h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="pattern"
                width="200"
                height="200"
                x="100%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth="0"
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#pattern)"
            />
          </svg>
        </div>
      </section>
    </>
  );
};
export default Features;
