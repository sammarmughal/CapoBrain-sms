import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Components/Navigation";
import data from "../data/usermanualData.json";
import phone from "../img/capobrain-phone.png";
import tablet from "../img/capobrain-tab.png";
import Desktop from "../img/capobrain-desktop.png";
const UserManual = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(data.sidemenu); // Load the menu from the JSON file
  }, []);

  return (
    <>
      <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1
              className="heading-hero"
              style={{ fontFamily: "Grotesk-Medium, Verdana, sans-serif" }}
            >
              Explore Our Software User Manual
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
        <h2 className="max-w-5xl text-center mb-6  pt-16 pb-5  heading-body leading-none tracking-tight text-purple-800 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
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
          </span>{" "}
          Capobrain <span> User</span> Guide
        </h2>
        <p className="text-lg mt-4" style={{ textAlign: "justify" }}>
          Discover how to unlock the full potential of{" "}
          <strong>CapoBrain’s School Management Software</strong> with our
          detailed <strong>software user manual</strong>. This guide provides
          step-by-step instructions on using CapoBrain’s comprehensive features,
          making it the ultimate{" "}
          <strong>online education management system</strong>.
        </p>
        <p className="text-lg mt-4" style={{ textAlign: "justify" }}>
          The <strong>CapoBrain User Guide</strong> covers everything from
          course creation, grade tracking, and{" "}
          <strong>attendance management</strong> to real-time collaboration
          between students, teachers, and administrators. Learn how to
          efficiently manage resources, access detailed analytics, and implement
          secure access controls through our{" "}
          <strong>school management platform</strong>.
        </p>
        <p className="text-lg mt-4" style={{ textAlign: "justify" }}>
          Whether you're an educator, student, or school administrator, this
          manual ensures you make the most of CapoBrain’s features.
          Revolutionize your experience with{" "}
          <strong>CapoBrain’s ERP software for schools</strong>, empowering
          modern education with innovative, user-friendly tools. Explore all
          functionalities by reading our complete guide today.
        </p>
        <p className="text-lg mt-4" style={{ textAlign: "justify" }}>
          For further resources on online learning and skill development, visit{" "}
          <a
            href="https://mentorsacademia.com/"
            style={{ textDecoration: "none" }}
            target="blank"
          >
            Mentors Academia
          </a>
          , our partner platform for modern education solutions.
        </p>
      </div>
    
      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:my-12 xl:max-w-6xl">

    <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        {/* <img className="h-full w-full object-cover" src="https://picsum.photos/id/1018/2000" alt="Winding mountain road"/> */}
        <img
          src={Desktop}
          width="1519"
          height="557"
          loading="eager"
          alt="Meditation on iPhone" 
          className="h-full w-full object-cover  hidden lg:flex"
        />
        <img
          src={tablet}
          width="319"
          height="557"
          loading="eager"
          alt="Meditation on iPhone"
          className="h-full w-full object-cover hidden sm:flex  lg:hidden"
        />
        <img
          src={phone}
          width="319"
          height="557"
          loading="eager"
          alt="Meditation on iPhone"
          className="h-full w-full object-cover flex sm:hidden"
        />
    </div>

    <div
        className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-8 lg:w-3/5 lg:left-0 lg:mt-10 lg:ml-20 xl:ml-8">
        <div className="flex flex-col p-12 md:px-8">
            <h2 className="heading-body">
            Streamlining Education Management
    <br />
    by optimizing every process.
</h2>
            <p className="mt-4">
            CapoBrain School Management System provides a seamless platform for school administration. From attendance tracking to grade management, it ensures that educators and staff can efficiently handle daily tasks with ease and precision.

            </p>
            <div className="mt-8">
            <Link
              className=" btn-anim  text-white rounded-full py-4 px-8"
              to="/usermanual/dashboard"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
    </div>

</div>
    </>
  );
};
export default UserManual;
