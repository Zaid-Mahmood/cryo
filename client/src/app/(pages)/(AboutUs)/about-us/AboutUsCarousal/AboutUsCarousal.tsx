"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Img3 from "@/assets/aboutus-img/recovery-img-1.png";
import Img2 from "@/assets/aboutus-img/recovery-img-2.png";
import Img1 from "@/assets/aboutus-img/recovery-img-3.png";
import leftArrow from "@/assets/services/left-arrow.png";
import rightArrow from "@/assets/services/right-arrow.png";
const AboutUsCarousal = () => {
    const reviews = [Img1, Img2, Img3 , Img1, Img2];

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
        <div className="lg:pb-13 pb-8  px-4 ">
            <div className="flex justify-between md:px-16">
            <div>
                 <h2 className="font-body md:font-heading font-bold text-2xl md:text-3xl">
                    Designed for Recovery
                </h2>
                <p className="text-[#656565]">From advanced treatment rooms to calming wellness spaces, every part of Cryo SubZero is designed to create a comfortable and elevated recovery experience.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
               
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
</div>
            <div className="mt-6 lg:mt-11 overflow-hidden lg:pl-16 md:pr-0">
                <div
                    className="flex gap-4 md:gap-6 transition-transform duration-500"
                    style={{
                        transform: `translateX(-${index * (isMobile ? 92 : 34)}%)`,
                    }}
                >
                    {reviews.map((review, id) => (
                        <div
                            key={id}
                            className="w-[90%] md:w-[31%] flex-shrink-0"
                        >
                            <div className="h-full">
                                <div>
                                    <Image
                                        src={review}
                                        alt="img-name"
                                        width={0}
                                        height={0}
                                        className="w-full rounded-xl"
                                        priority
                                    />
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

export default AboutUsCarousal
