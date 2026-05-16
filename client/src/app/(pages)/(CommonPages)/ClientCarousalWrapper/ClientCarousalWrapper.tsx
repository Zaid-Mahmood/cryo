"use client"
import ClientReviews from "../../(LandingPage)/ClientReviews/ClientReviews";
import { useClientCarousel, ClientReviewItem } from "@/app/customHooks/useClientCarousal";
type Props = {
    items: ClientReviewItem[];
};
const ClientCarousalWrapper = ({ items }: Props) => {
    const { activeIndex, setActiveIndex, next, prev, getOffset } =
        useClientCarousel(items);
    return (
        <ClientReviews
            items={items}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            next={next}
            prev={prev}
            getOffset={getOffset}
        />
    )
}

export default ClientCarousalWrapper
