const Footer = () => {

  const sections = [
    {
      title: "Industry",
      links: [
        { label: "Retail businesses", href: "/retail" },
        { label: "Internet companies", href: "/internet-companies" },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "Brass Capital", href: "/retail" },
        { label: "Payroll", href: "/internet-companies" },
        { label: "Launchpad", href: "/internet-companies" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "Customers", href: "/retail" },
        { label: "Company", href: "/internet-companies" },
        { label: "Why Brass", href: "/internet-companies" },
        { label: "Press resources", href: "/internet-companies" },
        { label: "Careers", href: "/internet-companies" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Blog", href: "/retail" },
        { label: "Guides", href: "/internet-companies" },
        { label: "Help", href: "/internet-companies" },
        { label: "BBC", href: "/internet-companies" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of service", href: "/retail" },
        { label: "Privacy policy", href: "/internet-companies" },
        { label: "Capital TOS", href: "/internet-companies" },
        { label: "Cards T&Cs", href: "/internet-companies" },
      ],
    },
    {
      title: "Follow",
      links: [
        { label: "Twitter", href: "/retail" },
        { label: "LinkedIn", href: "/internet-companies" },
      ],
    },
  ];
  



  return (
    <section className=" lg:flex block md:pt-14 md:pb-[120px] bg-[#060809] text-[#fff] ">
      <div className="lg:px-[120px] px-[32px] m-auto w-full ">
        {/* <section className="lg:flex w-full border ">
          <div className="w-full pt-[1rem] ">
            <header className="md:cursor-auto mb-[20px] flex items-center justify-between ">
              <h6 className="text-[#50555e] text-[15px] font-normal tracking-[-0.12px] leading-5">
                Industry
              </h6>
              <svg
                className=" block md:hidden"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13 6L8 11L3 6"
                  stroke="#50555E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </header>
            <div className=" mt-20px text-[#fff] md:flex max-h-max relative z-0 flex-col transition-max-height duration-300 ease-in ">
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit"
                href="/retail"
              >
                Retail businesses
              </a>
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit mt-[20px]"
                href="/internet-companies"
              >
                Internet companies
              </a>
            </div>
          </div>
          <div className="w-full lg:pl-[1rem]  lg-pt-[0px] pt-[20px] ">
            <header className="md:cursor-auto mb-[20px] flex items-center justify-between ">
              <h6 className="text-[#50555e] text-[15px] font-normal tracking-[-0.12px] leading-5">
                Products
              </h6>
              <svg
                className=" block md:hidden"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13 6L8 11L3 6"
                  stroke="#50555E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </header>
            <div className=" mt-20px text-[#fff] md:flex max-h-max relative z-0 flex-col transition-max-height duration-300 ease-in ">
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit"
                href="/retail"
              >
                Brass Capital
              </a>
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit mt-[20px]"
                href="/internet-companies"
              >
                Payroll
              </a>
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit mt-[20px]"
                href="/internet-companies"
              >
                Launchpad
              </a>
            </div>
          </div>
          <div className="w-full lg:pl-[1rem]  lg-pt-[0px] pt-[20px]  ">
            <header className="md:cursor-auto mb-[20px] flex items-center justify-between ">
              <h6 className="text-[#50555e] text-[15px] font-normal tracking-[-0.12px] leading-5">
                About
              </h6>
              <svg
                className=" block md:hidden"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13 6L8 11L3 6"
                  stroke="#50555E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </header>
            <div className=" mt-20px text-[#fff] md:flex max-h-max relative z-0 flex-col transition-max-height duration-300 ease-in ">
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit"
                href="/retail"
              >
                Customers
              </a>
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit mt-[20px]"
                href="/internet-companies"
              >
                Company
              </a>
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit mt-[20px]"
                href="/internet-companies"
              >
                Why Brass
              </a>
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit mt-[20px]"
                href="/internet-companies"
              >
                Press resources
              </a>
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit mt-[20px]"
                href="/internet-companies"
              >
                Careers
              </a>
            </div>
          </div>
          <div className="w-full lg:pl-[1rem]  lg-pt-[0px] pt-[20px]  ">
            <header className="md:cursor-auto mb-[20px] flex items-center justify-between ">
              <h6 className="text-[#50555e] text-[15px] font-normal tracking-[-0.12px] leading-5">
                Support
              </h6>
              <svg
                className=" block md:hidden"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13 6L8 11L3 6"
                  stroke="#50555E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </header>
            <div className=" mt-20px text-[#fff] md:flex max-h-max relative z-0 flex-col transition-max-height duration-300 ease-in ">
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit"
                href="/retail"
              >
                Blog
              </a>
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit mt-[20px]"
                href="/internet-companies"
              >
                Guides
              </a>
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit mt-[20px]"
                href="/internet-companies"
              >
                Help
              </a>
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit mt-[20px]"
                href="/internet-companies"
              >
                BBC
              </a>
            </div>
          </div>
          <div className="w-full lg:pl-[1rem]  lg-pt-[0px] pt-[20px]  ">
            <header className="md:cursor-auto mb-[20px] flex items-center justify-between ">
              <h6 className="text-[#50555e] text-[15px] font-normal tracking-[-0.12px] leading-5">
                Legal
              </h6>
              <svg
                className=" block md:hidden"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13 6L8 11L3 6"
                  stroke="#50555E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </header>
            <div className=" mt-20px text-[#fff] md:flex max-h-max relative z-0 flex-col transition-max-height duration-300 ease-in ">
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit"
                href="/retail"
              >
                Terms of service
              </a>
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit mt-[20px]"
                href="/internet-companies"
              >
                Privacy policy
              </a>
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit mt-[20px]"
                href="/internet-companies"
              >
                Capital TOS
              </a>
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit mt-[20px]"
                href="/internet-companies"
              >
                Cards T&Cs
              </a>
            </div>
          </div>
          <div className="w-full lg:pl-[1rem]  lg-pt-[0px] pt-[20px]  ">
            <header className="md:cursor-auto mb-[20px] flex items-center justify-between ">
              <h6 className="text-[#50555e] text-[15px] font-normal tracking-[-0.12px] leading-5">
                Follow
              </h6>
              <svg
                className=" block md:hidden"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13 6L8 11L3 6"
                  stroke="#50555E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </header>
            <div className=" mt-20px text-[#fff] md:flex max-h-max relative z-0 flex-col transition-max-height duration-300 ease-in ">
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit"
                href="/retail"
              >
                Twitter
              </a>
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit mt-[20px]"
                href="/internet-companies"
              >
                LinkedIn
              </a>
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit mt-[20px]"
                href="/internet-companies"
              >
                Instagram
              </a>
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit mt-[20px]"
                href="/internet-companies"
              >
                Youtube
              </a>
            </div>
          </div>
          <div className="w-full lg:pl-[1rem]  lg-pt-[0px] pt-[20px]  ">
            <header className="md:cursor-auto mb-[20px] flex items-center justify-between ">
              <h6 className="text-[#50555e] text-[15px] font-normal tracking-[-0.12px] leading-5">
                Contact
              </h6>
              <svg
                className=" block md:hidden"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13 6L8 11L3 6"
                  stroke="#50555E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </header>
            <div className=" mt-20px text-[#fff] md:flex max-h-max relative z-0 flex-col transition-max-height duration-300 ease-in ">
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit"
                href="/retail"
              >
                02017002000
              </a>
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit mt-[20px]"
                href="/internet-companies"
              >
                sales@trybrass.com
              </a>
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit mt-[20px]"
                href="/internet-companies"
              >
                help@trybrass.com
              </a>
              <a
                className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit mt-[20px]"
                href="/internet-companies"
              >
                business@trybrass.com
              </a>
            </div>
          </div>
        </section> */}






<section className="lg:flex w-full sm:pt-[40px]">
  {sections.map((section, index) => (
    <div key={index} className="w-full lg:pl-[1rem] pt-[20px] lg:pt-0">
      <header className="md:cursor-auto mb-[20px] flex items-center justify-between">
        <h6 className="text-[#50555e] text-[15px] font-normal tracking-[-0.12px] leading-5">
          {section.title}
        </h6>
        {/* <svg
          className="block md:hidden"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M13 6L8 11L3 6"
            stroke="#50555E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg> */}
      </header>
      <div className="mt-[20px] text-[#fff] flex sm:flex max-h-max relative z-0 flex-col   transition-max-height duration-300 ease-in">
        {section.links.map((link, idx) => (
          <a
            key={idx}
            className="text-[15px] font-normal leading-[20px] tracking-[-0.12px] text-decoration-none whitespace-nowrap w-fit mt-[20px]"
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  ))}
</section>


        <section className=" lg:mt-[150px] mt-[88px] text-[#fff]">
          <div className="flex items-baseline">
            <svg
              className="Footer-module--Footer_subSection_logoSection_logo--D1Yhj"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M0.0146169 8.91812H20.9807L16.4933 13.4055H0.0146169V20.0946H9.80427L0 29.8988L2.103 32L11.9055 22.1957V31.9854H18.5945V15.5067L23.0545 11.0485V31.9854H31.9726V0H0.0146169V8.91812Z"
                fill="white"
              ></path>
            </svg>
            <p className="text-[18px] font-normal tracking-[-0.2px] leading-[26px]">
              Big starts small.
            </p>
          </div>
          <div>
            <h5 className="text-[15px] font-[400] my-[16px] leading-[20px]">
              Available on web and also on
            </h5>
            <div className="flex text-[#fff] ">
              <a
                href="https://play.google.com/store/apps/details?id=com.brass.mobile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="135" height="56" viewBox="0 0 135 56" fill="none">
                  <rect width="135" height="56" rx="8" fill="#1A1C1F"></rect>
                  <path
                    d="M30.382 19.968C31.9757 18.6911 33.9578 17.9968 36 18C38.125 18 40.078 18.736 41.618 19.968L43.071 18.515L44.485 19.929L43.032 21.382C44.3089 22.9758 45.0033 24.9578 45 27V28H27V27C27 24.875 27.736 22.922 28.968 21.382L27.515 19.93L28.929 18.516L30.382 19.969V19.968ZM27 30H45V37C45 37.2652 44.8946 37.5196 44.7071 37.7071C44.5196 37.8947 44.2652 38 44 38H28C27.7348 38 27.4804 37.8947 27.2929 37.7071C27.1054 37.5196 27 37.2652 27 37V30ZM33 25C33.2652 25 33.5196 24.8947 33.7071 24.7071C33.8946 24.5196 34 24.2652 34 24C34 23.7348 33.8946 23.4804 33.7071 23.2929C33.5196 23.1054 33.2652 23 33 23C32.7348 23 32.4804 23.1054 32.2929 23.2929C32.1054 23.4804 32 23.7348 32 24C32 24.2652 32.1054 24.5196 32.2929 24.7071C32.4804 24.8947 32.7348 25 33 25ZM39 25C39.2652 25 39.5196 24.8947 39.7071 24.7071C39.8946 24.5196 40 24.2652 40 24C40 23.7348 39.8946 23.4804 39.7071 23.2929C39.5196 23.1054 39.2652 23 39 23C38.7348 23 38.4804 23.1054 38.2929 23.2929C38.1054 23.4804 38 23.7348 38 24C38 24.2652 38.1054 24.5196 38.2929 24.7071C38.4804 24.8947 38.7348 25 39 25Z"
                    fill="white"
                  ></path>
                  <path
                    d="M61.025 23.81L62.615 28.01H59.435L61.025 23.81ZM56.12 32H57.935L58.865 29.525H63.185L64.115 32H65.93L61.835 21.5H60.2L56.12 32ZM66.9888 32H68.6238V28.685C68.6238 26.87 69.3888 25.79 70.6638 25.79C71.6238 25.79 72.2088 26.45 72.2088 27.395V32H73.8438V27.02C73.8438 25.385 72.7188 24.32 71.1138 24.32C70.0038 24.32 69.1338 24.89 68.6238 25.7V24.44H66.9888V32ZM78.9532 32.12C79.9582 32.12 80.8732 31.67 81.2332 31.04V32H82.8682V21.38H81.2332V25.385C80.7832 24.755 79.8982 24.32 78.9232 24.32C76.6432 24.32 75.3382 25.94 75.3382 28.22C75.3382 30.5 76.6432 32.12 78.9532 32.12ZM76.9732 28.22C76.9732 26.72 77.8432 25.745 79.1632 25.745C80.4832 25.745 81.3532 26.72 81.3532 28.22C81.3532 29.705 80.4832 30.695 79.1632 30.695C77.8432 30.695 76.9732 29.705 76.9732 28.22ZM89.471 26.03L89.561 24.455C89.336 24.365 89.006 24.32 88.721 24.32C87.806 24.32 86.816 24.98 86.411 25.88V24.44H84.776V32H86.411V29.18C86.411 26.84 87.386 25.85 88.496 25.85C88.841 25.85 89.201 25.91 89.471 26.03ZM93.9053 32.12C96.1703 32.12 97.8053 30.485 97.8053 28.22C97.8053 25.955 96.1703 24.32 93.9053 24.32C91.6253 24.32 90.0053 25.955 90.0053 28.22C90.0053 30.485 91.6253 32.12 93.9053 32.12ZM91.6553 28.22C91.6553 26.765 92.5553 25.745 93.9053 25.745C95.2403 25.745 96.1553 26.765 96.1553 28.22C96.1553 29.675 95.2403 30.695 93.9053 30.695C92.5553 30.695 91.6553 29.675 91.6553 28.22ZM99.2965 32H100.932V24.44H99.2965V32ZM99.2215 23.195H101.022V21.38H99.2215V23.195ZM106.061 32.12C107.066 32.12 107.981 31.67 108.341 31.04V32H109.976V21.38H108.341V25.385C107.891 24.755 107.006 24.32 106.031 24.32C103.751 24.32 102.446 25.94 102.446 28.22C102.446 30.5 103.751 32.12 106.061 32.12ZM104.081 28.22C104.081 26.72 104.951 25.745 106.271 25.745C107.591 25.745 108.461 26.72 108.461 28.22C108.461 29.705 107.591 30.695 106.271 30.695C104.951 30.695 104.081 29.705 104.081 28.22Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
              <a
                className="ml-[1rem]"
                href="https://apps.apple.com/ng/app/brass-banking-for-businesses/id1571096526"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="101" height="56" viewBox="0 0 101 56" fill="none">
                  <rect width="101" height="56" rx="8" fill="#1A1C1F"></rect>
                  <path
                    d="M52.96 33H54.595V25.44H52.96V33ZM52.885 24.195H54.685V22.38H52.885V24.195ZM61.3742 33.12C64.4042 33.12 66.6242 30.855 66.6242 27.75C66.6242 24.645 64.4042 22.38 61.3742 22.38C58.3442 22.38 56.1242 24.645 56.1242 27.75C56.1242 30.855 58.3442 33.12 61.3742 33.12ZM57.8942 27.75C57.8942 25.53 59.3492 23.91 61.3742 23.91C63.3992 23.91 64.8542 25.53 64.8542 27.75C64.8542 29.97 63.3992 31.575 61.3742 31.575C59.3492 31.575 57.8942 29.97 57.8942 27.75ZM71.6047 33.12C73.9597 33.12 75.5047 31.905 75.5047 30.075C75.5047 25.845 69.7447 27.315 69.7447 25.2C69.7447 24.39 70.4347 23.91 71.5747 23.91C72.7747 23.91 73.5997 24.585 73.8097 25.65L75.3847 25.005C75.0847 23.43 73.5397 22.38 71.5747 22.38C69.5197 22.38 67.9747 23.535 67.9747 25.2C67.9747 28.98 73.7197 27.615 73.7197 30.105C73.7197 31.005 72.9097 31.59 71.6647 31.59C70.4047 31.59 69.3697 30.705 69.1897 29.355L67.5847 29.85C67.8847 31.77 69.5647 33.12 71.6047 33.12Z"
                    fill="white"
                  ></path>
                  <path
                    d="M35.6245 21.122C34.7485 21.122 33.3925 20.126 31.9646 20.162C30.0806 20.186 28.3525 21.254 27.3805 22.946C25.4245 26.342 26.8765 31.358 28.7845 34.118C29.7205 35.462 30.8245 36.974 32.2885 36.926C33.6925 36.866 34.2205 36.014 35.9245 36.014C37.6165 36.014 38.0965 36.926 39.5845 36.89C41.0965 36.866 42.0565 35.522 42.9805 34.166C44.0485 32.606 44.4925 31.094 44.5166 31.01C44.4806 30.998 41.5766 29.882 41.5406 26.522C41.5166 23.714 43.8326 22.37 43.9405 22.31C42.6206 20.378 40.5925 20.162 39.8845 20.114C38.0365 19.97 36.4885 21.122 35.6245 21.122ZM38.7445 18.29C39.5245 17.354 40.0405 16.046 39.8965 14.75C38.7805 14.798 37.4365 15.494 36.6325 16.43C35.9125 17.258 35.2885 18.59 35.4565 19.862C36.6925 19.958 37.9646 19.226 38.7445 18.29Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>

            <a
              className="fixed bottom-0 left-0 right-0 z-[100] bg-[#0bce5a] text-white flex items-center justify-center text-[15px] font-semibold leading-[20px] tracking-[-0.12px] h-[80px]  w-full md:hidden"
              href="#"
            >
              <span>Open an account in 10 minutes</span>
            </a>
          </div>
        </section>
        <section className="lg:mt-[64px] md:pb-0 pb-[7rem] mt-[30px] text-white text-[15px] font-normal tracking-[-0.12px] leading-[20px]">
          Banking services backed by Wema Bank &amp; Titan Trust Bank and
          regulated by the Central Bank of Nigeria.
          <br />
          Brass web and mobile applications are properties of Copper Brass
          Limited, a company registered with the Corporate Affairs Commission
          with RC Number: 7483800.
        </section>
      </div>
    </section>
  );
};

export default Footer;
