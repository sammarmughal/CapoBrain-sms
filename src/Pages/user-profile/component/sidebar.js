import React from "react";
import { IoTicket } from "react-icons/io5";
import { TiTicket } from "react-icons/ti";
import { Link } from "react-router-dom";
import { PiTicketFill } from "react-icons/pi";
import { GrTicket } from "react-icons/gr";


const Sidebar = () => {
  return (
    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-purple-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm font-light tracking-wide text-gray-300 uppercase">
                Main
              </div>
            </div>
          </li>
          <li>
            <Link to="/userprofile" className="admin-sidemenu">
            <span className="inline-flex justify-center items-center ml-4">
              <IoTicket className="w-6 h-6"></IoTicket>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Generate Tickets
              </span>
            </Link>
          </li>
          <li>
            <Link to="/userprofile/generated-tickets" className="admin-sidemenu">
              <span className="inline-flex justify-center items-center ml-4">
              <TiTicket className="w-6 h-6"></TiTicket>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Generated Tickets
              </span>
            </Link>
          </li>
          <li>
            <Link to="/userprofile/openstatus-tickets" className="admin-sidemenu">
              <span className="inline-flex justify-center items-center ml-4">
              <PiTicketFill className="w-6 h-6"></PiTicketFill>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                OpenStatus Tickets
              </span>
            </Link>
          </li>
          <li>
            <Link to="/userprofile/closestatus-tickets" className="admin-sidemenu">
              <span className="inline-flex justify-center items-center ml-4">
              <GrTicket className="w-6 h-5"></GrTicket>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                CloseStatus Tickets
              </span>
            </Link>
          </li>
         
        </ul>
        <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
          Copyright @2024
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
