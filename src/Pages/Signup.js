import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CapobrainDemo from "../img/signup-capobrain.png";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import twittercard from "../img/twiiter-card.jpg";


const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", password: "", number: "" };
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

    if (!credentials.password || credentials.password.length < 4) {
      newErrors.password = "Password must be at least 4 characters long.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const res = await fetch(
          "https://capobrain-backend.vercel.app/api/auth/signUpUser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          }
        );

        if (res.ok) {
          Swal.fire({
            title: "Success!",
            text: "You have signed up successfully!",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            setCredentials({
              name: "",
              email: "",
              password: "",
              number: "",
            });
            navigate("/userlogin");
          });
        } else {
          const errorData = await res.json();
          Swal.fire({
            title: "Error!",
            text: errorData.message || "Failed to sign up. Please try again.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "An unexpected error occurred. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }};

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
          content="Create your Capobrain account to access our powerful School Management System. Sign up today to streamline school..."
        />
        <meta
          name="keywords"
          content="Capobrain Signup, School Management System Signup, School ERP Signup, User Signup, School Software Signup, School Management System Registration, Create Capobrain Account"
        />
        <meta name="robots" content="index, follow" />
        <title>User Signup | Create Your School Management Account</title>

        <meta
          property="og:title"
          content="User Signup - Capobrain | Create School Management Account"
        />
        <meta
          property="og:description"
          content="Sign up for Capobrain and get access to the best School Management System. Manage school operations, student data, and more with our comprehensive School ERP software."
        />
        <meta
          property="og:image"
          content={twittercard}
        />
        <meta property="og:url" content="https://capobrain.com/signup" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="User Signup - Capobrain | Create Your School Management Account"
        />
        <meta
          name="twitter:description"
          content="Create your Capobrain account to streamline school administration. Our School Management System helps you manage students, fees, attendance, and more."
        />
        <meta
          name="twitter:image"
          content={twittercard}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://capobrain.com/signup"/>

      </Helmet>

      <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1 className="heading-hero">
              User Signup - Create Your Capobrain Account
            </h1>
            <p className="max-w-2xl mx-auto text-gray-200">
              Signup now and create your school management account effortlessly.
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
      <section
        className="min-h-screen bg-cover bg-center relative bg-fixed"
        style={{ backgroundImage: `url(${CapobrainDemo})` }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="h-max py-20">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto mb-10">
            <div className="absolute inset-0 z-1 bg-gradient-to-r from-indigo-300 opacity-75 blur-xs to-purple-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg rounded-3xl sm:p-20 sm:min-w-[520px] w-full">
              <div className="max-w-md mx-auto">
                <div>
                  <h2 className="text-2xl font-semibold">
                    Welcome to CapoBrain
                  </h2>
                </div>
                <div className="divide-y divide-gray-200">
                  <form onSubmit={handlesubmit}>
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
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
                          <div className="text-sm text-red-500">
                            {errors.name}
                          </div>
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
                          <div className="text-sm text-red-500">
                            {errors.email}
                          </div>
                        )}
                      </div>
                      <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                          type={passwordVisible ? "text" : "password"}
                          className="peer input-bar mb-2"
                          id="password"
                          name="password"
                          placeholder="Password"
                          value={credentials.password}
                          onChange={onchange}
                        />
                        <label className="input-label" htmlFor="password">
                          Password
                        </label>
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        >
                          {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                        </button>
                      </div>
                      {errors.password && (
                        <span className="text-sm text-red-500">
                          {errors.password}
                        </span>
                      )}
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
                          Whatsapp Number
                        </label>
                        {errors.number && (
                          <div className="text-sm text-red-500">
                            {errors.number}
                          </div>
                        )}
                      </div>
                      <div className="relative py-2">
                        <button
                          type="submit"
                          className="text-white rounded-md px-6 py-1 btn-anim"
                        >
                          Sign up
                        </button>
                      </div>
                      <h3 className="text-sm text-center text-gray-500 ">
                        Already Have an Account?{" "}
                        <Link
                          to="/userlogin"
                          className="font-medium text-indigo-600 hover:underline"
                        >
                          Sign in
                        </Link>
                      </h3>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SignUp;
