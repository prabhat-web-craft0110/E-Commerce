import React from "react";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 to-red-200 p-4">
  <div className="bg-green-300 shadow-md rounded-xl p-8 w-full max-w-md transition-all duration-500 hover:scale-105">
    <h2 className="text-2xl font-bold text-center text-black-900 mb-6">Create an Account</h2>
    
    <form className="space-y-4">
      <div>
        <label className="block text-black-300 mb-1" htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-2 border rounded-lg  focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div>
        <label className="block text-black-300 mb-1" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-black-300 mb-1" htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Create a password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Sign Up
      </button>
    </form>

    <div className="text-center mt-4 text-sm">
      <span>Already have an account? </span>
      <a href="/login" className="text-blue-600 hover:underline">Login</a>
    </div>
  </div>
</div>

  )
};

export default SignupPage;