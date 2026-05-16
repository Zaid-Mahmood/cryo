"use client"
import { useState, useEffect, useRef } from "react";
import leftArrow from "@/assets/services/left-arrow.png";
import rightArrow from "@/assets/services/right-arrow.png";
import img1 from "@/assets/articles-img/img-1.png";
import img2 from "@/assets/articles-img/img-2.png";
import img3 from "@/assets/articles-img/img-3.png";
import authorImg1 from "@/assets/articles-img/author-img1.png";
import authorImg2 from "@/assets/articles-img/author-img2.png";
import authorImg3 from "@/assets/articles-img/author-img3.png";
import Image from "next/image";

const Articles = () => {
    const reviews = [
        {
            cardType: ["Detox"],
            heading: "Infrared Sauna: Deep Heat, Real Recovery",
            desc: "Penetrating heat improves circulation, eases tension, and supports detox.",
            img: img1,
            authimg: authorImg1,
            author: "Esther Howard",
            dateReadTime: "15 April 2026 • 4 min read",
        },
        {
            cardType: ["Recovery", "Performance"],
            heading: "Cut Muscle Soreness in Half with Cryotherapy",
            desc: "Discover how cold exposure speeds up recovery and gets you back to training faster.",
            img: img2,
            authimg: authorImg2,
            author: "Dr James",
            dateReadTime: "3 April 2026 • 4 min read",
        },
        {
            cardType: ["Healing"],
            heading: "How Oxygen Therapy Speeds Up Recovery",
            desc: "Pressurized oxygen helps repair tissues, boost immunity, and accelerate healing.",
            img: img3,
            authimg: authorImg3,
            author: "Jane Copper",
            dateReadTime: "08 April 2026 • 5 min read",
        },
        {
            cardType: ["Detox"],
            heading: "Infrared Sauna: Deep Heat, Real Recovery",
            desc: "Penetrating heat improves circulation, eases tension, and supports detox.",
            img: img1,
            authimg: authorImg1,
            author: "Esther Howard",
            dateReadTime: "15 April 2026 • 4 min read",
        },
        {
            cardType: ["Recovery", "Performance"],
            heading: "Cut Muscle Soreness in Half with Cryotherapy",
            desc: "Discover how cold exposure speeds up recovery and gets you back to training faster.",
            img: img2,
            authimg: authorImg2,
            author: "Dr James",
            dateReadTime: "3 April 2026 • 4 min read",
        },
    ];

    const [index, setIndex] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const next = () => {
        setIndex((prev) => (prev + 1) % reviews.length);
    };

    const prev = () => {
        setIndex((prev) =>
            prev === 0 ? reviews.length - 1 : prev - 1
        );
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

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="overflow-hidden pl-5  py-8 md:pl-16 md:py-13">
            {/* Heading + Desktop Buttons */}
            <div className="md:flex md:items-center md:justify-between block">
                <h2 className="font-heading text-center text-2xl font-bold text-[var(--btn-bg-black)] md:text-3xl">
                    Blogs & Articles
                </h2>

                {/* Desktop Buttons */}
                <div className="hidden md:flex gap-2 px-16">
                    <button
                        onClick={prev}
                        className="cursor-pointer h-9 w-9 flex items-center justify-center rounded-full bg-[var(--btn-bg-primary)] hover:bg-[var(--hover-bg-primary)]"
                    >
                        <Image
                            src={leftArrow}
                            alt="left arrow"
                            width={16}
                            height={16}
                        />
                    </button>

                    <button
                        onClick={next}
                        className="cursor-pointer h-9 w-9 flex items-center justify-center rounded-full bg-[var(--btn-bg-primary)] hover:bg-[var(--hover-bg-primary)]"
                    >
                        <Image
                            src={rightArrow}
                            alt="right arrow"
                            width={16}
                            height={16}
                        />
                    </button>
                </div>
            </div>

            {/* Carousel */}
            <div
                className="mt-8 overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex transition-transform duration-500 ease-in-out gap-6"
                    style={{
                        transform: `translateX(-${isMobile ? index * 90 : index * 20}%)`,
                    }}
                >
                    {reviews.map((item, i) => (
                        <div
                            key={i}
                            className="min-w-[85%] md:min-w-[32%] rounded-2xl bg-white shadow-[0px_4px_10px_#0000000F]"
                        >
                            <Image
                                src={item.img}
                                alt="article-img"
                                className="w-full object-cover"
                            />

                            <div className="p-5">
                                <div className="flex flex-wrap gap-2">
                                    {item.cardType.map((type, idx) => (
                                        <span
                                            key={idx}
                                            className="rounded-full bg-[#F2F7FD] px-3 py-1 text-sm text-[#1292E5]"
                                        >
                                            {type}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="pt-4 font-heading text-xl font-semibold">
                                    {item.heading}
                                </h3>

                                <p className="pt-3 text-sm text-[var(--text-description)]">
                                    {item.desc}
                                </p>

                                <div className="mt-5 flex items-center gap-3">
                                    <Image
                                        src={item.authimg}
                                        alt="author-img"
                                        width={40}
                                        height={40}
                                    />

                                    <div>
                                        <p className="font-medium">{item.author}</p>
                                        <p className="text-sm text-[var(--text-description)]">
                                            {item.dateReadTime}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Buttons */}
            <div className="mt-6 flex justify-center gap-3 md:hidden">
                <button
                    onClick={prev}
                    className="cursor-pointer h-9 w-9 flex items-center justify-center rounded-full bg-[var(--btn-bg-primary)] hover:bg-[var(--hover-bg-primary)]"
                >
                    <Image
                        src={leftArrow}
                        alt="left arrow"
                        width={16}
                        height={16}
                    />
                </button>

                <button
                    onClick={next}
                    className="cursor-pointer h-9 w-9 flex items-center justify-center rounded-full bg-[var(--btn-bg-primary)] hover:bg-[var(--hover-bg-primary)]"
                >
                    <Image
                        src={rightArrow}
                        alt="right arrow"
                        width={16}
                        height={16}
                    />
                </button>
            </div>
        </div>
    )
}

export default Articles
