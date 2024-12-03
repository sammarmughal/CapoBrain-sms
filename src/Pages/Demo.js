import React, { useRef, useState } from "react";
import demoImg from "../img/demo-img.png"; 
import { Helmet } from "react-helmet";

export default function Demo() {

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Explore Capobrain’s live demo of our School Management System (SMS). See how our School ERP software works with real-world scenarios, including student management, fee collection, attendance tracking, and more. Try before you buy!"
        />
        <meta
          name="keywords"
          content="Capobrain Demo, School Management System Demo, School ERP Demo, Live Demo of School ERP, Try School Management Software, School ERP System Demo, Capobrain School Demo"
        />
        <meta name="robots" content="index, follow" />
        <title>Demo - Capobrain | Live School Management System Demo</title>

        <meta
          property="og:title"
          content="Demo - Capobrain | Live School Management System Demo"
        />
        <meta
          property="og:description"
          content="Check out the live demo of Capobrain’s School Management System. See how our School ERP software simplifies school operations, including student data management, fee processing, attendance tracking, and more."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="YOUR_DEMO_PAGE_URL" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Demo - Capobrain | Live School Management System Demo"
        />
        <meta
          name="twitter:description"
          content="Explore the live demo of Capobrain’s School Management System. Understand how our School ERP software can improve school administration, fee management, attendance, and student data tracking."
        />
        <meta name="twitter:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1 className="heading-hero">
              Schedule Your Free College & School Management Software Demo Today
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
      <div className="cb-container">
        <div className="container mx-auto px-4 py-12">
          <div className="md:flex justify-between gap-10">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">
                Experience a Live School Management System Demo
              </h2>
              <p>
                Discover how our top-rated school management software can
                streamline your administration tasks:
              </p>
              <p className="mt-2">
                Demo Link:{" "}
                <a
                  href="https://demo.capobrain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-700 underline"
                >
                  https://demo.capobrain.com/
                </a>
              </p>
              <h4 className="mt-6 font-semibold text-2xl">Demo Credentials</h4>
              <div className="flex flex-row gap-4 mt-4">
                <div className="w-full md:w-1/2">
                  <h5 className="text-indigo-700 text-lg font-semibold">
                    School Admin Login
                  </h5>
                  <p className="text-neutral-600">Username: CAPOUSER</p>
                  <p className="text-neutral-600">Password: 12345678</p>
                </div>
                <div className="w-full md:w-1/2">
                  <h5 className="text-indigo-700 text-lg font-semibold">
                    Student Portal Access
                  </h5>
                  <p className="text-neutral-600">Username: CAPO0923S001</p>
                  <p className="text-neutral-600">Password: 12345678</p>
                </div>
              </div>
              <div className="flex flex-row gap-4 mt-4">
                <div className="w-full md:w-1/2">
                  <h5 className="text-indigo-700 text-lg font-semibold">
                    Teacher Portal Login
                  </h5>
                  <p className="text-neutral-600">Username: CAPO0923T001</p>
                  <p className="text-neutral-600">Password: 12345678</p>
                </div>
                <div className="w-full md:w-1/2">
                  <h5 className="text-indigo-700 text-lg font-semibold">
                    Parent Portal Access
                  </h5>
                  <p className="text-neutral-600">Username: CAPO0923P001</p>
                  <p className="text-neutral-600">Password: 12345678</p>
                </div>
              </div>
            </div>
            <div className="w-full md:mt-0 mt-5 md:w-1/2 flex justify-center items-center">
            <img
              className="w-full object-cover h-auto"
              src={demoImg}
              alt="School ERP Software Demo"
            />           
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
