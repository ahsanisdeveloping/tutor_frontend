
import accreditation1 from "../../assets/svgs/courses/accreditation1.svg";
import accreditation2 from "../../assets/svgs/courses/accreditation2.svg";
const AccreditedBy = () => {
    return ( <div className=" flex flex-col items-center bg-[#fffdf8]  sm:p-8 max-w-lg mx-auto shadow border  sm:border-[#074226] p-6  rounded-lg sm:my-5 my-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 font-montserrat">
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

        <p className="text-gray-600 sm:text-[17px] font-montserrat">
          <span className="text-gray-600 sm:text-md my-2 font-montserrat">
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
      </div>);
}
 
export default AccreditedBy;