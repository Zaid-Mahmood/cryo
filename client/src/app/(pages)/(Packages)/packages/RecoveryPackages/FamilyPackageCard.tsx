import Image from "next/image";
import Link from "next/link";
import arrowRight from "@/assets/service-drop/body-cryo/ArrowRight.png";

const FamilyPackageCard = ({ item, heading }: any) => {
    return (
        <div className="px-5 md:px-16">
            <h3 className="pb-5 font-body text-2xl font-bold text-[var(--btn-bg-black)] text-center md:text-left">
                {heading}
            </h3>
            <div className="block md:flex md:items-center gap-11 rounded-lg border-2 border-[#D9D9D9] p-2">
                <div className="w-full md:w-fit">
                    <Image
                        src={item.image}
                        alt={item.title}
                        className="w-full object-cover rounded-2xl h-full"
                    />
                </div>
                <div className="py-3 px-2">
                    <div className="flex justify-between">
                        {item.tag && (
                            <p className="text-sm text-[var(--btn-bg-primary)]">
                                {item.tag}
                            </p>

                        )}
                        {item.save && (
                            <span className="text-sm text-[#34C759]">
                                {item.save}
                            </span>
                        )}
                    </div>
                    <div className="md:h-12">
                        <h3 className="pt-3 font-body text-xl font-semibold text-[var(--btn-bg-black)]">
                            {item.title}
                        </h3>

                        {item.desc && (
                            <p className="pt-2 text-sm text-[var(--text-description)]">
                                {item.desc}
                            </p>
                        )}
                    </div>
                    <div>
                    </div>
                    <p className="mt-[34px] font-bold text-[#2680D9] text-3xl font-heading">
                        {item.price}
                    </p>
                    <div className="flex justify-between items-center gap-3 flex-wrap">

                        <div>
                            {item.oldPrice && (
                                <span className="line-through text-[var(--text-description)] text-xl font-body">
                                    {item.oldPrice}
                                </span>
                            )}
                            <p className="pt-4 text-sm text-[var(--text-description)]">
                                {item.duration}
                            </p>
                        </div>



                        {/* RIGHT SIDE: BUTTON */}

                    </div>
                    <Link
                        href={item.linkhref}
                        className="flex items-center justify-center md:justify-between gap-2 rounded-lg  px-4 py-2 text-white text-sm font-medium hover:opacity-90 transition mt-6 w-full md:max-w-[156px] bg-[#2680D9] hover:[var(--hover-bg-primary)]"
                    >
                        <span className="text-[var(--btn-bg-black)] font-semibold text-base text-white">{item.linkName}</span>

                        <Image
                            src={arrowRight}
                            alt="arrow right"
                            width={14}
                            height={14}
                            className="brightness-0 invert"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FamilyPackageCard;