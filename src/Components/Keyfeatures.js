import React from "react";
import schoolimg from "../img/school-management-system.jpg";
import schoolimg2 from "../img/school-management-software.jpg";

export default function Keyfeatures (){
    return(
        <>
            <div className="bg-gray-50">
        <div className="py-8 md:py-16 w-11/12 lg:w-10/12 xl:w-[1200px] m-auto">
          <div className="space-y-16">
            {/* Advanced Facial Recognition */}
            <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center">
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-bold	 text-2xl">
                The way we created a better culture in Education
                </h3>
                <p>
                Our comprehensive school management system & School Management
              Software adds quality of academic institutions by letting
              efficient monitoring of the day to day progress and performance.
              What made us the best is our features that allows parents to stay
              updated with their kids performance levels.
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
                Single Stop Solution For School Management
                </h3>
                <p>
                Managing any educational institute is not a piece of cake. Managing students, staff, timetable, exams, class test, attendance, fees collection, accounts, etc. It does not end here. Parents are always worried about their child's performance and they need satisfaction. They care about their child's academic statics. Moreover, we have seen schools using huge registers to mark the attendance of their students and staff. And we have also seen that schools manage their admission, exams data, class tests data, etc, manually. We know it takes a lot of time and is very difficult to manage.
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
    )
}