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
    <div className="bg-base-100 p-1 md:p-6 rounded-lg shadow-lg">
      <div className="flex flex-col flex-wrap gap-3 justify-start  h-[460px] w-[920px]">
        <h1 className="pb-2 text-[22px]">Corporate Level Training</h1>
        {corporateData.map((item) => (
          <button className="w-[300px] border border-gray-300 rounded-lg flex px-4  py-3 items-center gap-2 text-left hover:bg-gray-200" onClick={()=>navigate('/discover')} >
            <div>
              <img src={item.icon} alt=""  height="40px" width="50px" />
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-semibold">{item.name}</span>
              <span className="text-[11px] leading-tight">{item.desc}</span>
            </div>
          </button>
        ))}
        <h1 className="pb-2 text-[22px]">Consulting Service</h1>
        {consultingData.map((item) => (
            <button className="w-[300px] border border-gray-300 rounded-lg flex px-4  py-3 items-center gap-2 text-left hover:bg-gray-200" onClick={()=>navigate('/discover')} >
            <div>
              <img src={item.icon} alt=""  height="40px" width="50px" />
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-semibold">{item.name}</span>
              <span className="text-[11px] leading-tight">{item.desc}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrainingAndConsulting;
