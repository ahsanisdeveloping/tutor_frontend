import React from "react";
import img1 from "../assets/svgs/offering/corporate.svg";
import img2 from "../assets/svgs/offering/consulting.svg";
import { useTranslation } from "react-i18next";

const OfferingSection = () => {
  const {t} = useTranslation("offering")
  return (
    <div className="bg-gray-50 py-5 sm:py-[130px]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="sm:text-5xl text-[35px] font-[500] mb-8 pb-5 sm:pb-10 font-montserrat ">{t("title")}</h2>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-10">
          {/* First Section */}
          <div className="bg-[#FFFAF1] p-6 rounded-lg shadow-lg hover:shadow-xl transition font-montserrat font-normal sm:w-[400px]">
            <div className="flex flex-col items-center mb-4">
              <div
                className="bg-[#F7F7F7] rounded-full p-5 self-start"
                style={{ border: "2px dashed #00000033" }}
              >
                <img className="text-6xl" src={img1} />
              </div>

           
            </div>
            <p className="text-left text-[23px] font-[700] text-[#0E2A46] font-montserrat">
              {t("train").title}
              </p>
            <ul className="text-left text-black space-y-1 mb-4">
              <li className="flex items-start font-montserrat">
                <span className="text-[#868686] mr-2">•</span>
                {t("train").perks.perk1}
              </li>
              <li className="flex items-start font-montserrat">
                <span className="text-[#868686] mr-2">•</span>
                {t("train").perks.perk2}
              </li>
              <li className="flex items-start font-montserrat">
                <span className="text-[#868686] mr-2">•</span>
                {t("train").perks.perk3}
              </li>
            </ul>
            <button className="border border-[#868686] px-4 py-2 rounded text-[#868686] text-[20px] font-[500] w-full hover:bg-[#868686] hover:text-white transition">
            {t("exploremore")}
            </button>
          </div>

          {/* Second Section */}
          <div className="bg-[#FFFAF1] p-6 rounded-lg shadow-lg hover:shadow-xl transition font-montserrat font-normal sm:w-[400px]">
            <div className="flex flex-col items-center mb-4">
              
              <div
                className="bg-[#F7F7F7] rounded-full p-6 self-start"
                style={{ border: "2px dashed #00000033" }}
              >
                <img className="text-6xl h-10 w-12" src={img2} />
              </div>
              
            </div>
            <p className="text-left text-[23px] font-[700] text-gray-800 font-montserrat">
              {t("consult").title}
              </p>
            <ul className="text-left text-gray-700 space-y-1 mb-4">
              <li className="flex items-start font-montserrat">
                <span className="text-[#868686] mr-2">•</span>
                {t("consult").perks.perk1}
              </li>
              <li className="flex items-start font-montserrat">
                <span className="text-[#868686] mr-2">•</span>
                {t("consult").perks.perk2}
              </li>
              <li className="flex items-start font-montserrat">
                <span className="text-[#868686] mr-2">•</span>
                {t("consult").perks.perk3}
              </li>
            </ul>
            <button className="border border-[#868686] px-4 py-2 rounded text-[#868686] text-[20px] font-[500] w-full hover:bg-[#868686] hover:text-white transition">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferingSection;
