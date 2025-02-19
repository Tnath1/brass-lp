import { useState } from "react";

type AccordionItemProps = {
  title: string;
  content: string;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
};

const AccordionItem = ({
  title,
  content,
  index,
  isOpen,
  onToggle,
}: AccordionItemProps) => (
  <div className="border-b border-b-[#3a3636]">
    <div
      className={`border border-none  p-8 cursor-pointer ${
        isOpen ? "bg-[#353535]" : ""
      }`}
      onClick={() => onToggle(index)}
    >
      <div className="flex justify-between items-center">
        <h6 className="font-semibold md:text-lg text-[14px]">{title}</h6>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className={`md:w-4 md:h-4 h-6 w-6 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        >
          <g fill="none" fillRule="evenodd">
            <circle cx="8" cy="8" r="8" fill="#FFF" fillOpacity="0"></circle>
            <path
              stroke="#fff"
              strokeLinecap="round"
              d="M4 6l3.646 3.646c.196.196.512.196.708 0L12 6"
            ></path>
          </g>
        </svg>
      </div>
      {isOpen && (
        <div className="mt-2 text-sm text-[#fff] leading-6">{content}</div>
      )}
    </div>
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle between open/close
  };

  const accordionItems = [
    {
      title: "Who can sign up on Brass?",
      content:
        "We currently only serve registered businesses in Nigeria. We support sole traders, NGOs, partnerships and limited liability companies. However, If your business is not yet registered, Brass can help you get your desired business registered on time with our partners.",
    },
    {
      title: "How much do I pay to sign up at Brass??",
      content: "You do not pay for signing up for an account at Brass",
    },
    {
      title: "What do I need to open an account?",
      content:
        "You will need government-issued IDs (Including BVN) and your company's incorporation documents.",
    },
    {
      title: "How do you ensure safekeeping of my data and money?",
      content:
        "We have introduced Two factor Authentication(2FA) for an extra level of security. This authentication is done using digital OTP apps like Google authenticator and Authy instead of hackable channels such as the SMS.",
    },
  ];

  return (
    <section className="py-[200px] pt-[96px] pb-[72px] bg-[#060809] text-white mx-auto w-full">
      <div className="lg:px-[120px] md:px-[32px] px-[12px] grid gap-y-12 gap-x-7 grid-cols-1 lg:grid-cols-12 mx-auto ">
        <header className="lg:col-start-1 lg:col-span-5">
          <h2 className="lg:text-[45px] text-[25px] lg:text-left text-center  font-semibold tracking-[-1.21px] lg:leading-[58px] leading-[35px] mb-[1rem]">
            Some of the things you may want to know
          </h2>
          <p className="text-white lg:text-[18px] text-[15px] lg:text-left text-center font-normal tracking-[-0.2px] leading-[26px]">
            We answered questions so you don’t have to ask them.
          </p>
        </header>
        <div className="space-y-4 lg:col-start-7 lg:col-span-6">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              index={index}
              isOpen={openIndex === index}
              onToggle={toggleAccordion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
