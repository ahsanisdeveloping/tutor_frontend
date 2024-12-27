import React from 'react';
import img from '../assets/images/signup/img.png'
const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex overflow-hidden max-w-4xl">
        {/* Left Side - Illustration */}
        <div className="w-1/2 p-8 flex flex-col justify-center items-center bg-white relative">
          <button className="absolute top-4 left-4 text-sm text-white bg-[#074226] px-4 py-2 rounded-full hover:bg-green-300">
            &larr; Back to Website
          </button>
          <img
            src={img} // Replace with your illustration
            alt="Learning Illustration"
            className="mb-4"
          />
          <div className="flex space-x-2 mt-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="w-2 h-2 bg-green-300 rounded-full"></div>
            <div className="w-2 h-2 bg-green-300 rounded-full"></div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 p-12 bg-green-900 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-6">Sign In</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="w-full p-3 rounded bg-gray-100 text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded bg-gray-100 text-black"
              />
              <div className="text-right text-xs text-green-300 mt-1 cursor-pointer hover:underline">
                Forgot Password?
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="mr-2 h-4 w-4 text-green-500 border-green-500"
              />
              <label htmlFor="remember" className="text-sm">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-white py-3 rounded text-[#074226] hover:bg-green-700"
            >
              Login
            </button>
          </form>
          <div className="text-center mt-4 text-sm">
            Do not have an account?{' '}
            <span className="text-green-400 cursor-pointer hover:underline">
              Sign Up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
