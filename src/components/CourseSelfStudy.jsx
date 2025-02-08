import React, { useState } from "react";
import lesson from "../assets/svgs/courses/book.svg";
import assignment from "../assets/svgs/courses/clipboard.svg";
import time from "../assets/svgs/courses/clock.svg";
import book from "../assets/svgs/courses/book.svg";
import meter from "../assets/svgs/courses/meter.svg";
import rating from "../assets/svgs/courses/star.svg";
import money from "../assets/svgs/courses/money.svg";
import lang from "../assets/svgs/courses/lang.svg";
import selfstudy from "../assets/svgs/courses/slefstudy.svg";
import live from "../assets/svgs/courses/live.svg";
import laptop from "../assets/svgs/courses/laptop.svg";
import courseImg from "../assets/images/courses/course.png";
import playButton from "../assets/images/courses/playbutton.png";
import { courses } from "../data/courses";
import clock from "../assets/svgs/courses/clockgray.svg";
import { useNavigate } from "react-router-dom";
import CourseContent from "./courseComponents/CourseContent";
import KeyTakeaways from "./courseComponents/KeyTakeaways";
import AccreditedBy from "./courseComponents/AccreditedBy";
import CourseOverview from "./courseComponents/CourseOverview";
import SelectCourseType from "./courseComponents/SelectCourseType";
const CourseSelfStudy = ({ handleToggleCourses }) => {
  const navigate = useNavigate();

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const products = [
    { id: 1, label: "Level II CFA® Program Live Online", price: 264 },
    { id: 2, label: "CFA Level I SchweserNotes™ & QuickSheet", price: 144 },
    { id: 3, label: "CFA Level I SchweserNotes™ Audio MP3", price: 54 },
    { id: 4, label: "CFA Level III Flashcards Set (Add On)", price: 24 },
  ];

  return (
    <div className="flex flex-col p-0  lg:flex-row gap-8 sm:p-6  min-h-screen font-nunito">
      {/* Left Section */}

      <div className="flex-1 bg-white sm:p-6 rounded-lg p-3 ">
        <button
          className="flex items-center justify-between gap-1 text-white bg-[#074226] font-semibold mb-4 px-3 pr-4 p-2 rounded-badge"
          onClick={() => navigate("/discover")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          Back
        </button>

        <div className="sm:w-[50%]">
          <div className="flex  items-center gap-2">
            <div className="h-[2px] sm:w-[80px] w-[50px]  bg-black"></div>
            <p className="font-clash text-xl sm:text-[18px]">
              No 1 Platform For Learning.
            </p>
          </div>
        </div>
        <h1 className="text-3xl sm:text-[47px] sm:leading-tight font-[600] mb-2 font-clash">
          Foundations in Accounting and Auditing Principles
        </h1>
        <p className="text-gray-500 text-[15px] sm:text-[20px] mb-4 font-nunito font-medium">
          Introductory course covering the basics of accounting and auditing,
          including financial statements, accounting standards, and audit
          procedures.
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-700 mb-6 flex-wrap">
          <span className=" flex  justify-center bg-[#FFF5EE] p-3 px-5 rounded-3xl gap-2">
            <img src={lesson} alt="" width={15} />
            Lesson 50
          </span>
          <span className="flex px-5 justify-center bg-[#FFF5EE] p-3 rounded-3xl gap-2">
            {" "}
            <img src={time} alt="" width={15} />
            18h 19m
          </span>
          <span className="flex px-5 justify-center bg-[#FFF5EE] p-3 rounded-3xl gap-2">
            <img src={lang} alt="" width={15} />
            English
          </span>
        </div>
        <div className="shadow border  border-[#074226] p-6  rounded-lg block sm:hidden">
          <div className="text-gray-600 mb-4">
            <div className="relative  h-[423px] w-full">
              <img src={courseImg} alt="" className="w-full" />
              <img
                src={playButton}
                alt=""
                className="absolute top-[40%] left-[40%]"
              />
            </div>
            <div className="flex justify-between items-center flex-wrap">
              <div className="flex flex-wrap items-end">
                <span className="text-black text-[43px] font-semibold ml-2">
                  SUR
                </span>
                <span className="text-black text-[43px] font-semibold ml-2">
                  $2,648
                </span>
                <span className="line-through text-gray-400 text-[23px] ml-2">
                  $6570
                </span>
              </div>
              <div>
                <span className="flex px-5 justify-center bg-[#FBE9DC] p-3 rounded-3xl gap-2 text-[#626262]">
                  <img src={clock} alt="" width={15} />
                  5 Days Left !
                </span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-[25px] font-semibold mb-2">
              Choose Package & Plan
            </h3>
            <div className="flex gap-4">
              <button
                className="w-1/3 py-2 bg-[#074226] text-white rounded-lg p-2 px-5"
                onClick={() => handleToggleCourses("self-study")}
              >
                <img
                  src={selfstudy}
                  alt=""
                  height={50}
                  width={50}
                  className="m-auto"
                />
                <p className="text-[12px]">Self-Study</p>
                <p className="text-[9px]">ON HOUSE TRAINING</p>
              </button>
              <button
                className="w-1/3 py-2  rounded-lg p-2 px-5"
                onClick={() => handleToggleCourses("in-house")}
              >
                <img
                  src={laptop}
                  alt=""
                  height={50}
                  width={50}
                  className="m-auto"
                />
                <p className="text-[12px]">In-House Training</p>
                <p className="text-[9px]">In House Training</p>
              </button>
              <button
                className="w-1/3 py-2   rounded-lg p-2 px-5"
                onClick={() => handleToggleCourses("live-online")}
              >
                <img
                  src={live}
                  alt=""
                  height={50}
                  width={50}
                  className="m-auto"
                />
                <p className="text-[12px]">Live Online</p>
                <p className="text-[9px]">Live Online Class</p>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {products.map(({ id, label, price }) => (
              <label
                key={id}
                className="flex items-center justify-between p-4 px-2 border rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(id)}
                    onChange={() => handleSelect(id)}
                    className="checkbox checkbox-sm"
                  />
                  <span>{label}</span>
                </div>
                <span className=" font-semibold">+SUR ${price}</span>
              </label>
            ))}
          </div>
          <button className="w-full py-3 bg-[#074226] text-white rounded-full my-3">
            Add to Cart
          </button>
          <div className="space-y-4">
            {/* Lectures */}
            <div className="flex justify-between items-center border-b pb-2 my-3">
              <span className="text-gray-700">Lectures</span>
              <span className="flex items-center space-x-1 bg-[#FFF5EE] text-[#CEB07E] px-2 py-1 rounded-full text-sm">
                <img src={book} alt="" />
                <span>50</span>
              </span>
            </div>

            {/* Skill Level */}
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-gray-700">Skill Level</span>
              <span className="flex items-center space-x-1 bg-[#FFF5EE] text-[#CEB07E] px-2 py-1 rounded-full text-sm">
                <img src={meter} alt="" />
                <span>Basic</span>
              </span>
            </div>

            {/* Language */}
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Language</span>
              <span className="flex items-center space-x-1 bg-[#FFF5EE] text-[#CEB07E] px-2 py-1 rounded-full text-sm">
                <img src={lang} alt="" />
                <span>English</span>
              </span>
            </div>
          </div>
        </div>
        <CourseOverview />
        <KeyTakeaways />
        <CourseContent />
        <SelectCourseType />
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 bg-white">
        <div className="shadow border  border-[#074226] p-6  rounded-lg hidden sm:block">
          <div className="text-gray-600 mb-4">
            <div className="relative  h-[423px] w-full">
              <img src={courseImg} alt="" className="w-full" />
              <img
                src={playButton}
                alt=""
                className="absolute top-[40%] left-[40%]"
              />
            </div>
            <div className="flex justify-between items-center flex-wrap">
              <div className="flex flex-wrap items-end">
                <span className="text-black text-[43px] font-semibold ml-2">
                  SUR
                </span>
                <span className="text-black text-[43px] font-semibold ml-2">
                  $2,648
                </span>
                <span className="line-through text-gray-400 text-[23px] ml-2">
                  $6570
                </span>
              </div>
              <div>
                <span className="flex px-5 justify-center bg-[#FBE9DC] p-3 rounded-3xl gap-2 text-[#626262]">
                  <img src={clock} alt="" width={15} />
                  5 Days Left !
                </span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-[25px] font-semibold mb-2">
              Choose Package & Plan
            </h3>
            <div className="flex gap-4">
              <button
                className="w-1/3 py-2 bg-[#074226] text-white rounded-lg p-2 px-5"
                onClick={() => handleToggleCourses("self-study")}
              >
                <img
                  src={selfstudy}
                  alt=""
                  height={50}
                  width={50}
                  className="m-auto"
                />
                <p className="text-[12px]">Self-Study</p>
                <p className="text-[9px]">ON HOUSE TRAINING</p>
              </button>
              <button
                className="w-1/3 py-2  rounded-lg p-2 px-5"
                onClick={() => handleToggleCourses("in-house")}
              >
                <img
                  src={laptop}
                  alt=""
                  height={50}
                  width={50}
                  className="m-auto"
                />
                <p className="text-[12px]">In-House Training</p>
                <p className="text-[9px]">In House Training</p>
              </button>
              <button
                className="w-1/3 py-2   rounded-lg p-2 px-5"
                onClick={() => handleToggleCourses("live-online")}
              >
                <img
                  src={live}
                  alt=""
                  height={50}
                  width={50}
                  className="m-auto"
                />
                <p className="text-[12px]">Live Online</p>
                <p className="text-[9px]">Live Online Class</p>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {products.map(({ id, label, price }) => (
              <label
                key={id}
                className="flex items-center justify-between p-4 px-2 border rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(id)}
                    onChange={() => handleSelect(id)}
                    className="checkbox checkbox-sm"
                  />
                  <span>{label}</span>
                </div>
                <span className=" font-semibold">+SUR ${price}</span>
              </label>
            ))}
          </div>
          <button className="w-full py-3 bg-[#074226] text-white rounded-full my-3">
            Add to Cart
          </button>
          <div className="space-y-4">
            {/* Lectures */}
            <div className="flex justify-between items-center border-b pb-2 my-3">
              <span className="text-gray-700">Lectures</span>
              <span className="flex items-center space-x-1 bg-[#FFF5EE] text-[#CEB07E] px-2 py-1 rounded-full text-sm">
                <img src={book} alt="" />
                <span>50</span>
              </span>
            </div>

            {/* Skill Level */}
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-gray-700">Skill Level</span>
              <span className="flex items-center space-x-1 bg-[#FFF5EE] text-[#CEB07E] px-2 py-1 rounded-full text-sm">
                <img src={meter} alt="" />
                <span>Basic</span>
              </span>
            </div>

            {/* Language */}
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Language</span>
              <span className="flex items-center space-x-1 bg-[#FFF5EE] text-[#CEB07E] px-2 py-1 rounded-full text-sm">
                <img src={lang} alt="" />
                <span>English</span>
              </span>
            </div>
          </div>
        </div>
        <AccreditedBy />
      </div>
    </div>
  );
};

export default CourseSelfStudy;
