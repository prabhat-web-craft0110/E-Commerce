import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-200 p-4">
    <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md transition-all duration-500 hover:scale-105">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>
      
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
  
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
  
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition"
        >
          Login
        </button>
      </form>
  
      <div className="text-center mt-4 text-sm">
        <a href="/forgot-password" className="text-blue-600 hover:underline">Forgot Password?</a>
      </div>
  
      <div className="text-center mt-2 text-sm">
        <span>Don't have an account? </span>
        <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
      </div>
  
    </div>
  </div>
  
  );
}
