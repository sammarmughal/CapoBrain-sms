import React, { useState } from "react";
import Sidebar from "./component/sidebar";
import Admin_Nav from "./component/admin-nav";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ChangePasswords = () => {
  const [passwordVisible, setPasswordVisible] = useState({
    oldPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });
  const [formData, setFormData] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const togglePasswordVisibility = (field) => {
    setPasswordVisible((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };
  const [errors, setErrors] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
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
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    };
    if (!formData.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }
    if (!formData.oldPassword) {
      newErrors.oldPassword = "Old password is required.";
      isValid = false;
    }
    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required.";
      isValid = false;
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword =
        "New password must be at least 8 characters long.";
      isValid = false;
    }
    if (formData.newPassword !== formData.confirmNewPassword) {
      newErrors.confirmNewPassword =
        "New password and confirmation do not match.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      Swal.fire({
        title: "Success!",
        text: "Your password has been updated successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
      setFormData({
        email: "",
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
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
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta
          property="og:url"
          content="YOUR_ADMIN_PANEL_CHANGE_PASSWORD_URL"
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
        <meta name="twitter:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="flex flex-col flex-auto flex-shrink-0 antialiased bg-white  text-black ">
        <Admin_Nav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="block md:flex mt-10">
            <div className="w-full md:w-3/5 p-4 sm:p-6 lg:ml-4 lg:p-8 ">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
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
                      htmlFor="oldPassword"
                      className="font-semibold text-gray-700 block pb-1"
                    >
                      Old Password
                    </label>
                    <div className="relative">
                      <input
                        id="oldPassword"
                        name="oldPassword"
                        className="input-field w-full"
                        type={passwordVisible.oldPassword ? "text" : "password"}
                        placeholder="Enter your Old Password"
                        value={formData.oldPassword}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility("oldPassword")}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {passwordVisible.oldPassword ? (
                          <FaEye />
                        ) : (
                          <FaEyeSlash />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="pb-4">
                    <label
                      htmlFor="newPassword"
                      className="font-semibold text-gray-700 block pb-1"
                    >
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        id="newPassword"
                        name="newPassword"
                        className="input-field w-full"
                        type={passwordVisible.newPassword ? "text" : "password"}
                        placeholder="Enter your New Password"
                        value={formData.newPassword}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility("newPassword")}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {passwordVisible.newPassword ? (
                          <FaEye />
                        ) : (
                          <FaEyeSlash />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="pb-4">
                    <label
                      htmlFor="confirmNewPassword"
                      className="font-semibold text-gray-700 block pb-1"
                    >
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <input
                        id="confirmNewPassword"
                        name="confirmNewPassword"
                        className="input-field w-full"
                        type={
                          passwordVisible.confirmNewPassword
                            ? "text"
                            : "password"
                        }
                        placeholder="Re-type your New Password"
                        value={formData.confirmNewPassword}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          togglePasswordVisibility("confirmNewPassword")
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {passwordVisible.confirmNewPassword ? (
                          <FaEye />
                        ) : (
                          <FaEyeSlash />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <button className="btn-anim mt-2 text-white rounded-full px-5 py-2">
                      Submit
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
};
export default ChangePasswords;
