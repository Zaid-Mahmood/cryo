"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Img3 from "@/assets/services/img1.png";
import Img2 from "@/assets/services/img2.png";
import Img1 from "@/assets/services/img3.png";
import leftArrow from "@/assets/services/left-arrow.png";
import rightArrow from "@/assets/services/right-arrow.png";
import linkArrow from "@/assets/services/link-arrow.png";

const Services = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
   const touchStartX = useRef(0);
    const touchEndX = useRef(0);
   
    const reviews = [
        {
            cardHeading: "Whole Body Cryotherapy",
            cardDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            link: {
                text: "Learn More",
                href: "#",
                arrow: linkArrow,
            },
            image: Img1,
        },
        {
            cardHeading: "Hyperbaric Chamber",
            cardDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            link: {
                text: "Learn More",
                href: "#",
                arrow: linkArrow,
            },
            image: Img2,
        },
        {
            cardHeading: "IV Infusion",
            cardDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            link: {
                text: "Learn More",
                href: "#",
                arrow: linkArrow,
            },
            image: Img3,
        },
        {
            cardHeading: "Whole Body Cryotherapy",
            cardDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            link: {
                text: "Learn More",
                href: "#",
                arrow: linkArrow,
            },
            image: Img1,
        },
        {
            cardHeading: "Hyperbaric Chamber",
            cardDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            link: {
                text: "Learn More",
                href: "#",
                arrow: linkArrow,
            },
            image: Img2,
        },
    ];

    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const next = () => {
        if (index < reviews.length - (isMobile ? 1 : 3)) {
            setIndex((prev) => prev + 1);
        }
    };

    const prev = () => {
        if (index > 0) {
            setIndex((prev) => prev - 1);
        }
    };
  const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].screenX;

        if (touchStartX.current - touchEndX.current > 50) {
            next();
        }

        if (touchEndX.current - touchStartX.current > 50) {
            prev();
        }
    };
    return (
        <div className="lg:pb-13 pb-8">
            <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 gap-4">
                <h2 className="font-body md:font-heading font-bold text-2xl md:text-3xl">
                    Our Services
                </h2>

                <div className="hidden md:flex gap-2 justify-center">
                    <button
                        onClick={prev}
                        disabled={index === 0}
                        className={`h-9 w-9 flex items-center justify-center rounded-full bg-[#1292E5] ${index === 0
                            ? "opacity-50 cursor-not-allowed"
                            : "cursor-pointer"
                            }`}
                    >
                        <Image
                            src={leftArrow}
                            alt="left arrow"
                            width={16}
                            height={16}
                            priority
                        />
                    </button>

                    <button
                        onClick={next}
                        disabled={
                            index >= reviews.length - (isMobile ? 1 : 3)
                        }
                        className={`h-9 w-9 flex items-center justify-center rounded-full bg-[#1292E5] ${index >= reviews.length - (isMobile ? 1 : 3)
                            ? "opacity-50 cursor-not-allowed"
                            : "cursor-pointer"
                            }`}
                    >
                        <Image
                            src={rightArrow}
                            alt="right arrow"
                            width={16}
                            height={16}
                            priority
                        />
                    </button>
                </div>
            </div>

            <div className="mt-6 lg:mt-11 overflow-hidden px-4 md:pl-16 md:pr-0"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}>
                <div
                    className="flex gap-4 md:gap-6 transition-transform duration-500"
                    style={{
                        transform: `translateX(-${index * (isMobile ? 92 : 34)}%)`,
                    }}
                >
                    {reviews.map((review, id) => (
                        <div
                            key={id}
                            className="w-[90%] md:w-[30%] flex-shrink-0"
                        >
                            <div className="h-full">
                                <div>
                                    <Image
                                        src={review.image}
                                        alt="img-name"
                                        width={0}
                                        height={0}
                                        className="w-full rounded-xl"
                                        priority
                                    />
                                </div>

                                <div className="p-2 font-body text-center md:text-left">
                                    <h2 className="pt-2 text-xl font-semibold text-black">
                                        {review.cardHeading}
                                    </h2>

                                    <p className="mt-2 text-base text-[var(--text-description)]">
                                        {review.cardDescription}
                                    </p>

                                    <Link
                                        href={review.link.href}
                                        className="mt-4 flex items-center justify-center md:justify-start gap-2"
                                    >
                                        <span className="text-base font-medium text-[var(--btn-bg-primary)]">
                                            {review.link.text}
                                        </span>

                                        <Image
                                            src={review.link.arrow}
                                            alt="arrow"
                                            width={12}
                                            height={12}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Buttons */}
                <div className="flex gap-2 justify-center md:hidden mt-6">
                    <button
                        onClick={prev}
                        disabled={index === 0}
                        className={`h-9 w-9 flex items-center justify-center rounded-full bg-[#1292E5] ${index === 0
                                ? "opacity-50 cursor-not-allowed"
                                : "cursor-pointer"
                            }`}
                    >
                        <Image
                            src={leftArrow}
                            alt="left arrow"
                            width={16}
                            height={16}
                            priority
                        />
                    </button>

                    <button
                        onClick={next}
                        disabled={index >= reviews.length - (isMobile ? 1 : 3)}
                        className={`h-9 w-9 flex items-center justify-center rounded-full bg-[#1292E5] ${index >= reviews.length - (isMobile ? 1 : 3)
                                ? "opacity-50 cursor-not-allowed"
                                : "cursor-pointer"
                            }`}
                    >
                        <Image
                            src={rightArrow}
                            alt="right arrow"
                            width={16}
                            height={16}
                            priority
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Services;