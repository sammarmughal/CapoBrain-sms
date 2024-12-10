import React from "react";
export const Benefit = () => {
    return(
        <>
            <div className="px-4 py-16 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-4xl md:mb-12">
        <h2 className="max-w-2xl mb-6 text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
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
          Benefits of Using CapoBrain's School Management Software
        </h2>
        <p className="text-base text-gray-500 md:text-lg">
          CapoBrain's school management software simplifies academic and
          administrative processes, enhancing productivity and ensuring seamless
          communication between teachers, students, and parents.
        </p>
      </div>
      <div className="grid mx-auto space-y-6 lg:grid-cols-2  lg:space-y-0 ">
        <div className="mx-auto space-y-6 w-full px-3">
          <ol className="mb-10 border-l border-gray-300 pl-8">
            {/* Step 1 */}
            <li>
              <div className="flex-start relative mt-3 flex items-center">
                <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary bg-slate-200 hover:scale-110">
                  <PiStarHalfBold
                    className="w-5 h-5 text-violet-800 transition-transform duration-300"
                    style={{
                      transitionTimingFunction:
                        "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
                    }}
                  />
                </div>
              </div>
              <div className="mb-12 mt-0.5">
                <h4 className="mb-1.5 text-xl font-semibold text-gray-800">
                  Library Management System
                </h4>
                <p className="mb-3 text-gray-500">
                  Our School Management System (SMS) simplifies the management
                  of library resources, including book issuance, returns, and
                  cataloging, specifically tailored for educational
                  institutions.
                </p>
              </div>
            </li>

            {/* Step 2 */}
            <li>
              <div className="flex-start relative flex items-center pt-3 ">
                <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary bg-slate-200 hover:scale-110">
                  <PiStarHalfBold
                    className="w-5 h-5 text-violet-800 transition-transform duration-300"
                    style={{
                      transitionTimingFunction:
                        "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
                    }}
                  />
                </div>
              </div>
              <div className="mb-12 mt-0.5">
                <h4 className="mb-1.5 text-xl font-semibold text-gray-800">
                  School Fee Management System{" "}
                </h4>
                <p className="mb-3 text-gray-500">
                  Streamline fee collection, generate comprehensive financial
                  reports, track payments, and efficiently manage student
                  accounts with our school management software.
                </p>
              </div>
            </li>
            <li>
              <div className="flex-start relative flex items-center pt-3">
                <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary bg-slate-200 hover:scale-110">
                  <PiStarHalfBold
                    className="w-5 h-5 text-violet-800 transition-transform duration-300"
                    style={{
                      transitionTimingFunction:
                        "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
                    }}
                  />
                </div>
              </div>
              <div className="mb-12 mt-0.5">
                <h4 className="mb-1.5 text-xl font-semibold text-gray-800">
                  Grade and Report Card Generation
                </h4>
                <p className="mb-3 text-gray-500">
                  Effortlessly calculate and generate accurate grades and report
                  cards with our school ERP software solutions, ensuring timely
                  and efficient results effectively.
                </p>
              </div>
            </li>

            <li>
              <div className="flex-start relative flex items-center pt-3">
                <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary bg-slate-200 hover:scale-110">
                  <PiStarHalfBold
                    className="w-5 h-5 text-violet-800 transition-transform duration-300"
                    style={{
                      transitionTimingFunction:
                        "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
                    }}
                  />
                </div>
              </div>
              <div className="mb-12 mt-0.5">
                <h4 className="mb-1.5 text-xl font-semibold text-gray-800">
                  Data Security{" "}
                </h4>
                <p className="mb-3 text-gray-500">
                  Safeguard sensitive student and staff information with
                  advanced security features and routine backups, ensuring
                  compliance with educational data protection standards.
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div className="mx-auto space-y-6 w-full px-3">
          <ol className="mb-10 border-l border-gray-300 pl-8">
            {/* Step 1 */}
            <li>
              <div className="flex-start relative mt-3 flex items-center">
                <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary bg-slate-200 hover:scale-110">
                  <PiStarHalfBold
                    className="w-5 h-5 text-violet-800 transition-transform duration-300"
                    style={{
                      transitionTimingFunction:
                        "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
                    }}
                  />
                </div>
              </div>
              <div className="mb-12 mt-0.5">
                <h4 className="mb-1.5 text-xl font-semibold text-gray-800">
                  Parent-Teacher Communication
                </h4>
                <p className="mb-3 text-gray-500">
                  Provides a seamless channel for communication between parents
                  and teachers through messaging and notifications, enhancing
                  collaboration in the student information system (SIS).{" "}
                </p>
              </div>
            </li>

            {/* Step 2 */}
            <li>
              <div className="flex-start relative flex items-center pt-3 ">
                <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary bg-slate-200 hover:scale-110">
                  <PiStarHalfBold
                    className="w-5 h-5 text-violet-800 transition-transform duration-300"
                    style={{
                      transitionTimingFunction:
                        "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
                    }}
                  />
                </div>
              </div>
              <div className="mb-12 mt-0.5">
                <h4 className="mb-1.5 text-xl font-semibold text-gray-800">
                  Intuitive Design
                </h4>
                <p className="mb-3 text-gray-500">
                  Our Best School Management Software ensures ease of use with a
                  user-friendly interface that requires minimal training,
                  enhancing the user experience for staff and students.
                </p>
              </div>
            </li>
            <li>
              <div className="flex-start relative flex items-center pt-3">
                <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary bg-slate-200 hover:scale-110">
                  <PiStarHalfBold
                    className="w-5 h-5 text-violet-800 transition-transform duration-300"
                    style={{
                      transitionTimingFunction:
                        "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
                    }}
                  />
                </div>
              </div>
              <div className="mb-12 mt-0.5">
                <h4 className="mb-1.5 text-xl font-semibold text-gray-800">
                  Automated Attendance Tracking
                </h4>
                <p className="mb-3 text-gray-500">
                  Simplifies attendance management through our School Management
                  System (SMS) by automatically recording student attendance,
                  reducing manual entry errors, and saving time for teachers.{" "}
                </p>
              </div>
            </li>

            <li>
              <div className="flex-start relative flex items-center pt-3">
                <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary bg-slate-200 hover:scale-110">
                  <PiStarHalfBold
                    className="w-5 h-5 text-violet-800 transition-transform duration-300"
                    style={{
                      transitionTimingFunction:
                        "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
                    }}
                  />
                </div>
              </div>
              <div className="mb-12 mt-0.5">
                <h4 className="mb-1.5 text-xl font-semibold text-gray-800">
                  Enhanced Communication{" "}
                </h4>
                <p className="mb-3 text-gray-500">
                  Our School Management System (SMS) facilitates seamless
                  communication between stakeholders, including parents,
                  teachers, and administrators, through instant messaging and
                  notifications
                </p>
              </div>
            </li>
          </ol>
        </div>
        
      </div>
    </div>
        </>
    )
}
