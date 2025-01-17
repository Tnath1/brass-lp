


const Stack = () => {
  return (
    <div>
      <section className="pt-[96px] m-auto w-full">
        <div>
          <header className=" px-[23px] lg:px-[120px] flex flex-col  ">
            <h2 className="text-[30px] text-center  mx-auto font-semibold leading-[41px] mb-4">
              The complete financial stack for your business
            </h2>
            <p className="text-[#060809] text-[18px] text-center font-normal tracking-[-0.2px] m-auto leading-[26px]">
              Top-end financial tools to help your business with its financial
              operations and cash flow.
            </p>
            <p className="text-[#060809] text-[18px] text-center font-normal tracking-[-0.2px] m-auto leading-[26px]">
              We help companies of all types work better, save time and money
              with a simply better banking service that works.
            </p>
          </header>
          <div className="">
            <div className="max-w-[1150px] mx-auto  ">
              <div className="grid gap-[4.5rem_1.875rem] grid-cols-3 py-[100px]">
                <div className="flex items-center">
                  <div className="mr-[0.75rem] max-h-[4.5rem] max-w-[4.5rem]">
                    <img
                     className="w-[300px] h-[72px] "
                      src="/img/gif/Speed-380c66374f966230f03d2a0a04f5f9df.gif"
                      alt=""
                    />
                  </div>
                  <div className="QualitiesList-module--QualitiesList_item_text--Ir7Km">
                    <h4 className="text-[20px] font-medium tracking-[-0.12px] leading-[28px]">
                      Speed
                    </h4>
                    <p className="text-[15px] font-[500] tracking-[-0.12px] leading-[20px]">
                      Open a commercial-grade current account from anywhere in
                      10 minutes
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap[10px]">
                  <div className="mr-[0.75rem] max-h-[4.5rem] max-w-[4.5rem]">
                    <img
                     className=" w-[300px] h-[72px] "
                      src="/img/gif/Security-8606df9d466b5169007c86f054bd9f66.gif"
                      alt=""
                    />
                  </div>
                  <div className="QualitiesList-module--QualitiesList_item_text--Ir7Km">
                    <h4 className="text-[20px] font-medium tracking-[-0.12px] leading-[28px]">
                      Security
                    </h4>
                    <p className="text-[15px] font-[500] tracking-[-0.12px] leading-[20px]">
                      Rely on bank-grade security with all your monies fully
                      insured by NDIC
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap[10px]">
                  <div className="mr-[0.75rem] max-h-[4.5rem] max-w-[4.5rem]">
                    <img
                     className="w-[300px] h-[72px]  "
                      src="/img/gif/Support-d41f6dd61ca6643249745571fb73fb66.gif"
                      alt=""
                    />
                  </div>
                  <div className="QualitiesList-module--QualitiesList_item_text--Ir7Km">
                    <h4 className="text-[20px] font-medium tracking-[-0.12px] leading-[28px]">
                      Support
                    </h4>
                    <p className="text-[15px] font-[500] tracking-[-0.12px] leading-[20px]">
                      Get access to a trusted support team and resources
                      whenever you want
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stack;
