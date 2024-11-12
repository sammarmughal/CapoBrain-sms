import React, { useState } from "react";
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
      ];
    return(
        <>
      <section className="w-[100vw] h-auto flex relative justify-center items-center bg-Light_pink pb-10">
        <img
          src={bgp}
          alt="Pattern in purple"
          className="h-[250px] object-cover w-full absolute z-0 top-0"
        />
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
                <div className="flex justify-between p-2 hover:text-purple-700 items-center">
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
    )
}
export default FAQs;