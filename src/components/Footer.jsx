import footersvg from '../assets/images/footer/footersvg.png'
const Footer = () => {
  return (
    <div className="bg-[#074226] pt-[30px] px-10 tablet:px-4">
      <div className="border-t border-t-white p-10 tablet:p-4">
        <div className="flex tablet:flex-col">
          <div className="w-[262px]">
            <div className="w-[80px] h-[80px] ">
              <img src={footersvg} />
            </div>
            <div className="flex gap-3 my-8">
              <button>
                {" "}
                {/* <Image src={xIcon} /> */}
              </button>
              <button>
                {" "}
                {/* <Image src={instagramIcon} /> */}
              </button>
              <button>
                {" "}
                {/* <Image src={youtubeIcon} /> */}
              </button>
              <button>
                {" "}
                {/* <Image src={linkedinIcon} /> */}
              </button>
            </div>
          </div>
          <div className="w-[262px] text-[#fbfbfb]">
            <p className="text-[20px]">Use Cases</p>
            <div className="flex flex-col my-5 gap-2">
                <a href="">UI Design</a>
                <a href="">UX Design</a>
                <a href="">Wireframing</a>
                <a href="">Diagramming</a>
                <a href="">Brainstorming</a>
                <a href="">Online Whiteboard</a>
                <a href="">Team Collaboration</a>
            </div>
          </div>
          <div className="w-[262px] text-[#fbfbfb]">
            <p className="text-[20px]">Explore</p>
            <div className="flex flex-col my-5 gap-2">
                <a href="">Design</a>
                <a href="">Prototyping</a>
                <a href="">Development Features</a>
                <a href="">Design Systems</a>
                <a href="">Collaboration Features</a>
                <a href="">Design Process</a>
                <a href="">FigJam</a>
            </div>
          </div>
          <div className="w-[262px] text-[#fbfbfb]">
            <p className="text-[20px]">Resources</p>
            <div className="flex flex-col my-5 gap-2">
                <a href="">Blog</a>
                <a href="">Best Practices</a>
                <a href="">Colors</a>
                <a href="">Color Wheel</a>
                <a href="">Support</a>
                <a href="">Developers</a>
                <a href="">Resource Library</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
