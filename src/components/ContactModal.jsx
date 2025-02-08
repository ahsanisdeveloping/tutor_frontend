import { useState } from "react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Button to open modal */}
      <button
        className="btn btn-green-600"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[600px]">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {/* Form Title */}
            <h2 className="text-xl font-semibold text-gray-700 text-center mb-4 font-montserrat">
              Contact Us
            </h2>

            {/* Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="input input-bordered w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email*"
                  className="input input-bordered w-full"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <select className="select select-bordered w-full font-montserrat">
                  <option >What are you looking for?*</option>
                  <option>Cooperate Training</option>
                  <option>Individual Training</option>
                  <option>Other</option>
                </select>

                <select className="select select-bordered w-full font-montserrat">
                  <option>Cooperate Training</option>
                  <option>Corporate Consulting</option>
                  <option>Custom Solutions</option>
                </select>
              </div>

              <textarea
                placeholder="Write a message……"
                className="textarea textarea-bordered w-full h-24"
              ></textarea>

              <div className="text-center">
                <button className="btn btn-success w-full text-white font-montserrat">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
