import React from "react";
import productImage from "../../assets/headphones.jpg";

export default function ProductCard() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-64 object-cover"
          src={productImage}
          alt="Product Image"
        />
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-semibold">
          Sale
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">Product Name</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus
          euismod metus, vel ultrices magna hendrerit in.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-800">$29.99</span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
}
