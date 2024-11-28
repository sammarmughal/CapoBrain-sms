import Sidebar from "./component/sidebar";
import Admin_Nav from "./component/admin-nav";

const DemoUsers = () => {
  return (
    <div className="flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
      <Admin_Nav />
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-800">Ali</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-800">20010511</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-800">
                       Partner
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-800">9038293798</td>
                     
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-800">Ali</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-800">20010511</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-800">
                       Partner
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-800">9038293798</td>
                     
                    </tr>
                  </tbody>
                </table>
       
      </div>
    </div>
  );
};

export default DemoUsers;
