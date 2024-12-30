import React from 'react';
import { Link } from 'react-router-dom';
const Welcome = () => {
  return (
    <div
      className="cb-container items-center w-10/12 grid lg:grid-cols-2 mx-auto overflow-x-hidden lg:grid xl:py-6"
      data-aos="fade-right"
      data-aos-duration="800"
    >
      {/* Text Content */}
      <div className="pr-2 md:mb-14 py-14 md:py-0">
        <h1 className="text-3xl font-bold text-purple-800 xl:text-4xl lg:text-3xl">
          <span className="block w-full">Welcome To Capobrain </span> School Management Software
        </h1>
        <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
        Capobrain is the ultimate School Management System (SMS) crafted to streamline operations and boost efficiency in educational institutions. Designed for schools and universities, Capobrain integrates key functions like admissions, attendance, staff management, and curriculum planning, making it an ideal school ERP software solution for modern educational administration. Recognized as one of the best school software solutions in Pakistan, Capobrain is an affordable option for both small schools and large universities. </p>
        <div className="mt-4">
          <Link
            to="/contact/"
            className="px-5 py-3 text-lg tracking-wider text-white bg-purple-500 rounded-lg md:px-8 hover:bg-purple-600 group"
          >
            <span>Explore More</span>
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
        <img
          id="heroImg1"
          className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
          src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png"
          alt="Education Software Solutions in Pakistan"
          width="500"
          height="488"
        />
      </div>
    </div>
  );
};

export default Welcome;
