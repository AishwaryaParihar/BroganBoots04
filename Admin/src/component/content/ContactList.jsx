// AdminContactList.jsx
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("http://localhost:5055/api/contactusController/contactus");
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
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Messages</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
          <th className="border border-gray-300 p-4">S. no</th>
            <th className="border border-gray-300 p-4">Name</th>
            <th className="border border-gray-300 p-4">Mobile</th>
            <th className="border border-gray-300 p-4">Email</th>
            <th className="border border-gray-300 p-4">Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact,index) => (
            <tr key={contact._id}>
              <td className="border border-gray-300 p-4">{index + 1}</td>
              <td className="border border-gray-300 p-4">{contact.name}</td>
              <td className="border border-gray-300 p-4">{contact.mobile}</td>
              <td className="border border-gray-300 p-4">{contact.email}</td>
              <td className="border border-gray-300 p-4">{contact.msg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
