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
          <p className="font-clash text-xl md:text-2xl">{t("heading1")}</p>
        </div>

        {/* Main Headings */}
        <div className="flex flex-col items-center lg:items-start gap-2">
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <span className="font-clash text-3xl md:text-[50px]">{t("heading2i")}</span>
            <div className="flex h-[50px]">
              <img src={avatar1} className="border-2 border-white rounded-full" alt="" />
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
          <p className="font-clash text-3xl md:text-[50px]">{t("heading2ii")}</p>
        </div>

        {/* Subheading */}
        <p className="font-clash text-lg md:text-[30px] mt-2">{t("para1")}</p>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row gap-2 my-4 justify-center lg:justify-start">
          <button className="btn font-bold bg-[#074226] h-[50px] md:h-[60px] text-white px-8 md:px-10">
            {t("getstarted")}
          </button>
          <button className="btn font-bold h-[50px] md:h-[60px] border-[#074226] px-8 md:px-10">
            {t("learnmore")}
          </button>
        </div>

        {/* Stats Section */}
        <div className="bg-[#D1BF8FB8] flex flex-col md:flex-row p-4 md:p-3 rounded-[10px] justify-around text-black my-5 w-full lg:w-[402px] gap-4 md:gap-2 mx-auto lg:mx-0">
          <div className="text-center">
            <span className="font-bold text-sm md:text-[13px]">{t("morethan")}</span>
            <p className="font-bold text-4xl md:text-[53px]">500+</p>
            <p className="font-bold text-sm md:text-[13px]">{t("tutors")}</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-sm md:text-[13px]">{t("morethan")}</p>
            <p className="font-bold text-4xl md:text-[53px]">1500+</p>
            <p className="font-bold text-sm md:text-[13px]">{t("students")}</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-[50%] w-full flex justify-center">
        <img src={bannerleft} alt="" className="w-full max-w-sm md:max-w-md lg:max-w-full" />
      </div>
    </div>
  );
};

export default Banner;
