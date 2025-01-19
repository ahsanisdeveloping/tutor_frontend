import React from "react";
import img1 from "../assets/svgs/navbarmodal/img1.svg";
import img2 from "../assets/svgs/navbarmodal/img2.svg";
import img3 from "../assets/svgs/navbarmodal/img3.svg";
import img4 from "../assets/svgs/navbarmodal/img4.svg";
import img5 from "../assets/svgs/navbarmodal/img5.svg";
import img6 from "../assets/svgs/navbarmodal/img6.svg";
import { useNavigate } from "react-router-dom";
const TrainingAndConsulting = () => {
    const navigate = useNavigate();
  const corporateData = [
    {
      name: "Accounting & Auditing",
      desc: "Online testing is available. Join us to get started!",
      icon: img1,
    },
    {
      name: "Finance & Investment",
      desc: "Online testing is available. Join us to get started!",
      icon: img2,
    },
    {
      name: "Digital Marketing",
      desc: "Online testing is available. Join us to get started!",
      icon: img3,
    },
    {
      name: "Human Resources",
      desc: "Online testing is available. Join us to get started!",
      icon: img4,
    },
    {
      name: "Supply Chain Management",
      desc: "Online testing is available. Join us to get started!",
      icon: img5,
    },
    {
      name: "Professional Education",
      desc: "Online testing is available. Join us to get started!",
      icon: img6,
    },
  ];
  const consultingData = [
    {
      name: "Accounting & Auditing",
      desc: "Online testing is available. Join us to get started!",
      icon: img1,
    },
    {
      name: "Finance & Investment",
      desc: "Online testing is available. Join us to get started!",
      icon: img2,
    },
    {
      name: "Digital Marketing",
      desc: "Online testing is available. Join us to get started!",
      icon: img3,
    },
    {
      name: "Human Resources",
      desc: "Online testing is available. Join us to get started!",
      icon: img6,
    },
    {
      name: "Supply Chain Management",
      desc: "Online testing is available. Join us to get started!",
      icon: img1,
    },
    {
      name: "Professional Education",
      desc: "Online testing is available. Join us to get started!",
      icon: img3,
    },
    {
      name: "Professional Education",
      desc: "Online testing is available. Join us to get started!",
      icon: img6,
    },
    {
      name: "Professional Education",
      desc: "Online testing is available. Join us to get started!",
      icon: img3,
    },
    {
      name: "Professional Education",
      desc: "Online testing is available. Join us to get started!",
      icon: img1,
    },
    
  ];

  return (
    <div className="bg-base-100 sm:p-1 md:p-6 rounded-lg shadow-lg font-nunito">
      <div className="relative flex flex-col sm:flex-wrap gap-1 sm:gap-3 justify-start  sm:h-[460px] sm:w-[920px] ">
        <div className=" absolute sm:w-[920px] sm:h-[460px] bg-transparent grid grid-cols-3 z-0">
          <div className="border-r-2 border-gray-200"></div>
          <div className="border-r-2 border-gray-200 relative left-1"></div>
        </div>
        <h1 className=" text-[22px] z-10 text-gray-500">Corporate Level Training</h1>
        {corporateData.map((item) => (
          <button className="sm:w-[300px] border border-gray-300 rounded-lg flex px-4  py-3 items-center gap-3 text-left hover:cursor-pointer z-10" onClick={()=>navigate('/discover')} >
            <div>
              <img src={item.icon} alt=""  height="40px" width="50px" />
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-bold">{item.name}</span>
              <span className="text-[11px] leading-tight">{item.desc}</span>
            </div>
          </button>
        ))}
        <h1 className="pt-2 text-[22px] z-10 text-gray-500">Consulting Service</h1>
        {consultingData.map((item) => (
            <button className="sm:w-[300px] border border-gray-300 rounded-lg flex px-4  py-3 items-center gap-3 text-left hover:cursor-pointer z-10" onClick={()=>navigate('/discover')} >
            <div>
              <img src={item.icon} alt=""  height="40px" width="50px" />
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-bold">{item.name}</span>
              <span className="text-[11px] leading-tight">{item.desc}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrainingAndConsulting;
