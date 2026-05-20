"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import leftArrow from "@/assets/services/left-arrow.png";
import rightArrow from "@/assets/services/right-arrow.png";
import PackageCard from "./PackageCard";

const RecoveryComboCarousel = ({ title, data }: any) => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
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
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="font-heading text-2xl font-bold text-[var(--btn-bg-black)]">
          {title}
        </h3>

        <div className="flex gap-2">
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
          className="flex gap-6 transition-transform duration-500 ease-in-out mx-16 "
          style={{
            transform: `translateX(-${isMobile ? index * 90 : index * 34}%)`,
          }}
        >
          {data.map((item: any) => (
            <div key={item.id}>
              <PackageCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecoveryComboCarousel;