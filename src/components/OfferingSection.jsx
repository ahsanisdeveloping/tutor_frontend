import React from "react";
import img1 from "../assets/images/offering/img1.png";
import img2 from "../assets/images/offering/img2.png";
const OfferingSection = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-8 py-10">What We Are Offering</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Section */}
          <div className="bg-teal-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex flex-col items-center mb-4">
              <div
                className="bg-[#B3F2F6] rounded-full p-5"
                style={{ border: "2px dashed #00000033" }}
              >
                <img className="text-6xl" src={img1} />
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                Corporate Level Training
              </h3>
            </div>
            <ul className="text-left text-gray-700 space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                Tailored programs for organizations.
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                Boost team productivity and skills.
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                Develop leadership expertise.
              </li>
            </ul>
            <button className="border border-teal-600 px-4 py-2 rounded text-teal-600 hover:bg-teal-600 hover:text-white transition">
              Explore More
            </button>
          </div>

          {/* Second Section */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex flex-col items-center mb-4">
              
              <div
                className="bg-yellow-100 rounded-full p-6"
                style={{ border: "2px dashed #00000033" }}
              >
                <img className="text-6xl h-10 w-12" src={img2} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Consulting Service
              </h3>
            </div>
            <ul className="text-left text-gray-700 space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                Learn anytime, anywhere.
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                Flexible, on-demand courses.
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                Track your progress easily.
              </li>
            </ul>
            <button className="border border-yellow-600 px-4 py-2 rounded text-yellow-600 hover:bg-yellow-600 hover:text-white transition">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferingSection;
