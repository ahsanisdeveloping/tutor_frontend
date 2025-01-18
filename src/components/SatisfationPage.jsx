import React from "react";
import img1 from "../assets/images/satisfaction/img1.png"
import img2 from "../assets/images/satisfaction/img2.png"
import img3 from "../assets/images/satisfaction/img3.png"
import img4 from "../assets/images/satisfaction/img4.png"
import img5 from "../assets/images/satisfaction/img5.png"
import img6 from "../assets/images/satisfaction/img6.png"
import { useTranslation } from "react-i18next";

const SatisfactionSection = () => {
  const {t} = useTranslation("satisfaction")
  const items = [
    {
      icon: img1,
      title: t("services").quiz.title,
      description:
      t("services").quiz.description,
    },
    {
      icon: img2,
      title: t("services").testing.title,
      description: t("services").testing.description,
    },
    {
      icon: img3,
      title:  t("services").results.title,
      description:
      t("services").results.description,
    },
    {
      icon: img4,
      title: t("services").learning.title,
      description:
      t("services").learning.description,
    },
    {
      icon: img5,
      title: t("services").classes.title,
      description:
      t("services").classes.description,
    },
    {
      icon: img6,
      title: t("services").resources.title,
      description:
      t("services").resources.description,
    },
  ];

  return (
    <div className="bg-gray-50 sm:py-12 py-6">
      <div className="max-w-6xl mx-auto text-left px-4">
        <h2 className="mx-auto sm:text-[53px] text-[35px] font-[500] mb-8 text-center sm:py-10 py-5 font-clash sm:w-[560px]">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-nunito">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center sm:items-start bg-white p-3 sm:p-6 shadow rounded-lg hover:shadow-lg transition"
            >
              <img className="text-4xl mr-4 w-[60px] sm:w-auto" src={item.icon}/>
              <div>
                <h3 className="font-semibold text-lg mb-2 ">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SatisfactionSection;
