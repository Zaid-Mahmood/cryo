"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Img3 from "@/assets/services/img1.png";
import Img2 from "@/assets/services/img2.png";
import Img1 from "@/assets/services/img3.png";
import Img4 from "@/assets/service-drop/infrared-suana/infrared-suana.png";
import img5 from "@/assets/service-drop/red-light-therapy/banner.png";
import img6 from "@/assets/service-drop/salt-therapy/banner.png";
import img7 from "@/assets/service-drop/local-cryotherapy/banner.png";
import img8 from "@/assets/service-drop/lymphatic-drainage/banner.png";
import img9 from "@/assets/service-drop/scaneca-body-scan/banner.png";
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
                "A short, controlled exposure to subzero temperatures (up to -115°C) that stimulates circulation, reduces inflammation, and supports faster recovery. Step into our advanced chamber for a safe, 2–3 minute session designed to help your body recover and perform better.",
            link: {
                text: "Learn More",
                href: "/services/whole-body-cryotherapy",
                arrow: linkArrow,
            },
            image: Img1,
        },
        {
            cardHeading: "Hyperbaric Chamber",
            cardDescription:
                "Hyperbaric Oxygen Therapy (HBOT) involves breathing oxygen in a pressurised chamber, allowing your body to absorb higher levels of oxygen. This increased oxygen delivery supports recovery, healing, and overall wellness.",
            link: {
                text: "Learn More",
                href: "/services/hyperbaric-oxygen-therapy",
                arrow: linkArrow,
            },
            image: Img2,
        },
        {
            cardHeading: "IV Infusion",
            cardDescription:
                "At Cryo SubZero, we offer IV nutrient infusions in a calm, professional setting, tailored to support hydration, nutritional balance, and overall well-being. Each treatment is delivered by qualified healthcare professionals following a detailed consultation.",
            link: {
                text: "Learn More",
                href: "/services/iv-infusion",
                arrow: linkArrow,
            },
            image: Img3,
        },
        {
            cardHeading: "Infrared Sauna",
            cardDescription:
                "Unlike traditional saunas that heat the air around you, infrared saunas use light to warm your body directly. This deep-penetrating heat delivers the same benefits at a lower, more comfortable temperature, making it effective for detox, recovery, and relaxation.",
            link: {
                text: "Learn More",
                href: "/services/infrared-sauna",
                arrow: linkArrow,
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
                arrow: linkArrow,
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
                arrow: linkArrow,
            },
            image: img6,
        }, {
            cardHeading: "Local Cryotherapy",
            cardDescription:
                "Local Cryotherapy uses a precision handheld device to apply controlled cold air directly to targeted areas such as joints, muscles, or skin. This focused treatment helps reduce inflammation, relieve discomfort, and support faster recovery.",
            link: {
                text: "Learn More",
                href: "/services/local-cryotherapy",
                arrow: linkArrow,
            },
            image: img7,
        }, {
            cardHeading: "Lymphatic Drainage",
            cardDescription:
                "Lymphatic drainage uses gentle compression therapy to stimulate the movement of lymph fluid throughout the body. This helps support circulation, reduce swelling, and encourage the removal of excess fluid and waste.",
            link: {
                text: "Learn More",
                href: "/services/lymphatic-drainage",
                arrow: linkArrow,
            },
            image: img8,
        }, {
            cardHeading: "SCANECA 3D Body Scan",
            cardDescription:
                "A data-driven assessment designed to give you accurate insights into your body, posture, and progress. Experience precise measurements and visual tracking that help you understand changes, improve performance, and stay on track.",
            link: {
                text: "Learn More",
                href: "/services/scaneca-body-scan",
                arrow: linkArrow,
            },
            image: img9,
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
        <section  id = "services" >
        <div  className="lg:pb-13 pb-8">
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
                            <div>
                                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                                    <Image
                                        src={review.image}
                                        alt="img-name"
                                        fill
                                        className="object-cover"
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
        </section>
    );
};

export default Services;