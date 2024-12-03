import React from "react";
import Allied from "../img/AVATARS/allied-schools.png";
import AIS from "../img/AVATARS/abdullah-international-school.png";
import BFS from "../img/AVATARS/bright-future-school.png";
import TWS from "../img/AVATARS/tameer-e-wattan-schools.png";
import TES from "../img/AVATARS/the-educators-school.png";
import Qurtaba from "../img/AVATARS/qurtaba-school.png"
import { Link } from "react-router-dom";
const Avatars = () => {
  return (
    <div className="w-full px-4 pt-10 lg:pt-20 pb-8" id="faq">
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-[1050px] text-center lg:mb-20">
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-black sm:text-5xl">
            Join Our School Software Community           </h2>
            <p className="sm:text-xl text-lg text-gray-500 font-medium">
            Discover why our School Management System (SMS) is trusted by users globally, empowering seamless management and educational needs with our best school management software.
            </p>
            <div className="my-6 pt-3">
              <Link
                to="/requestdemo"
                className="btn-anim px-5 py-3 text-lg tracking-wider text-white rounded-full md:px-8 group"
              >
                <span>Become a Member</span>
              </Link>
            </div>
            <div className="flex space-x-2 items-center justify-center animate-out zoom-in duration-200 delay-300">
              <div className="flex space-x-2 items-center flex-col md:flex-row">
                <div className="flex -space-x-2 overflow-hidden p-2">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                    src={Allied}
                    alt="Allied School Management System"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                    src={AIS}
                    alt="Abdullah International School Management System"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                    src={TES}
                    alt="The Educators School Management System"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                    src={BFS}
                    alt="Bright Future School Management System"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                    src={TWS}
                    alt="Tameer-e-Wattan School Management System"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
                    src={Qurtaba}
                    alt="Qurtaba School Management System"
                  /> 
                </div>
                <div className="block gap-1 text-left"><p className="font-semibold">20+ Schools and Growing</p> <p className="text-neutral-600 text-xs font-medium">Since 2020</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatars;
