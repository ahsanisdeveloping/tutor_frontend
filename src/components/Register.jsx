import React, { useState } from "react";
import teacherImg from "../assets/images/register/teacher.png";
import studentImg from "../assets/images/register/img.png";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("Student");

  return (
    <div className="bg-white p-10">
      <div className="min-h-screen bg-green-900 flex items-center justify-center rounded-lg py-10">
        <div className="w-11/12 lg:w-3/4 xl:w-2/3 bg-[#074226] rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden relative">
          {/* Left Image Section */}
          <div className="md:w-1/2 p-6 bg-white flex justify-center items-center ">
            <img
              src={role === "Student" ? studentImg : teacherImg}
              alt="Illustration"
              className="w-full max-w-xs"
            />
          </div>

          {/* Right Form Section */}
          <div className="md:w-1/2 p-8">
            <button className="text-white bg-[#074226] p-2 px-5 rounded-3xl font-bold mb-6 absolute left-5" onClick={()=>navigate('/')}>
              &lt; Back to Website
            </button>
            <h2 className="text-2xl font-bold mb-6 text-white">Register as</h2>
            <div className="flex gap-4 mb-4">
              <button
                className={`py-2 px-6 rounded-lg font-bold ${
                  role === "Student"
                    ? "bg-yellow-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setRole("Student")}
              >
                Student
              </button>
              <button
                className={`py-2 px-6 rounded-lg font-bold ${
                  role === "Teacher"
                    ? "bg-yellow-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setRole("Teacher")}
              >
                Teacher
              </button>
            </div>

            {role === "Student" ? <StudentForm /> : <TeacherForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

const StudentForm = () => (
  <form className="space-y-4">
    {/* Personal Information */}
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label htmlFor="" className="text-white">
          First Name
        </label>
        <input type="text" placeholder="First Name" className="input" />
      </div>
      <div>
        <label htmlFor="" className="text-white">
          Last Name
        </label>
        <input type="text" placeholder="Last Name" className="input" />
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-2">
          <input type="radio" name="gender" value="Male" />
          <span className="text-white">Male</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="gender" value="Female" />
          <span className="text-white">Female</span>
        </label>
      </div>
      <div>
        <label htmlFor="" className="text-white">
          Phone
        </label>
        <input type="text" placeholder="Phone Number" className="input" />
      </div>
    </div>
    <div className="flex flex-col">
      <label htmlFor="" className="text-white">
        Email
      </label>
      <input type="email" placeholder="Email" className="input" />
    </div>
    <div className="flex flex-col">
      <label htmlFor="" className="text-white">
        Password
      </label>
      <input type="password" placeholder="Password" className="input" />
    </div>
    <div className="flex flex-col">
      <label htmlFor="" className="text-white">
        Confirm Password
      </label>
      <input type="password" placeholder="ConfirmPassword" className="input" />
    </div>

    <div className="flex items-center space-x-2">
      <input type="checkbox" id="terms" />
      <label htmlFor="terms" className="text-white">
        I Agree to Terms and Conditions
      </label>
    </div>

    <button
      type="submit"
      className="w-full bg-white text-[#074226] py-2 rounded-lg font-bold"
    >
      Sign In
    </button>

    <p className="text-center text-white mt-4">
      Already have an account?{" "}
      <a href="#" className="text-[#FFBF44]">
        Login
      </a>
    </p>
  </form>
);

const TeacherForm = () => (
  <form className="space-y-4">
    {/* Personal Information */}
    <form className="space-y-4">
      {/* Personal Information */}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="" className="text-white">
            First Name
          </label>
          <input type="text" placeholder="First Name" className="input" />
        </div>
        <div>
          <label htmlFor="" className="text-white">
            Last Name
          </label>
          <input type="text" placeholder="Last Name" className="input" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input type="radio" name="gender" value="Male" />
            <span className="text-white">Male</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="gender" value="Female" />
            <span className="text-white">Female</span>
          </label>
        </div>
        <div>
          <label htmlFor="" className="text-white">Phone</label>
          <input type="text" placeholder="Phone Number" className="input" />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="text-white">Email</label>
        <input type="email" placeholder="Email" className="input" />
      </div>
      <div className="">
        <div className="flex flex-col">
          <label htmlFor="" className="text-white">
            Password
          </label>
          <input type="Password" placeholder="Email" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-white">Confirm Password</label>
          <input
            type="Confirm Password"
            placeholder="Email"
            className="input"
          />
        </div>
      </div>

      {/* Location */}
      <h3 className="text-lg font-bold text-green-800 mt-6">Location</h3>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Country" className="input" />
        <input type="text" placeholder="City" className="input" />
      </div>

      {/* Qualifications */}
      <h3 className="text-lg font-bold text-green-800 mt-6">Qualifications</h3>
      <div className="grid grid-cols-2 gap-4">
        <select className="input">
          <option>Specialization</option>
          <option>Business</option>
          <option>Science</option>
          <option>Arts</option>
        </select>
        <input
          type="number"
          placeholder="Years of Experience"
          className="input"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <select className="input">
          <option>Educational Background</option>
          <option>High School</option>
          <option>Bachelor's Degree</option>
          <option>Master's Degree</option>
        </select>
        <select className="input">
          <option>Rating</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input type="radio" name="language" value="Yes" />
            <span>Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="language" value="No" />
            <span>No</span>
          </label>
        </div>
        <input
          type="text"
          placeholder="International Certificates (if any)"
          className="input"
        />
      </div>

      <textarea
        placeholder="Tell us about you"
        className="input"
        rows={4}
      ></textarea>

      <div className="flex items-center space-x-2">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms" className="text-white">
          I Agree to Terms and Conditions
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-green-700 text-white py-2 rounded-lg font-bold"
      >
        Sign In
      </button>
    </form>
  </form>
);

// Tailwind Input Class
const inputClass = `border border-gray-300 rounded-lg p-2 w-full`;

export default RegisterPage;
