import React from "react";

const DisplayImage = ({ imgUrl, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white shadow-lg rounded">
        <div className="text-end">
          <i
            className="fas fa-times text-3xl cursor-pointer p-2"
            onClick={onClose}
          ></i>
        </div>
        <div className="flex justify-center items-center p-4">
          <img src={imgUrl} alt="yoyo" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default DisplayImage;
