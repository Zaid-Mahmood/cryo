import { useState } from "react";

export type ClientReviewItem = {
    img: any;
    name: string;
    role: string;
    reviewText: string;
};

export const useClientCarousel = (items: ClientReviewItem[]) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => {
        setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    const prev = () => {
        setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const getOffset = (index: number) => {
        const half = Math.floor(items.length / 2);
        return ((index - activeIndex + items.length + half) % items.length) - half;
    };

    return {
        activeIndex,
        setActiveIndex,
        next,
        prev,
        getOffset,
    };
};