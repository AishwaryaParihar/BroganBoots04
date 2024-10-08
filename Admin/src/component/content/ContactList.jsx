// AdminContactList.jsx
import React, { useEffect, useState } from "react";
import SummaryApi from "../../common/index";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader"; // For loading spinner

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(SummaryApi.contactDetailDisplay.url);
        const data = await response.json();
        if (data.success) {
          setContacts(data.data);
        } else {
          toast.error(data.message || "Failed to fetch contacts");
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
        toast.error("Failed to fetch contacts");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ClipLoader size={50} color={"#4A90E2"} loading={loading} />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
        Contact Messages
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-500 text-left text-white">
              <th className="p-4 text-sm font-semibold uppercase tracking-wide text-white">S. No</th>
              <th className="p-4 text-sm font-semibold uppercase tracking-wide text-white">Name</th>
              <th className="p-4 text-sm font-semibold uppercase tracking-wide text-white">Mobile</th>
              <th className="p-4 text-sm font-semibold uppercase tracking-wide text-white">Email</th>
              <th className="p-4 text-sm font-semibold uppercase tracking-wide text-white">Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr
                key={contact._id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-50 transition duration-200 ease-in-out`}
              >
                <td className="border-b border-gray-300 p-4 text-gray-700">
                  {index + 1}
                </td>
                <td className="border-b border-gray-300 p-4 text-gray-800">
                  {contact.name}
                </td>
                <td className="border-b border-gray-300 p-4 text-gray-700">
                  {contact.mobile}
                </td>
                <td className="border-b border-gray-300 p-4 text-gray-700">
                  {contact.email}
                </td>
                <td className="border-b border-gray-300 p-4 text-gray-600">
                  {contact.msg}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
