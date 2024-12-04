import Sidebar from "./component/sidebar";
import AdminNav from "./component/admin-nav";
import { Helmet } from "react-helmet";

const DemoUsers = () => {
  return (
    <>
      <Helmet>

        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Capobrain Admin Panel - Manage Users Page. Administer and manage users within your Capobrain School Management System. Add, edit, and remove users from the platform efficiently."
        />
        <meta
          name="keywords"
          content="Capobrain Admin Panel Manage Users, User Management, Admin Panel for School Users, Add and Edit Users in Admin Panel, Manage Admins and Teachers, School Management System User Management"
        />
        <meta name="robots" content="index, follow" />
        <title>Manage Users - Capobrain Admin Panel</title>

        <meta
          property="og:title"
          content="Manage Users - Capobrain Admin Panel"
        />
        <meta
          property="og:description"
          content="Easily manage users in the Capobrain Admin Panel. Add, edit, and remove users such as administrators, teachers, and students within the school management system."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="YOUR_ADMIN_PANEL_MANAGE_USERS_URL" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Manage Users - Capobrain Admin Panel"
        />
        <meta
          name="twitter:description"
          content="Manage all user accounts including administrators, teachers, and students within the Capobrain Admin Panel. Efficient user administration for your school management system."
        />
        <meta name="twitter:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
        <AdminNav />
        <Sidebar />

        <div className="container mx-auto my-10 h-full ml-14 mt-20 mb-10 md:ml-64 ">
          <h1 className="text-xl font-bold text-slate-600 mb-5 ml-8 my-4">
            Manage Users
          </h1>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  School Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Contact Number
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-800">
                  Ali
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-800">
                  capobrain@gmail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-800">
                  Partner
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-800">
                  9038293798
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-800">
                  Ali
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-800">
                capobrain@gmail.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-800">
                  Partner
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-800">
                  9038293798
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DemoUsers;
