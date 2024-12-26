import React from "react";
import img1 from "../assets/images/satisfaction/img1.png"
import img2 from "../assets/images/satisfaction/img2.png"
import img3 from "../assets/images/satisfaction/img3.png"
import img4 from "../assets/images/satisfaction/img4.png"
import img5 from "../assets/images/satisfaction/img5.png"
import img6 from "../assets/images/satisfaction/img6.png"
const SatisfactionSection = () => {
  const items = [
    {
      icon: img1,
      title: "Online Quiz",
      description:
        "Open space offers an engaging online quiz platform designed to enhance your Quran learning experience.",
    },
    {
      icon: img2,
      title: "Online Testing",
      description: "Online testing is available. Join us to get started!",
    },
    {
      icon: img3,
      title: "Online Results",
      description:
        "Join our online classes and stay updated with real-time results specifically for your learning journey!",
    },
    {
      icon: img4,
      title: "Online Learning",
      description:
        "Open space is one of the most experienced academies for learning online.",
    },
    {
      icon: img5,
      title: "Online Classes",
      description:
        "Open space is one of the most experienced academies in online classes.",
    },
    {
      icon: img6,
      title: "Online Resources",
      description:
        "Open space is one which has the most extensive library in the world for online education resources.",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto text-left px-4">
        <h2 className="text-5xl font-bold mb-8 text-center py-10">
          OpenSpace ensured satisfaction
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start bg-white p-6 shadow rounded-lg hover:shadow-lg transition"
            >
              <img className="text-4xl mr-4" src={item.icon}/>
              <div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
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
