"use client"
import { useState, useEffect, useRef } from "react";
import leftArrow from "@/assets/services/left-arrow.png";
import rightArrow from "@/assets/services/right-arrow.png";
import img1 from "@/assets/recommended/img1.png";
import img2 from "@/assets/recommended/img2.png";
import img3 from "@/assets/recommended/img3.png";
import img4 from "@/assets/recommended/img4.png";
import img5 from "@/assets/recommended/img5.png";
import img6 from "@/assets/recommended/img6.png";
import arrowUpRight from "@/assets/recommended/arrow-up-right.png";
import Link from "next/link";
import Image from "next/image";
const SaltTherapyRecommendation = () => {
    const [index, setIndex] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
   const reviews = [
        {
            heading: "Hyperbaric Oxygen Therapy",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            img: img4,
            linking: arrowUpRight,
            href: "#",
            link: "Learn More",
        },
        {
            heading: "IV Infusion",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            img: img5,
            linking: arrowUpRight,
            link: "Learn More",
            href: "#"
        },
        {
            heading: "Whole Body Cryotherapy",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            img: img6,
            linking: arrowUpRight,
            link: "Learn More",
            href: "#"
        },
        {
            heading: "Infrared Sauna",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            img: img1,
            link: "Learn More",
            linking: arrowUpRight,
            href: ""
        },
         {
            heading: "Red Light Therapy",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            img: img2,
            linking: arrowUpRight,
            href: "",
            link: "Learn More",
        },
           {
            heading: "Salt Therapy",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            img: img3,
            linking: arrowUpRight,
            href: "",
            link: "Learn More",

        },
    ];
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
        <div className="overflow-hidden pl-5  md:pl-16">
            {/* Heading + Desktop Buttons */}
            <div className="md:flex md:items-center md:justify-between block">
                <h2 className="font-heading text-center text-2xl font-bold text-[var(--btn-bg-black)] md:text-3xl">
                    <span className="text-[var(--btn-bg-primary)]"> Recommended </span> for You
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
                        transform: `translateX(-${isMobile ? index * 90 : index * 25}%)`,
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
                            <h3 className="pt-4 font-body text-xl font-semibold">
                                {item.heading}
                            </h3>

                            <p className="pt-2 text-sm text-[var(--text-description)]">
                                {item.desc}
                            </p>
                            <Link className="pt-4 inline-flex items-center gap-2 text-[var(--btn-bg-primary)] font-medium font-body text-base" href={item.href || "#"}>{item.link}
                                <Image
                                    src={item.linking}
                                    alt="arrow"
                                    width={16}
                                    height={16}
                                /></Link>
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

export default SaltTherapyRecommendation
