
type AccordionItemProps = {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
  itemClassName?: string; // Optional for custom styling
  titleClassName?: string; // Optional for custom title styling
  contentClassName?: string; // Optional for custom content styling
};

const AccordionItems = ({
  title,
  content,
  isOpen,
  onToggle,
  itemClassName,
  titleClassName,
  contentClassName,
}: AccordionItemProps) => (
  <div className={` bg-black text-[#fff]  border-b ${itemClassName || "border-[#222121]"}`}>
    {/* Header Section */}
    <div
      className={`py-4  cursor-pointer ${
        isOpen ? "bg-black" : ""
      } ${titleClassName || ""}`}
      onClick={onToggle}
    >
      <div className="flex px-[32px] justify-between items-center">
        <h6 className="font-semibold text-lg">{title}</h6>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className={`w-4 h-4 block md:hidden transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <g fill="none" fillRule="evenodd">
            <circle cx="8" cy="8" r="8" fill="#FFF" fillOpacity="0"></circle>
            <path
              stroke="#53616E"
              strokeLinecap="round"
              d="M4 6l3.646 3.646c.196.196.512.196.708 0L12 6"
            ></path>
          </g>
        </svg>
      </div>
    </div>

    {/* Content Section */}
    {isOpen && (
      <div className={`mt-2 mx-[32px] text-sm leading-6 ${contentClassName || "text-white"}`}>
        {content}
      </div>
    )}
  </div>
);

export default AccordionItems;
