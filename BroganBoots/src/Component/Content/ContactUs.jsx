import React, { useState } from "react";
import Map from "./Map";
import { toast } from "react-toastify";


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
      const contactResponse = await fetch("http://localhost:5055/api/contactusController", {
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
    <div className="py-10">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h4 className="text-2xl font-semibold underline decoration-primary">
            Contact <span className="text-primary">Us</span>
          </h4>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="lg:w-1/2 space-y-8 text-left">
            <h2 className="text-3xl font-semibold text-gray-800">
              Keep in <span className="text-primary">Touch</span>
            </h2>
            <p>
              Give us a call or drop by anytime, we endeavour to answer all
              enquiries within 24 hours on business days. We will be happy
              to answer your questions.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700">ADDRESS</h4>
                <p>
                  <i className="fas fa-map-marker-alt"></i> 63-B, Pocket-B, DDA Flats, 
                  Hari Nagar, Near Tilak Nagar Metro Station, New Delhi – 110064
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700">CONTACT</h4>
                <p>
                  <i className="fas fa-phone"></i> +91 76111 89837
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700">EMAIL</h4>
                <p>
                  <i className="fas fa-envelope"></i> 
                  <a href="mailto:broganboots19@gmail.com" className="text-primary underline">broganboots19@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white p-8 shadow-md rounded-md text-left">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Send a <span className="text-primary">Message</span>
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-3 rounded-md"
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
                    className="w-full border border-gray-300 p-3 rounded-md"
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
                    className="w-full border border-gray-300 p-3 rounded-md"
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
                    className="w-full border border-gray-300 p-3 rounded-md"
                    placeholder="Message"
                    rows="4"
                    value={data.msg}
                    onChange={handleOnChange}
                    required
                  ></textarea>
                </div>
                <div className="form-group col-span-2 text-center">
                  <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-primary-dark transition">
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
