import React from "react";
import { MdOutlineSupportAgent, MdOutlineQueryStats } from "react-icons/md";
import { FaTicket } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CusrtomerSupport from "../img/What-is-Customer-Support.png";
import FAQs from "../Components/Faq";
const Help = () => {
  return (
    <>
      <div className="relative">
        <div className="relative z-40 mx-auto max-w-5xl px-6 py-20 text-center md:px-12 md:py-16">
          <h1 className="text-3xl leading-[60px] mt-20 text-white font-semibold md:text-4xl lg:text-5xl">
            <div className="sm:mt-2">
              <span className="underline decoration-purple-600 underline-offset-4">
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
          className="absolute inset-0 w-full h-full object-cover z-20"
          src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
      </div>
      <div className="h-full w-full bg-gray-100 py-12 lg:py-28 p-4 lg:p-8">
        <div className="grid gap-14 md:grid-cols-3 md:gap-5">
          {/* First Card */}
          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-purple-400 shadow-lg shadow-purple-500/40">
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

          {/* Second Card */}
          <div
            data-aos-delay="150"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-purple-400 shadow-lg shadow-purple-500/40">
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
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-purple-400 shadow-inodgo-400/40">
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
              <span className="text-purple-400">Uh Oh! </span>
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
                Need further assistance? <Link to="#" className="text-blue-500 hover:underline">Generate a ticket</Link> at our help center,
                and our support team will guide you through resolving your
                issue.
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
      <FAQs/>
      </div>
    </>
  );
};
export default Help;
