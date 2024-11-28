import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Login = () => {
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
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
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
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div class="relative gap-8 bg-inherit">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="input-bar peer mb-2"
                      placeholder="Type inside me"
                    />
                    <label for="username" className="input-label">
                      Enter Email
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="password"
                      className="input-bar peer"
                      id="exampleInput91"
                      placeholder="Enter Password"
                    />
                    <label className="input-label" for="exampleInput91">
                      Enter Password
                    </label>
                  </div>

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
