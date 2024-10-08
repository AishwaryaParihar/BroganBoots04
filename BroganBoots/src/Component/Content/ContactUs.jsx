import React, { useState } from "react";
import Map from "./Map";
import { toast } from "react-toastify";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"; // Importing specific icons

const ContactUs = () => {
  const [data, setData] = useState({
    name: "",
    mobile: "",
    email: "",
    msg: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const contactResponse = await fetch("http://localhost:6060/api/contactusController", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!contactResponse.ok) {
        throw new Error("Network response was not ok");
      }

      const dataApi = await contactResponse.json();

      if (dataApi.success) {
        toast.success(dataApi.message);
        setData({
          name: "",
          mobile: "",
          email: "",
          msg: "",
        });
      } else {
        toast.error(dataApi.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("Failed to submit the form. Please try again later.");
    }
  };

  return (
    <div className="pt-10 bg-gray-50">
      <div className="container mx-auto px-20 mb-10">
        <div className="text-center mb-8">
          <h4 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            Contact <span className="text-primary">Us</span>
          </h4>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="lg:w-1/2 space-y-8 text-left">
            <h2 className="text-3xl font-semibold text-gray-800">
              Keep in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-gray-600">
              Give us a call or drop by anytime, we endeavor to answer all
              inquiries within 24 hours on business days. We will be happy
              to answer your questions.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary mr-2 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-700">Address</h4>
                  <p className="text-gray-600">
                    63-B, Pocket-B, DDA Flats, Hari Nagar, Near Tilak Nagar Metro Station, New Delhi – 110064
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <FaPhone className="text-primary mr-2 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-700">Contact</h4>
                  <p className="text-gray-600">+91 76111 89837</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaEnvelope className="text-primary mr-2 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-700">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:broganboots19@gmail.com" className="text-primary underline">
                      broganboots19@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white p-8 shadow-md rounded-md text-left border border-gray-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Send a <span className="text-primary">Message</span>
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-3 rounded-md transition duration-200 focus:outline-none focus:ring focus:ring-primary"
                    placeholder="Your Name *"
                    name="name"
                    value={data.name}
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-3 rounded-md transition duration-200 focus:outline-none focus:ring focus:ring-primary"
                    placeholder="Mobile Number *"
                    name="mobile"
                    value={data.mobile}
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div className="form-group col-span-2">
                  <input
                    type="email"
                    className="w-full border border-gray-300 p-3 rounded-md transition duration-200 focus:outline-none focus:ring focus:ring-primary"
                    placeholder="Email *"
                    name="email"
                    value={data.email}
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div className="form-group col-span-2">
                  <textarea
                    name="msg"
                    className="w-full border border-gray-300 p-3 rounded-md transition duration-200 focus:outline-none focus:ring focus:ring-primary"
                    placeholder="Message"
                    rows="4"
                    value={data.msg}
                    onChange={handleOnChange}
                    required
                  ></textarea>
                </div>
                <div className="form-group col-span-2 text-center">
                  <button 
                    type="submit" 
                    className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-primary-dark transition duration-200"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>  
      <Map />
    </div>
  );
};

export default ContactUs;
