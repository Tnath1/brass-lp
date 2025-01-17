import support from "/img/support.webp";

const Team = () => {
  return (
    <section className="py-[6.25rem] mx-auto w-full">
      <div>
        <div className=" lg:min-h-[720px]  grid gap-[3rem_1.875rem] grid-cols-12 mr-[calc(50%-626px)] max-w-fit pl-0 w-full ">
          <div className="col-start-1 col-span-7 sticky top-20">
            <span className="md:overflow-hidden md:align-top md:object-center md:object-cover md:w-full md:z-10 md:flex md:items-center md:bg-[#060809] md:sticky md:top-[80px] md:h-[calc(100vh-80px)]">
              <img className="h-full object-cover" src={support} alt="" />
            </span>
          </div>
          <header className="col-start-8 col-span-6 m-auto my-0 max-w-[584px] w-full">
            <div className="max-w-[584px] w-full">
              <span className="text-[#8f96a3] text-xs font-semibold tracking-[-0.12px] leading-[22px]">
                SUPPORT WHEN YOU NEED IT
              </span>
              <h2 className="text-[45px] font-semibold tracking-[-1.21px] leading-[58px] mb-4 mt-5">
                <span>
                  Our support team is
                  <br className="text-break block" /> your team
                </span>
              </h2>
              <p className="max-w-[585px] text-[#060809] text-[18px] font-[500] tracking-[-0.2px] leading-[26px]">
                Our support team are a mix of bankers and growth experts ready
                to help you. With a Brass account, you get a team that is
                genuinely seeking to understand your business and provide
                solutions for its financial operations.
                <br />
                <br />
                We are committed to going beyond issue resolution to becoming
                your partner in the growing and smooth running of your business.
              </p>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Team;
