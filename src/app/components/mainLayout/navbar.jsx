
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-purple-100 shadow-md">
  <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
    

    <div className="text-2xl font-bold text-purple-600">Amazing Cart</div>


    <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
      <a href="/" className="text-gray-800 hover:text-purple-600 transition">Home</a>
      <a href="/shop" className="text-gray-800 hover:text-purple-600 transition">Shop</a>
      <a href="/login" className="text-gray-800 hover:text-purple-600 transition">Login</a>
      <a href="/signup" className="text-gray-800 hover:text-purple-600 transition">Sign Up</a>
    </div>

  </div>
</div>

  
  );
};

export default Navbar;