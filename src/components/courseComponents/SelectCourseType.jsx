
import { courses } from "../../data/courses";
const SelectCourseType = () => {
  const trimCourses = courses.slice(0, 4);
    return ( <div className="max-w-4xl mx-auto bg-white sm:p-6 rounded-lg my-5">
      <h1 className="text-[30px] sm:text-[38px] font-semibold sm:my-5 my-2 font-montserrat">
        Select Course Type
      </h1>
      <div className="grid sm:grid-cols-2 sm:gap-6 gap-3">
        {trimCourses.map((course) => (
          <div key={course.id} className="border p-4 rounded-lg shadow-md">
            {/* Logo */}
            <div className="font-bold text-lg mb-2">
              <img src={course.logo} alt="" />
            </div>
            {/* Price */}
            <div className="flex items-center gap-1">
              <p className="font-bold text-xl font-montserrat">{course.price}</p>
              <span className="text-md font-montserrat"> /course</span>
            </div>

            {/* Title */}
            <h3 className="text-md font-medium my-2 font-montserrat">{course.title}</h3>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {course.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs border border-[#CEB07E] text-[#CEB07E] py-1 px-2 rounded-full font-montserrat"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Button */}
            <div className="flex px-2 justify-between items-center gap-2">
                  <button className="bg-[#074226] text-white px-4 py-2 rounded-full hover:bg-[#194732] flex-1 font-montserrat">
                    {course.buttonText}
                  </button>
                </div>
          </div>
        ))}
      </div>
    </div>);
}
 
export default SelectCourseType;