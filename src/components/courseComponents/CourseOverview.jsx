import { useState } from "react";
import tick from "../../assets/svgs/courses/tick.svg"
const CourseOverview = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative bg-white rounded-lg shadow-lg p-6 sm:p-10 w-full max-w-4xl mx-auto font-nunito my-5">
      {/* Heading */}
      <h2 className="text-[28px] sm:text-[38px] font-semibold mb-4 font-montserrat">
        Course Overview
      </h2>

      {/* Description */}
      <div className={`relative ${expanded ? "h-auto" : "h-[220px] sm:h-[250px]"} overflow-hidden`}>
        <p className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed font-montserrat ">
          This Accounting Management Master course is invaluable for those looking to enhance their 
          careers and connect with a network of seasoned financial leaders and consultants. The 
          Certified Management Accountant (CMA) certification is highly regarded by top-tier firms; 
          additionally, this course offers significant benefits for organizations aiming to develop 
          their employees' skills.
        </p>

        {/* Two Sections Side by Side */}
        <div className="grid sm:grid-cols-2 gap-6 mt-4">
          {/* Left Column */}
          <div>
          <p className="flex items-center font-semibold text-gray-900 text-lg font-montserrat gap-2">
            <img src={tick} alt="" /> 
            <p>For Foundational Learners
              </p> 
            </p>
            <ul className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed font-montserrat">
              <li>• <strong>Comprehensive Curriculum:</strong> Covering accounting principles, financial 
                statement analysis, and auditing fundamentals.</li>
              <li>• <strong>Interactive Learning Tools:</strong> Engaging videos, quizzes, and practice 
                exercises for reinforced understanding.</li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <p className="flex items-center font-semibold text-gray-900 text-lg font-montserrat gap-2">
            <img src={tick} alt="" /> 
            <p>For Professional Development
              </p> 
            </p>
            <ul className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed font-montserrat">
              <li>• <strong>Comprehensive Curriculum:</strong> Covering accounting principles, financial 
                statement analysis, and auditing fundamentals.</li>
              <li>• <strong>Interactive Learning Tools:</strong> Engaging videos, quizzes, and practice 
                exercises for reinforced understanding.</li>
            </ul>
          </div>
        </div>

        {/* White Fade Effect */}
        {!expanded && (
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>
        )}
      </div>

      {/* Show More Button */}
      <div className="flex justify-between items-center mt-4">
        <button 
          className="text-gray-600 text-sm flex items-center hover:text-gray-900 transition" 
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Show More"} 
          <span className="ml-2 text-lg">{expanded ? "▲" : "▼"}</span>
        </button>
      </div>
    </div>
  );
};

export default CourseOverview;
