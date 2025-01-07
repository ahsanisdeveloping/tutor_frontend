import footersvg from "../assets/images/footer/footersvg.png";
import footerlogo from "../assets/images/footer/footerlogo.png";
import facebook from "../assets/images/footer/fb.png";
import twitter from "../assets/images/footer/twitter.png";
import linkedin from "../assets/images/footer/linkedin.png";
import pinterest from "../assets/images/footer/pntrst.png";

const Footer = () => {
  return (
    <footer className="bg-[#074226] pt-10 px-6 lg:px-20">
      {/* Top Section */}
      <div className="flex flex-wrap justify-between items-center gap-8">
        <div className="flex-1">
          <h1 className="text-white text-3xl lg:text-5xl font-bold">
            Start Your Career
          </h1>
          <p className="text-white text-lg lg:text-2xl mt-4">
            Sign up to become an Educator. Join our community of passionate
            teachers!
          </p>
          <a
            href="#register"
            className="inline-block mt-6 bg-white text-[#074226] font-bold px-6 py-3 rounded-lg text-lg"
          >
            Register as Teacher
          </a>
        </div>
        <div className="w-40 h-40 lg:w-80 lg:h-80">
          <img src={footersvg} alt="Start your career illustration" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-wrap justify-between items-start gap-8 py-10">
        {/* About Section */}
        <div className="w-full lg:w-auto">
          <div className="w-16 h-16">
            <img src={footerlogo} alt="OpenSpace logo" />
          </div>
          <p className="text-white text-sm mt-4">
            Sign up to become an Educator. Join our community of passionate
            teachers!
          </p>
          <div className="flex gap-4 mt-4">
            {[facebook, twitter, pinterest, linkedin].map((icon, index) => (
              <a
                key={index}
                href="#"
                className="border border-white rounded-full p-2 w-10 h-10 flex items-center justify-center"
                aria-label={`Link to ${icon}`}
              >
                <img src={icon} alt={`Social media icon ${index + 1}`} />
              </a>
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div className="w-40">
          <h1 className="text-white text-lg font-bold">Company</h1>
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="w-40">
          <h1 className="text-white text-lg font-bold">Services</h1>
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-40">
          <h1 className="text-white text-lg font-bold">Contact</h1>
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>Email: hello@openspace.com</li>
            <li>Phone: 123 456 78</li>
            <li>Address: Office# 02/04, SA</li>
          </ul>
        </div>

        {/* Subscription Form */}
        <div className="w-full lg:w-auto">
          <h1 className="text-white text-lg font-bold">Subscribe</h1>
          <form className="mt-4 flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-1 px-4 py-2 rounded-md text-sm text-black border border-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#074226] text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-[#05631b]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-4 border-t border-gray-500">
        <p className="text-gray-400">© OpenSpace 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
