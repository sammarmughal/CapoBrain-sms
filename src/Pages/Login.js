import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const onchange = async (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!credentials.email || !emailRegex.test(credentials.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!credentials.password || credentials.password.length < 4) {
      newErrors.password = "Password must be at least 4 characters long.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      const { email, password } = credentials;
  
      try {
        const res = await fetch("https://capobrain-backend.vercel.app/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
  
        const json = await res.json();
        const errorElement = document.getElementById("number"); // Assuming "number" is where you want to show errors.
        if (!res.ok) {
          if (errorElement) {
            errorElement.innerText = json.error || "Something went wrong.";
          }
          Swal.fire({
            title: "Error!",
            text: json.error || "Failed to login. Please try again.",
            icon: "error",
            confirmButtonText: "OK",
          });
          return;
        } else{

        sessionStorage.setItem("User", JSON.stringify(json));
        if (json.email === "capobrain@gmail.com") {
          navigate("/adminpanel");
        } else {
          navigate("/userprofile");
        }
  
        Swal.fire({
          title: "Success!",
          text: "Login successful",
          icon: "success",
          confirmButtonText: "OK",
        });}
      } catch (error) {
        console.error("Error logging in:", error);
        Swal.fire({
          title: "Error!",
          text: "An unexpected error occurred. Please try again.",
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
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Access your Capobrain School Management System account. Login to manage school administration, student information, fees, attendance, grades, and more with our School ERP software."
        />
        <meta
          name="keywords"
          content="Capobrain Login, School Management System Login, School ERP Login, User Login, Admin Login, Capobrain School ERP, School Software Login, School Management Login"
        />
        <meta name="robots" content="index, follow" />
        <title>User Login - Capobrain | School Management System Login</title>

        <meta
          property="og:title"
          content="User Login - Capobrain | School Management System Login"
        />
        <meta
          property="og:description"
          content="Login to your Capobrain account and access the full features of the School Management System. Manage school operations, student data, and more with ease."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="YOUR_LOGIN_PAGE_URL" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="User Login - Capobrain | School Management System Login"
        />
        <meta
          name="twitter:description"
          content="Login to your Capobrain School Management System account to manage student information, attendance, fees, and more. Access the best school ERP software in Pakistan."
        />
        <meta name="twitter:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1 className="heading-hero">Sign In </h1>
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
      <section className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 opacity-50 blur-xs to-indigo-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 sm:min-w-[520px] w-full">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">
                  Sign in Form of CapoBrain
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <form onSubmit={handlesubmit}>
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative mb-6">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="input-bar peer"
                        value={credentials.email}
                        onChange={onchange}
                        placeholder="Type inside me"
                      />
                      <label htmlFor="email" className="input-label">
                        Enter Email
                      </label>
                      {errors.email && (
                        <span className="text-sm text-red-500">
                          {errors.email}
                        </span>
                      )}
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type={passwordVisible ? "text" : "password"}
                        className="input-bar peer"
                        id="passowrd"
                        name="password"
                        placeholder="Enter Password"
                        value={credentials.password}
                        onChange={onchange}
                      />
                      <label className="input-label" htmlFor="passsword">
                        Enter Password
                      </label>{" "}
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

                    <div className="relative py-2">
                      <button className="text-white rounded-md px-6 py-1 btn-anim">
                        Login
                      </button>
                    </div>
                    <p className="text-sm text-center text-gray-500 ">
                      Not a member yet?{" "}
                      <Link
                        to="/signup"
                        className="font-medium text-indigo-600 hover:underline"
                      >
                        Sign up
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
