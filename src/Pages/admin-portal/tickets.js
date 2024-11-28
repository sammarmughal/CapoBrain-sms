import Sidebar from "./component/sidebar";
import Admin_Nav from "./component/admin-nav";

const Tickets = () => {
  return (
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
  );
};

export default Tickets;
