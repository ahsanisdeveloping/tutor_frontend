import React, { useState } from "react";
import lesson from "../assets/svgs/courses/book.svg";
import assignment from "../assets/svgs/courses/clipboard.svg";
import time from "../assets/svgs/courses/clock.svg";
import rating from "../assets/svgs/courses/star.svg";
import money from "../assets/svgs/courses/money.svg";
import lang from "../assets/svgs/courses/lang.svg";
import selfstudy from "../assets/svgs/courses/slefstudy.svg";
import live from "../assets/svgs/courses/live.svg";
import livewhite from "../assets/svgs/courses/livewhite.svg";
import selfgray from "../assets/svgs/courses/selfgray.jpg";
import laptop from "../assets/svgs/courses/laptop.svg";
import accreditation1 from "../assets/svgs/courses/accreditation1.svg";
import accreditation2 from "../assets/svgs/courses/accreditation2.svg";
import courseImg from "../assets/images/courses/course.png";
import playButton from "../assets/images/courses/playbutton.png";
import { courses } from "../data/courses";
import full from "../assets/svgs/courses/full.svg"
import { useNavigate } from "react-router-dom";
const CourseLiveOnline = ({handleToggleCourses}) => {
  const navigate = useNavigate(); 
  const trimCourses = courses.slice(0, 4);
  const [activeSection, setActiveSection] = useState(null);
  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };
  const keyTakeaways = [
    {
      id: 1,
      content:
        "A different look at IT as a 'business enabler', and how to converge it with business goals and objectives.",
    },
    {
      id: 2,
      content:
        "Trainees will become aware of a set of topics and knowledge areas in IT governance and its operational management.",
    },
    {
      id: 3,
      content:
        "Realise the key roles and responsibilities in managing IT in the organization, and become able to design the needed structures for successful and secured IT.",
    },
    {
      id: 4,
      content:
        "Integrate contemporary managerial concepts and theories to the continuous improvement in IT function at organization level.",
    },
    {
      id: 5,
      content:
        "Learn how to prioritise and launch IT projects, and integrate it to the business strategy successfully.",
    },
  ];

  const reviews = [
    {
      name: "Emily Chen, CPA Candidate",
      review:
        "I was struggling to grasp auditing concepts until I took this course. The instructor's explanations are crystal clear, and their practice exercises are incredibly helpful. I passed my CPA exam on the first try!",
      rating: 5,
      image: "https://via.placeholder.com/48",
    },
    {
      name: "Emily Johnson, CPA Candidate",
      review:
        "The course helped me develop a deep understanding of auditing principles. The practice exams were spot on!",
      rating: 5,
      image: "https://via.placeholder.com/48",
    },
    {
      name: "Sophia Williams, CPA Candidate",
      review:
        "Highly recommend this course for anyone preparing for their CPA exams. The explanations and examples are excellent!",
      rating: 5,
      image: "https://via.placeholder.com/48",
    },
  ];
  const sections = [
    {
      title: "Introduction to Accounting & Auditing",
      content: [
        "Definition and importance of accounting and auditing",
        "Brief history and evolution",
      ],
    },
    { title: "Financial Accounting Fundamentals" },
    { title: "Auditing Principles and Practices" },
    { title: "Advanced Topics and Specialized Accounting" },
    { title: "Capstone Project and Final Assessment" },
  ];
  return (
    <div className="flex flex-col p-0  lg:flex-row gap-8 sm:p-6  min-h-screen font-nunito">
      {/* Left Section */}

      <div className="flex-1 bg-white sm:p-6 rounded-lg p-3 ">
        <button className="flex items-center justify-between gap-1 text-white bg-[#074226] font-semibold mb-4 px-3 pr-4 p-2 rounded-badge" onClick={()=>navigate("/discover")}>
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
        <h1 className="text-3xl sm:text-[47px] sm:leading-tight font-semibold mb-2 font-clash">
          Foundations in Accounting and Auditing Principles
        </h1>
        <p className="text-gray-500 text-[15px] sm:text-[20px] mb-4 ">
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
        <div className="mb-6  h-[400px] overflow-hidden">
          <h2 className="text-[38px] font-semibold mb-2 ">Course Overview</h2>
          <p className="text-gray-600 text-[13px] sm:text-[20px]">
            This Accounting Management Master course is invaluable for those
            looking to enhance their careers and connect with a network of
            seasoned financial leaders and consultants. The Certified Management
            Accountant (CMA) certification is highly regarded by top-tier firms;
            additionally, this course offers significant benefits for
            organizations aiming to develop their employees' skills.
          </p>
          <p className="text-gray-600 text-[13px] sm:text-[20px]">
            Comprehensive Curriculum: Covering accounting principles, financial
            statement analysis, and auditing fundamentals. Interactive Learning
            Tools: Engaging videos, quizzes, and practice exercises for
            reinforced understanding. Real-World Case Studies: Applying
            theoretical knowledge to practical scenarios. Dedicated Support:
            Access to instructors for clarification on key concepts.
          </p>
          <p className="text-gray-600 text-[13px] sm:text-[20px]">
            Comprehensive Curriculum: Covering accounting principles, financial
            statement analysis, and auditing fundamentals. Interactive Learning
            Tools: Engaging videos, quizzes, and practice exercises for
            reinforced understanding. Real-World Case Studies: Applying
            theoretical knowledge to practical scenarios. Dedicated Support:
            Access to instructors for clarification on key concepts.
          </p>
          <p className="text-gray-600 text-[13px] sm:text-[20px]">
            Comprehensive Curriculum: Covering accounting principles, financial
            statement analysis, and auditing fundamentals. Interactive Learning
            Tools: Engaging videos, quizzes, and practice exercises for
            reinforced understanding. Real-World Case Studies: Applying
            theoretical knowledge to practical scenarios. Dedicated Support:
            Access to instructors for clarification on key concepts.
          </p>
        </div>
        <div className="">
          <h1 className="text-xl sm:text-[38px] font-semibold sm:p-5 p-3 ">
            Key Takeaways
          </h1>
          <div className="flex flex-col gap-2 justify-evenly items-center sm:p-2">
            {keyTakeaways.map((point) => (
              <div className="flex items-center gap-5 border-b border-gray-300 ">
                <div className="p-5">
                  <span className="text-3xl">{point.id}</span>
                </div>
                <div className="flex-1">
                  <span className="text-lg leading-tight">{point.content}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-xl  bg-white  rounded-lg sm:p-4  ">
          <h2 className="text-xl sm:text-[38px] font-semibold mb-4 sm:my-5">Course Content</h2>
          <div className="space-y-2">
            {sections.map((section, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div
                  className="flex justify-between items-center p-4 cursor-pointer bg-gray-100"
                  onClick={() => toggleSection(index)}
                >
                  <h3 className="sm:text-lg text-sm font-medium">
                    {section.title}
                  </h3>
                  {activeSection === index ? (
                    <span className="text-lg">✕</span>
                  ) : (
                    <span className="text-lg">+</span>
                  )}
                </div>
                {activeSection === index && section.content && (
                  <ul className="px-6 py-4 bg-white">
                    {section.content.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 flex items-start space-x-2 mb-2"
                      >
                        <span className="text-yellow-500">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto bg-white sm:p-6 rounded-lg ">
          <h1 className="text-xl sm:text-[38px] font-semibold sm:my-5 my-2">Select Course Type</h1>
          <div className="grid sm:grid-cols-2 sm:gap-6 gap-3">
            {trimCourses.map((course) => (
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
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 bg-white">
        <div className="shadow border  border-[#074226] p-6  rounded-lg ">
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
                <span className="text-black text-[43px] font-semibold ml-2">SUR</span>
                <span className="text-black text-[43px] font-semibold ml-2">
                  $2,648 
                </span>
                <span className="line-through text-gray-400 text-[23px] ml-2">
                   $6570
                </span>
              </div>
              <div>
                <span className="flex px-5 justify-center bg-red-500 p-3 rounded-3xl gap-2 text-white">
                  <img src={full} alt="" width={15} />
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
              <button className=" w-1/3 py-2  rounded-lg p-2 px-5" onClick={()=>handleToggleCourses("self-study")}>
                <img
                  src={selfgray}
                  alt=""
                  height={50}
                  width={50}
                  className="m-auto"
                />
                <p className="text-[12px]">Self-Study</p>
                <p className="text-[9px]">ON HOUSE TRAINING</p>
              </button>
              <button className="w-1/3 py-2  rounded-lg p-2 px-5" onClick={()=>handleToggleCourses("in-house")}>
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
              <button className="w-1/3 py-2 bg-[#074226] text-white rounded-lg p-2 px-5" onClick={()=>handleToggleCourses("live-online")}>
                <img
                  src={livewhite}
                  alt=""
                  height={50}
                  width={50}
                  className="m-auto"
                />
                <p className="text-[12px] text-white">Live Online</p>
                <p className="text-[9px] text-white">Live Online Class</p>
              </button>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-[25px] font-semibold mb-2">
              Choose Date & Time
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div className="flex justify-between items-center gap-2 border-gray-400 border p-3 rounded-lg "> 
                <span>Riyadh, KSA</span>
                <span>23-27, 2025</span>
              </div>
              <div className="flex justify-between items-center gap-2 border-gray-400 border p-3 rounded-lg"> 
                <span>Riyadh, KSA</span>
                <span>12-27, 2025</span>
              </div><div className="flex justify-between items-center gap-2 border-gray-400 border p-3 rounded-lg"> 
                <span>Kuwait City, Kuwait</span>
                <span>27-01, 2025</span>
              </div><div className="flex justify-between items-center gap-2 border-gray-400 border p-3 rounded-lg"> 
                <span>Barcelona, Spain</span>
                <span>Jul 07-11, 2025</span>
              </div><div className="flex justify-between items-center gap-2 border-gray-400 border p-3 rounded-lg"> 
                <span>Abu Dhabi, UAE</span>
                <span>25-29, 2025</span>
              </div><div className="flex justify-between items-center gap-2 border-gray-400 border p-3 rounded-lg"> 
                <span>Suggest a Date & Location</span>
              </div>
            </div>
          </div>
          <button className="w-full py-3 bg-[#074226] text-white rounded-lg">
            Add to Cart
          </button>
        </div>
        <div className=" flex flex-col items-center bg-white  sm:p-8 max-w-lg mx-auto shadow border  sm:border-[#074226] p-6  rounded-lg sm:my-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Accredited by
          </h2>
          <div className="flex justify-start items-center space-x-4 mb-6  w-full">
            <img
              src={accreditation1}
              alt="PMI Logo"
              className="h-16 object-contain"
            />
            <img
              src={accreditation2}
              alt="HRDF Logo"
              className="h-16 object-contain"
            />
          </div>

          <p className="text-gray-600 sm:text-md">
            <span className="text-gray-600 sm:text-md">
              OpenSpace - Professional Development Institute
            </span>
            OpenSpace is the leading corporate training and EdTech company in
            the EMEA region, with the most comprehensive learning and
            development solutions in all strategic corporate functions,
            including Corporate Finance, HR, Procurement and SCM, Technology,
            Quality, Operations and Engineering. Through instructor-led
            sessions, in-company training, and coaching, our faculty of experts
            deliver over 1200+ programs annually, while 25,000+ professionals
            are equipped with up-to-date relevant education and the latest tech
            solutions across the EMEA region. We help our valued clients with a
            wide range of services, including Training Needs Analysis,
            Competency Development and Assessment, and custom-built e-Learning
            solutions that cater to specific industries and knowledge areas.
            OpenSpace mission remains boosting competitiveness of our clients
            worldwide through continuous learning, while we strive to achieve
            our vision of becoming the best quality corporate training and
            EdTech Company in the EMEA and the world. Whether our clients are
            facing difficulties re-organising their brand, equipping their
            workforce with an extra set of skills or aiming to assess
            competencies within an existing structure, our development planning
            is a great solution. OpenSpace mission is to help our worldwide
            clients boost their competitiveness by improving the competency
            levels of their employees, through top quality training and
            development solutions delivered by unrivaled global experts and
            facilitated by the best training managers in the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseLiveOnline;
