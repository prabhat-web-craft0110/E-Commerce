import React from "react";

const LoginPage = () => {
  return(
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
    <h2 className="text-3xl font-bold text-center text-purple-800">Sign In</h2>
    
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-purple-700">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-purple-700">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="h-4 w-4 text-purple-700" />
          Remember me
        </label>
        <a href="/forgot-password" className="text-purple-500 hover:underline">Forgot Password?</a>
      </div>

      <button
        type="submit"
        className="w-full bg-gray-500 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition"
      >
        Sign In
      </button>
    </form>

    <p className="text-sm text-center text-gray-800">
      Don't have an account?{" "}
      <a href="/signup" className="text-purple-500 hover:underline">Sign Up</a>
    </p>
  </div>
</div>
  )
};

export default LoginPage;