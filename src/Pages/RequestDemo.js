import React, { useState, useRef } from "react";
import CapobrainDemo from "../img/capobrain-demo.avif";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";


const RequestDemo = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    schoolName: "",
    number: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    schoolName: "",
    number: "",
  });
  const navigate = useNavigate();
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", schoolName: "", number: "" };
    if (!credentials.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!credentials.email || !emailRegex.test(credentials.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }
    if (!credentials.number || credentials.number.length < 10) {
      newErrors.number = "Please enter a valid contact number.";
      isValid = false;
    }
    const schoolNameRegex = /^[A-Za-z\s]+$/; 
  if (!credentials.schoolName.trim()) {
    newErrors.schoolName = "School name is required.";
    isValid = false;
  } else if (!schoolNameRegex.test(credentials.schoolName.trim())) {
    newErrors.schoolName = "School name must only contain alphabets.";
    isValid = false;
  }
  setErrors(newErrors);
  return isValid;
};
const formRef = useRef();
  const handlesubmit = async (e) => {
    e.preventDefault();
    const { name, email, schoolName, number } = credentials;

    if (validateForm()) {
      try {
        const res = await fetch("https://capobrain-backend.vercel.app/api/auth/signUpUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, schoolName, number }),
        });
  
        const data = await res.json();
        console.log(data);
  
        if (res.ok) {
          sessionStorage.setItem("signUser", JSON.stringify(data.user));  
          await emailjs.sendForm(
            "service_922xtbv",
            "template_ce4uvoh",
            formRef.current,
            "IbhvChmY_-f7TeB2E"
          );  
          setCredentials({
            name: "",
            email: "",
            schoolName: "",
            number: "",
          });
          Swal.fire({
            title: "Success!",
            text: "Request has send successfully!",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => navigate("/demo"));
        } else {
          Swal.fire({
            title: "Error!",
            text: data.message || "An error occurred while signing up.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        console.error("Error during signup:", error);
        Swal.fire({
          title: "Error!",
          text: "An unexpected error occurred. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please fix the errors in the form.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
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
          content="Request a free demo of Capobrain’s School Management System today! Explore the powerful features of our School ERP software, including fee management, attendance tracking, student data, and more. Get a personalized demo tailored to your school's needs."
        />
        <meta
          name="keywords"
          content="Capobrain Request Demo, School Management System Demo, School ERP Demo, Request a Demo, School Software Demo, Free School ERP Demo, School Management System Features, Demo Capobrain School ERP"
        />
        <meta name="robots" content="index, follow" />
        <title>Request Demo - Capobrain | School Management System Demo</title>

        <meta
          property="og:title"
          content="Request Demo - Capobrain | School Management System Demo"
        />
        <meta
          property="og:description"
          content="Request a personalized demo of Capobrain’s School Management System. See how our School ERP software can simplify school administration, student management, fee collection, and more."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="YOUR_REQUEST_DEMO_PAGE_URL" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Request Demo - Capobrain | School Management System Demo"
        />
        <meta
          name="twitter:description"
          content="Request a demo of Capobrain’s School Management System. Discover the features of our School ERP software for better school administration, including fee management, attendance, and student data."
        />
        <meta name="twitter:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1 className="heading-hero">Request the Free CapoBrain Demo </h1>
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
      <section
        className="bg-cover bg-center relative bg-fixed"
        style={{ backgroundImage: `url(${CapobrainDemo})` }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="h-screen flex justify-center items-center relative ">
          <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-purple-700 text-center">
                Hang On A Minute!
              </h2>
              <h3 className="text-center py-3 text-neutral-500">
                You're almost there, just fill in this information to get the
                credentials for the demo. 
              </h3>
            </div>
            <form onSubmit={handlesubmit} ref={formRef}>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer input-bar mb-2"
                  id="name"
                  name="name"
                  value={credentials.name}
                  onChange={onchange}
                  placeholder="Enter your Name"
                />
                <label className="input-label" htmlFor="name">
                  Name
                </label>
                {errors.name && (
                  <div className="text-sm text-red-500">{errors.name}</div>
                )}
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="email"
                  className="peer input-bar mb-2"
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={onchange}
                  placeholder="Email Address"
                />
                <label className="input-label" htmlFor="email">
                  Email address
                </label>
                {errors.email && (
                  <div className="text-sm text-red-500">{errors.email}</div>
                )}
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="number"
                  className="peer input-bar mb-2"
                  id="number"
                  name="number"
                  value={credentials.number}
                  onChange={onchange}
                  placeholder="Whatsapp Number"
                />
                <label className="input-label" htmlFor="number">
                  Contact Number
                </label>
                {errors.number && (
                  <div className="text-sm text-red-500">{errors.number}</div>
                )}
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer input-bar mb-2"
                  id="schoolName"
                  name="schoolName"
                  value={credentials.schoolName}
                  onChange={onchange}
                  placeholder="School Name"
                />
                <label className="input-label" htmlFor="schoolName">
                  School Name
                </label>
                {errors.schoolName && (
                  <div className="text-sm text-red-500">{errors.schoolName}</div>
                )}
              </div>
              <div className="relative py-2">
                <button type="submit" className="text-white rounded-md px-6 py-1 btn-anim">
                  Send Request{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default RequestDemo;
