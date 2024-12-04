import React from "react";
import Sidebar from "./component/sidebar";
import { Helmet } from "react-helmet";
import UserNav from "./component/user-nav";

const OpenStatusTickets = () => {
 
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Capobrain Admin Panel - Category Page. Manage and organize blog categories, set category names, and assign posts easily through the admin panel of Capobrain School Management System."
        />
        <meta
          name="keywords"
          content="Capobrain Admin Panel Category Page, Category Management for Blogs, Blog Categories, Admin Panel for School Blogs, Manage Blog Categories, School Management System Blog Categories"
        />
        <meta name="robots" content="index, follow" />
        <title>Blog Categories - Capobrain Admin Panel</title>

        <meta
          property="og:title"
          content="Blog Categories - Capobrain Admin Panel"
        />
        <meta
          property="og:description"
          content="Manage and organize blog categories from Capobrain’s Admin Panel. Set category names, assign posts, and structure your content effectively for easy navigation."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="YOUR_ADMIN_PANEL_CATEGORY_URL" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Blog Categories - Capobrain Admin Panel"
        />
        <meta
          name="twitter:description"
          content="Organize and manage your blog categories through Capobrain’s Admin Panel. Efficient content organization for school management system blogs."
        />
        <meta name="twitter:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <div className="w-full flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
        <UserNav />
        <Sidebar />
        <div className="container mx-auto my-10 h-full ml-14 mt-20 mb-10 md:ml-64 ">
          <h1 className="text-xl font-bold text-slate-600 mb-5 ml-8 my-4">
           Open Status Tickets
          </h1>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
              <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Ticket
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Subject
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Ticket ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Severity
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Message
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800"></span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </>
  );
};
export default OpenStatusTickets;
