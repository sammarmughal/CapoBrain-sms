import React, { useEffect, useState } from "react";
import Sidebar from "./component/sidebar";
import Admin_Nav from "./component/admin-nav";

const AdminPortal = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // Update every second

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, []);
  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black ">
        <Admin_Nav />
        <Sidebar />
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 p-4 gap-10">
          <div className="col-span-2 bg-indigo-100 border border-indigo-200 rounded-xl p-6 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl text-purple-900">
                        Welcome <strong>CapoBrain Dash</strong>
                    </h2>
                    <span className="inline-block mt-8 px-8 py-2 rounded-full text-xl font-bold text-white bg-purple-800">
                    {time}
                    </span>
                </div>

            <div className="bg-white shadow-lg rounded-lg p-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-gray-700">Total Blogs</h2>
              <p className="text-2xl">20</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-gray-700">Categories</h2>
              <p className="text-2xl">6</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-gray-700">Demo Users</h2>
              <p className="text-2xl">36</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-gray-700">Tickets</h2>
              <p className="text-2xl">9</p>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default AdminPortal;
