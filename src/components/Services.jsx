import React from "react";
import strategy from "../assets/images/services/strategy.png";

const ConsultingServices = () => {
  return (
    <div className="bg-white px-6 lg:px-20 py-10">
      {/* Heading Section */}
      <div className="text-center py-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-10 font-clash">
          Why you should choose our consulting services?
        </h1>
        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 font-nunito">
          {["Strategy", "Coaching", "Skills", "Career", "Learning", "Exams", "Training"].map(
            (item, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full border ${
                  item === "Strategy"
                    ? "bg-[#074226] text-white"
                    : "text-gray-700 border-gray-300"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center bg-[#074226] text-white py-10 px-6 md:px-10 lg:px-20 sm:gap-5 rounded-lg mt-10">
        {/* Left Section: Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <img
            src={strategy}
            alt="Team at work"
            className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md lg:max-w-full"
          />
        </div>
        {/* Right Section: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left ">
          <h2 className="text-2xl md:text-3xl font-semibold font-clash">
            Harnessing the Power of{" "}
            <span className="text-yellow-400">Client Anticipation</span> for
            Lasting Satisfaction and Loyalty
          </h2>
          <ul className="mt-6 space-y-4 text-base md:text-lg">
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2 font-nunito">✔</span>
              We listen to understand your unique challenges and goals.
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2 font-nunito">✔</span>
              We anticipate your needs and proactively address them.
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2 font-nunito">✔</span>
              We build trust through open communication and collaboration.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConsultingServices;
