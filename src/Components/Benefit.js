import React from "react";
import { IoLibraryOutline } from "react-icons/io5";
import { MdPeopleOutline, MdSecurity } from "react-icons/md";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { GrScorecard } from "react-icons/gr";
import { SiAntdesign } from "react-icons/si";
import { ImUserCheck } from "react-icons/im";
import { FaComments } from "react-icons/fa";

export const Benefit = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-4xl md:mb-12">
          <h2 className="max-w-2xl mb-6 text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              {/* <svg
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
              </svg> */}
        
              <span className="relative"></span>
            </span>{" "}
            Benefits of Using CapoBrain's Educational Management Software
          </h2>
          <p className="text-base text-gray-500 md:text-lg">
            CapoBrain's School ERP Software Solutions simplifies academic and
            administrative processes, enhancing productivity and ensuring
            seamless communication between teachers, students, and parents.
          </p>
        </div>
        <div className="grid mx-auto space-y-6 lg:grid-cols-2  lg:space-y-0 ">
          <div className="mx-auto space-y-6 w-full px-3">
            <div className="relative cursor-pointer ">
              <span
                className="absolute top-0 left-0 w-full h-full mt-1 ml-1  rounded-lg"
                style={{
                  background: "linear-gradient(180deg, #9b37f2, #7a12d4)",
                }}
              ></span>
              <div className="relative p-6 bg-white border-2 border-[#9b37f2]  rounded-lg hover:scale-105 transition duration-500">
                <div className="flex items-center">
                  <IoLibraryOutline className="text-xl w-10 mb-2 h-10 text-purple-800"></IoLibraryOutline>
                  <h3 className="my-2 ml-4 text-lg font-bold text-gray-800 ">
                    Library Management System
                  </h3>
                </div>
                <p className="text-gray-600">
                  Our School Management System (SMS) simplifies the management
                  of library resources, including book issuance, returns, and
                  cataloging, specifically tailored for educational
                  institutions.{" "}
                </p>
              </div>
            </div>
            <div className="relative cursor-pointer ">
              <span
                className="absolute top-0 left-0 w-full h-full mt-1 ml-1  rounded-lg"
                style={{
                  background: "linear-gradient(180deg, #9b37f2, #7a12d4)",
                }}
              ></span>
              <div className="relative p-6 bg-white border-2 border-[#9b37f2]  rounded-lg hover:scale-105 transition duration-500">
                <div className="flex items-center">
                  <FaRegMoneyBill1 className="text-xl w-10 mb-2 h-10 text-purple-800"></FaRegMoneyBill1>
                  <h3 className="my-2 ml-4 text-lg font-bold text-gray-800 ">
                    Fee Management System
                  </h3>
                </div>
                <p className="text-gray-600">
                  Streamline fee collection, generate comprehensive financial
                  reports, track payments, and efficiently manage student
                  accounts with our <strong>campus management software.</strong>{" "}
                </p>
              </div>
            </div>
            <div className="relative cursor-pointer ">
              <span
                className="absolute top-0 left-0 w-full h-full mt-1 ml-1  rounded-lg"
                style={{
                  background: "linear-gradient(180deg, #9b37f2, #7a12d4)",
                }}
              ></span>
              <div className="relative p-6 bg-white border-2 border-[#9b37f2]  rounded-lg hover:scale-105 transition duration-500">
                <div className="flex items-center">
                  <GrScorecard className="text-xl w-10 mb-2 h-10 text-purple-800"></GrScorecard>
                  <h3 className="my-2 ml-4 text-lg font-bold text-gray-800 ">
                    Grade and Report Card Generation
                  </h3>
                </div>
                <p className="text-gray-600">
                  Effortlessly calculate and generate accurate grades and report
                  cards with our <strong>school ERP software solutions</strong>,
                  ensuring timely and efficient results effectively.{" "}
                </p>
              </div>
            </div>
            <div className="relative cursor-pointer ">
              <span
                className="absolute top-0 left-0 w-full h-full mt-1 ml-1  rounded-lg"
                style={{
                  background: "linear-gradient(180deg, #9b37f2, #7a12d4)",
                }}
              ></span>
              <div className="relative p-6 bg-white border-2 border-[#9b37f2]  rounded-lg hover:scale-105 transition duration-500">
                <div className="flex items-center">
                  <MdSecurity className="text-xl w-10 mb-2 h-10 text-purple-800"></MdSecurity>
                  <h3 className="my-2 ml-4 text-lg font-bold text-gray-800 ">
                    Data Security{" "}
                  </h3>
                </div>
                <p className="text-gray-600">
                  Safeguard sensitive student and staff information with
                  advanced security features and routine backups, ensuring
                  compliance with educational data protection standards.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto space-y-6 w-full px-3">
            <div className="relative cursor-pointer ">
              <span
                className="absolute top-0 left-0 w-full h-full mt-1 ml-1  rounded-lg "
                style={{
                  background: "linear-gradient(180deg, #9b37f2, #7a12d4)",
                }}
              ></span>
              <div className="relative p-6 bg-white border-2 border-[#9b37f2]  rounded-lg hover:scale-105 transition duration-500">
                <div className="flex items-center">
                  <MdPeopleOutline className="text-xl w-10 mb-2 h-10 text-purple-800"></MdPeopleOutline>
                  <h3 className="my-2 ml-4 text-lg font-bold text-gray-800 ">
                    Parent-Teacher Communication
                  </h3>
                </div>
                <p className="text-gray-600">
                  Provides a seamless channel for communication between parents
                  and teachers through messaging and notifications, enhancing
                  collaboration in the student information system (SIS).{" "}
                </p>
              </div>
            </div>
            <div className="relative cursor-pointer ">
              <span
                className="absolute top-0 left-0 w-full h-full mt-1 ml-1  rounded-lg"
                style={{
                  background: "linear-gradient(180deg, #9b37f2, #7a12d4)",
                }}
              ></span>
              <div className="relative p-6 bg-white border-2 border-[#9b37f2]  rounded-lg hover:scale-105 transition duration-500">
                <div className="flex items-center">
                  <SiAntdesign className="text-xl w-10 mb-2 h-10 text-purple-800"></SiAntdesign>
                  <h3 className="my-2 ml-4 text-lg font-bold text-gray-800 ">
                    Intuitive Design{" "}
                  </h3>
                </div>
                <p className="text-gray-600">
                  Our{" "}
                  <strong>
                    Best Education Administration System in Pakistan
                  </strong>{" "}
                  ensures ease of use with a user-friendly interface that
                  requires minimal training, enhancing the user experience for
                  staff and students.
                </p>
              </div>
            </div>
            <div className="relative cursor-pointer ">
              <span
                className="absolute top-0 left-0 w-full h-full mt-1 ml-1  rounded-lg"
                style={{
                  background: "linear-gradient(180deg, #9b37f2, #7a12d4)",
                }}
              ></span>
              <div className="relative p-6 bg-white border-2 border-[#9b37f2]  rounded-lg hover:scale-105 transition duration-500">
                <div className="flex items-center">
                  <ImUserCheck className="text-xl w-10 mb-2 h-10 text-purple-800"></ImUserCheck>
                  <h3 className="my-2 ml-4 text-lg font-bold text-gray-800 ">
                    Automated Attendance Tracking
                  </h3>
                </div>
                <p className="text-gray-600">
                  Simplifies attendance management through our Educational
                  Institution Manager by automatically recording student
                  attendance, reducing manual entry errors, and saving time for
                  teachers.
                </p>
              </div>
            </div>
            <div className="relative cursor-pointer ">
              <span
                className="absolute top-0 left-0 w-full h-full mt-1 ml-1  rounded-lg"
                style={{
                  background: "linear-gradient(180deg, #9b37f2, #7a12d4)",
                }}
              ></span>
              <div className="relative p-6 bg-white border-2 border-[#9b37f2]  rounded-lg hover:scale-105 transition duration-500">
                <div className="flex items-center">
                  <FaComments className="text-xl w-10 mb-2 h-10 text-purple-800"></FaComments>
                  <h3 className="my-2 ml-4 text-lg font-bold text-gray-800 ">
                    Enhanced Communication
                  </h3>
                </div>
                <p className="text-gray-600">
                  Our School Information System (SIS) facilitates seamless
                  communication between stakeholders, including parents,
                  teachers, and administrators, through instant messaging and
                  notifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
