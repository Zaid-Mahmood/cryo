"use client"
import { useState, useEffect, useRef } from "react";
import leftArrow from "@/assets/services/left-arrow.png";
import rightArrow from "@/assets/services/right-arrow.png";
import Img3 from "@/assets/services/img1.png";
import Img2 from "@/assets/services/img2.png";
import Img1 from "@/assets/services/img3.png";
import Img4 from "@/assets/service-drop/infrared-suana/infrared-suana.png";
import img5 from "@/assets/service-drop/red-light-therapy/banner.png";
import img6 from "@/assets/service-drop/salt-therapy/banner.png";
import img7 from "@/assets/service-drop/local-cryotherapy/banner.png";
import img8 from "@/assets/service-drop/lymphatic-drainage/banner.png";
import img9 from "@/assets/service-drop/scaneca-body-scan/banner.png";
import arrowUpRight from "@/assets/recommended/arrow-up-right.png";
import Link from "next/link";
import Image from "next/image";
const ScanecaRecommendation = () => {
       const [index, setIndex] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
        const reviews = [ 
          {
            cardHeading: "Hyperbaric Chamber",
            cardDescription:
                "Hyperbaric Oxygen Therapy (HBOT) involves breathing oxygen in a pressurised chamber, allowing your body to absorb higher levels of oxygen. This increased oxygen delivery supports recovery, healing, and overall wellness.",
            link: {
                text: "Learn More",
                href: "/services/hyperbaric-oxygen-therapy",
                arrow: arrowUpRight,
            },
            image: Img2,
        },
        {
            cardHeading: "Whole Body Cryotherapy",
            cardDescription:
                "A short, controlled exposure to subzero temperatures (up to -115°C) that stimulates circulation, reduces inflammation, and supports faster recovery. Step into our advanced chamber for a safe, 2–3 minute session designed to help your body recover and perform better.",
            link: {
                text: "Learn More",
                href: "/services/whole-body-cryotherapy",
                arrow: arrowUpRight,
            },
            image: Img1,
        },
        {
            cardHeading: "Local Cryotherapy",
            cardDescription:
                "Local Cryotherapy uses a precision handheld device to apply controlled cold air directly to targeted areas such as joints, muscles, or skin. This focused treatment helps reduce inflammation, relieve discomfort, and support faster recovery.",
            link: {
                text: "Learn More",
                href: "/services/local-cryotherapy",
                arrow: arrowUpRight,
            },
            image: img7,
        }, 
        {
            cardHeading: "Lymphatic Drainage",
            cardDescription:
                "Lymphatic drainage uses gentle compression therapy to stimulate the movement of lymph fluid throughout the body. This helps support circulation, reduce swelling, and encourage the removal of excess fluid and waste.",
            link: {
                text: "Learn More",
                href: "/services/lymphatic-drainage",
                arrow: arrowUpRight,
            },
            image: img8,
        },
        {
            cardHeading: "Infrared Sauna",
            cardDescription:
                "Unlike traditional saunas that heat the air around you, infrared saunas use light to warm your body directly. This deep-penetrating heat delivers the same benefits at a lower, more comfortable temperature, making it effective for detox, recovery, and relaxation.",
            link: {
                text: "Learn More",
                href: "/services/infrared-sauna",
                arrow: arrowUpRight,
            },
            image: Img4,
        },
        {
            cardHeading: "Red Light Therapy",
            cardDescription:
                "Uses low-level red and near-infrared light to stimulate cellular activity and boost energy production. This light penetrates the skin to support repair, accelerate recovery, and promote visible improvements in skin health.",
            link: {
                text: "Learn More",
                href: "/services/red-light-therapy",
                arrow: arrowUpRight,
            },
            image: img5,
        },
        {
            cardHeading: "Salt Therapy",
            cardDescription:
                "Salt Therapy, also known as halotherapy, recreates the microclimate of natural salt caves by dispersing fine salt particles into the air. These particles are inhaled into the lungs and absorbed by the skin, helping support breathing, skin health, and overall wellbeing",
            link: {
                text: "Learn More",
                href: "/services/red-light-therapy",
                arrow: arrowUpRight,
            },
            image: img6,
        },
         {
            cardHeading: "IV Infusion",
            cardDescription:
                "At Cryo SubZero, we offer IV nutrient infusions in a calm, professional setting, tailored to support hydration, nutritional balance, and overall well-being. Each treatment is delivered by qualified healthcare professionals following a detailed consultation.",
            link: {
                text: "Learn More",
                href: "/services/iv-infusion",
                arrow: arrowUpRight,
            },
            image: Img3,
        },
         {
            cardHeading: "SCANECA 3D Body Scan",
            cardDescription:
                "A data-driven assessment designed to give you accurate insights into your body, posture, and progress. Experience precise measurements and visual tracking that help you understand changes, improve performance, and stay on track.",
            link: {
                text: "Learn More",
                href: "/services/scaneca-body-scan",
                arrow: arrowUpRight,
            },
            image: img9,
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
                            className="min-w-[85%] md:min-w-[32%] rounded-2xl bg-white shadow-[0px_4px_10px_#0000000F] overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] w-full">
                                <Image
                                    src={item.image}
                                    alt="article-img"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="font-body text-xl font-semibold">
                                    {item.cardHeading}
                                </h3>

                                <p className="pt-2 text-sm text-[var(--text-description)]">
                                    {item.cardDescription}
                                </p>

                                <Link
                                    className="pt-4 inline-flex items-center gap-2 text-[var(--btn-bg-primary)] font-medium font-body text-base"
                                    href={item.link.href}
                                >
                                    {item.link.text}

                                    <Image
                                        src={item.link.arrow}
                                        alt="arrow"
                                        width={16}
                                        height={16}
                                    />
                                </Link>
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

export default ScanecaRecommendation
