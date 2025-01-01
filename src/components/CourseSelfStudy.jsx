import React from "react";
import lesson from "../assets/svgs/courses/book.svg";
import assignment from "../assets/svgs/courses/clipboard.svg";
import time from "../assets/svgs/courses/clock.svg";
import rating from "../assets/svgs/courses/star.svg";
import money from "../assets/svgs/courses/money.svg";
import selfstudy from "../assets/svgs/courses/slefstudy.svg";
import courseImg from "../assets/images/courses/course.png";
import playButton from "../assets/images/courses/playbutton.png";
const CourseSelfStudy = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 bg-gray-100 min-h-screen">
      {/* Left Section */}

      <div className="flex-1 bg-white p-6 rounded-lg shadow">
        <button className="text-green-700 font-semibold mb-4">Back</button>

        <div className="w-[50%]">
          <div className="flex  items-center gap-2">
            <div className="h-[2px] w-[80px] bg-black"></div>
            <p className="font-clash text-[18px]   ">
              No 1 Platform For Learning.
            </p>
          </div>
        </div>
        <h1 className="text-[47px] font-bold mb-2">
          Foundations in Accounting and Auditing Principles
        </h1>
        <p className="text-gray-500 text-[19px] mb-4">
          Introductory course covering the basics of accounting and auditing,
          including financial statements, accounting standards, and audit
          procedures.
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-700 mb-6">
          <span className="flex px-5 justify-center bg-[#FFF5EE] p-3 rounded-3xl gap-2">
            <img src={rating} alt="" width={15} />
            49h content
          </span>
          <span className=" flex  justify-center bg-[#FFF5EE] p-3 px-5 rounded-3xl gap-2" >
            <img src={lesson} alt="" width={15} />Lesson 50
          </span>
          <span className="flex px-5 justify-center bg-[#FFF5EE] p-3 rounded-3xl gap-2">
            <img src={assignment} alt="" width={15} />
            Assignment 04
          </span>
          <span className="flex px-5 justify-center bg-[#FFF5EE] p-3 rounded-3xl gap-2">
            {" "}
            <img src={time} alt="" width={15} />
            18h 19m
          </span>
          <span className="flex px-5 justify-center bg-[#43B6FD] p-3 rounded-3xl gap-2 text-white">
            {" "}
            <img src={money} alt="" width={15} />
            Sponsored
          </span>
        </div>
        <div className="mb-6 bg-slate-400 h-[400px]">
          <h2 className="text-[38px] font-semibold mb-2 ">Course Overview</h2>
          <p className="text-gray-600 text-[16px]">
            This Accounting Management Master course is invaluable for those
            looking to enhance their careers and connect with a network of
            seasoned financial leaders and consultants...
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Course Content</h2>
          <ul className="space-y-2">
            <li className="flex justify-between border-b pb-2">
              <span>Introduction to Accounting & Auditing</span>
              <button className="text-green-600">+</button>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Financial Accounting Fundamentals</span>
              <button className="text-green-600">+</button>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Auditing Principles and Practices</span>
              <button className="text-green-600">+</button>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow">
        <div className="text-gray-600 mb-4">
          <div className="relative  h-[423px] w-[432px]">
          <img src={courseImg} alt="" />
          <img src={playButton} alt="" className="absolute top-[40%] left-[40%]"/>
            
          </div>
          <div className="flex justify-between items-center">
            <div>
            <span className="text-black text-[43px] font-bold ml-2">$5000</span>
            <span className="line-through text-gray-400 text-[23px]">$7500</span>
            </div>
          <div>
          <span className="flex px-5 justify-center bg-[#FFF5EE] p-3 rounded-3xl gap-2">
            <img src={time} alt="" width={15} />
            3d-19h-47m
          </span>
          </div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-[25px] font-semibold mb-2">Choose Package & Plan</h3>
          <div className="flex gap-4">
            <button className="w-1/3 py-2 bg-[#074226] text-white rounded-lg">
              <img src={selfstudy} alt="" />
              <p>
              Self-Study
              </p>
              <p>ON HOUSE TRAINING</p>
            </button>
            <button className="w-1/3 py-2 bg-gray-100 text-gray-600 rounded-lg">
              In-House
            </button>
            <button className="w-1/3 py-2 bg-gray-100 text-gray-600 rounded-lg">
              Live
            </button>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Choose Date & Time</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Riyadh, KSA</span>
              <span>24-27.2025</span>
            </li>
            <li className="flex justify-between">
              <span>Kuwait City, Kuwait</span>
              <span>27-03.2025</span>
            </li>
          </ul>
        </div>
        <button className="w-full py-3 bg-green-600 text-white rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CourseSelfStudy;
