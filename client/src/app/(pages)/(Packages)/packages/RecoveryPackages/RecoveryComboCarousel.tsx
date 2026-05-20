"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import leftArrow from "@/assets/services/left-arrow.png";
import rightArrow from "@/assets/services/right-arrow.png";
import PackageCard from "./PackageCard";

const RecoveryComboCarousel = ({ title, data, slidePercent , mobileSlidePercent  }: any) => {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const maxIndex = Math.max(data.length - cardsPerView, 0);

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;

    if (touchStartX.current - touchEndX.current > 50) next();
    if (touchEndX.current - touchStartX.current > 50) prev();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="overflow-hidden lg:pl-16">
      <div className="mb-8 md:flex md:items-center md:justify-between justify-center md:pr-16">
        <h3 className="md:text-left text-center font-heading text-2xl font-bold text-[var(--btn-bg-black)]">
          {title}
        </h3>

        <div className="hidden md:flex md:gap-2">
          <button
            onClick={prev}
            className="cursor-pointer h-9 w-9 flex items-center justify-center rounded-full bg-[var(--btn-bg-primary)]"
          >
            <Image src={leftArrow} alt="left arrow" width={16} height={16} />
          </button>

          <button
            onClick={next}
            className="cursor-pointer h-9 w-9 flex items-center justify-center rounded-full bg-[var(--btn-bg-primary)]"
          >
            <Image src={rightArrow} alt="right arrow" width={16} height={16} />
          </button>
        </div>
      </div>

      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
         style={{
  transform: `translateX(-${
    index *
    ((cardsPerView === 1 ? mobileSlidePercent : slidePercent) /
      cardsPerView)
  }%)`,
}}
        >
          {data.map((item: any) => (
            <div
              key={item.id}
              className="shrink-0 w-full md:w-[calc((100%-24px)/2)] lg:w-[calc((90%-48px)/3)] px-5 md:px-0"
            >
              <PackageCard item={item} />
            </div>
          ))}

        </div>
         <div className="flex justify-center gap-2 pt-5 md:hidden">
          <button
            onClick={prev}
            className="cursor-pointer h-9 w-9 flex items-center justify-center rounded-full bg-[var(--btn-bg-primary)]"
          >
            <Image src={leftArrow} alt="left arrow" width={16} height={16} />
          </button>

          <button
            onClick={next}
            className="cursor-pointer h-9 w-9 flex items-center justify-center rounded-full bg-[var(--btn-bg-primary)]"
          >
            <Image src={rightArrow} alt="right arrow" width={16} height={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecoveryComboCarousel;