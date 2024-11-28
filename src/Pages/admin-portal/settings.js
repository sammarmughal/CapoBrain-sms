import Sidebar from "./component/sidebar";
import Admin_Nav from "./component/admin-nav";
import { Helmet } from "react-helmet";

const ChangePasswords = () => {
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
              <div className="mb-6">
                <h1 className="text-xl font-bold text-slate-600 mb-5 ml-8 my-4">
                  Admin Profile
                </h1>

                <span className="text-gray-600">
                  This information is secret so be careful
                </span>
              </div>
              <div className="">
                <div className="pb-6 w-full">
                  <label
                    htmlFor="email"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Email{" "}
                  </label>
                  <div className="flex">
                    <input
                      id="username"
                      className="input-field w-full"
                      type="email"
                      placeholder="Jane Name"
                    />
                  </div>
                </div>
                <div className="pb-4">
                  <label
                    htmlFor="type"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Old Password
                  </label>
                  <input
                    id="password"
                    className="input-field w-full"
                    type="text"
                    placeholder="Enter your Password"
                  />
                </div>
                <div className="pb-4">
                  <label
                    htmlFor="about"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    New Password
                  </label>
                  <input
                    id="password"
                    className="input-field w-full"
                    type="text"
                    placeholder="Enter your New Password"
                  />
                </div>
                <div className="pb-4">
                  <label
                    htmlFor="about"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Confirm New Password
                  </label>
                  <input
                    id="password"
                    className="input-field w-full"
                    type="text"
                    placeholder="Re-type your New Password"
                  />
                </div>
                <div>
                  <button className="btn-anim mt-2 text-white rounded-full px-5 py-2">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChangePasswords;
