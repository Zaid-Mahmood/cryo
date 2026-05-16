"use client";

import Image from "next/image";
import leftArrow from "@/assets/services/left-arrow.png";
import rightArrow from "@/assets/services/right-arrow.png";
import { ClientReviewItem } from "@/app/customHooks/useClientCarousal";

type Props = {
    items: ClientReviewItem[];
    activeIndex: number;
    setActiveIndex: (i: number) => void;
    next: () => void;
    prev: () => void;
    getOffset: (index: number) => number;
};

const ClientReviews = ({
    items,
    activeIndex,
    setActiveIndex,
    next,
    prev,
    getOffset,
}: Props) => {
    return (
        <div className="w-full bg-white px-5 py-8 md:px-16 md:py-13">
            <div className="mx-auto w-full text-center">

                {/* Heading */}
                <h2 className="font-heading text-2xl font-bold text-[var(--btn-bg-black)] md:text-3xl">
                    What Our{" "}
                    <span className="text-[var(--btn-bg-primary)]">
                        Clients
                    </span>{" "}
                    Say
                </h2>

                {/* Desktop Carousel */}
                <div className="mt-6 md:mt-7 md:flex items-center justify-center gap-3 sm:gap-6 md:gap-10">

                    {/* Left Arrow */}
                    <button
                        type="button"
                        onClick={prev}
                        className="hidden md:flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--btn-bg-primary)] transition hover:bg-[var(--hover-bg-primary)] cursor-pointer"
                        aria-label="Previous client review"
                    >
                        <Image
                            src={leftArrow}
                            alt="left-arrow"
                            width={14}
                            height={14}
                            priority
                        />
                    </button>

                    {/* Images */}
                    <div className="relative h-36 sm:h-32 min-w-0 flex-1 sm:max-w-[520px] md:max-w-[620px] overflow-hidden md:overflow-visible">
                        {items.map((item, index) => {
                            const offset = getOffset(index);

                            const isActive = offset === 0;
                            const isNear = Math.abs(offset) === 1;

                            const scale = isActive
                                ? 1
                                : isNear
                                    ? 0.78
                                    : 0.62;

                            return (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    className={`absolute left-1/2 top-1/2 flex h-20 w-20 items-center justify-center rounded-full transition-all duration-500 ease-out md:h-24 md:w-24 ${
                                        isActive
                                            ? "z-30 opacity-100 shadow-[0_10px_24px_rgba(0,0,0,0.2)]"
                                            : isNear
                                                ? "z-20 opacity-70 shadow-[0_8px_18px_rgba(0,0,0,0.14)]"
                                                : "z-10 opacity-35 shadow-[0_6px_14px_rgba(0,0,0,0.12)]"
                                    }`}
                                    style={{
                                       transform: `translate(calc(-50% + ${offset} * clamp(50px, 19vw, 92px)), -50%) scale(${scale})`,
                                    }}
                                    aria-label={`Show ${item.name} review`}
                                >
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        fill
                                        sizes="(min-width: 768px) 96px, 80px"
                                        className="rounded-full object-cover"
                                        priority={isActive}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Arrow */}
                    <button
                        type="button"
                        onClick={next}
                        className="hidden md:flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition bg-[var(--btn-bg-primary)] hover:bg-[var(--hover-bg-primary)] cursor-pointer"
                        aria-label="Next client review"
                    >
                        <Image
                            src={rightArrow}
                            alt="right-arrow"
                            width={14}
                            height={14}
                            priority
                        />
                    </button>
                </div>

                {/* Name & Role */}
                <div className="mt-3 font-body">
                    <h3 className="text-base font-semibold text-[var(--btn-bg-black)]">
                        {items[activeIndex].name}
                    </h3>

                    <p className="mt-1 text-xs text-[var(--text-description)]">
                        {items[activeIndex].role}
                    </p>
                </div>

                {/* Review Text */}
                <p className="mx-auto mt-6 max-w-3xl font-body text-sm italic leading-relaxed text-[var(--btn-bg-black)]">
                    &ldquo; {items[activeIndex].reviewText} &rdquo;
                </p>

                {/* Mobile Arrows */}
                <div className="flex md:hidden justify-center items-center gap-4 mt-6">
                    <button
                        type="button"
                        onClick={prev}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--btn-bg-primary)] cursor-pointer"
                        aria-label="Previous client review"
                    >
                        <Image
                            src={leftArrow}
                            alt="left-arrow"
                            width={14}
                            height={14}
                            priority
                        />
                    </button>

                    <button
                        type="button"
                        onClick={next}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--btn-bg-primary)] cursor-pointer"
                        aria-label="Next client review"
                    >
                        <Image
                            src={rightArrow}
                            alt="right-arrow"
                            width={14}
                            height={14}
                            priority
                        />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ClientReviews;