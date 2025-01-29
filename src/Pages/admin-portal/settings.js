import React, { useState,useRef } from "react";
import Sidebar from "./component/sidebar";
import AdminNav from "./component/admin-nav";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Change_password from "../../img/change-password.png";

const ChangePasswords = () => {
  const [passwordVisible, setPasswordVisible] = useState({
    oldpassword: false,
    newpassword: false,
    confirmpas: false,
  });
  const [formData, setFormData] = useState({
    email: "",
    oldpassword: "",
    newpassword: "",
    confirmpas: "",
  });
  const togglePasswordVisibility = (field) => {
    setPasswordVisible((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };
  const [errors, setErrors] = useState({
    email: "",
    oldpassword: "",
    newpassword: "",
    confirmpas: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: "",
      oldpassword: "",
      newpassword: "",
      confirmpas: "",
    };
    if (!formData.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }
    if (!formData.oldpassword) {
      newErrors.oldpassword = "Old password is required.";
      isValid = false;
    }
    if (!formData.newpassword) {
      newErrors.newpassword = "New password is required.";
      isValid = false;
    } else if (formData.newpassword.length < 4) {
      newErrors.newpassword =
        "New password must be at least 4 characters long.";
      isValid = false;
    }
    if (formData.newpassword !== formData.confirmpas) {
      newErrors.confirmpas =
        "New password and confirmation do not match.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const modalRef = useRef();

  const handleSubmit = async  (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const res = await fetch(
          "https://capobrain-backend.vercel.app/api/auth/changepassword",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              oldPassword: formData.oldpassword,
              newPassword: formData.newpassword,
              email: formData.email,
            }),
          }
        );

        const data = await res.json();

        if (res.ok) {
          Swal.fire({
            title: "Success!",
            text: "Your password has been updated successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });

          setFormData({
            email: "",
            oldpassword: "",
            newpassword: "",
            confirmpas: "",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: data.message || "Failed to change the password.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        console.error("Error during password change:", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred while changing the password.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }};


  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Capobrain Admin Panel - Change Password Page. Update and secure your account by changing your password. Protect your school management system with a strong password."
        />
        <meta
          name="keywords"
          content="Capobrain Admin Panel Change Password, Change Admin Password, Secure Admin Account, Admin Panel Password Update, Protect School Management System"
        />
        <meta name="robots" content="index, follow" />
        <title>Change Password - Capobrain Admin Panel</title>

        <meta
          property="og:title"
          content="Change Password - Capobrain Admin Panel"
        />
        <meta
          property="og:description"
          content="Update your password for enhanced security. Protect your account in Capobrain’s Admin Panel by using a strong, unique password to safeguard your school management system."
        />
        <meta property="og:image" content="https://capobrain.com/static/media/capobrain-logo.adec461fe08022b24b28.png" />
        <meta
          property="og:url"
          content="https://capobrain.com/adminpanel/changepassword"
        />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Change Password - Capobrain Admin Panel"
        />
        <meta
          name="twitter:description"
          content="Secure your Capobrain Admin Panel account by changing your password. Update to a stronger password for enhanced security and access control."
        />
        <meta name="twitter:image" content="https://capobrain.com/static/media/capobrain-logo.adec461fe08022b24b28.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="flex flex-col flex-auto flex-shrink-0 antialiased bg-white  text-black ">
        <AdminNav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="mt-10  flex">
            <div className="w-full md:w-3/5 p-4 sm:p-6 lg:ml-4  lg:p-8 ">
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <h1 className="text-xl font-bold text-slate-600 mb-5 my-4">
                    Admin Profile
                  </h1>

                  <span className="text-gray-600">
                    This information is secret so be careful
                  </span>
                </div>
                <div className="">
                  <div className="pb-4 w-full">
                    <label
                      htmlFor="email"
                      className="font-semibold text-gray-700 block pb-1"
                    >
                      Email{" "}
                    </label>
                    <div className="flex">
                      <input
                        id="email"
                        name="email"
                        className="input-field w-full"
                        type="email"
                        placeholder="Enter your Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.email && (
                      <div className="text-sm text-red-500">{errors.email}</div>
                    )}
                  </div>
                  <div className="pb-4">
                    <label
                      htmlFor="oldpassword"
                      className="font-semibold text-gray-700 block pb-1"
                    >
                      Old Password
                    </label>
                    <div className="relative">
                      <input
                        id="oldpassword"
                        name="oldpassword"
                        className="input-field w-full"
                        type={passwordVisible.oldpassword ? "text" : "password"}
                        placeholder="Enter your Old Password"
                        value={formData.oldpassword}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility("oldPassword")}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {passwordVisible.oldpassword ? (
                          <FaEye />
                        ) : (
                          <FaEyeSlash />
                        )}
                      </button>
                    </div>
                    {errors.oldpassword && (
                      <div className="text-sm text-red-500">{errors.oldpassword}</div>
                    )}
                  </div>
                  <div className="pb-4">
                    <label
                      htmlFor="newpassword"
                      className="font-semibold text-gray-700 block pb-1"
                    >
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        id="newpassword"
                        name="newpassword"
                        className="input-field w-full"
                        type={passwordVisible.newpassword ? "text" : "password"}
                        placeholder="Enter your New Password"
                        value={formData.newpassword}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility("newPassword")}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {passwordVisible.newpassword ? (
                          <FaEye />
                        ) : (
                          <FaEyeSlash />
                        )}
                      </button>
                    </div>
                    {errors.newpassword && (
                      <div className="text-sm text-red-500">{errors.newpassword}</div>
                    )}
                  </div>
                  <div className="pb-4">
                    <label
                      htmlFor="confirmpas"
                      className="font-semibold text-gray-700 block pb-1"
                    >
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <input
                        id="confirmpas"
                        name="confirmpas"
                        className="input-field w-full"
                        type={
                          passwordVisible.confirmpas
                            ? "text"
                            : "password"
                        }
                        placeholder="Re-type your New Password"
                        value={formData.confirmpas}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          togglePasswordVisibility("confirmNewPassword")
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {passwordVisible.confirmpas ? (
                          <FaEye />
                        ) : (
                          <FaEyeSlash />
                        )}
                      </button>
                    </div>
                    {errors.confirmpas && (
                      <div className="text-sm text-red-500">{errors.confirmpas}</div>
                    )}
                  </div>

                  <div>
                    <button className="btn-anim mt-2 text-white rounded-full px-5 py-2">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="md:flex hidden relative w-full md:w-2/5 p-4 sm:p-6 lg:ml-4  lg:p-8 ">
              <div className="w-full absolute flex items-center justify-end right-10">
                <img
                  className="h-auto"
                  loading="lazy"
                  src={Change_password}
                  alt="Change Password"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChangePasswords;
