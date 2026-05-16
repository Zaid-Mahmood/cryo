"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Img3 from "@/assets/service-drop/infrared-suana/package-infra.png";
import Img2 from "@/assets/service-drop/infrared-suana/package-infra.png";
import Img1 from "@/assets/service-drop/infrared-suana/package-infra.png";
import leftArrow from "@/assets/services/left-arrow.png";
import rightArrow from "@/assets/services/right-arrow.png";
import arrowRight from "@/assets/service-drop/body-cryo/ArrowRight.png";
const InfraredPackages = () => {
    const reviews = [
        {
            cardHeading: "Infrared Sauna",
            cardDescription:
                "Reduce inflammation, speed up recovery, and support muscle repair with advanced cold therapy.",

            price: "50",
            seeion: 1,
            image: Img1,
            link: {
                text: "Book Now",
                href: "#",
                arrow: arrowRight,
            },
        },
        {
            cardHeading: "Infrared Sauna",
            cardDescription:
                "Reduce inflammation, speed up recovery, and support muscle repair with advanced cold therapy.",

            price: "225",
            seeion: 5,
            image: Img2,
            link: {
                text: "Book Now",
                href: "#",
                arrow: arrowRight,
            },

        },
        {
            cardHeading: "Infrared Sauna",
            cardDescription:
                "Reduce inflammation, speed up recovery, and support muscle repair with advanced cold therapy.",

            price: "400",
            seeion: 10,
            image: Img3,
            link: {
                text: "Book Now",
                href: "#",
                arrow: arrowRight,
            },
        },
    ];

    const [index, setIndex] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);

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
    const showDesktopArrows = reviews.length > 3;
    return (
        <div className="lg:pb-13 pb-8">
            <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 gap-4">
                <h2 className="font-body md:font-heading font-bold text-2xl md:text-3xl">
                    Packages
                </h2>

                {showDesktopArrows &&
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
                }
            </div>

            <div className="mt-6 lg:mt-11 overflow-hidden px-4 md:pl-16 md:pr-0">
                <div
                    className="flex gap-4 md:gap-6 transition-transform duration-500"
                    style={{
                        transform: `translateX(-${index * (isMobile ? 92 : 34)}%)`,
                    }}
                >
                    {reviews.map((review, id) => (
                        <div
                            key={id}
                            className="w-[90%] md:w-[31%] flex-shrink-0 border border-[#D9D9D9] p-2 rounded-xl"
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

                                    {/* PRICE + SESSION + BUTTON ROW */}
                                    <div className="mt-5 flex items-center justify-between">

                                        {/* LEFT SIDE: PRICE + SESSION */}
                                        <div className="text-left">
                                            <p className="text-3xl font-heading font-bold text-[var(--btn-bg-primary)]">
                                                A${review.price}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {review.seeion} Session{review.seeion > 1 ? "s" : ""}
                                            </p>
                                        </div>

                                        {/* RIGHT SIDE: BUTTON */}
                                        <Link
                                            href={review.link.href}
                                            className="flex items-center gap-2 rounded-lg border-2 border-[var(--text-secondary)]  px-4 py-2 text-white text-sm font-medium hover:opacity-90 transition"
                                        >
                                            <span className="text-[var(--btn-bg-black)] font-semibold text-base">{review.link.text}</span>

                                            <Image
                                                src={arrowRight}
                                                alt="arrow right"
                                                width={14}
                                                height={14}
                                            />
                                        </Link>
                                    </div>
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
    )
}

export default InfraredPackages
