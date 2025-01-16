import React, { useEffect, useState } from "react";
import icon1 from "../assets/images/explore/icon1.png";
import icon2 from "../assets/images/explore/icon2.png";
import icon3 from "../assets/images/explore/icon3.png";
import icon4 from "../assets/images/explore/icon4.png";
import icon5 from "../assets/images/explore/icon5.png";
import icon6 from "../assets/images/explore/icon6.png";
import explore from "../assets/images/explore/explore.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const CourseCategories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState(null);
  const { t } = useTranslation("explore");

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
        setCategories(data.result.slice(0, 6)); // Set only the first 6 categories
        console.log(data.result.slice(0, 6)); // Log the first 6 categories
      } else {
        console.error("Data or result is missing:", data);
      }
    } catch (error) {
      console.error("Failed to fetch courses:", error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="bg-gray-100 py-20 bg-gradient-to-r from-pink-100 to-blue-100">
      <div className="max-w-6xl mx-auto text-center py-5">
        <h2 className="text-3xl font-bold mb-6">{t("title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories &&
            categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white shadow rounded-lg hover:cursor-pointer hover:shadow-lg transition"
                onClick={()=>navigate("/discover")}
              >
                <img
                  className="text-2xl mr-3"
                  src={category.icon ? category.icon : icon1}
                />
                <span className="font-medium text-gray-700">
                  {category.title}
                </span>
              </div>
            ))}
        </div>
        <button
          className="px-6 pr-8 py-3 bg-[#074226] text-white font-medium rounded  relative hover:cursor-auto"
          onClick={() => {
            navigate("/discover");
          }}
        >
          {t("exploreMore")}
          <img
            className="text-2xl mr-3 absolute right-0 top-[18px]"
            src={explore}
          />
        </button>
      </div>
    </div>
  );
};

export default CourseCategories;
