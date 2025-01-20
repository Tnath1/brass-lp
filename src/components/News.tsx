const News = () => {
  return (
    <div className="  w-full bg-[#1a1c1f] lg:h-[40px] h-[42px] flex justify-center items-center">
      <a
        href=""
        className="flex items-center justify-center text-center md:px-0 px-[32px] text-[#fff]"
      >
        <div className="md:block hidden px-[9px] lg:py-[5px] py-[9px] text-[10px] mr-[8px] text-white font-[500] bg-[#0bce5a] rounded-[12px]">
          NEW
        </div>
        <p className="text-[13px] text-[#fff] relative after:content-['→'] after:font-bold after:ml-[8px]">
          Introducing Brass Payroll: The Ultimate Payroll Solution for Your
          Business
        </p>
      </a>
    </div>
  );
};

export default News;
