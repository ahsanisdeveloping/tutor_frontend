import image from "../assets/icons/NavbarLogo.png";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
const Navbar = () => {
  const {t} = useTranslation("Navbar");
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={image} alt="" className="h-[50px] w-[50px]" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="font-bold">{t('home')}</a>
            </li>
            <li>
              <a className="font-bold">{t('aboutUs')}</a>
            </li>
            <li>
              <details>
                <summary className="font-bold">{t('courses').title}</summary>
                <ul className="p-2">
                  <li>
                    <a>{t('courses').list.course1}</a>
                  </li>
                  <li>
                    <a>{t('courses').list.course2}</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="font-bold">{t('blogs').title}</summary>
                <ul className="p-2">
                  <li>
                    <a>{t('blogs').list.blog1}</a>
                  </li>
                  <li>
                    <a>{t('blogs').list.blog2}</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="btn font-bold mx-2 border-[#074226] px-5">{t('signup')}</a>
            </li>
            <li>
              <a className="btn font-bold bg-[#074226] text-white mx-2 px-5">{t('login')}</a>
            </li>
          </ul>
          <ul className="menu menu-horizontal px-1">
            <a className="btn font-bold bg-[#074226] text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </a>

            <li>
              <LanguageSelector/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
