import React from "react";
import schoolimg from "../img/school-management-system.jpg";
import schoolimg2 from "../img/school-management-software.jpg";

export default function Keyfeatures() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="py-8 md:py-16 w-11/12 lg:w-10/12 xl:w-[1200px] m-auto">
          <div className="space-y-16">
            {/* Advanced Facial Recognition */}
            <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-bold text-2xl">
                  How Our Best School Management Software Transforms Educational
                  Culture
                </h3>
                <p>
                  Our comprehensive School Management System and Best School
                  Management Software enhance the quality of academic
                  institutions by enabling efficient monitoring of daily
                  progress and performance. Our features set us apart, allowing
                  parents to stay informed about their children's performance
                  levels.
                </p>
              </div>
              <div className="mx-auto w-1/2 md:w-1/3">
                <img
                  className="w-full h-full cover rounded-lg"
                  src={schoolimg}
                  height={400}
                  alt="office content 1"
                />{" "}
              </div>
            </div>

            {/* Multi-Device Synchronization */}
            <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-evenly md:flex md:items-center md:flex-row-reverse">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-bold text-2xl">
                  All-in-One Solution for the Best School Management System
                </h3>
                <p>
                  Managing an educational institution involves numerous
                  challenges, from handling students, staff, timetables, exams,
                  class tests, attendance, fee collection, and accounts, to
                  providing parents with insights into their child’s performance
                  for reassurance. Parents are invested in tracking their
                  child's academic progress and need clear statistics.
                  Traditionally, schools have relied on large registers to
                  record attendance for students and staff and managed
                  admissions, exams, and test data manually. This process is
                  time-consuming and complex, underscoring the need for an
                  efficient school management system to streamline operations.
                </p>
              </div>
              <div className="mx-auto w-1/2 md:w-1/3">
                <img
                  className="w-full h-full cover rounded-lg"
                  src={schoolimg2}
                  height={450}
                  alt="office content 2"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
