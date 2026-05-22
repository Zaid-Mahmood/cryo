"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cards } from "./dummyutils";
import Link from "next/link";
const BlogCards = ({ selectedTab }: { selectedTab: string }) => {
    const CARDS_PER_PAGE = 6;

    const [page, setPage] = useState(1);

    const truncateText = (text: string, maxLength: number) =>
        text.length > maxLength
            ? `${text.slice(0, maxLength).trim()}...`
            : text;

    // Filter cards according to selected tab
    const filteredCards =
        selectedTab === "All"
            ? cards
            : cards.filter((card) =>
                card?.cardType?.includes(selectedTab)
            );

    // Reset page when tab changes
    useEffect(() => {
        setPage(1);
    }, [selectedTab]);

    // Total pages
    const totalPages = Math.ceil(
        filteredCards.length / CARDS_PER_PAGE
    );

    // Current cards
    const startIndex = (page - 1) * CARDS_PER_PAGE;

    const currentCards = filteredCards.slice(
        startIndex,
        startIndex + CARDS_PER_PAGE
    );

    return (
        <section className="px-4 sm:px-8 lg:px-16 py-8">
            <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentCards.map((card, index) => (
                    <div
                        key={index}
                        className="rounded-[24px] overflow-hidden border border-[#E5E5E5] bg-white"
                    >
                        <Image
                            src={card.img}
                            alt={card.heading}
                            className="w-full h-[240px] object-cover"
                        />

                        <div className="p-6">
                            <div className="flex flex-wrap md:justify-start justify-center gap-2 mb-4">
                                {card.cardType.map((type, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 rounded-full bg-[#EAF4FD] text-[#007AD8] text-sm"
                                    >
                                        {type}
                                    </span>
                                ))}
                            </div>

                            <Link href="/blog/whole-body-cryotherapy">
                                <h3 className="md:text-left text-center text-2xl font-bold text-[#2C2C2C] hover:text-[#007AD8] transition cursor-pointer">
                                    {truncateText(card.heading, 55)}
                                </h3>
                            </Link>
                            <p className="md:text-left text-center mt-3 text-[#666666] text-base">
                                {truncateText(card.desc, 90)}
                            </p>

                            <div className="flex md:justify-start justify-center items-center gap-3 mt-6">
                                <Image
                                    src={card.authimg}
                                    alt={card.author}
                                    className="w-10 h-10 rounded-full object-cover"
                                />

                                <div>
                                    <h4 className=" md:text-start text-center text-sm font-semibold text-[#2C2C2C]">
                                        {card.author}
                                    </h4>

                                    <p className="text-sm text-[#888888]">
                                        {card.dateReadTime}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-3 mt-14">
                    {/* Previous */}
                    <button
                        onClick={() => setPage((prev) => prev - 1)}
                        disabled={page === 1}
                        className={`w-10 h-10 rounded-full border text-sm transition
              ${page === 1
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-[#007AD8] hover:text-white"
                            }`}
                    >
                        {"<"}
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setPage(index + 1)}
                            className={`w-10 h-10 rounded-full text-sm transition
                ${page === index + 1
                                    ? "bg-[#007AD8] text-white"
                                    : "border border-[#DDEAF5] text-[#2C2C2C]"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    {/* Next */}
                    <button
                        onClick={() => setPage((prev) => prev + 1)}
                        disabled={page === totalPages}
                        className={`w-10 h-10 rounded-full border text-sm transition
              ${page === totalPages
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-[#007AD8] hover:text-white"
                            }`}
                    >
                        {">"}
                    </button>
                </div>
            )}
        </section>
    );
};

export default BlogCards;