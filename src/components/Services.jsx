import React from 'react';
import strategy from '../assets/images/services/strategy.png'
const ConsultingServices = () => {
  return (
    <div className=" bg-white px-20">
      <div className="text-center py-10">
        <h1 className="text-6xl font-bold p-20">
          Why you should choose our consulting services?
        </h1>
        <div className="flex justify-center space-x-4 mt-6">
          {['Strategy', 'Coaching', 'Skills', 'Career', 'Learning', 'Exams', 'Training'].map(
            (item, index) => (
              <button
                key={index}
                className={`px-6 py-2  rounded-full border ${
                  item === 'Strategy'
                    ? 'bg-[#074226] text-white'
                    : 'text-gray-700 border-gray-300'
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-[#074226] text-white py-10 px-6 md:px-20 rounded-lg">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={strategy} // Replace with your image URL
            alt="Team at work"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold">
            Harnessing the Power of{' '}
            <span className="text-yellow-400">Client Anticipation</span> for
            Lasting Satisfaction and Loyalty
          </h2>
          <ul className="mt-6 space-y-4 text-lg">
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">✔</span>
              We listen to understand your unique challenges and goals.
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">✔</span>
              We anticipate your needs and proactively address them.
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">✔</span>
              We build trust through open communication and collaboration.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConsultingServices;
