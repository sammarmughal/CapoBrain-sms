import React from "react";
import { MdOutlineSupportAgent, MdOutlineQueryStats } from "react-icons/md";
import { FaTicket } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CusrtomerSupport from "../img/What-is-Customer-Support.png";
import hero_helcenter from "../img/knowledgebase-banner.png";
import FAQs from "../Components/Faq";
import { Helmet } from "react-helmet";

const Help = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Visit Capobrain's Help Center for support and resources on using our School Management System. Find answers to common questions, troubleshooting guides, and more. Get the help you need to make the most of our School ERP software for efficient school management."
        />
        <meta
          name="keywords"
          content="Capobrain, Help Center, School Management System Help, School ERP Support, School Software FAQ, Troubleshooting School Management Software, School ERP Guide, Capobrain Support, School Management Resources"
        />
        <meta name="robots" content="index, follow" />
        <title>
          Help Center - Capobrain | School Management System Support
        </title>
        <meta
          property="og:title"
          content="Help Center - Capobrain | School Management System Support"
        />
        <meta
          property="og:description"
          content="Capobrain's Help Center provides comprehensive support for our School Management System. Find FAQs, troubleshooting tips, and user guides to help you navigate and use our School ERP software effectively."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="YOUR_HELP_CENTER_PAGE_URL" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Help Center - Capobrain | School Management System Support"
        />
        <meta
          name="twitter:description"
          content="Get help and support for Capobrain's School Management System at our Help Center. Access FAQs, troubleshooting guides, and tips to use our School ERP software for efficient school management."
        />
        <meta name="twitter:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="relative">
        <div className="relative z-40 mx-auto max-w-5xl px-6 py-20 text-center md:px-12 md:py-16">
          <h1 className="text-3xl leading-[60px] mt-20 text-white font-semibold md:text-4xl lg:text-5xl">
            <div className="sm:mt-2">
              <span className="underline decoration-purple-700 underline-offset-4">
                Capobrain Help Center
              </span>
            </div>
          </h1>
          <p className="my-4 text-lg font-medium leading-2 text-gray-100 md:text-xl">
            Welcome to the CapoBrain Help Center. We're here to provide the
            assistance and guidance you need for using our School Management
            Software effectively. Whether you need support with setup,
            troubleshooting, or optimizing CapoBrain's school software
            solutions, we're ready to help you every step of the way.
          </p>
        </div>
        <div className="absolute inset-0 z-30 bg-purple-900 bg-opacity-60"></div>

        <img
          className="absolute inset-0 w-full h-full object-cover z-20 bg-center"
          src={hero_helcenter}
          alt="Capobrain School Management System Help Center"
        />
      </div>
      <div className="h-full w-full bg-gray-100 py-12 lg:py-28 p-4 lg:p-8">
        <div className="grid gap-14 md:grid-cols-3 md:gap-5">
          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-purple-700 shadow-lg shadow-purple-500/40">
              <FaTicket className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              Streamlined Ticketing
            </h1>
            <p className="px-4 text-gray-500">
              Easily log and track issues through our school management helpdesk
              software for swift resolution and seamless communication with our
              support team.
            </p>
          </div>

          <div
            data-aos-delay="150"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-purple-700 shadow-lg shadow-purple-500/40">
              <MdOutlineSupportAgent className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              Tailored Support
            </h1>
            <p className="px-4 text-gray-500">
              Receive customized assistance to address the unique challenges of
              your institution with our dedicated school management system
              support.
            </p>
          </div>
          <div
            data-aos-delay="300"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-purple-700 shadow-purple-500/40">
              <MdOutlineQueryStats className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              Continuous Improvements
            </h1>
            <p className="px-4 text-gray-500">
              Share your feedback and suggestions to help us continuously
              improve CapoBrain's educational management software.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[85rem] mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h2 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">
              <span className="text-purple-700">Uh Oh! </span>
              Having An Issue?
            </h2>
            <p className="mt-3 text-lg text-gray-800">
              Encounter a problem while using CapoBrain’s school management
              platform? Let us know, and we’ll work on a fix. Your feedback is
              invaluable in helping us maintain a smooth user experience for our
              education software solutions.
            </p>
            <div className="mt-2">
              <h2 className="text-2xl font-semibold mb-4">
                How to Report an Issue:
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Briefly explain what went wrong.</li>
                <li>
                  If you can, show us how to make the bug happen again
                  (step-by-step).
                </li>
                <li>Copy and paste any error messages that pop up.</li>
              </ul>
              <p className="mt-4">
                Need further assistance?{" "}
                <Link to="/userlogin" className="text-blue-500 hover:underline">
                  Generate a ticket
                </Link>{" "}
                at our help center, and our support team will guide you through
                resolving your issue.
              </p>
            </div>
          </div>
          <div className="relative ms-4">
            <img
              className="w-full rounded-md"
              src={CusrtomerSupport}
              alt="Hero Image"
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6"></div>
            <div className="absolute bottom-0 start-0">
              <svg
                className="w-2/3 ms-auto h-auto text-white"
                width="630"
                height="451"
                viewBox="0 0 630 451"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="531"
                  y="352"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="140"
                  y="352"
                  width="106"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="482"
                  y="402"
                  width="64"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="433"
                  y="402"
                  width="63"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="384"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="328"
                  width="50"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="303"
                  width="49"
                  height="58"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="392"
                  width="49"
                  height="59"
                  fill="currentColor"
                />
                <rect
                  x="44"
                  y="402"
                  width="66"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="234"
                  y="402"
                  width="62"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="334"
                  y="303"
                  width="50"
                  height="49"
                  fill="currentColor"
                />
                <rect x="581" width="49" height="49" fill="currentColor" />
                <rect x="581" width="49" height="64" fill="currentColor" />
                <rect
                  x="482"
                  y="123"
                  width="49"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="507"
                  y="124"
                  width="49"
                  height="24"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="49"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <FAQs />
        <div className="flex justify-center items-center w-full">
          <button className="btn-anim px-5 py-3 text-lg tracking-wider text-white rounded-full md:px-8 group">
            <Link to="/faq">View More Faqs</Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default Help;
