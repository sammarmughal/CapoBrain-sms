import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link   } from "react-router-dom";
const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };
  return (
    <section className="py-6 ">
      <div className="cb-container p-4 mx-auto sm:p-10">
        <div className="mb-12 space-y-4 text-center">
          <h3 className="mb-3 heading-body">Pricing</h3>
          <p className="px-4 sm:px-8 lg:px-24 text-neutral-600">
            CapoBrain School Management Software offers flexible pricing plans
            tailored to fit the needs of schools, providing great value for
            every institution.
          </p>

          <div>
            <button
              onClick={handleToggle}
              className={`px-4 py-1 font-semibold border rounded-l-lg transition-colors duration-300 ${
                isMonthly
                  ? "text-white btn-anim"
                  : "text-gray-800 border-gray-400"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={handleToggle}
              className={`px-4 py-1 font-semibold border rounded-r-lg transition-colors duration-300 ${
                !isMonthly
                  ? "btn-anim text-white"
                  : "text-gray-800 border-gray-400"
              }`}
            >
              Annually
            </button>
          </div>
        </div>
        <div className="grid max-w-md grid-cols-1 gap-8 sm:gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full">
          {[
            {
              name: "CapoBrain Essentials",
              price: isMonthly ? "2500PKR" : "2500PKR",
              description: "For schools looking to digitalize basic operations efficiently.",
              features: [
                "Reception Management",
                "Student & Staff Management with Task Assignment",
                "Teachers’ Portal",
                "Student & Parent Portal",
                "Biometric Attendance Management for Students and Staff",
                "Comprehensive Fee & Payment Management with Automated Reminders",
                "Salary, Advances & Loan Management for Staff",
                "Expense & Financial Administration",
                "Inventory & Resource Management for Academic Supplies",
                "Certificates & ID Card Generation Tool",
                "Timetable & Scheduling Management System",
                "Transport Management System with Route Optimization",
                "Basic Reporting System",
              ],
            },
            {
              name: "CapoBrain Momentum",
              price: isMonthly ? "5000PKR" : "5000PKR",
              description: "For schools aiming to streamline operations and enhance academic performance.",
              features: [
                "Online Daily Diary for Parent-Teacher Communication",
                "Admission Test Automation & Management",
                "Interactive Learning Guidelines for Teachers and Students",
                "Streamlined Exam, Grading & Results Management",
                "Summer Tasks & Resource Management",
                "Comprehensive Library Management with Digital Integration",
                "Sports & Extracurricular Activities Management",
                "School Website Management with Dynamic Features",
                "Real-Time Notifications and Instant Information Sharing",
                "Multi-Campus/Branch Integration for Unified Operations",
                "Role-Based Access Control for Secure User Management",
                "Advanced Reporting & Analytics",
                "Parent-Teacher Communication Portal",
              ],
            },
            {
              name: "CapoBrain Excellence",
              price: isMonthly ? "10000PKR" : "10000PKR",
              description: "For forward-thinking schools embracing advanced technology and innovation.",
              features: [
                "Learning Management System (LMS) for E-Learning & Blended Education",
                "AI-Powered Reporting and Analytics for Data-Driven Decisions",
                "Auto Paper Generation Aligned with Curriculum Standards",
                "Computer-Based Exams for Modern Assessment Practices",
                "Mobile App Support for Anytime Access",
                "Student Progress Tracking & Performance Analytics",
                "Seamless Integration with Modern Educational Tools",
                "Advanced Dynamic Website Features",
                "Integration with Third-Party Educational Tools & APIs",
              ],
            },
          ].map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col overflow-hidden relative border-2 rounded-md dark:border-violet-600"
            >
              <div>
                <span className="absolute right-0 top-7 z-[-1] animate-pulse">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#3056D3" stopOpacity="0.09" />
                        <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute right-4 top-4 z-[-1] animate-pulse">
                  <svg
                    width="41"
                    height="89"
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4">
                <p className="text-2xl font-black text-black">{plan.name}</p>
                <p className="text-2xl font-semibold text-black">
                  {plan.price}
                  <span className="text-xl text-gray-900">/mo</span>
                </p>
                <p className="text-center">{plan.description}</p>
              </div>
              <div className="flex flex-col items-center px-2 py-8">
                <ul className="self-stretch flex-1 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex justify-start mx-4 space-x-2">
                      <div className="w-8 h-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6 text-violet-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                       </div>
                       <div className="w-full"><span className="text-sm text-gray-600">{feature}</span></div>
                    </li>
                  ))}
                </ul>
                <Link to="/signup">
                <button className="px-8 py-3 mt-6 text-lg font-semibold rounded items-end sm:mt-12 btn-anim text-white">
                  Sign up
                </button>
                </Link>
              </div>
             
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Pricing;
