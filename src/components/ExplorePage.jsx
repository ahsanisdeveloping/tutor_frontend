import React from "react";
import icon1 from "../assets/images/explore/icon1.png"
import icon2 from "../assets/images/explore/icon2.png"
import icon3 from "../assets/images/explore/icon3.png"
import icon4 from "../assets/images/explore/icon4.png"
import icon5 from "../assets/images/explore/icon5.png"
import icon6 from "../assets/images/explore/icon6.png"
import explore from "../assets/images/explore/explore.png"
import { useTranslation } from "react-i18next";

const CourseCategories = () => {
  const {t} = useTranslation("explore")
  const categories = [
    { name: t("categories").accounting, icon: icon1 },
    { name: t("categories").finance, icon: icon2 },
    { name: t("categories").marketing, icon: icon3 },
    { name: t("categories").hr, icon: icon4 },
    { name: t("categories").supplyChain, icon: icon5},
    { name: t("categories").professionalEducation, icon: icon6 },
  ];

  return (
    <div className="bg-gray-100 py-20 bg-gradient-to-r from-pink-100 to-blue-100">
      <div className="max-w-6xl mx-auto text-center py-5">
        <h2 className="text-3xl font-bold mb-6">{t("title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white shadow rounded-lg hover:shadow-lg transition"
            >
              <img className="text-2xl mr-3" src={category.icon}/>
              <span className="font-medium text-gray-700">{category.name}</span>
            </div>
          ))}
        </div>
        <button className="px-6 pr-8 py-3 bg-[#074226] text-white font-medium rounded hover:bg-green-700 transition relative">
        {t("exploreMore")}
          <img className="text-2xl mr-3 absolute right-0 top-[18px]" src={explore}/>
        </button>
      </div>
    </div>
  );
};

export default CourseCategories;
