import React from "react";
import video from "../assets/svgs/learning/video.svg";
import book1 from "../assets/svgs/learning/book1.svg";
import book2 from "../assets/svgs/learning/book2.svg";
import book3 from "../assets/svgs/learning/book3.svg";
import media1 from "../assets/svgs/learning/media1.svg";
import media2 from "../assets/svgs/learning/media2.svg";
import media3 from "../assets/svgs/learning/media3.svg";
import trophy from "../assets/svgs/learning/trophy.svg";
import percentage from "../assets/svgs/learning/percentage.svg";
const LearningSolution = () => {
  return (
    <div className=" bg-gray-50 py-10 ">
      <h1 className="text-4xl sm:text-[53px] sm:py-5 font-[500] text-center mb-10 font-montserrat">
        Compete Learning Solution
      </h1>

      <div className=" mx-auto bg-white  rounded-lg  p-6 sm:px-20 font-montserrat">
        <div className="sm:grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 sm:h-[570px] gap-4">
          {/* Time Table */}
          <div className="bg-gray-100 p-4 rounded-lg  shadow-sm row-span-3 flex flex-col justify-evenly">
            <h2 className="text-xl sm:text-4xl font-semibold mb-4">Time Table</h2>
            <p className="text-sm sm:text-xl text-gray-600 mb-2">27 Dec, 2024</p>
            <div className="space-y-4">
              {["English-I", "English-I", "English-II"].map(
                (subject, index) => ( 
                  <div
                    key={index}
                    className="border-l-4 border-green-800 pl-4 py-2"
                  >
                    <h3 className="text-lg font-medium">{subject}</h3>
                    <p className="text-sm text-gray-600">00:00 - 00:00</p>
                  </div>
                )
              )}
            </div>
            <button className="mt-4 w-full bg-[#074226] text-white py-2 rounded-lg">
              View All
            </button>
          </div>

          {/* Live Class */}
          <div className="bg-gray-100 row-span-1  p-4 rounded-lg shadow-sm flex flex-col justify-start">
            <div className="flex justify-between items-start">
              <h2 className="text-[32px] font-[500] mb-4 border-b-2 border-[#074226]">
                Live Class
              </h2>
              <button className=" bg-[#074226] text-white px-6  py-2 rounded-full">
                Join
              </button>
            </div>
            <img
              src={video} // Replace with the live class image URL
              alt="Live Class"
              className="w-full sm:h-[200px] "
            />
          </div>

          {/* Library */}
          <div className="bg-gray-100  row-span-1 p-4 rounded-lg shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[32px] font-[500] mb-4 border-b-2 border-[#074226] ">
                Library
              </span>
            </div>

            <div className="flex sm:flex-nowrap justify-evenly">
              <div className=" ">
                <div className="flex items-center">
                  <span className="text-[18px]">New Books</span>
                  <span className="text-[8px] text-white p-1 bg-[#074226] rounded-full">
                    12
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 px-2 sm:px-0">
                  <div>
                    <img src={book2} alt="" />
                  </div>
                  <div>
                    <img src={book3} alt="" />
                  </div>
                  <div>
                    <img src={book2} alt="" />
                  </div>
                  <div className="flex flex-col items-center justify-center bg-[rgba(7,66,38,0.08)] rounded-lg">
                    <span>3 +</span>
                    <span>more</span>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex items-center">
                  <span className="text-[18px]">Media</span>
                  <span className="text-[8px] text-white p-1 bg-[#074226] rounded-full">
                    12
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
                  <div>
                    <img src={media1} alt="" className="h-full w-full" />
                  </div>
                  <div>
                    <img src={media2} alt="" />
                  </div>
                  <div>
                    <img src={media3} alt="" />
                  </div>
                  <div className="flex flex-col items-center justify-center bg-[rgba(7,66,38,0.08)] rounded-lg">
                    <span>3 +</span>
                    <span>more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="row-span-2 col-span-2 bg-[#074226] text-white sm:p-10 p-4 rounded-lg">
            {/* Test Details */}
            <div className="flex justify-start items-center">
              <div className="flex justify-start items-center p-2 gap-4">
                <div>
                  <span className="text-[24px]">E</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px]">Parts of Speeches</span>
                  <span className="text-[12px]">English</span>
                </div>
              </div>
              <div>
                <span className="text-[18px] bg-white text-[#074226] px-5 py-2 rounded-full">Passed</span>
              </div>
            </div>
            <div className="grid sm:grid-cols-12">
              <div className="grid sm:grid-cols-2 col-span-5 my-auto py-2 sm:py-0">
                <div className="flex flex-col gap-2 text-[14px] py-2 sm:py-0">
                  <span>Grade</span>
                  <span>Assigned By</span>
                  <span>Test on</span>
                  <span>Duration</span>
                </div>
                <div className="flex flex-col gap-2 text-[14px] py-2 sm:py-0">
                <span>SBSC 10th</span>
                  <span>John Doe</span>
                  <span>Test on</span>
                  <span>Duration</span>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-2 col-span-7 text-[#074226]">
                <div className="bg-[#F9EED0] rounded-xl p-5">
                  <div className="flex justify-between items-end">
                    <span className="text-[15px] font-[400] text-[#074226]">Total Marks</span>
                    <img src={trophy} alt="" />
                  </div>
                  <div>
                    <div>
                    <span className="text-[48px] font-[400]">90</span><span>/100</span>

                    </div>
                    <div>
                    <progress className="progress progress-[#074226] " value="90" max="100"></progress>
                    </div>
                    <div className="text-[11px] font-[400] flex">
                      <ul className="list-disc marker:text-[#074226] px-4 text-[#074226]">
                        <li className="text-[#074226]">10/12</li>
                      </ul>
                      <span className="text-[#7A86A1]">
                        Correct Answers
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F9EED0] rounded-xl p-5">
                  <div className="flex justify-between items-end">
                    <span className="text-[15px] font-[400] text-[#074226]">Percentage</span>
                    <img src={percentage} alt="" />
                  </div>
                  <div>
                    <div>
                    <span className="text-[48px] font-[400]">90</span><span>%</span>

                    </div>
                    <div>
                    <progress className="progress progress-[#074226] " value="90" max="100"></progress>
                    </div>
                    <div className="text-[11px] font-[400] flex">
                      <ul className="list-disc marker:text-[#074226] px-4 text-[#074226]">
                        <li className="text-[#074226]">A+ Grade</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="mt-8 mx-auto block text-[19px] font-[700] bg-[#074226] text-white py-3 px-6 rounded-lg">
          Register as Student
        </button>
      </div>
    </div>
  );
};

export default LearningSolution;
