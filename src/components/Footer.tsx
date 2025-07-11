import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div>
        <div className="md:grid flex flex-col  justify-items-center  max-w-7xl mx-auto md:grid-cols-4 gap-12 md:px-16 md:py-14 px-10 py-8 border-neutral-500">
          {/* logo */}
          <div>
            <img src="/logo/GAM.png" alt="logo" className="" />
          </div>
          {/* menu */}
          <div className="flex flex-col md:items-start justify-center gap-6">
            <h3 className="font-light text-neutral-500">MENU</h3>
            <div className="felx flex-col items-center justify-center">
              <a href="#About" className="flex font-normal text-neutral-400">
                About
              </a>
              <a
                href="#About"
                className="flex font-normal text-neutral-400 mt-2"
              >
                Games
              </a>
              <a
                href="#About"
                className="flex font-normal text-neutral-400 mt-2"
              >
                Services
              </a>
              <a
                href="#About"
                className="flex font-normal text-neutral-400 mt-2"
              >
                Evnets
              </a>
              <a
                href="#About"
                className="flex font-normal text-neutral-400 mt-2"
              >
                Blog
              </a>
            </div>
          </div>
          {/* service */}
          <div className="flex flex-col md:items-start justify-center gap-6">
            <h3 className="font-light text-neutral-500">SERVICE</h3>
            <div className="felx flex-col items-center justify-center">
              <a href="#About" className="flex font-normal text-neutral-400">
                Market Research
              </a>
              <a
                href="#About"
                className="flex font-normal text-neutral-400 mt-2"
              >
                Branding
              </a>
              <a
                href="#About"
                className="flex font-normal text-neutral-400 mt-2"
              >
                Strategy
              </a>
              <a
                href="#About"
                className="flex font-normal text-neutral-400 mt-2"
              >
                Concepting
              </a>
              <a
                href="#About"
                className="flex font-normal text-neutral-400 mt-2"
              >
                Development
              </a>
            </div>
          </div>

          {/* socials */}
          <div className=" flex flex-row  justify-center gap-6">
            <FaFacebook color="blue" size={40} />
            <FaTwitter color="blue" size={40} />
            <FaInstagram color="blue" size={40} />
          </div>
        </div>

        <div className="border-b-2 max-w-6xl mx-auto border-neutral-700"></div>
      {/* copyright */}
      <div className="flex max-w-6xl mx-auto mt-10 mb-20 md:flex-row flex-col items-center justify-between">
        <h3 className="font-light text-neutral-500 mb-10">Copyright © 2020 Laaqiq. All Rights Reserved.</h3>
        <div className="flex flex-row items-center justify-center gap-6 mb-10">
          <h3 className="font-light text-neutral-500 text-sm">Terms of Use</h3>
          <h3 className="font-light text-neutral-500 text-sm">Privacy Policy</h3>
        </div>
      </div>
      </div>

    </>
  );
};

export default Footer;
