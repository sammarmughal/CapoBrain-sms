import React,{useState, useEffect} from "react";
import Sidebar from "./component/sidebar";
import { Helmet } from "react-helmet";
import UserNav from "./component/user-nav";
import Swal from "sweetalert2";
import { RiDeleteBinLine } from "react-icons/ri";

const OpenStatusTickets = () => {
  const [allTickets, setAllTickets] = useState([]);
  const user = JSON.parse(sessionStorage.getItem("User"));
  const tickets = async () => {
    const res = await fetch(
      "https://capobrain-backend.vercel.app/api/auth/tickets",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    setAllTickets(data);
  };
  const deleteTicket = async (id) => {
    const { isConfirmed } = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Ticket deleted successfully",
          icon: "success",
        });
      }
      return result;
    });
    if (isConfirmed) {
      await fetch(
        `https://capobrain-backend.vercel.app/api/auth/delTicket/${id}`,
        {
          method: "DELETE",
        }
      );
      tickets();
    }
  };
  useEffect(() => {
    tickets();
  }, []);
  return (
    <>
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
              {allTickets &&
                allTickets
                  .filter(
                    (ticket) =>
                      ticket.userId &&
                      ticket.userId._id === user._id &&
                      ticket.status === "Open"
                  )
                  .reverse()
                  .map((ticket) => {
                    return (
                      <tr className="bg-white">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {ticket.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {ticket.subject}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {ticket.ticketId}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {ticket.severity}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {ticket.message}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            {ticket.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {" "}
                          <button
                            className="p-2 rounded-full  group transition-all duration-500  flex item-center"
                            onClick={() => deleteTicket(ticket._id)}
                          >
                            <RiDeleteBinLine className="w-5 h-5 text-red-500" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default OpenStatusTickets;
