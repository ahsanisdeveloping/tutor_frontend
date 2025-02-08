import image from "../assets/icons/NavbarLogo.png";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import CoursesModalNav from "./CoursesModalNav";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { t } = useTranslation("Navbar");
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  // Delay handling for hover
  let timer;
  const handleCourseMouseEnter = () => {
    timer = setTimeout(() => setIsCourseOpen(true), 300); // 500ms delay
  };
  const handleBlogMouseEnter = () => {
    timer = setTimeout(() => setIsBlogOpen(true), 500); // 500ms delay
  };
  const handleCourseMouseLeave = () => {
    clearTimeout(timer);
    setIsCourseOpen(false);
  };
  const handleBlogMouseLeave = () => {
    clearTimeout(timer);
    setIsBlogOpen(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      {/* // Mobile Navbar */}
      <div className=" w-full sm:hidden flex justify-between py-2">
        <a className="btn btn-ghost text-xl  sm:hidden">
          <img
            src={image}
            alt="Logo"
            className="h-[50px] w-[50px]"
            onClick={() => navigate("/")}
          />
        </a>
        <div className="dropdown dropdown-end">
          {/* Dropdown Button */}
          <button
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
            {isOpen ? (
              // "X" Icon when dropdown is open
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon when dropdown is closed
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            )}
          </button>

          {/* Dropdown Content */}
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-screen p-2 shadow transition-transform ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <a
                onClick={() => {
                  navigate("/");
                  setIsOpen(false); // Close dropdown
                }}
                className="text-2xl border-b border-gray-200 rounded-none py-4 font-montserrat"
              >
                {t("home")}
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/");
                  setIsOpen(false); // Close dropdown
                }}
                className="text-2xl border-b border-gray-200 rounded-none py-4 font-montserrat"
              >
                {t("aboutUs")}
              </a>
            </li>
            <li>
          <button
            className="text-2xl border-b border-gray-200 rounded-none py-4 font-montserrat"
            onClick={() =>
              document.getElementById("my_modal_1").showModal()
            }
          >
            Courses
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box w-full font-montserrat">
            <CoursesModalNav/>
              <div className="modal-action">
                <button
                  className="btn bg-[#074226] text-white"
                  onClick={() =>
                    document.getElementById("my_modal_1").close()
                  }
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        </li>
            <li>
              <a
                onClick={() => navigate("/blogs")}
                className="text-2xl border-b border-gray-200 rounded-none py-4 font-montserrat"
              >
                {t("blogs").title}
              </a>
            </li>
            {/* Sign-Up and Login Buttons for Mobile */}
            <li className="my-2">
              <a
                className="btn font-bold border-[#074226] text-center text-2xl font-montserrat"
                onClick={() => navigate("/signup")}
              >
                {t("signup")}
              </a>
            </li>
            <li className="my-1">
              <a
                className="btn font-bold bg-[#074226] text-white text-center text-2xl font-montserrat"
                onClick={() => navigate("/signin")}
              >
                {t("login")}
              </a>
            </li>
            {/* Language Selector for Mobile */}
            <li className="my-3 font-montserrat">
              <LanguageSelector />
            </li>
            {/* Theme Button for Mobile */}
            <li className="my-3">
              <a className="btn font-bold bg-[#074226] text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar bg-base-100 font-montserrat hidden sm:flex">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}

          {/* Logo */}
          <a className="btn btn-ghost text-xl hidden sm:block">
            <img
              src={image}
              alt="Logo"
              className="h-[50px] w-[50px]"
              onClick={() => navigate("/")}
            />
          </a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 text-[19px]">
            <li className="">
              <a
                className="font-bold hover:border-b-[3px] border-[#074226] hover:bg-auto rounded-none pb-1 hover:bg-transparent px-0 font-montserrat"
                onClick={() => navigate("/")}
              >
                {t("home")}
              </a>
            </li>
            <li>
              <a
                className="font-bold hover:border-b-[3px] border-[#074226] hover:bg-auto rounded-none pb-1 hover:bg-transparent px-0 font-montserrat"
                onClick={() => navigate("/")}
              >
                {t("aboutUs")}
              </a>
            </li>
            <div
              className="relative bottom-[2px] inline-block"
              onMouseLeave={handleCourseMouseLeave}
            >
              {/* Dropdown Trigger */}
              <button
                id="dropdownDelayButton"
                onMouseEnter={handleCourseMouseEnter}
                className=" hover:bg-gray-200    font-medium  text-sm  py-2.5 text-center inline-flex items-center  hover:border-b-[3px] border-[#074226] hover:bg-auto rounded-none pb-1 hover:bg-transparent px-0 group "
                type="button"
              >
                <b className="text-[19px]">{t("courses").title}</b>
                <svg
                  className="w-2.5 h-2.5 ms-3 group-hover:rotate-180 transition-all"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isCourseOpen && (
                <div
                  id="dropdownDelay"
                  className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow left-[-500px] font-montserrat"
                >
                  <CoursesModalNav />
                </div>
              )}
            </div>
            <li className="">
              <a
                className="font-bold hover:border-b-[3px] border-[#074226] hover:bg-auto rounded-none pb-1 hover:bg-transparent px-0 font-montserrat"
                onClick={() => navigate("/blogs")}
              >
                {t("blogs").title}
              </a>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end hidden lg:flex items-center space-x-1 flex-nowrap">
          <ul className="menu menu-horizontal px-1 sm:flex sm:flex-nowrap gap-2 mx-5">

            <li>
              <a
                className="border border-[#074226] font-bold py-2 px-9  font-montserrat"
                onClick={() => navigate("/signup")}
              >
                {t("signup")}
              </a>
            </li>
            <li>
              <a
                className="border border-[#074226]  font-bold bg-[#074226] text-white px-9 py-2 font-montserrat "
                onClick={() => navigate("/signin")}
              >
                {t("login")}
              </a>
            </li>
          </ul>
          <ul className="menu menu-horizontal px-1 items-center sm:flex sm:flex-nowrap">
            <a className="btn font-bold bg-[#074226] text-white rounded-full mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </a>
            <li>
              <LanguageSelector />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
