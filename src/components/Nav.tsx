import { Link } from "react-router-dom";
import { useState } from "react";
import News from "./News";
import Accordion from "./reusable/Accordions";

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMobileDiv = () => {
    setIsOpen((prevState) => !prevState);
  };

  const faqItems = [
    {
      title: "Industry",
      content:
        "We cu and ",
    },
    {
      title: "Customers",
      content: "You do not pay for signing up for an account at Brass.",
    },
    {
      title: "Products",
      content:
        "You will need government-issued IDs (Including BVN) and your company's incorporation documents.",
    },
    {
      title: "Companies",
      content:
        "We have introduced Two Factor Authentication (2FA) for an extra level of security.",
    },
    {
      title: "Resources",
      content:
        "We have introduced Two Factor Authentication (2FA) for an extra level of security.",
    },
    {
      title: "Country",
      content:
        "We have introduced Two Factor Authentication (2FA) for an extra level of security.",
    },
    {
      title: "Login",
      content:
        "tgtetaer",
    },
    {
      title: "Open an account",
      content:
        "We have introduced Two Factor Authentication (2FA) for an extra level of security.",
    },
  ];

  return (
    <div className="w-full fixed z-[9999]">
      <div className="bg-black z-50  text-white w-full h-[80px]    ">
        <nav className="flex justify-between items-center  lg:pl-[120px] lg:px-0 px-[32px] mx-auto h-full ">
          <div className="  flex justify-center items-center ">
            <Link to="/" className="mr-[48px] ">
              <div>
                <svg width="92" height="22" viewBox="0 0 92 22" fill="none">
                  <path
                    d="M0.00699384 10.7163H10.0388L7.89168 12.8634H0.00699384V16.064H4.69112L0 20.7551L1.00624 21.7605L5.69648 17.0694V21.7535H8.89704V13.8688L11.031 11.7357V21.7535H15.2982V6.44922H0.00699384V10.7163Z"
                    fill="#0BCE5A"
                  ></path>
                  <path
                    d="M65.0298 17.452L67.795 16.2841C68.3195 17.9451 69.5155 19.3264 71.6661 19.3264C73.2642 19.3264 74.3395 18.4041 74.3395 17.2982C74.3395 13.949 65.7056 16.1302 65.7056 10.2624C65.7056 7.83464 67.8256 6.02148 71.1739 6.02148C74.0929 6.02148 76.5513 7.55838 77.2271 9.83138L74.4627 10.9994C74.0632 9.46333 72.619 8.60309 71.2054 8.60309C69.7305 8.60309 68.8082 9.1862 68.8082 10.2012C68.8082 13.1814 77.5042 10.9076 77.5042 17.2676C77.5042 19.941 75.1691 21.9998 71.6661 21.9998C67.8868 21.9998 65.7362 19.6647 65.0298 17.452Z"
                    fill="white"
                  ></path>
                  <path
                    d="M78.6343 17.452L81.3995 16.2841C81.924 17.9451 83.12 19.3264 85.2714 19.3264C86.8686 19.3264 87.9439 18.4041 87.9439 17.2982C87.9439 13.949 79.3101 16.1302 79.3101 10.2624C79.3101 7.83464 81.4301 6.02148 84.7792 6.02148C87.6983 6.02148 90.1557 7.55838 90.8324 9.83138L88.0672 10.9994C87.6677 9.46333 86.2235 8.60309 84.8098 8.60309C83.3359 8.60309 82.4136 9.1862 82.4136 10.2012C82.4136 13.1814 91.1087 10.9076 91.1087 17.2676C91.1087 19.941 88.7736 21.9998 85.2706 21.9998C81.4921 21.9998 79.3407 19.6647 78.6343 17.452Z"
                    fill="white"
                  ></path>
                  <path
                    d="M63.2568 12.1062V21.7542H59.9723V19.3886C59.0815 20.9552 57.1748 21.9999 55.1177 21.9999C52.0448 21.9999 49.9248 20.0643 49.9248 17.4224C49.9248 14.3801 52.2905 12.7514 57.0533 12.2645L59.9723 11.9532V11.7373C59.9723 9.83236 58.6514 8.66526 56.6232 8.66526C54.7488 8.66526 53.4278 9.77116 53.2137 11.6149L50.2028 11.0615C50.6941 8.02008 53.3369 6.02246 56.624 6.02246C60.5528 6.02246 63.2568 8.23426 63.2568 12.1062ZM59.9723 15.0856V14.4404L57.0227 14.7788C54.5032 15.055 53.2128 15.9773 53.2128 17.3289C53.2128 18.5581 54.2269 19.4183 55.7935 19.4183C58.3987 19.4183 59.9382 17.606 59.9723 15.0856Z"
                    fill="white"
                  ></path>
                  <path
                    d="M47.1012 9.15658C44.8282 9.15658 42.8306 11.1839 42.8306 15.9756V21.7525H39.4814V6.26812H42.8306V9.21777C43.6603 7.37402 45.6885 6.02246 47.5628 6.02246C48.1468 6.02246 48.8226 6.10988 49.2833 6.29872L49.0989 9.529C48.5455 9.27897 47.8076 9.15658 47.1012 9.15658Z"
                    fill="white"
                  ></path>
                  <path
                    d="M25.0958 19.7873V21.7544H21.7466V0H25.0958V8.20378C26.0172 6.91341 27.8303 6.0182 29.8271 6.0182C34.4972 6.0182 37.1706 9.34028 37.1706 14.0069C37.1706 18.6736 34.4972 21.9956 29.765 21.9956C27.7071 22 25.8327 21.0777 25.0958 19.7873ZM33.8214 14.0113C33.8214 10.9384 32.0389 8.94075 29.3349 8.94075C26.6309 8.94075 24.8492 10.9375 24.8492 14.0113C24.8492 17.0527 26.6318 19.0818 29.3349 19.0818C32.038 19.0818 33.8214 17.0536 33.8214 14.0113Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </Link>

            <div className=" lg:block hidden text-[14px] mr-[32px] font-[600] cursor-pointer">
              Industry
            </div>
            <a
              href=""
              className=" lg:block hidden mr-[32px] text-[14px] font-[600] cursor-pointer"
            >
              Customers
            </a>
            <div className=" lg:block hidden text-[14px] font-[600] cursor-pointer mr-[32px]">
              Products
            </div>
            <div className=" lg:block hidden text-[14px] font-[600] cursor-pointer">
              Company
            </div>
          </div>
          <div className=" lg:flex hidden justify-center items-center  ">
            <div className="text-[14px] font-[600] cursor-pointer">
              Resources
            </div>
            <Link
              to="/Login"
              className="text-[14px] font-[600] cursor-pointer ml-[32px]"
            >
              Login
            </Link>
            <Link
              to="/signUp"
              className=" text-[14px] font-[600] cursor-pointer items-center rounded-[5px] ml-[32px] px-[32px] py-[14px]  bg-[#0bce5a] text-[#fff]"
            >
              OPen an account
            </Link>
            <div className="CountrySwitcher-module ml-[12px] ">
              <svg width="32.6" height="22.5" viewBox="0 0 21 15" fill="none">
                <path
                  d="M20.5 0H0.5C0.223858 0 0 0.223858 0 0.5V14C0 14.2761 0.223858 14.5 0.500001 14.5H20.5C20.7761 14.5 21 14.2761 21 14V0.5C21 0.223858 20.7761 0 20.5 0Z"
                  fill="#008751"
                ></path>
                <path d="M14 0H7V14.5H14V0Z" fill="white"></path>
              </svg>
            </div>
          </div>
          <button
            type="button"
            className="Hand_burger_menu group relative z-[102] flex flex-col justify-center items-center gap-1 lg:hidden p-2"
            aria-haspopup="true"
            aria-expanded={isOpen}
            aria-controls="site-nav"
            aria-label="Toggle navigation menu"
            onClick={toggleMobileDiv}
          >
            {/* Top Line */}
            <div
              className={`bg-white w-8 h-[3px] rounded transition-all duration-300 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] ${
                isOpen
                  ? "translate-y-[7px] rotate-45"
                  : "translate-y-0 rotate-0"
              }`}
            ></div>

            {/* Middle Line */}
            <div
              className={`bg-white w-8 h-[3px] rounded transition-all duration-300 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>

            {/* Bottom Line */}
            <div
              className={`bg-white w-8 h-[3px] rounded transition-all duration-300 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] ${
                isOpen
                  ? "-translate-y-[7px] -rotate-45"
                  : "translate-y-0 rotate-0"
              }`}
            ></div>
          </button>
        </nav>
      </div>

      <div className="mobile relative h-screen">
        <News />

        {isOpen && (
          <div className="absolute  top-0 w-full h-screen">
            <Accordion items={faqItems} allowMultiple={false} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
