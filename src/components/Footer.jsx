import footersvg from "../assets/images/footer/footersvg.png";
import footerlogo from "../assets/images/footer/footerlogo.png";
import facebook from "../assets/images/footer/fb.png";
import twitter from "../assets/images/footer/twitter.png";
import linkedin from "../assets/images/footer/linkedin.png";
import pinterest from "../assets/images/footer/pntrst.png";
const Footer = () => {
  return (
    <div className="bg-[#074226] pt-[30px] px-20 tablet:px-4">
      <div className="flex justify-between">
        <div className="flex-1">
          <h1 className="text-white text-[53px]">Start Your Career</h1>
          <p className="text-white text-[33px]">
            Sign up to become an Educator. Join our community of passionate
            teachers!
          </p>
          <a className="btn font-bold  bg-white px-10 text-[19px] my-10">
            Register as Teacher
          </a>
        </div>
        <div className="w-[350px] h-[350px] flex justify-end items-center">
          <img src={footersvg} className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="flex tablet:flex-col py-5">
        <div>
          <div className="h-[85px] w-[85px]">
            <img src={footerlogo} alt="" />
          </div>
          <p className="text-[13px] text-white">
            Sign up to become an Educator. Join our community of passionate
            teachers!
          </p>
          <div className="flex gap-2 my-2">
            <button className="border-white border rounded-full p-1 w-9 h-9 flex items-center justify-center">
            <img src={facebook} alt="" />
            </button>
            <button className="border-white border rounded-full p-1 w-9 h-9 flex items-center justify-center">
            <img src={twitter} alt="" />
            </button>
            <button className="border-white border rounded-full p-1 w-9 h-9 flex items-center justify-center">
            <img src={pinterest} alt="" />
            </button>
            <button className="border-white border rounded-full p-1 w-9 h-9 flex items-center justify-center">
            <img src={facebook} alt="" />
            </button>
          </div>
        </div>
        <div className="w-[262px] text-[#fbfbfb]">
          <div className="flex flex-col my-5 gap-2">
            <h1 className="text-white">Company</h1>
            <p className="text-gray-400">Lorem Ispum</p>
            <p className="text-gray-400">Lorem Ispum</p>
            <p className="text-gray-400">Lorem Ispum</p>
            <p className="text-gray-400">Lorem Ispum</p>
          </div>
        </div>
        <div className="w-[262px] text-[#fbfbfb]">
          <div className="flex flex-col my-5 gap-2">
            <h1 className="text-white">Services</h1>
            <p className="text-gray-400">Lorem Ispum</p>
            <p className="text-gray-400">Lorem Ispum</p>
            <p className="text-gray-400">Lorem Ispum</p>
          </div>
        </div>
        <div className="w-[262px] text-[#fbfbfb]">
          <div className="flex flex-col my-5 gap-2">
            <h1 className="text-white">Contact</h1>
            <p className="text-gray-400">hello@openspace.com</p>
            <p className="text-gray-400">123 456 78</p>
            <p className="text-gray-400">Office# 02/04, SA</p>
          </div>
        </div>
        <div>
          <h1 className="text-white text-3xl">Subscribe</h1>
          <div class="relative flex h-10 w-full min-w-[300px] max-w-[30rem] bg-white rounded-md my-3">
            <button
              class="!absolute right-1 top-1 z-10 select-none rounded bg-[#074226] py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-white transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Subscribe
            </button>
            <input
              type="email"
              class="peer h-full w-full rounded-[7px] border border-white bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white focus:border-2 focus:white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder="Enter your Email"
              required
            />
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="text-center text-gray-400">© openspace 2024. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
