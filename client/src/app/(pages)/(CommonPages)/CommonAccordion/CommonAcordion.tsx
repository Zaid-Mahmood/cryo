"use client";
import Image from "next/image";
import upArrow from "@/assets/faq-img/up-arrow.png";
import downArrow from "@/assets/faq-img/down-arrow.png";

import { useState } from "react";
interface AccordionItem {
  title: string;
  content: string;
}

interface CommonAccordionProps {
  items: AccordionItem[];
  defaultOpenIndex?: number;
}

const CommonAccordion = ({
  items,
  defaultOpenIndex = 0,
}: CommonAccordionProps) => {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className="space-y-4 w-full">
      {items.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <div 
          key={index}
            className={`py-8 pl-5 pr-13 border-t border-[var(--btn-bg-black)] m-0  ${index === items.length - 1 ? "border-b" : ""
              } ${isOpen ? "bg-[var(--border-secondary)]" : ""
              }`}
          >
            <div className="flex items-start justify-between gap-y-2  gap-x-4">
              <p className="text-base md:text-xl font-body text-[var(--btn-bg-black)] pb-2 w-full">{item.title}</p>
              <button
                onClick={() =>
                  setOpenIndex(index === openIndex ? -1 : index)
                }>
                <Image
                  src={isOpen ? upArrow : downArrow}
                  alt="toggle-arrow"
                  className="transition-transform duration-300 cursor-pointer mt-2"
                />
              </button>
            </div>
            {isOpen && (
              <div className="font-body text-sm md:text-base text-[var(--text-secondary)] ">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CommonAccordion;