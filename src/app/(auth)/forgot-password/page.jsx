import React from 'react'

function ForgotPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-200 to-orange-300 p-4">
  <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md transition-all duration-500 hover:scale-105">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Forgot Password</h2>
    
    <p className="text-center text-sm text-gray-600 mb-4">
      Enter your email address and we’ll send you a link to reset your password.
    </p>

    <form className="space-y-4">
      <div>
        <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
      >
        Send Reset Link
      </button>
    </form>

    <div className="text-center mt-4 text-sm">
      <a href="/login" className="text-blue-600 hover:underline">Back to Login</a>
    </div>
  </div>
</div>

  );
};

export default ForgotPage;