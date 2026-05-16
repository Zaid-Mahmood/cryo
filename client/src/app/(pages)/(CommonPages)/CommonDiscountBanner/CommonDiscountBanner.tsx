import Link from "next/link";
import discountBannerImg from "@/assets/discount-banner/img.png";
interface CommonDiscountBannerProps {
    heading: React.ReactNode;
    description: string;
    buttonText: string;
    href: string;
}

const CommonDiscountBanner = ({
    heading,
    description,
    buttonText,
    href
}: CommonDiscountBannerProps) => {
    return (
         <div
            className="w-full px-5 py-8 lg:px-12 lg:py-14 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${discountBannerImg.src})`,
            }}
        >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-8">

                {/* Left Side Heading */}
                <div className="w-full lg:max-w-[30%]">
                    <h2 className="text-white font-extralight text-3xl md:text-4xl lg:text-5xl leading-tight font-heading lg:text-left text-center">
                        {heading}
                    </h2>
                </div>

                {/* Right Side Content */}
                <div className="w-full lg:max-w-[45%] flex flex-col lg:items-start items-center">
                    <p className="text-white/80 text-sm md:text-base lg:text-left text-center lg:leading-7">
                        {description}
                    </p>

                    <Link href={href} className="mt-6 bg-white text-[var(--text-blue)] px-6 py-3 rounded-lg font-semibold hover:bg-(--hover-bg-secondary) hover:text-white">
                        {buttonText}
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default CommonDiscountBanner;