import image from '../assets/icons/NavbarLogo.png'
const Navbar = () => {
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
            <img src={image} alt="" className='h-[50px] w-[50px]' />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className='font-bold'>Home</a>
            </li>
            <li>
              <a className='font-bold'>About Us</a>
            </li>
            <li>
              <details>
                <summary className='font-bold'>Courses</summary>
                <ul className="p-2">
                  <li>
                    <a>Course 1</a>
                  </li>
                  <li>
                    <a>Course 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className='font-bold'>Blogs</summary>
                <ul className="p-2">
                  <li>
                    <a>Blog 1</a>
                  </li>
                  <li>
                    <a>Blog 2</a>
                  </li>
                  
                </ul>
              </details>
            </li>
            
          </ul>
          
          
        </div>
        <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
                  <a className="btn font-bold">Sign Up</a>

                  </li>
                  <li>
                  <a className="btn font-bold">Log in</a>

                  </li>
          </ul>
          <a className="btn">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
