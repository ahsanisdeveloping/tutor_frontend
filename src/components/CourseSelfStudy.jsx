import React, { useState } from "react";
import lesson from "../assets/svgs/courses/book.svg";
import assignment from "../assets/svgs/courses/clipboard.svg";
import time from "../assets/svgs/courses/clock.svg";
import rating from "../assets/svgs/courses/star.svg";
import money from "../assets/svgs/courses/money.svg";
import lang from "../assets/svgs/courses/lang.svg";
import selfstudy from "../assets/svgs/courses/slefstudy.svg";
import live from "../assets/svgs/courses/live.svg";
import laptop from "../assets/svgs/courses/laptop.svg";
import accreditation1 from "../assets/svgs/courses/accreditation1.svg";
import accreditation2 from "../assets/svgs/courses/accreditation2.svg";
import courseImg from "../assets/images/courses/course.png";
import playButton from "../assets/images/courses/playbutton.png";
const CourseSelfStudy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };
  const keyTakeaways = [
    
  ]
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
    <div className="flex flex-col p-0  lg:flex-row gap-8 sm:p-6  min-h-screen">
      {/* Left Section */}

      <div className="flex-1 bg-white p-6 rounded-lg ">
        <button className="flex items-center justify-between gap-1 text-white bg-[#074226] font-semibold mb-4 px-3 pr-4 p-2 rounded-badge">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>

          Back</button>

        <div className="sm:w-[50%]">
          <div className="flex  items-center gap-2">
            <div className="h-[2px] sm:w-[80px] w-[50px]  bg-black"></div>
            <p className="font-clash text-xl sm:text-[18px]">
              No 1 Platform For Learning.
            </p>
          </div>
        </div>
        <h1 className="text-3xl sm:text-[47px] sm:leading-tight font-bold mb-2">
          Foundations in Accounting and Auditing Principles
        </h1>
        <p className="text-gray-500 text-[15px] sm:text-[20px] mb-4">
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
        <div className="bg-green-300">
          <h1 className="text-xl sm:text-[38px] font-semibold">Key Takeaways</h1>
          <div className="flex items-center gap-5 p-5">
            <div className="p-5"><span className="text-3xl">1</span></div>
            <div className="flex-1">
              <span className="text-lg leading-tight">A different look at IT as a “business enabler”, and how to converge it with business goals and objectives.</span>
            </div>
          </div>
          <div className="flex items-center gap-5 p-5">
            <div className="p-5"><span className="text-3xl">1</span></div>
            <div className="flex-1">
              <span className="text-lg leading-tight">A different look at IT as a “business enabler”, and how to converge it with business goals and objectives.</span>
            </div>
          </div>
          <div className="flex items-center gap-5 p-5">
            <div className="p-5"><span className="text-3xl">1</span></div>
            <div className="flex-1">
              <span className="text-lg leading-tight">A different look at IT as a “business enabler”, and how to converge it with business goals and objectives.</span>
            </div>
          </div>
          <div className="flex items-center gap-5 p-5">
            <div className="p-5"><span className="text-3xl">1</span></div>
            <div className="flex-1">
              <span className="text-lg leading-tight">A different look at IT as a “business enabler”, and how to converge it with business goals and objectives.</span>
            </div>
          </div>
          <div className="flex items-center gap-5 p-5">
            <div className="p-5"><span className="text-3xl">1</span></div>
            <div className="flex-1">
              <span className="text-lg leading-tight">A different look at IT as a “business enabler”, and how to converge it with business goals and objectives.</span>
            </div>
          </div>
        </div>
        <div className="max-w-xl  bg-white  rounded-lg p-4  ">
          <h2 className="sm:text-2xl text-xl font-bold mb-4">Course Content</h2>
          <div className="space-y-2">
            {sections.map((section, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div
                  className="flex justify-between items-center p-4 cursor-pointer bg-gray-100"
                  onClick={() => toggleSection(index)}
                >
                  <h3 className="sm:text-lg text-sm font-medium">{section.title}</h3>
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
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg ">
          {/* Instructor Section */}
          <div className="mb-8">
            <h2 className="sm:text-3xl text-xl font-bold mb-4">Instructor</h2>
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/80"
                alt="Instructor"
                className="w-20 h-20 rounded-full mr-4"
              />
              <div>
                <h3 className="sm:text-2xl text-lg font-bold">John S.</h3>
                <p className="text-sm sm:text-lg text-gray-600">Training Advisor</p>
                <p className="text-sm mt-2">
                  Meet John Smith, a seasoned accounting and auditing
                  professional with over a decade of experience in both teaching
                  and practical applications.
                </p>
              </div>
            </div>
          </div>

          {/* Review Section */}
          <div className="mb-8">
            <h2 className="sm:text-3xl text-xl font-bold mb-4">Review</h2>
            <div className="flex items-center mb-4">
              <span className="sm:text-4xl text-2xl font-bold mr-4">4.9</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="text-yellow-500 text-xl">
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600 text-sm">
                <div className="w-1/4">5 stars</div>
                <div className="flex-grow bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <div className="w-1/4">4 stars</div>
                <div className="flex-grow bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: "10%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Reviews */}
          <div>
            <h2 className="sm:text-3xl text-xl font-bold mb-4">Featured Review</h2>
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold sm:text-md">{review.name}</h4>
                    <div className="flex space-x-1 text-yellow-500 text-sm">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {review.review}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-6 px-4 py-2 bg-[#074226] text-white rounded-md shadow-md sm:text-xl">
              Show More
            </button>
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
            <div className="flex justify-between items-center">
              <div>
                <span className="text-black text-[43px] font-bold ml-2">
                  $5000
                </span>
                <span className="line-through text-gray-400 text-[23px]">
                  $7500
                </span>
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
            <h3 className="text-[25px] font-semibold mb-2">
              Choose Package & Plan
            </h3>
            <div className="flex gap-4">
              <button className="w-1/3 py-2 bg-[#074226] text-white rounded-lg p-2 px-5">
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
              <button className="w-1/3 py-2  rounded-lg p-2 px-5">
                <img
                  src={laptop}
                  alt=""
                  height={50}
                  width={50}
                  className="m-auto"
                />
                <p className="text-[12px]">Self-Study</p>
                <p className="text-[9px]">ON HOUSE TRAINING</p>
              </button>
              <button className="w-1/3 py-2   rounded-lg p-2 px-5">
                <img
                  src={live}
                  alt=""
                  height={50}
                  width={50}
                  className="m-auto"
                />
                <p className="text-[12px]">Self-Study</p>
                <p className="text-[9px]">ON HOUSE TRAINING</p>
              </button>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-[25px] font-semibold mb-2">
              Choose Date & Time
            </h3>
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
          <button className="w-full py-3 bg-[#074226] text-white rounded-lg">
            Add to Cart
          </button>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
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
          <p className="text-gray-600 sm:text-lg">
            We take great pride in collaborating with top-tier organizations
            within the accounting and auditing sectors. Our partnerships are
            designed to enhance your educational journey, ensuring you receive
            the finest learning experience possible. With the support of our
            esteemed sponsors, we are committed to our mission of delivering
            high-quality education.
          </p>
        </div>
      </div>

    </div>
  );
};

export default CourseSelfStudy;
