import React, {  useState } from "react";
import Sidebar from "./component/sidebar";
import UserNav from "./component/user-nav";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const UserProfile = () => {
  const user = JSON.parse(sessionStorage.getItem("User"));
  const [ticket, setTicket] = useState({
    title: "",
    subject: "",
    message: "",
    severity: "",
  });
  const generateTicket = async (e) => {
    e.preventDefault();
    const titleError = document.getElementById("titleError");
    const severityError = document.getElementById("severityError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");
    const { title, subject, message, severity } = ticket;
    let Error = false;
    if (!title) {
      titleError.innerText = "Add Title";
      Error = true;
    } else {
      titleError.innerText = "";
    }
    if (!subject) {
      subjectError.innerText = "Add Subject";
      Error = true;
    } else {
      subjectError.innerText = "";
    }
    if (!message) {
      messageError.innerText = "Add Message";
      Error = true;
    } else {
      messageError.innerText = "";
    }
    if (!severity) {
      severityError.innerText = "Add Severity";
      Error = true;
    } else {
      severityError.innerText = "";
    }
    if (Error) {
      return;
    }
    const userId = user._id;
    const res = await fetch(
      "https://capobrain-backend.vercel.app/api/auth/support",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, subject, message, severity, userId }),
      }
    );
    const data = await res.json();
    if (res.ok) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your ticket generated successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      setTicket({
        title: "",
        subject: "",
        message: "",
        severity: "",
      });
      const templateParams = {
        to_name: user.name,
        to_email: user.email,
        from_name: "Capobrain",
        ticket_id: data.ticket.ticketId,
      };
      sendEmail(templateParams);
    }
  };

  const onchange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const sendEmail = (templateParams) => {
    emailjs.send(
      "service_wbh6u9i",
      "template_ip0yw0q",
      templateParams,
      "Hr6iXXlEEhpzr5dMO"
    );
  };
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Capobrain Admin Panel Home Page - Manage all school operations, including student records, fee management, attendance, and more with ease. Admin dashboard for seamless school management."
        />
        <meta
          name="keywords"
          content="Capobrain Admin Panel, School Management Admin Dashboard, School ERP Admin Panel, School Management System, Admin Dashboard for Schools, School Software Admin Panel"
        />
        <meta name="robots" content="index, follow" />
        <title>
          Admin Panel - Capobrain | School Management System Dashboard
        </title>

        <meta
          property="og:title"
          content="Admin Panel - Capobrain | School Management System Dashboard"
        />
        <meta
          property="og:description"
          content="Access the Capobrain Admin Panel to manage school operations. From student records to fee management, our dashboard provides complete control for school administrators."
        />
        <meta property="og:image" content="https://capobrain.com/static/media/capobrain-logo.adec461fe08022b24b28.png" />
        <meta property="og:url" content="https://capobrain.com/userprofile" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Admin Panel - Capobrain | School Management System Dashboard"
        />
        <meta
          name="twitter:description"
          content="The Capobrain Admin Panel helps school administrators manage all aspects of school operations, including student records, attendance, fee management, and more."
        />
        <meta name="twitter:image" content="https://capobrain.com/static/media/capobrain-logo.adec461fe08022b24b28.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black ">
        <UserNav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="mt-10 flex-col-reverse lg:flex lg:flex-row ">
            <div className="w-full md:w-3/5 p-4 sm:p-6 lg:ml-4 lg:p-8 ">
              <form onSubmit={generateTicket}>
                <div className="mb-8">
                  <h1 className="text-xl font-bold text-slate-600 mb-5 my-4">
                    User Profile
                  </h1>

                  <span className="text-gray-600">Generate the Tickets</span>
                </div>
                <div className="">
                  <div className="pb-4 w-full">
                    <label
                      htmlFor="title"
                      className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                    >
                      Title{" "}
                    </label>
                    <div className="flex">
                      <input
                        id="title"
                        name="title"
                        className="input-field w-full"
                        type="text"
                        value={ticket.title}
                        onChange={onchange}
                        placeholder="Enter the Title"
                      />
                    </div>
                    <div className="text-red-500" id="titleError"></div>

                  </div>
                  <div className="pb-4 w-full">
                    <label
                      htmlFor="subject"
                      className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                    >
                      Subject{" "}
                    </label>
                    <div className="flex">
                      <input
                        id="subject"
                        name="subject"
                        value={ticket.subject}
                        onChange={onchange}
                        className="input-field w-full"
                        type="subject"
                        placeholder="Enter your Subject"
                      />
                    </div>
                    <div id="subjectError" className="text-red-500"></div>
                  </div>
                  <div className="pb-4 w-full">
                    <label
                      className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold" htmlFor="severity"
                    >
                      Severity
                    </label>
                    <select
                      className="py-2 px-3 w-full rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      name="severity"
                      value={ticket.severity}
                      onChange={onchange}
                    >
                      <option>Select a Severity</option>
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                    <div id="severityError" className="text-red-500"></div>

                  </div>
                  <div className="pb-4 w-full">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="w-full py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      name="message"
                      value={ticket.message}
                      onChange={onchange}
                      placeholder="Type Content"
                    />
                    <div id="messageError" className="text-red-500"></div>

                  </div>
                  <div>
                    <button className="btn-anim mt-2 text-white rounded-full px-5 py-2">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex relative w-full md:w-2/5 p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 ">
                <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 border border-yellow-200 rounded-full shadow-inner lg:h-20 lg:w-20">
                  <svg
                    className="w-10 h-10 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="mb-3 text-xl font-bold lg:text-2xl">
                    Problem Resolution
                  </h5>
                  <p className="mb-6 text-lg text-gray-600">
                    Kindly provide a clear and concise explanation of the issue
                    you're encountering. The more detailed your description, the
                    better we can understand the problem and assist you
                    effectively. Please include any error messages, observable
                    symptoms, or specific situations where the issue arises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
