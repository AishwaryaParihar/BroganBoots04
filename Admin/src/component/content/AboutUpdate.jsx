import React, { useState } from "react";
import axios from "axios";

const AboutUpdate = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState(""); // To show success/error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post("http://localhost:5000/api/updateAbout", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("About updated successfully!"); // Success message
      console.log("About updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating about:", error);
      setMessage("Error updating about."); // Error message
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Update About Section</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea 
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required // Make description a required field
            rows="4" // Specify number of rows for better visibility
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Image:</label>
          <input 
            type="file" 
            accept="image/*" // Only accept images
            onChange={(e) => setImage(e.target.files[0])} 
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Update About
        </button>
      </form>
      {message && (
        <p className={`mt-4 text-center ${message.includes("Error") ? "text-red-500" : "text-green-500"}`}>
          {message}
        </p>
      )} {/* Display success/error message */}
    </div>
  );
};

export default AboutUpdate;
