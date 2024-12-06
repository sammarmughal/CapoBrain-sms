import React from "react";
import Avatar from "../../../img/admin-avatar.png"
import Logo from "../../../img/capobrain-logo-white.png"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Admin_Nav() {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("User");
    sessionStorage.removeItem("token");
    Swal.fire({
      title: "Logged Out",
      text: "You have been logged out successfully.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      navigate("/userlogin");
    });
  };
  return (
    <>
    <nav className="fixed text-white flex items-center w-full  justify-between bg-purple-800 z-10  h-14">
        <div className="flex items-center justify-start md:justify-center pl-3 w-40 md:w-48 h-14 border-none">
       <Link to="/">
        <img
            className="p-0 sm:p-4 pl-10"
            src={Logo}
            alt="Capobrain Best School Management Software"
          />
          </Link>
        </div>
        <div className="flex justify-between items-center h-14 bg-purple-800 header-right">
          <img
            className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
            src={Avatar}
            alt="Best School Management Software Avatar"
          />
          <span className="hidden md:block">ADMIN</span>
        
          <ul className="flex items-center">
            <li>
              <div className="block w-px h-6 mx-3 bg-gray-400"></div>
            </li>
            <li>
              <button
               onClick={handleLogout}
                className="flex items-center mr-4 hover:text-purple-100"
              >
                <span className="inline-flex mr-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                </span>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Admin_Nav;
