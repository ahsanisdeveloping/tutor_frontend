import bannerleft from "../assets/images/banner/bannerleft.png";
import avatar1 from "../assets/images/banner/avatar1.png";
import avatar2 from "../assets/images/banner/avatar2.png";
import avatar3 from "../assets/images/banner/avatar3.png";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation("banner");

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between p-5 lg:p-10 items-center">
      {/* Left Section */}
      <div className="lg:w-[50%] w-full text-center lg:text-left">
        {/* Heading Section */}
        <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
          <div className="h-[2px] w-[50px] md:w-[80px] bg-black"></div>
          <p className="font-montserrat font-[600] text-xl md:text-[18px]">{t("heading1")}</p>
        </div>

        {/* Main Headings */}
        <div className="flex flex-col items-center lg:items-start gap-2">
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <span className="font-montserrat font-[600] text-5xl md:text-[65px]  word-spacing-wide">
              {t("heading2i")}
            </span>
            <div className="sm:flex h-[50px] hidden">
              <img
                src={avatar1}
                className="border-2 border-white rounded-full"
                alt=""
              />
              <img
                src={avatar2}
                className="border-2 border-white rounded-full relative left-[-10px]"
                alt=""
              />
              <img
                src={avatar3}
                className="border-2 border-white rounded-full relative left-[-20px]"
                alt=""
              />
            </div>
          </div>
          <p className="font-montserrat font-[600] text-4xl md:text-[65px]  sm:leading-tight">
            {t("heading2ii")}
          </p>
        </div>

        {/* Subheading */}
        <p className="font-montserrat font-medium text-lg md:text-[19px] md:w-[500px] mt-2 leading-tight">
          {t("para1")}
        </p>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row gap-2 my-4 justify-center lg:justify-start">
          <button className="font-montserrat font-normal btn  bg-[#074226] h-[50px] md:h-[60px] text-white px-8 md:px-6 sm:text-xl">
            {t("getstarted")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
          <button className="sm:text-xl font-montserrat font-normal btn  h-[50px] md:h-[60px] border-[#074226] px-8 md:px-6">
            {t("learnmore")}
          </button>
        </div>

        {/* Stats Section */}
        <div className="bg-[#D1BF8F52] flex flex-col md:flex-row p-4 md:p-3 rounded-[10px] justify-evenly items-center text-black my-5 w-full lg:w-[402px] gap-4 md:gap-0 mx-auto lg:mx-0 font-montserrat">
          <div className="sm:text-left sm:border-r sm:border-[#D1BF8F80] pr-5 border-b  border-[#D1BF8F80] sm:border-b-transparent pb-4 sm:pb-0 ">
            <span className="font-bold text-sm md:text-[13px] leading-tight font-montserrat">
              {t("morethan")}
            </span>
            <p className="font-bold text-4xl md:text-[53px] leading-tight font-montserrat">
              500+
            </p>
            <p className="font-bold text-sm md:text-[13px] leading-tight font-montserrat">
              {t("tutors")}
            </p>
          </div>
          <div className="sm:text-left">
            <p className="font-bold text-sm md:text-[13px] leading-tight font-montserrat">
              {t("morethan")}
            </p>
            <p className="font-bold text-4xl md:text-[53px] leading-tight font-montserrat">
              1500+
            </p>
            <p className="font-bold text-sm md:text-[13px] leading-tight font-montserrat">
              {t("students")}
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-[50%] w-full flex justify-center">
        <img
          src={bannerleft}
          alt=""
          className="w-full max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
