import React from "react";
import strategy from "../assets/images/services/strategy.png";
import tick from "../assets/svgs/services/tick.svg";
import { useState } from "react";
const ConsultingServices = () => {
  const filterTags = [
      "Popular",
      "AI & Digital Transformation",
      "Sustainability",
      "Leadership & Interpersonal Skills",
      "Business Management & Strategy",
      "Business",
      "Business Management Strategy",
    ];
    const [selectedTag, setSelectedTag] = useState(filterTags[0]);
    const handleTagClick = (tag) => {
      setSelectedTag(tag);
    };
  return (
    <div className="bg-white px-6 lg:px-5 py-10">
      {/* Heading Section */}
      <div className="text-center py-6">
        <h1 className="mx-auto sm:w-[900px] leading-normal text-3xl md:text-5xl lg:text-[53px] font-[500] mb-10 font-montserrat">
          Why you should choose our consulting services?
        </h1>
        {/* Buttons Section */}
        <div className="bg-[#EDE8DA] p-[8px] sm:px-3 rounded-2xl sm:flex gap-1 overflow-x-scroll sm:flex-nowrap flex scrollbar-none px-2 sm:mx-10" >
              {filterTags.map((tag) => (
                <button
                  className={` rounded-2xl font-montserrat p-1 px-5 text-[13px] flex-shrink-0 ${
                    selectedTag === tag
                      ? "bg-[#074226] text-white" // Selected button styling
                      : "bg-white text-black" // Default button styling
                  }`}
                  onClick={() => {
                    handleTagClick(tag);
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center bg-[#074226] text-white py-10 px-3 md:px-10 lg:px-10 sm:gap-14 rounded-lg mt-5 sm:mt-10">
        {/* Left Section: Image */}
        <div className=" mb-6 md:mb-0 flex justify-center">
          <img
            src={strategy}
            alt="Team at work"
            className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md lg:max-w-full"
          />
        </div>
        {/* Right Section: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left ">
          <h2 className="text-2xl md:text-[42px] font-[500] leading-tight font-montserrat">
            Harnessing the Power of{" "}
            <span className="text-[#CEB07E]">Client Anticipation</span> for
            Lasting Satisfaction and Loyalty
          </h2>
          <ul className="mt-6 space-y-4 text-base md:text-lg">
            <li className="flex text-left  sm:items-center items-start gap-4 text-[18px] font-montserrat font-[400]">
            <img src={tick} alt="" />
              We listen to understand your unique challenges and goals.
            </li>
            <li className="flex text-left  sm:items-center items-start gap-4 text-[18px] font-montserrat font-[400]">
            <img src={tick} alt="" />
              We anticipate your needs and proactively address them.
            </li>
            <li className="flex text-left  sm:items-center items-start gap-4 text-[18px] font-montserrat font-[400]">
            <img src={tick} alt="" />
              We build trust through open communication and collaboration.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConsultingServices;
