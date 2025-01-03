import React from 'react';
import video from "../assets/images/learningsolution/video.png"
const LearningSolution = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Compete Learning Solution
      </h1>

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Time Table */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Time Table</h2>
            <p className="text-sm text-gray-600 mb-2">27 Dec, 2024</p>
            <div className="space-y-4">
              {['English-I', 'English-I', 'English-II'].map((subject, index) => (
                <div key={index} className="border-l-4 border-green-800 pl-4 py-2">
                  <h3 className="text-lg font-medium">{subject}</h3>
                  <p className="text-sm text-gray-600">00:00 - 00:00</p>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full bg-[#074226] text-white py-2 rounded-lg">
              View All
            </button>
          </div>

          {/* Live Class */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Live Class</h2>
            <div className="relative bg-gray-300 rounded-lg overflow-hidden">
              <img
                src={video} // Replace with the live class image URL
                alt="Live Class"
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-lg text-sm">
                Live
              </div>
            </div>
            <button className="mt-4 w-full bg-[#074226] text-white py-2 rounded-lg">
              Join
            </button>
          </div>

          {/* Library */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Library</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">New Books</h3>
                <div className="flex space-x-2 mt-2">
                  <img
                    src="https://via.placeholder.com/50" // Replace with book images
                    alt="Book"
                    className="w-12 h-16 object-cover rounded"
                  />
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Book"
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div className="flex items-center justify-center w-12 h-16 bg-gray-300 rounded">
                    +3
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium">Media</h3>
                <div className="flex space-x-2 mt-2">
                  <img
                    src="https://via.placeholder.com/50" // Replace with media images
                    alt="Media"
                    className="w-12 h-16 object-cover rounded"
                  />
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Media"
                    className="w-12 h-16 object-cover rounded"
                  />
                  <div className="flex items-center justify-center w-12 h-16 bg-gray-300 rounded">
                    +3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Test Details */}
          <div className="bg-[#074226] text-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Part of Speeches</h2>
            <p className="text-sm mt-2">English</p>
            <div className="mt-4">
              <p>Grade: CBSC 10th</p>
              <p>Assigned by: John Doe</p>
              <p>Test on: 19 Nov 2021 - 11:00 AM</p>
              <p>Duration: 45mins</p>
            </div>
          </div>

          {/* Test Results */}
          <div className="bg-[#074226] text-white p-6 rounded-lg grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold">90</h3>
              <p className="text-sm">Total Marks</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold">90%</h3>
              <p className="text-sm">Percentage</p>
            </div>
          </div>
        </div>

        <button className="mt-8 mx-auto block bg-[#074226] text-white py-2 px-6 rounded-lg">
          Register as Student
        </button>
      </div>
    </div>
  );
};

export default LearningSolution;
