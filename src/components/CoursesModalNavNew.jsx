import { useState } from "react";
import img from "../assets/svgs/navbarmodal/img.svg";
const generalButtons = [
  "Accounting & Auditing",
  "Finance & Investment",
  "Digital Marketing",
  "Human Resources",
  "Supply Chain Management",
  "Professional Education",
];

const consultingServiceButtons = [
  "Accounting & Auditings",
  "Finance & Investments",
  "Digital Marketing Course",
  "Human Resource",
  "Supply Chain Managements",
  "Professional Education Course",
];
const selfStudyCourses = [
  {
    img: img,
    title: "Certified Professional in Accounting Management",
    tags: ["Self Study", "8 Week", "Live Virtual Training"],
  },
  {
    img: img,
    title: "Certified Professional in Accounting Management",
    tags: ["Self Study", "8 Week", "Live Virtual Training"],
  },
  {
    img: img,
    title: "Certified Professional in Accounting Management",
    tags: ["Self Study", "8 Week", "Live Virtual Training"],
  },
  {
    img: img,
    title: "Certified Professional in Accounting Management",
    tags: ["Self Study", "8 Week", "Live Virtual Training"],
  },
  {
    img: img,
    title: "Certified Professional in Accounting Management",
    tags: ["Self Study", "8 Week", "Live Virtual Training"],
  },
  {
    img: img,
    title: "Certified Professional in Accounting Management",
    tags: ["Self Study", "8 Week", "Live Virtual Training"],
  },
];
const inHouseTrainingCourses = [
  {
    img: img,
    title: "Certified Professional in Accounting Management",
    tags: ["Self Study", "8 Week", "Live Virtual Training"],
  },
  {
    img: img,
    title: "Certified Professional in Accounting Management",
    tags: ["Self Study", "8 Week", "Live Virtual Training"],
  },
  {
    img: img,
    title: "Certified Professional in Accounting Management",
    tags: ["Self Study", "8 Week", "Live Virtual Training"],
  },
  {
    img: img,
    title: "Certified Professional in Accounting Management",
    tags: ["Self Study", "8 Week", "Live Virtual Training"],
  },
  {
    img: img,
    title: "Certified Professional in Accounting Management",
    tags: ["Self Study", "8 Week", "Live Virtual Training"],
  },
  {
    img: img,
    title: "Certified Professional in Accounting Management",
    tags: ["Self Study", "8 Week", "Live Virtual Training"],
  },
];
export default function CoursesModalNavNew() {
  const [activeCategory, setActiveCategory] = useState("Accounting & Auditing");

  return (
    <div className="grid sm:grid-cols-11   rounded-lg shadow-lg font-montserrat sm:min-w-[1200px] sm:h-[500px]">
      {/* Left Sidebar */}
      <div className="sm:col-span-3   overflow-scroll sm:border-r sm:border-gray-200">
        <div className="sm:p-3">
        {generalButtons.map((btn) => (
          <button
            key={btn}
            onClick={() => setActiveCategory(btn)}
            className={`w-full text-left sm:px-4 py-2 my-1 rounded-md transition ${
              btn === activeCategory ? "bg-[#074226] text-white" : "bg-white"
            } px-10 text-[12px]`}
          >
            {btn}
          </button>
        ))}

        <h2 className="text-[19px] font-semibold mt-4 mb-2">Consulting Service</h2>
        {consultingServiceButtons.map((btn) => (
          <button
            key={btn}
            onClick={() => setActiveCategory(btn)}
            className={`w-full text-left px-4 py-2 my-1 rounded-md transition ${
              btn === activeCategory ? "bg-[#074226] text-white" : "bg-white"
            } px-10 text-[12px]`}
          >
            {btn}
          </button>
        ))}
        </div>
        
      </div>

      {/* Right Side Content (for displaying courses) */}
      <div className="sm:col-span-4 bg-white  overflow-scroll">
        <div className="">
        <div className="border-b border-gray-200 ">
          <div className="py-4 px-4">
          <h2 className="text-[12px] font-bold">{activeCategory} Programs</h2>
          <p className="text-[#074226] text-[10px] font-semibold">
            Get personalized courses from industry experts.
          </p>
          </div>
         
        </div>
        <div className="flex flex-col gap-4 p-4">
          <h1 className="text-[13px] font-semibold">SELF-STUDY</h1>
          {selfStudyCourses.map((course, index) => (
            <CourseTemplate course={course} index={index} />
          ))}
        </div>
        </div>
        
      </div>
      <div className="sm:col-span-4 bg-white p-4 overflow-scroll flex flex-col gap-4 border-l border-gray-200">
        <h1 className="text-[13px] font-semibold">IN HOUSE TRAINING</h1>
        {inHouseTrainingCourses.map((course, index) => (
          <CourseTemplate course={course} index={index} />
        ))}
      </div>
    </div>
  );
}
const CourseTemplate = ({ course, index }) => {
  return (
    <div key={index} className="flex flex-wrap sm:flex-nowrap gap-2 items-center justify-center">
      <div className="bg-gray-300 px-4  rounded-xl flex justify-center items-center">
        <img src={course.img} alt="" width={110} />
      </div>
      <div className="p-2 flex flex-col justify-between gap-2">
        <h1 className="text-[14px] font-montserrat">{course.title}</h1>
        <div className="flex gap-2">
          {course.tags.map((tag, index) => (
            <span key={index} className="border border-[#CEB07E] text-[#CEB07E] px-2 rounded-xl text-[8px] text-center">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
