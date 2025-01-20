import  { useState } from "react";
import AccordionItem from "./AccordionItems";

type AccordionProps = {
  items: { title: string; content: string }[]; // Array of items
  allowMultiple?: boolean; // Allow multiple accordions to stay open
  containerClassName?: string; // Optional for custom container styling
};

const Accordions = ({
  items,
  allowMultiple = false,
  containerClassName,
}: AccordionProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    if (allowMultiple) {
      // Toggle the current index in the array
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      // Single accordion open at a time
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={` ${containerClassName || ""}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)}
          onToggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordions;
