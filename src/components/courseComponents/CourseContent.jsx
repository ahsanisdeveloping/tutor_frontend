import React from "react";
import { useState } from "react";
const CourseContent = () => {
    const [activeSection, setActiveSection] = useState(null);
    
      const toggleSection = (index) => {
        setActiveSection(activeSection === index ? null : index);
      };
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
    return ( <div className="  bg-white  rounded-lg sm:p-4  my-5">
        <h2 className="text-[38px] font-semibold mb-4 sm:my-5 font-montserrat">
          Course Content
        </h2>
        <div className="space-y-2">
          {sections.map((section, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <div
                className="flex justify-between items-center p-4 cursor-pointer bg-gray-100"
                onClick={() => toggleSection(index)}
              >
                <h3 className="sm:text-lg text-sm font-medium font-montserrat">
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
                      className="text-sm text-gray-600 flex items-start space-x-2 mb-2 font-montserrat"
                    >
                      <span className="text-yellow-500 font-montserrat">•</span>
                      <span className="font-montserrat">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div> );
}
 
export default CourseContent;