// Updated Discover.jsx
import React, { useEffect, useState } from "react";
import alertimg from "../assets/images/discover/alertimg.png";
import background from "../assets/svgs/discover/bg.svg";
import { courses } from "../data/courses";
import { useNavigate } from "react-router-dom";
const Discover = () => {
  
  const navigate = useNavigate();   
  const totalPages = 3; // Total number of pages
  const [currentPage, setCurrentPage] = useState(1); // Current active page
  const [categories, setCategories] = useState(null);
  
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
  const [selectBannerButton,setSelectedBannerButton] = useState("Executive Education")
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
  const handleBannerButton = (btn) => {
    setSelectedBannerButton(btn)
  }
  
  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "http://92.205.62.64:5254/api/Lookup/GetCourseCategories"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data && data.result) {
        setCategories(data.result); 
       
      } else {
        console.error("Data or result is missing:", data);
      }
    } catch (error) {
      console.error("Failed to fetch courses:", error.message);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCategories();
  }, []);
  return (
    <div className=" bg-[radial-gradient(circle,_#f8edd7_40%,_#f9f9f8_100%)]">
      {/* Header Section */}
      <header
        className="bg-base-100  bg-cover bg-center relative"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="h-full w-full bg-gradient-to-r from-[#f8edd7] to-[#f9f9f8]">
          <div className="container flex flex-col justify-center  items-center mx-auto px-4   py-6 h-[60vh] sm:h-[600px]">
            <h1 className="sm:text-[46px] sm:w-[640px] sm:font-medium text-center font-clash text-2xl font-semibold my-3 sm:my-2 leading-tight">
              Discover interactive learning{" "}
              <span className="text-gray-400">materials,</span> and tutor
            </h1>
            <div className="flex flex-col sm:flex-row sm:gap-5 sm:px-5 relative justify-center mt-4 bg-white rounded-badge sm:rounded-full p-2 gap-2">
             <button className={`${selectBannerButton == "Professional Certificate"?"bg-[#074226] text-white":""} sm:p-2 sm:px-5 rounded-full  px-3 p-2`} onClick={()=>{handleBannerButton("Professional Certificate")}}>Professional Certificate</button>
             <button className={`${selectBannerButton == "Executive Education"?"bg-[#074226] text-white":""} sm:p-2 sm:px-5 rounded-full px-3 p-2`} onClick={()=>{handleBannerButton("Executive Education")}}>Executive Education</button>
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
      <div className="sm:px-10 px-5 sm:pt-10 bg-gradient-to-r from-[#f8edd7] to-[#f9f9f8]">
        <h1 className="sm:text-[22px] font-bold  text-lg py-3">
          Results for Accounting and Auditing
        </h1>
      </div>
      {/* Filters and Sorting */}

      {/* Main Section */}
      <main className=" sm:mx-auto sm:px-3 sm:py-6 sm:grid sm:grid-cols-12 sm:gap-6 bg-gradient-to-r from-[#f8edd7] to-[#f9f9f8] ">
        {/* Sidebar Filters */}
        <aside className="sm:col-span-2 sm:p-0 p-3  rounded-lg font-semibol">
          <button className="bg-[#074226] w-full text-[15px] text-white flex justify-between p-3 rounded text-left sm:text-sm whitespace-nowrap ">
            <span>Filter Courses by Domain</span>
            <span>15</span>
          </button>

          <button className=" w-full flex justify-between p-3 rounded my-2">
            <span>Field for filter</span>
            <span>87+</span>
          </button>
          <button className=" w-full  flex justify-between p-3 rounded my-2">
            <span>Field for filter</span>
            <span>43+</span>
          </button>
          <button className=" w-full  flex justify-between p-3 rounded my-2">
            <span>Field for filter</span>
            <span>53+</span>
          </button>
          <button className="w-full  flex justify-between p-3 rounded my-2">
            <span>Field for filter</span>
            <span>73+</span>
          </button>
        </aside>

        {/* Course Cards */}
        <div className="sm:col-span-10">
          <div className="sm:mx-auto   flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <select className="select font-bold my-2 sm:my-0 bg-transparent sm:w-[150px]">
                <option>Self-Study</option>
                <option>In-House Training</option>
                <option>Live-Online Class</option>
              </select>
              <select className="select font-bold my-2 sm:my-0 bg-transparent sm:w-[150px]">
                <option>Sponsored</option>
                {
                  categories && categories.map((category) => (
                    <option>{category.title}</option>
                  ))
                }
              </select>
            </div>
            <div className="bg-[#EDE8DA] p-[8px] sm:px-3 rounded-2xl sm:flex gap-1 overflow-x-scroll sm:flex-nowrap flex scrollbar-none px-2 mx-3" >
              {filterTags.map((tag) => (
                <button
                  className={` rounded-2xl p-1 px-5 text-[13px] flex-shrink-0 ${
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

          <div className="grid sm:grid-cols-3 sm:gap-6 gap-3 my-2 px-3 sm:px-0">
            {courses.map((course) => (
              <div key={course.id} className="border p-4 rounded-lg shadow-md bg-white max-w-[400px]" onClick={()=>navigate(`/courses`)}>
                {/* Logo */}
                <div className="font-bold text-lg mb-2 ">
                  <img src={course.logo} alt="" className="w-[100%] "/>
                </div>
                {/* Price */}
                <div className="flex items-center gap-1">
                  <p className="font-bold text-xl ">{course.price}</p>
                  <span className="text-md"> /course</span>
                </div>

                {/* Title */}
                <h3 className="text-md font-medium my-2">{course.title}</h3>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 justify-around w-full">
                  {course.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs sm:text-sm border border-[#CEB07E] text-[#CEB07E] py-1 px-2 sm:px-3 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Button */}
                <div className="flex px-2 justify-between items-center gap-2">
                  <button className="bg-[#074226] text-white px-4 py-2 rounded-full hover:bg-[#194732] flex-1">
                    {course.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Pagination */}
      <footer className=" py-4 flex sm:justify-end sm:px-10 items-center">
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
              className={`btn ${currentPage === i + 1 ? "btn-active" : ""} px-2 py-2 sm:px-4 sm:py-4`}
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
