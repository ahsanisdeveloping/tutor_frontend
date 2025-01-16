import React from "react";
import BlogCard from "./BlogCard";
import img from "../assets/images/register/student.png";
const blogs = [
  {
    title: "Mastering Study Techniques: Your Path to Academic Success",
    time: "45 Minutes",
  },
  {
    title: "Study Smarter, Not Harder: A Student’s Guide to Success",
    time: "20 Minutes",
  },
  {
    title: "From Average to A+: Transform Your Study Routine",
    time: "26 Minutes",
  },
  {
    title: "Ace Your Exams: The Ultimate Study Strategy Guide",
    time: "50 Minutes",
  },
  { title: "The Student’s Handbook to Effective Studying", time: "35 Minutes" },
  { title: "Study Like a Pro: Techniques for Top Grades", time: "40 Minutes" },
  {
    title: "Unlocking Academic Excellence: Study Tips and Tricks",
    time: "50 Minutes",
  },
  {
    title: "Boost Your Grades: Essential Study Habits for Students",
    time: "10 Minutes",
  },
  {
    title: "Achieve More with Less: Efficient Study Methods",
    time: "55 Minutes",
  },
];

const TrendingBlogs = () => {
  return (
    <div className="px-2 sm:px-20 py-10 font-clash">
      <div className="bg-[#DBCFBC] rounded-3xl p-8 shadow-lg flex flex-col lg:flex-row gap-8 ">
        <div className="flex-1">
          <h2 className="text-lg sm:text-[55px] font-semibold font-clash text-black mb-2 sm:leading-relaxed">
            Featured Blog
          </h2>
          <h3 className="text-xl sm:text-[34px] font-semibold text-[#074226] mb-4 sm:leading-relaxed">
            How to Study efficiently? A complete Guide to get good grades
          </h3>
          <p className="text-gray-600 mb-6 sm:text-[18px] sm:leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor. Sapien, diam, tempus at ornare mi sagittis, diam
            rhoncus pulvinar. Non ut consectetur donec tortor nam scelerisque
            habitant morbi. Pretium.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <span className="flex p-2 bg-[#FFFFFF8A] rounded-xl gap-1 text-sm sm:text-md">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              30 minutes
            </span>
            <span className="flex p-2 bg-[#FFFFFF8A] rounded-xl gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                />
              </svg>
              Trending
            </span>
          </div>
          <button className="btn bg-[#074226] text-white text-[16px]">
            Read More →
          </button>
        </div>
        <div className="flex-none w-full lg:w-1/3">
          <div className="h-full  rounded-lg">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl sm:text-[53px] font-semibold mb-6 text-center py-5 sm:py-10">
          Trending Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {blogs.map((blog, index) => (
            <BlogCard key={index} title={blog.title} time={blog.time} />
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-3  sm:p-6 bg-base-200 rounded-lg shadow-lg">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-[39px] font-semibold mb-4 text-[#074226]">
            The Ultimate Guide to Studying Effectively for Top Grades
          </h2>
          <p className="text-black text-lg  sm:text-[24px] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            gravida eget aliquam, augue in in. Tempor erat sapien commodo nisi
            ipsum, magna. Sapien, diam, tempus at ornare mi sagittis, diam
            rhoncus pulvinar. Non ut consectetur donec tortor nam scelerisque
            habitant morbi. Pretium, sed turpis curabitur orci sed ornare ut.
          </p>
          <button className="btn bg-[#074226] text-[16px] text-white">
            Read More →
          </button>
        </div>
        <div className="flex-none w-full lg:w-1/3">
          <img className="rounded-lg w-[528px] h-[436px]" src={img} />
        </div>
      </div>
    </div>
  );
};

export default TrendingBlogs;
