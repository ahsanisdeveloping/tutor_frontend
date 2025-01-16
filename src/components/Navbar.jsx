import image from "../assets/icons/NavbarLogo.png";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CoursesModalNav from "./CoursesModalNav";
const Navbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("Navbar");
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  // Delay handling for hover
  let timer;
  const handleCourseMouseEnter = () => {
    timer = setTimeout(() => setIsCourseOpen(true), 500); // 500ms delay
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
  return (
    <div>
      <div className="navbar bg-base-100 font-nunito">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-screen p-2 shadow "
            >
              <li>
                <a onClick={() => navigate("/")} className="text-2xl border-b border-gray-200 rounded-none py-4">{t("home")}</a>
              </li>
              <li>
                <a onClick={() => navigate("/")} className="text-2xl border-b border-gray-200 rounded-none py-4">{t("aboutUs")}</a>
              </li>
              <li>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <li
                  className="text-2xl border-b border-gray-200 rounded-none py-4"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  Courses
                </li>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box w-full">
                    <CoursesModalNav/>
                    <div className="modal-action mx-auto">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn bg-[#074226] text-white">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </li>
              <li>
                <a onClick={() => navigate("/")} className="text-2xl border-b border-gray-200 rounded-none py-4">{t("blogs").title}</a>
              </li>
              {/* Sign-Up and Login Buttons for Mobile */}
              <li className="my-2">
                <a
                  className="btn font-bold border-[#074226] text-center text-2xl"
                  onClick={() => navigate("/signup")}
                >
                  {t("signup")}
                </a>
              </li>
              <li className="my-1">
                <a
                  className="btn font-bold bg-[#074226] text-white text-center text-2xl"
                  onClick={() => navigate("/signin")}
                >
                  {t("login")}
                </a>
              </li>
              {/* Language Selector for Mobile */}
              <li className="my-1 ">
                <LanguageSelector />
              </li>
              {/* Theme Button for Mobile */}
              <li className="my-1">
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
          {/* Logo */}
          <a className="btn btn-ghost text-xl">
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
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="font-bold" onClick={() => navigate("/")}>
                {t("home")}
              </a>
            </li>
            <li>
              <a className="font-bold" onClick={() => navigate("/")}>
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
                className=" hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#074226]"
                type="button"
              >
                <b>{t("courses").title}</b>
                <svg
                  className="w-2.5 h-2.5 ms-3"
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
                  className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow left-[-500px] "
                >
                  <CoursesModalNav />
                </div>
              )}
            </div>

            <div
              className="relative bottom-[2px] inline-block"
              onMouseLeave={handleBlogMouseLeave}
            >
              {/* Dropdown Trigger */}
              <button
                id="dropdownDelayButton"
                onMouseEnter={handleBlogMouseEnter}
                className=" hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#074226]"
                type="button"
                onClick={() => navigate("/blogs")}
              >
                <b>{t("blogs").title}</b>
              </button>
            </div>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end hidden lg:flex items-center space-x-2">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                className="btn font-bold mx-2 border-[#074226] px-5"
                onClick={() => navigate("/signup")}
              >
                {t("signup")}
              </a>
            </li>
            <li>
              <a
                className="btn font-bold bg-[#074226] text-white mx-2 px-5"
                onClick={() => navigate("/signin")}
              >
                {t("login")}
              </a>
            </li>
          </ul>
          <ul className="menu menu-horizontal px-1 items-center">
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
