import React from "react";

const TrainingAndConsulting = () => {
    const corporateData = [
        { name: "Accounting & Auditing", desc: "Online testing is available. Join us to get started!", icon: "📄" },
        { name: "Finance & Investment", desc: "Online testing is available. Join us to get started!", icon: "💹" },
        { name: "Digital Marketing", desc: "Online testing is available. Join us to get started!", icon: "📈" },
        { name: "Human Resources", desc: "Online testing is available. Join us to get started!", icon: "👥" },
        { name: "Supply Chain Management", desc: "Online testing is available. Join us to get started!", icon: "⚙️" },
        { name: "Professional Education", desc: "Online testing is available. Join us to get started!", icon: "🎓" },
    ]
    const consultingData = [
        { name: "Accounting & Auditing", desc: "Online testing is available. Join us to get started!", icon: "📄" },
        { name: "Finance & Investment", desc: "Online testing is available. Join us to get started!", icon: "💹" },
        { name: "Digital Marketing", desc: "Online testing is available. Join us to get started!", icon: "📈" },
        { name: "Human Resources", desc: "Online testing is available. Join us to get started!", icon: "👥" },
        { name: "Supply Chain Management", desc: "Online testing is available. Join us to get started!", icon: "⚙️" },
        { name: "Professional Education", desc: "Online testing is available. Join us to get started!", icon: "🎓" },
        { name: "Professional Education", desc: "Online testing is available. Join us to get started!", icon: "🎓" },
        { name: "Professional Education", desc: "Online testing is available. Join us to get started!", icon: "🎓" },
        { name: "Professional Education", desc: "Online testing is available. Join us to get started!", icon: "🎓" },
        { name: "Professional Education", desc: "Online testing is available. Join us to get started!", icon: "🎓" },
        { name: "Professional Education", desc: "Online testing is available. Join us to get started!", icon: "🎓" },
        { name: "Professional Education", desc: "Online testing is available. Join us to get started!", icon: "🎓" },
        { name: "Professional Education", desc: "Online testing is available. Join us to get started!", icon: "🎓" },
        { name: "Professional Education", desc: "Online testing is available. Join us to get started!", icon: "🎓" },
        { name: "Professional Education", desc: "Online testing is available. Join us to get started!", icon: "🎓" },
        { name: "Professional Education", desc: "Online testing is available. Join us to get started!", icon: "🎓" },
    ]


  return (
    <div className="bg-base-100 p-6 md:p-12 rounded-lg shadow-lg">
      <div className="flex flex-col flex-wrap gap-4 justify-start  h-[650px] w-[1000px] bg-slate-400">
        <h1>
            Corporate Level Training
        </h1>
        {
            corporateData.map((item)=><div className="w-[300px] bg-yellow-200 flex">
                <div> <span className="text-3xl mr-4">{item.icon}</span></div>
                <div>
                    <span>{item.name}</span>
                    <span>{item.desc}</span>
                </div>
            </div>)
        }
        <h1>
            Consulting Service
        </h1>
        {
            consultingData.map((item)=><div className="w-[300px] bg-yellow-200 flex">
                <div> <span className="text-3xl mr-4">{item.icon}</span></div>
                <div>
                    <span>{item.name}</span>
                    <span>{item.desc}</span>
                </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default TrainingAndConsulting;
