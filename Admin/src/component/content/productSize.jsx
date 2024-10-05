import React from "react";

const ProductSize = ({ size, handleProductSize }) => {
  return (
    <div className="flex gap-2 border-2 border-red-800 p-2">
      <label htmlFor={size} className="font-medium">{size}</label>
      <input
        type="checkbox"
        id={size}
        value={size}
        onChange={handleProductSize}
        className="form-checkbox h-5 w-5 text-green-600"
      />
    </div>
  );
};

export default ProductSize;
