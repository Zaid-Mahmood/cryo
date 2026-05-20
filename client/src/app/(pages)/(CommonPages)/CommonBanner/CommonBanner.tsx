

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import primaryBtnIcon from "@/assets/banner-img/primary-btn-icon.png";
import secondaryBtnIcon from "@/assets/banner-img/secondary-btn-icon.png";

interface BannerButton {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
}

interface CommonBannerProps {
    image: StaticImageData;
    mobileImage?: StaticImageData;
    title: string | React.ReactNode;
    description?: string;
    buttons?: BannerButton[];
    align?: "left" | "center";
    height?: string;
}

const CommonBanner = ({
    image,
    mobileImage,
    title,
    description,
    buttons = [],
    align = "center",
    height = "h-[500px]",
}: CommonBannerProps) => {
    const isLeft = align === "left";

    return (
        <section className={`relative w-full overflow-hidden ${height}`}>

            {/* Desktop Image */}
            <Image
                src={image}
                alt="banner"
                fill
                priority
                className="hidden object-cover object-center md:block"
            />

            {/* Mobile Image */}
            {mobileImage && (
                <Image
                    src={mobileImage}
                    alt="banner-mobile"
                    fill
                    priority
                    className="block object-cover object-center md:hidden"
                />
            )}

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/40" /> */}

            {/* Content */}
            <div
                className={`relative z-10 flex h-full px-6 lg:px-16 ${isLeft
                    ? "items-center justify-start text-left"
                    : "items-center justify-center text-center"
                    }`}
            >
                <div className="max-w-[700px]">
                    <h1 className="font-heading text-4xl font-semibold leading-tight text-white md:text-3xl lg:text-5xl">
                        {title}
                    </h1>

                    {description && (
                        <p className="mt-5 text-base text-white/90 md:text-lg">
                            {description}
                        </p>
                    )}

                    {buttons.length > 0 && (
                        <div
                            className={`mt-8 flex flex-wrap gap-4 ${isLeft ? "justify-start" : "justify-center"
                                }`}
                        >
                            {buttons.map((button, index) => (
                                <Link
                                    key={index}
                                    href={button.href}
                                    className={`flex justify-between items-center gap-2 rounded-full px-6 py-3  font-semibold transition text-base font-body ${button.variant === "secondary"
                                        ? "bg-(--btn-bg-secondary) text-white hover:bg-(--hover-bg-secondary) hover:text-white w-[248px]"
                                        : "bg-(--btn-bg-primary) text-white hover:bg-(--hover-bg-primary)"
                                        }`}
                                >
                                    {button.label}

                                    <Image
                                        src={
                                            button.variant === "secondary"
                                                ? secondaryBtnIcon
                                                : primaryBtnIcon
                                        }
                                        alt="icon"
                                        width={18}
                                        height={18}
                                    />
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CommonBanner;

