import React, { useEffect, useState } from "react";
import Sidebar from "./component/sidebar";
import AdminNav from "./component/admin-nav";
import { Helmet } from "react-helmet";
import Welcome from "../../img/welcome.png"

const AdminPortal = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalCategories: 0,
    demoUsers: 0,
    tickets: 0,
  });

  const fetchStats = async () => {
    try {
      const blogsResponse = await fetch("https://capobrain-backend.vercel.app/api/auth/getallposts");
      const blogsData = await blogsResponse.json();
      const totalBlogsLength = blogsData?.length;

      const categoriesResponse = await fetch("https://capobrain-backend.vercel.app/api/auth/getcategory");
      const categoriesData = await categoriesResponse.json();
      const totalCatLength = categoriesData?.length;

      const demoUsersResponse = await fetch("https://capobrain-backend.vercel.app/api/auth/getDemoUsers");
      const demoUsersData = await demoUsersResponse.json();
      const totalUsersLength = demoUsersData?.length;

      const messageResponse = await fetch("https://capobrain-backend.vercel.app/api/auth/messages");
      const messageData = await messageResponse.json();
      const totalMessageLength = messageData?.length;

      setStats({
        totalBlogs: totalBlogsLength,
        demoUsers: totalUsersLength,
        totalCategories: totalCatLength,
        tickets: totalMessageLength
      })
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Capobrain Admin Panel Home Page - Manage all school operations, including student records, fee management, attendance, and more with ease. Admin dashboard for seamless school management."
        />
        <meta
          name="keywords"
          content="Capobrain Admin Panel, School Management Admin Dashboard, School ERP Admin Panel, School Management System, Admin Dashboard for Schools, School Software Admin Panel"
        />
        <meta name="robots" content="index, follow" />
        <title>
          Admin Panel - Capobrain | School Management System Dashboard
        </title>

        <meta
          property="og:title"
          content="Admin Panel - Capobrain | School Management System Dashboard"
        />
        <meta
          property="og:description"
          content="Access the Capobrain Admin Panel to manage school operations. From student records to fee management, our dashboard provides complete control for school administrators."
        />
        <meta property="og:image" content="https://capobrain.com/static/media/capobrain-logo.adec461fe08022b24b28.png" />
        <meta property="og:url" content="https://capobrain.com/https://capobrain.com/static/media/capobrain-logo.adec461fe08022b24b28.png" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Admin Panel - Capobrain | School Management System Dashboard"
        />
        <meta
          name="twitter:description"
          content="The Capobrain Admin Panel helps school administrators manage all aspects of school operations, including student records, attendance, fee management, and more."
        />
        <meta name="twitter:image" content="https://capobrain.com/static/media/capobrain-logo.adec461fe08022b24b28.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black ">
        <AdminNav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 p-4 gap-10">
            <div className="col-span-2 relative bg-indigo-100 border border-indigo-200 rounded-xl p-6 animate-fade-in">
              <h2 className="text-3xl md:text-4iopasdfghjklmnbvcxzxl text-purple-900">
                Welcome <strong>CapoBrain Admin Dashboard</strong>
              </h2>
              <span className="inline-block mt-8 px-8 py-2 rounded-full text-xl font-bold text-white bg-purple-800">
                {time}
              </span>
              <div className="absolute right-10 top-4 lg:flex hidden">
                <img
                  className="w-20 h-auto"
                  src={Welcome}
                  loading="lazy"
                  alt="Capobrain Admin Panel" />
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-gray-700">
                Total Blogs
              </h2>
              <p className="text-2xl">{stats.totalBlogs}</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-gray-700">
                Categories
              </h2>
              <p className="text-2xl">{stats.totalCategories}</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-gray-700">
                Demo Users
              </h2>
              <p className="text-2xl">{stats.demoUsers}</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-gray-700">Tickets</h2>
              <p className="text-2xl">{stats.tickets}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPortal;