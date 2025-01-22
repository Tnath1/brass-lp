import Naira from "/img/naira.webp";
import Idea from "/img/idea.webp";
import Business from "/img/business (1).png";

const Resources = () => {
  return (
    <section className="py-[100px] mx-auto w-full">
      <div className="lg:px-[120px] md:px-[32px] px-[16px]  ">
        <header className="ml-auto mr-auto max-w-[585px] text-center  ">
          <h2 className="lg:text-[45px] text-[30px]  font-semibold tracking-[-1.21px] lg:leading-[58px] leading-[38px] mb-4 text-center">
            Go further with resources to get started
          </h2>
          <p className=" text-center text-[#060809] lg:text-[18px] text-[15px] font-[500] tracking-[-0.2px] leading-[26px]">
            We have partnered with businesses on the same mission as ours to
            help local businesses. We have also added resources you need to
            start, run and grow your business.
          </p>
        </header>
        <div className="  grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  mt-[48px] gap-x-8 gap-y-[30px] ">
          <a
            href="https://medium.com/brass-resources/why-you-need-a-separate-business-current-account-f5e81c29cfd9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border border-[#e9ebec] rounded-[0.5rem] ">
              <div className="">
                <span
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained RelatedPostCard-module--RelatedPostCard_image_img--gqioR"
                >
                  <div style={{ maxWidth: "1140px", display: "block" }}>
                    <img
                      alt=""
                      role="presentation"
                      aria-hidden="true"
                      src={Naira}
                      style={{
                        maxWidth: "100%",
                        display: "block",
                        position: "static",
                      }}
                    />
                  </div>
                </span>
              </div>
              <div className="p-[1.5rem]">
                <h4 className="text-left text-[#060809] text-[18px] font-[600] tracking[-0.2px] leading-[26px] mb-1">
                  Why you need a separate business current account
                </h4>
                <div className="RelatedPostCard-module--RelatedPostCard_content_excerpt--EXYe1">
                  <p className="text-left text-[15px] font-[500] tracking[-0.12px] leading-[20px] text-[#060809]">
                    The reason for them and how to open a Brass account
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://medium.com/brass-resources/why-you-need-a-separate-business-current-account-f5e81c29cfd9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border border-[#e9ebec] rounded-[0.5rem] ">
              <div className="">
                <span
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained RelatedPostCard-module--RelatedPostCard_image_img--gqioR"
                >
                  <div style={{ maxWidth: "1140px", display: "block" }}>
                    <img
                      alt=""
                      role="presentation"
                      aria-hidden="true"
                      src={Idea}
                      style={{
                        maxWidth: "100%",
                        display: "block",
                        position: "static",
                      }}
                    />
                  </div>
                </span>
              </div>
              <div className="p-[1.5rem]">
                <h4 className="text-left text-[#060809] text-[18px] font-[600] tracking[-0.2px] leading-[26px] mb-1">
                  Working on the right idea
                </h4>
                <div className="RelatedPostCard-module--RelatedPostCard_content_excerpt--EXYe1">
                  <p className="text-left text-[15px] font-[500] tracking[-0.12px] leading-[20px] text-[#060809]">
                    How to figure out the right business idea for you.
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://medium.com/brass-resources/why-you-need-a-separate-business-current-account-f5e81c29cfd9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border border-[#e9ebec] rounded-[0.5rem] ">
              <div className="">
                <span data-gatsby-image-wrapper="" className="">
                  <div
                    className=""
                    style={{ maxWidth: "1140px", display: "block" }}
                  >
                    <img
                      className="rounded-t-[0.5rem]"
                      alt=""
                      role="presentation"
                      aria-hidden="true"
                      src={Business}
                      style={{
                        maxWidth: "100%",
                        display: "block",
                        position: "static",
                        objectFit: "cover",
                        height: "100%",
                      }}
                    />
                  </div>
                </span>
              </div>
              <div className="p-[1.5rem] h-auto">
                <h4 className="text-left text-[#060809] text-[18px] font-[600] tracking[-0.2px] leading-[26px] mb-1">
                  What you need to know about business credit
                </h4>
                <div className="RelatedPostCard-module--RelatedPostCard_content_excerpt--EXYe1">
                  <p className="text-left text-[15px] font-[500] tracking[-0.12px] leading-[20px] text-[#060809]">
                    How business credit can work for you.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resources;
