import Sidebar from "./component/sidebar";
import Admin_Nav from "./component/admin-nav";
import { Helmet } from "react-helmet";

const Tickets = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Capobrain Admin Panel - Tickets Page. Manage and resolve support tickets from staff, students, and parents. Ensure quick issue resolution with Capobrain's user-friendly ticket management system."
        />
        <meta
          name="keywords"
          content="Capobrain Admin Panel Tickets, Support Ticket Management, Admin Panel for School Support, Resolve Tickets, School Management System Ticketing, Ticketing System for Schools"
        />
        <meta name="robots" content="index, follow" />
        <title>Support Tickets - Capobrain Admin Panel</title>

        <meta
          property="og:title"
          content="Support Tickets - Capobrain Admin Panel"
        />
        <meta
          property="og:description"
          content="Manage support tickets from users (staff, students, and parents) within Capobrain Admin Panel. Quickly assign, resolve, and track tickets to enhance school management."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="YOUR_ADMIN_PANEL_TICKETS_URL" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Support Tickets - Capobrain Admin Panel"
        />
        <meta
          name="twitter:description"
          content="Efficiently manage and resolve support tickets through Capobrain’s Admin Panel. Ensure swift responses to issues raised by staff, students, and parents."
        />
        <meta name="twitter:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
        <Admin_Nav />
        <Sidebar />
        <div className="container mx-auto my-10 h-full ml-14 mt-20 mb-10 md:ml-64 ">
          <h1 className="text-xl font-bold text-slate-600 mb-5 ml-8 my-4">
            Tickets
          </h1>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
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

export default Tickets;
