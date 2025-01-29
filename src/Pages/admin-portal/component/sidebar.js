import { useEffect, useState } from "react";
import { SiBloglovin } from "react-icons/si";
import { FaBlog } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { TiDocumentAdd, TiTicket } from "react-icons/ti";
import { MdEmojiPeople } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalCategories: 0,
    demoUsers: 0,
    tickets: 0,
  });

  const fetchStats = async () => {
    try {
      const blogsResponse = await fetch(
        "https://capobrain-backend.vercel.app/api/auth/getallposts"
      );
      const blogsData = await blogsResponse.json();
      const totalBlogsLength = blogsData?.length;

      const categoriesResponse = await fetch(
        "https://capobrain-backend.vercel.app/api/auth/getcategory"
      );
      const categoriesData = await categoriesResponse.json();
      const totalCatLength = categoriesData?.length;

      const demoUsersResponse = await fetch(
        "https://capobrain-backend.vercel.app/api/auth/getDemoUsers"
      );
      const demoUsersData = await demoUsersResponse.json();
      const totalUsersLength = demoUsersData?.length;

      const messageResponse = await fetch(
        "https://capobrain-backend.vercel.app/api/auth/messages"
      );
      const messageData = await messageResponse.json();
      const totalMessageLength = messageData?.length;

      setStats({
        totalBlogs: totalBlogsLength,
        demoUsers: totalUsersLength,
        totalCategories: totalCatLength,
        tickets: totalMessageLength,
      });
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);
  return (
    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-purple-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm font-light tracking-wide text-gray-300 uppercase">
                Main
              </div>
            </div>
          </li>
          <li>
            <Link to="/adminpanel" className="admin-sidemenu">
              <span className="inline-flex justify-center items-center ml-4">
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link to="/adminpanel/blogs" className="admin-sidemenu">
              <span className="inline-flex justify-center items-center ml-4">
                <SiBloglovin className="w-6 h-5"></SiBloglovin>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Blogs</span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                {stats.totalBlogs}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/adminpanel/addblog" className="admin-sidemenu">
              <span className="inline-flex justify-center items-center ml-4">
                <FaBlog className="w-6 h-5" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Add New Blog
              </span>
            </Link>
          </li>
          <li>
            <Link to="/adminpanel/categories" className="admin-sidemenu">
              <span className="inline-flex justify-center items-center ml-4">
                <FaTag className="w-6 h-5"></FaTag>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Categories
              </span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                {stats.totalCategories}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/adminpanel/demousers" className="admin-sidemenu">
              <span className="inline-flex justify-center items-center ml-4">
                <MdEmojiPeople className="w-6 h-6" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Demo Users
              </span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                {stats.demoUsers}{" "}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/adminpanel/tickets" className="admin-sidemenu">
              <span className="inline-flex justify-center items-center ml-4">
                <TiTicket className="w-6 h-6"></TiTicket>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Tickets
              </span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                {stats.tickets}{" "}
              </span>
            </Link>
          </li>
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center mt-5 h-8">
              <div className="text-sm font-light tracking-wide text-gray-300 uppercase">
                Settings
              </div>
            </div>
          </li>
          <li className="">
            <Link to="/adminpanel/changepassword" className="admin-sidemenu">
              <span className="inline-flex justify-center items-center ml-4">
                <RiLockPasswordFill className="w-6 h-5" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Change Password
              </span>
            </Link>
          </li>
        </ul>
        <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
          Copyright @2024
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
