import React, { useState, useEffect, useContext } from "react";
import Sidebar from "./component/sidebar";
import UserNav from "./component/user-nav";
import MyContext from "../../ContextApi/MyContext";
import Swal from "sweetalert2";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const GeneratedTickets = () => {
  const { allMessages, ticketMessages } = useContext(MyContext);
  const [message, setMessage] = useState("");
  const [allTickets, setAllTickets] = useState([]);
  const [ediitTicket, setEdiitTicket] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const user = JSON.parse(sessionStorage.getItem("User"));

  const convertToPST = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      timeZone: "Asia/Karachi",
      timeZoneName: "short",
    });
  };
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
    console.log(data);
    setAllTickets(data);
  };
  useEffect(() => {
    tickets();
    ticketMessages();
  }, []);
  const deleteTicket = async (id) => {
    const { isConfirmed } = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete this!",
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
  const editTicket = async (id) => {
    const res = await fetch(
      `https://capobrain-backend.vercel.app/api/auth/getTicket/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    setEdiitTicket(data);
  };
  const sendMessage = async (e) => {
    e.preventDefault();

    const userId = ediitTicket.userId._id;
    const ticketId = ediitTicket._id;
    const status = "User Message";
    const res = await fetch(
      "https://capobrain-backend.vercel.app/api/auth/createMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, userId, ticketId, status }),
      }
    );

    if (res.ok) {
      ticketMessages();
      setMessage("");
    }
  };
  return (
    <>
      <div className="w-full flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">
        <UserNav />
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
              {allTickets &&
                allTickets
                  .filter(
                    (ticket) => ticket.userId && ticket.userId._id === user._id
                  )
                  .reverse()
                  .map((ticket) => {
                    return (
                      <tr className="bg-white">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {ticket.ticketId}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {ticket.severity}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            {" "}
                            {ticket.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {" "}
                          <div className="flex items-center gap-1">
                            <button
                              className="p-2 rounded-full  group transition-all duration-500  flex item-center"
                              onClick={() => deleteTicket(ticket._id)}
                            >
                              <RiDeleteBinLine className="w-5 h-5 text-red-500" />
                            </button>
                            <button
                              className="p-2  rounded-full  group transition-all duration-500  flex item-center"
                              onClick={() => {editTicket(ticket._id); openModal();}}
                            >
                              <FiEdit className="w-5 h-5 text-purple-500" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
          {isModalOpen && (
            <div
              className="overflow-y-auto fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="bg-white w-full max-w-7xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
                <div className="sticky top-0 bg-white z-10 items-center justify-between px-6 py-4 border-b">
                  <div class="modal-header flex items-center justify-between px-6">
                    <h5
                      className="text-lg font-semibold"
                      id="exampleModalToggleLabel"
                    >
                      Conversation Modal
                    </h5>
                    <div className="" onClick={closeModal}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <p>
                      Your generated ticket id is{" "}
                      <strong>{ediitTicket.ticketId}</strong>
                    </p>
                    <p>
                      Your subject of <strong>{ediitTicket.ticketId}</strong> is{" "}
                      <strong> :</strong> {ediitTicket.subject}
                    </p>
                    <p>
                      Your issue of <strong>{ediitTicket.ticketId}</strong> is{" "}
                      {ediitTicket.message}
                    </p>
                    <div className="my-5 ">
                      {allMessages &&
                        allMessages
                          .filter(
                            (message) =>
                              message.ticketId &&
                              message.ticketId.ticketId === ediitTicket.ticketId
                          )
                          .map((message) => {
                            return (
                              <div key={message._id} className="card mt-3">
                                <button
                                  className={`${
                                    message.messageStatus === "Admin Message"
                                      ? "btnOwner w-100 text-end"
                                      : "btnFill w-100 text-end"
                                  }`}
                                >
                                  {message.messageStatus === "Admin Message"
                                    ? "Owner"
                                    : "User"}
                                </button>
                                <div className="card-body">
                                  <p>{message.message}</p>
                                  <p>{convertToPST(message.createAt)}</p>
                                </div>
                              </div>
                            );
                          })}
                    </div>
                    <form onSubmit={sendMessage}>
                      <textarea
                        name="message"
                        id="message"
                        rows={12}
                        className="w-full py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"                       
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                      <div className="flex justify-center w-full">
                        <button className="btn-anim text-white px-6 py-2 rounded-full mt-3" type="submit">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default GeneratedTickets;
