import React from "react";
import Allied from "../img/AVATARS/allied-schools-software.png";
import AIS from "../img/AVATARS/abdullah-international-school-ERP.png";
import BFS from "../img/AVATARS/best-bright-future-school.png";
import TWS from "../img/AVATARS/tameer-e-wattan-schools-solutions.png";
import TES from "../img/AVATARS/the-educators-school-software.png";
import Qurtaba from "../img/AVATARS/qurtaba-school-in-pakistan.png"
import { Link } from "react-router-dom";
const Avatars = () => {
  return (
    <div className="w-full px-4 pt-10 lg:pt-20 pb-8" id="faq">
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto sm:mb-12 max-w-[1050px] text-center lg:mb-20">
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-black sm:text-4xl">
            Join Our School Software Community in Pakistan           </h2>
            <p className="sm:text-lg text-gray-500 font-medium text-justify sm:text-center">
            Discover why our <strong>School Management System (SMS)</strong> and Comprehensive School ERP Software Solutions is trusted by users globally, empowering seamless management and educational needs with our best school management software.
            </p>
            <div className="my-6 pt-3">
              <Link
                to="/requestdemo"
                className="btn-anim px-5 py-3 text-lg tracking-wider text-white rounded-full md:px-8 group"
              >
                Become a Member
              </Link>
            </div>
            <div className="flex space-x-2 items-center justify-center animate-out zoom-in duration-200 delay-300">
              <div className="flex space-x-2 items-center flex-col md:flex-row">
                <div className="flex -space-x-2 overflow-hidden p-2">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                    src={Allied}
                    loading="lazy"
                    alt="Allied School Management System"
                  />
                   <img
                    className="h-10 w-10 hidden rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                    src={Allied}
                    alt="Best School Management System and Software ERP Solutions in Pakistan"
                    loading="lazy"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                    src={AIS}
                    alt="Abdullah International School Management System"
                    loading="lazy"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                    src={TES}
                    alt="The Educators School Management System"
                    loading="lazy"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                    src={BFS}
                    alt="Bright Future School Management System"
                    loading="lazy"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                    src={TWS}
                    alt="Tameer-e-Wattan School Management System"
                    loading="lazy"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                    src={Qurtaba}
                    alt="Qurtaba School Management System"
                    loading="lazy"
                  /> 
                </div>
                <div className="block gap-1 text-left"><p className="font-semibold">50+ Schools and Growing</p> <p className="text-neutral-600 text-xs font-medium">Since 2020</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatars;
