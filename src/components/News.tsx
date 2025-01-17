import { IoIosArrowRoundForward } from "react-icons/io";

const News = () => {
  return (
    <div className="  w-full bg-[#1a1c1f] h-[40px] flex justify-center items-center">
      <a href="" className="flex items-center justify-center  text-[#fff]">
        <div className=" px-[9px] py-[5px] text-[10px] mr-[8px] text-white font-[500] bg-[#0bce5a] rounded-[12px] ">NEW</div>
        <p className="text-[13px] text-[#fff] ">
          Introducing Brass Payroll: The Ultimate Payroll Solution for Your
          Business
        </p>
        <  IoIosArrowRoundForward className="ml-[12px] text-[20px] "/>
      </a>
    </div>
  );
};

export default News;
