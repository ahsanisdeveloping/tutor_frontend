// Updated Discover.jsx
import React, { useState } from "react";
import alertimg from "../assets/images/discover/alertimg.png";
import background from "../assets/svgs/discover/bg.svg";
import { courses } from "../data/courses";
const Discover = () => {
 
  const totalPages = 10; // Total number of pages
  const [currentPage, setCurrentPage] = useState(1); // Current active page
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

  // Handler to change the page
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const [showAlert, setShowAlert] = useState(true);
  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };
  return (
    <div className="">
      {/* Header Section */}
      <header
        className="bg-base-100  bg-cover bg-center relative"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="h-full w-full bg-gradient-to-r from-[#fdfaf3] to-[#f8f9f9]">
          <div className="container flex flex-col justify-center  items-center mx-auto px-4   py-6 h-[60vh] sm:h-[600px]">
            <h1 className="sm:text-[46px] sm:w-[640px] font-bold text-center">
              Discover interactive learning{" "}
              <span className="text-gray-400">materials,</span> and tutor
            </h1>
            <div className="flex sm:w-[600px] relative justify-center mt-4">
              <button className="absolute sm:left-[100px] sm:top-3 left-5 top-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>

              <input
                type="text"
                placeholder="Search for tutors, courses, or materials..."
                className="input input-bordered w-full max-w-md sm:px-16 px-16 pr-5"
              />
            </div>
          </div>
          {showAlert && (
            <div className="backdrop-blur-md bg-white/30 flex justify-between sm:mx-20 px-2 sm:pl-10 sm:pr-5  rounded-lg py-3">
              <div className="flex gap-3 items-center">
                <div className="bg-[#074226] p-1 ">
                  <img src={alertimg} alt="" className="flex"/>
                </div>
                <span className="text-[17px]">
                  Introducing Live Tutoring: Real-time lessons with expert
                  tutors!
                </span>
              </div>

              <button
                onClick={() => {
                  setShowAlert(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
          
      </header>
      <div className="sm:px-10 px-5 sm:pt-10">
        <h1 className="sm:text-[22px] font-bold  text-lg py-3">
          Results for Accounting and Auditing
        </h1>
      </div>
      {/* Filters and Sorting */}

      {/* Main Section */}
      <main className=" sm:mx-auto sm:px-10 sm:py-6 sm:grid sm:grid-cols-12 sm:gap-2">
        {/* Sidebar Filters */}
        <aside className="sm:col-span-2 bg-base-100 p-4 rounded-lg">
          <button className="bg-[#074226] w-full text-white flex justify-between p-3 rounded">
            <span>All</span>
            <span>1820+</span>
          </button>

          <button className=" w-full flex justify-between p-3 rounded">
            <span>Field for filter</span>
            <span>1820+</span>
          </button>
          <button className=" w-full  flex justify-between p-3 rounded">
            <span>Field for filter</span>
            <span>1820+</span>
          </button>
          <button className=" w-full  flex justify-between p-3 rounded">
            <span>Field for filter</span>
            <span>1820+</span>
          </button>
          <button className="w-full  flex justify-between p-3 rounded">
            <span>Field for filter</span>
            <span>1820+</span>
          </button>
        </aside>

        {/* Course Cards */}
        <div className="sm:col-span-10">
          <div className="sm:mx-auto   flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <select className="select font-bold">
                <option>Self-Study</option>
                <option>Price</option>
                <option>Popularity</option>
              </select>
              <select className="select font-bold">
                <option>Sponsored</option>
                <option>Price</option>
                <option>Popularity</option>
              </select>
            </div>
            <div className="bg-[#EDE8DA] p-[8px] sm:px-3 rounded-2xl sm:flex gap-1 overflow-hidden sm:flex-nowrap flex ">
              {filterTags.map((tag) => (
                <button
                  className={`bg-white rounded-2xl p-1 px-5 text-[13px] flex-shrink-0 ${
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

          <div className="grid sm:grid-cols-3 sm:gap-6 gap-3">
            {courses.map((course) => (
              <div key={course.id} className="border p-4 rounded-lg shadow-md">
                {/* Logo */}
                <div className="font-bold text-lg mb-2">
                  <img src={course.logo} alt="" />
                </div>
                {/* Price */}
                <div className="flex items-center gap-1">
                  <p className="font-bold text-xl ">{course.price}</p>
                  <span className="text-md"> /course</span>
                </div>

                {/* Title */}
                <h3 className="text-md font-medium my-2">{course.title}</h3>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {course.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs border border-[#CEB07E] text-[#CEB07E] py-1 px-2 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Button */}
                <div className="flex px-2 justify-between items-center gap-2">
                  <button className="bg-[#074226] text-white px-4 py-2 rounded-full hover:bg-green-700 flex-1">
                    {course.buttonText}
                  </button>
                  <button className="bg-[#074226] text-white p-2 rounded-full hover:bg-green-700">
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
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Pagination */}
      <footer className="bg-base-100 py-4 flex sm:justify-end sm:px-10 items-center">
        <div className="btn-group flex flex-wrap">
          {/* Previous Double Arrow */}
          <button
            className={`btn btn-outline ${
              currentPage === 1 ? "btn-disabled" : ""
            }`}
            onClick={() => changePage(1)}
            disabled={currentPage === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M10.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L12.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M4.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L6.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Previous Single Arrow */}
          <button
            className={`btn btn-outline ${
              currentPage === 1 ? "btn-disabled" : ""
            }`}
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => changePage(i + 1)}
              className={`btn ${currentPage === i + 1 ? "btn-active" : ""}`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next Single Arrow */}
          <button
            className={`btn btn-outline ${
              currentPage === totalPages ? "btn-disabled" : ""
            }`}
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Next Double Arrow */}
          <button
            className={`btn btn-outline ${
              currentPage === totalPages ? "btn-disabled" : ""
            }`}
            onClick={() => changePage(totalPages)}
            disabled={currentPage === totalPages}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Discover;
