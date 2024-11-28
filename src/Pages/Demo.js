import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";

export default function Demo() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    schoolname: "",
    phoneno: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const resetForm = () => {
    setCredentials({
      name: "",
      email: "",
      schoolname: "",
      phoneno: "",
      message: "",
    });
  };
  const formRef = useRef();

  const sendEmail = () => {
    const form = formRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const schoolname = form.schoolname.value.trim();
    const number = form.phoneno.value.trim();
    const message = form.message.value.trim();

    const nameI = document.getElementById("nameI");
    const emailI = document.getElementById("emailI");
    const schoolnameI = document.getElementById("schoolnameI");
    const numberI = document.getElementById("numberI");
    const messageI = document.getElementById("messageI");

    let hasError = false;

    if (!name) {
      nameI.innerText = "please fill name field";
      hasError = true;
    } else {
      nameI.innerText = " ";
    }
    if (!email) {
      emailI.innerText = "please fill email field";
      hasError = true;
    } else {
      emailI.innerText = " ";
    }
    if (!schoolname) {
      schoolnameI.innerText = "please fill school name field";
      hasError = true;
    } else {
      schoolnameI.innerText = " ";
    }
    if (!number) {
      numberI.innerText = "please fill number field";
      hasError = true;
    } else {
      numberI.innerText = " ";
    }
    if (!message) {
      messageI.innerText = "please fill message field";
      hasError = true;
    } else {
      messageI.innerText = " ";
    }

    if (hasError) {
      return;
    }
    emailjs
      .sendForm(
        "service_pj93zyr",
        "template_jude9n9",
        formRef.current,
        "2IXZCnlGYrCJooOAK"
      )
      .then((response) => {
        formRef.current.reset();
        resetForm();
        setSuccessMessage("Request sent successfully");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      });
  };
  const userSend = async () => {
    const { name, email, schoolname, phoneno, message } = credentials;
    await fetch("https://capobrain-backend.vercel.app/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, schoolname, phoneno, message }),
    });
    setCredentials({
      name: "",
      email: "",
      schoolname: "",
      phoneno: "",
      message: "",
    });
  };
  const onSubmission = (e) => {
    e.preventDefault();
    userSend();
    sendEmail();
  };
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Explore Capobrain’s live demo of our School Management System (SMS). See how our School ERP software works with real-world scenarios, including student management, fee collection, attendance tracking, and more. Try before you buy!"
        />
        <meta
          name="keywords"
          content="Capobrain Demo, School Management System Demo, School ERP Demo, Live Demo of School ERP, Try School Management Software, School ERP System Demo, Capobrain School Demo"
        />
        <meta name="robots" content="index, follow" />
        <title>Demo - Capobrain | Live School Management System Demo</title>

        <meta
          property="og:title"
          content="Demo - Capobrain | Live School Management System Demo"
        />
        <meta
          property="og:description"
          content="Check out the live demo of Capobrain’s School Management System. See how our School ERP software simplifies school operations, including student data management, fee processing, attendance tracking, and more."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="YOUR_DEMO_PAGE_URL" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Demo - Capobrain | Live School Management System Demo"
        />
        <meta
          name="twitter:description"
          content="Explore the live demo of Capobrain’s School Management System. Understand how our School ERP software can improve school administration, fee management, attendance, and student data tracking."
        />
        <meta name="twitter:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1 className="heading-hero">
              Schedule Your Free College & School Management Software Demo Today
            </h1>
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

      <div className="cb-container">
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-between gap-10">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">
                Experience a Live School Management System Demo
              </h2>
              <p>
                Discover how our top-rated school management software can
                streamline your administration tasks:
              </p>
              <p className="mt-2">
                Demo Link:{" "}
                <a
                  href="https://demo.capobrain.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-700 underline"
                >
                  https://demo.capobrain.com/
                </a>
              </p>
              <h4 className="mt-6 font-semibold text-2xl">Demo Credentials</h4>
              <div className="flex flex-row gap-4 mt-4">
                <div className="w-full md:w-1/2">
                  <h5 className="text-indigo-700 text-lg font-semibold">
                    School Admin Login
                  </h5>
                  <p className="text-neutral-600">Username: CAPOUSER</p>
                  <p className="text-neutral-600">Password: 12345678</p>
                </div>
                <div className="w-full md:w-1/2">
                  <h5 className="text-indigo-700 text-lg font-semibold">
                    Student Portal Access
                  </h5>
                  <p className="text-neutral-600">Username: CAPO0923S001</p>
                  <p className="text-neutral-600">Password: 12345678</p>
                </div>
              </div>
              <div className="flex flex-row gap-4 mt-4">
                <div className="w-full md:w-1/2">
                  <h5 className="text-indigo-700 text-lg font-semibold">
                    Teacher Portal Login
                  </h5>
                  <p className="text-neutral-600">Username: CAPO0923T001</p>
                  <p className="text-neutral-600">Password: 12345678</p>
                </div>
                <div className="w-full md:w-1/2">
                  <h5 className="text-indigo-700 text-lg font-semibold">
                    Parent Portal Access
                  </h5>
                  <p className="text-neutral-600">Username: CAPO0923P001</p>
                  <p className="text-neutral-600">Password: 12345678</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">
                Contact Us for a Free Software Demo
              </h2>
              <form ref={formRef} onSubmit={onSubmission}>
                {successMessage && (
                  <div className="alert alert-info">{successMessage}</div>
                )}
                <div className="space-y-4">
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer input-bar"
                      id="exampleInput90"
                      value={credentials.name}
                      onChange={onchange}
                    />
                    <label className="input-label" for="exampleInput90">
                      Name
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer input-bar"
                      id="exampleInput90"
                      value={credentials.email}
                      onChange={onchange}
                      placeholder="Email"
                    />
                    <label className="input-label" for="exampleInput90">
                      Email
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="number"
                      className="peer input-bar"
                      id="exampleInput90"
                      // value={credentials.phoneno}
                      // onChange={onchange}
                      placeholder="Whatsapp Number"
                    />
                    <label className="input-label" for="exampleInput90">
                      Whatsapp Number
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer input-bar"
                      id="exampleInput90"
                      value={credentials.schoolname}
                      onChange={onchange}
                      placeholder="School Name"
                    />
                    <label className="input-label" for="exampleInput90">
                      School Name
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                      className="peer input-bar"
                      name="message"
                      rows={6}
                      value={credentials.message}
                      onChange={onchange}
                      placeholder="Message"
                    ></textarea>
                    <label className="input-label" for="exampleInput90">
                      Message
                    </label>{" "}
                  </div>
                  <div className="mt-4 text-left">
                    <button
                      className="btn-anim text-white px-6 py-2 rounded"
                      type="submit"
                    >
                      Send Demo Request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
