// Updated Discover.jsx
import React, { useState } from "react";
import alertimg from "../assets/images/discover/alertimg.png";
const Discover = () => {
   const totalPages = 10; // Total number of pages
  const [currentPage, setCurrentPage] = useState(1); // Current active page

  // Handler to change the page
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const [showAlert, setShowAlert] = useState(true);
  return (
    <div className="">
      {/* Header Section */}
      <header className="bg-base-100 min-h-screen ">
        <div className="container flex flex-col justify-center items-center mx-auto px-4   py-6 h-[600px]">
          <h1 className="text-[46px] w-[640px] font-bold text-center">
            Discover interactive learning{" "}
            <span className="text-gray-400">materials,</span> and tutor
          </h1>
          <div className="flex w-[600px] relative justify-center mt-4">
            <button className="absolute left-[100px] top-3">
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
              className="input input-bordered w-full max-w-md px-16"
            />
          </div>
        </div>
        {showAlert && (
          <div className="backdrop-blur-md bg-white/30 flex justify-between mx-20 pl-10 pr-5  rounded-lg py-3">
            <div className="flex gap-3">
              <div className="bg-[#074226] p-1">
                <img src={alertimg} alt="" />
              </div>
              <span className="text-[17px]">
                Introducing Live Tutoring: Real-time lessons with expert tutors!
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
      </header>
      <div className="px-10">
        <h1 className="text-[22px] font-bold ">
          Results for Accounting and Auditing
        </h1>
      </div>
      {/* Filters and Sorting */}

      {/* Main Section */}
      <main className=" mx-auto px-10 py-6 grid grid-cols-12 gap-2">
        {/* Sidebar Filters */}
        <aside className="col-span-2 bg-base-100 p-4 rounded-lg">
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
        <div className="col-span-10">
          <div className="mx-auto   flex justify-between items-center">
            <div className="flex space-x-4">
              <select className="select font-bold">
                <option>All Courses</option>
                <option>Price</option>
                <option>Popularity</option>
              </select>
              <select className="select font-bold">
                <option>Sponsored</option>
                <option>Price</option>
                <option>Popularity</option>
              </select>
            </div>
            <div>
              <select className="select font-bold">
                <option>Relevancy</option>
                <option>Price</option>
                <option>Popularity</option>
              </select>
            </div>
          </div>

          <section className="col-span-9 grid grid-cols-3 gap-6">
            {Array(12)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="bg-base-100  min-h-[300px] min-w-[327px] "
                >
                  <figure className="relative">
                    <img
                      src={`https://via.placeholder.com/300x200?text=Course+Image+${
                        idx + 1
                      }`}
                      alt="Course Thumbnail"
                      className="w-full rounded-2xl"
                    />
                    <div className="absolute top-5 left-5 flex gap-2">
                      <span className=" bg-black text-white text-[12px] p-2 px-3 rounded-md">
                        $5000
                      </span>
                      <span className=" bg-black text-white text-[12px] p-2 px-3 rounded-md">
                        Sponsored
                      </span>
                    </div>
                  </figure>
                  <div className="flex flex-row justify-between px-2 py-5 items-start">
                    <div>
                      <h2 className="card-title">Course Title {idx + 1}</h2>
                      <p className="text-sm text-gray-500">
                        By Tutor {idx + 1}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 ">
                      <span className="font-bold text-lg flex gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6 text-yellow-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        3.9
                      </span>
                      <span className=" flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        300+
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </section>
        </div>
      </main>

      {/* Pagination */}
      <footer className="bg-base-100 py-4 flex justify-end px-10 items-center">
      <div className="btn-group flex">
      {/* Previous Double Arrow */}
      <button
        className={`btn btn-outline ${currentPage === 1 ? "btn-disabled" : ""}`}
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
        className={`btn btn-outline ${currentPage === 1 ? "btn-disabled" : ""}`}
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
