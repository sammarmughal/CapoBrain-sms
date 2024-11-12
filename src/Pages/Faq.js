import React, { useState, useEffect } from "react";
import bgp from "../img/background-pattern-desktop.svg";
import open from "../img/icon-plus.svg";
import close from "../img/icon-minus.svg";
import avatar from "../img/icon-star.svg";
const FAQs = () => {
  const [active, setActive] = useState(0);
  const data = [
    {
      heading: "What is CapoBrain?",
      paragraph:
        "CapoBrain is a comprehensive College &amp; School Management System designed to streamline administrative tasks, enhance reporting, and provide future predictions using Artificial Intelligence features. It is an all-in-one solution for both schools and colleges.",
      id: 1,
    },
    {
      heading: "Which programming languages are used to develop CapoBrain?",
      paragraph:
        "CapoBrain is developed using modern programming languages to ensure efficiency, scalability, and reliability, making it a top choice for educational institutions.",
      id: 2,
    },
    {
      heading: "Is CapoBrain suitable for both schools and colleges?",
      paragraph:
        "Yes, CapoBrain is designed to cater to the needs of both schools and colleges, offering tailored modules to fit each educational setting.",
      id: 3,
    },
    {
      heading: "How does the Postal Dispatch feature work?",
      paragraph:
        "The Postal Dispatch feature allows you to manage outgoing mail, track deliveries, and maintain a record of dispatched items, enhancing your administrative efficiency.",
      id: 4,
    },
    {
      heading: "Can I log phone calls using CapoBrain?",
      paragraph:
        "Yes, CapoBrain's Phone Call Log feature enables you to keep track of all incoming and outgoing phone calls efficiently, further streamlining your school management processes.",
      id: 5,
    },
    {
      heading: "How can I add teaching and non-teaching staff to CapoBrain?",
      paragraph:
        "You can easily add teaching and non-teaching staff profiles using the Staff module and assign relevant roles and responsibilities within the CapoBrain software.",
      id: 6,
    },
    {
      heading: "What is the Staff ToDo's feature used for?",
      paragraph:
        "The Staff ToDo's feature helps staff members manage their tasks, set priorities, and track progress on various assignments, making it an essential tool in our school ERP software.",
      id: 7,
    },
    {
      heading:
        "How can I manage student admissions with CapoBrain's Student Information System (SIS)?",
      paragraph:
        "CapoBrain's Student Admission module allows you to efficiently manage student admissions, maintain admission records, and track application statuses, providing a seamless experience for both schools and colleges.",
      id: 8,
    },
    {
      heading: "Can I review and manage student feedback in CapoBrain?",
      paragraph:
        "Yes, CapoBrain provides a dedicated module for reviewing student feedback, helping you understand student satisfaction and areas for improvement, crucial for enhancing your school's overall performance.",
      id: 9,
    },
    {
      heading:
        "How does the Leave Request feature work for staff and students in CapoBrain?",
      paragraph:
        "The Leave Request feature enables staff and students to request leaves, which can be reviewed and approved by administrators, making it easy to manage absences within the school management system.",
      id: 10,
    },
    {
      heading:
        "Can I manage fee payments and scholarships in CapoBrain's School Fee Management System?",
      paragraph:
        "Yes, CapoBrain offers comprehensive fee management capabilities, including fee collection, scholarship management, and fine adjustments, ensuring accurate financial tracking for your institution.",
      id: 11,
    },
    {
      heading: "How can I manage staff and student accounts using CapoBrain?",
      paragraph:
        "CapoBrain's Accounts module allows you to manage staff and student accounts, process salary payments, and maintain financial records efficiently, promoting organized financial management in educational institutions.",
      id: 12,
    },
    {
      heading:
        "How does the Inventory List feature help in managing school supplies?",
      paragraph:
        "The Inventory List feature enables you to track school supplies, manage inventory levels, and generate purchase orders as needed, ensuring your school operates efficiently without supply shortages.",
      id: 13,
    },
    {
      heading:
        "What types of reports can I generate with CapoBrain's reporting features?",
      paragraph:
        "CapoBrain offers a wide range of reports, including student attendance, staff accounts, fee reports, inventory reports, and more, to help you make informed decisions for your educational institution.",
      id: 14,
    },
    {
      heading:
        "How can I manage user roles and permissions in CapoBrain's User Management module?",
      paragraph:
        "CapoBrain's User Management module allows you to create user profiles, define roles, and assign specific permissions to ensure secure and controlled access to the system, enhancing data security.",
      id: 15,
    },
    {
      heading: "Can I review and manage student feedback in CapoBrain?",
      paragraph:
        "Yes, CapoBrain provides a dedicated module for reviewing student feedback, helping you understand student satisfaction and areas for improvement, crucial for enhancing your school's overall performance.",
      id: 16,
    },
    {
      heading:
        "Can I customize class schedules, subjects, and school timings in CapoBrain?",
      paragraph:
        "Yes, CapoBrain's Configurations module allows you to customize class schedules, assign subjects, and define school timings to suit your institution's needs, making it an adaptable solution.",
      id: 17,
    },
    {
      heading: "What is CapoBrain and how can it benefit schools and colleges?",
      paragraph:
        "CapoBrain is a comprehensive school/college management system designed to streamline administrative tasks, enhance communication between stakeholders, and improve overall efficiency. It offers features such as student enrollment, attendance tracking, exam management, fee collection, and parent-teacher communication, catering to diverse educational needs.",
      id: 18,
    },
    {
      heading: "How can I learn more about CapoBrain and its features?",
      paragraph:
        "You can visit the website capobrain.com for detailed information about CapoBrain's features, benefits, and pricing. Additionally, you can contact our team for a personalized demo and consultation on our school management software solutions.",
      id: 19,
    },
    {
      heading: "Is there customer support available for CapoBrain?",
      paragraph:
        "Yes, we provide dedicated customer support to assist you with any queries, technical issues, or assistance you may need with CapoBrain's school management software.",
      id: 20,
    },
    {
      heading: "How can I get updates and new features for CapoBrain?",
      paragraph:
        "We regularly update CapoBrain with new features and improvements. You will be notified of updates, and our support team will assist you with the upgrade process to ensure you have the latest school ERP software.",
      id: 21,
    },
    {
      heading:
        "Are there any hidden charges or additional fees for using CapoBrain?",
      paragraph:
        "CapoBrain's pricing is transparent, with no hidden charges. All fees and costs associated with using the software will be clearly communicated to you, ensuring an affordable school management solution.",
      id: 22,
    },
    {
      heading: "What is the pricing model for CapoBrain?",
      paragraph:
        "Please contact our sales team or visit our pricing page for detailed information on CapoBrain's pricing plans and licensing options for our school management platform.",
      id: 23,
    },
  ];
  return (
    <>
      <section className="relative bg-purple-800">
        
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1
              className="text-4xl lg:text-6xl font-[1000] text-white"
              style={{ fontFamily: "Grotesk-Medium, Verdana, sans-serif" }}
            >
              Freqently Asked Questions{" "}
            </h1>
            <p className="max-w-2xl mx-auto text-gray-200">
              Find answers to common questions about our School Management
              System (SMS). Learn how our platform can simplify your school’s
              administrative tasks, improve student data management, and enhance
              communication between parents, teachers, and administrators.
            </p>
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
      <section className="w-[100vw] h-auto flex relative justify-center items-center bg-Light_pink pb-10">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_1800px_at_100%_1200px,#d5c5ff,transparent)]"></div>
        </div>
        
        <div className="max-w-[380px] md:max-w-[800px] w-full md:w-full z-10 rounded-lg flex flex-col p-3 text-Dark_purple bg-white shadow-lg">
          <div className="flex items-center my-4">
            <img src={avatar} alt="" className="w-[1.6em] mr-6 md:w-[2em]" />
            <h1 className="text-3xl text-Dark_purple font-bold md:text-4xl">
              FAQs
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            {data.map((item) => (
              <div className="">
                <div className="flex justify-between p-2 hover:text-purple-600 items-center">
                  <h1 className="text-lg font-bold w-[75%] md:w-[90%] leading-6 tracking-wide mb-2  cursor-pointer">
                    {item.heading}
                  </h1>
                  <img
                    src={active === item.id ? close : open}
                    alt="open or close"
                    className="cursor-pointer w-[2.3em] md:w-[2.8em]"
                    onClick={() =>
                      active === item.id ? setActive(0) : setActive(item.id)
                    }
                  />
                </div>
                {active === item.id ? (
                  <p className="text-Grayish_purple p-2 text-[15px] duration-300 md:text-[16px] animate-fadeIn">
                    {item.paragraph}
                  </p>
                ) : (
                  <p></p>
                )}
                <hr />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default FAQs;
