import Image from "next/image";
import Link from "next/link";
import arrowRight from "@/assets/service-drop/body-cryo/ArrowRight.png";

const PackageCard = ({ item }: any) => {

    return (
        <div className="border-2  border border-2 border-[#D9D9D9] rounded-2xl p-2">
        <div className="rounded-2xl overflow-hidden bg-white">
            <Image
                src={item.image}
                alt={item.title}
                className="w-full object-cover"
            />

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
                <div className="h-12">
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
                    <hr className="text-[#D9D9D9] w-full mt-8 mb-2" />
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
                    <Link
                    target="_blank"
                        href={item.linkhref}
                        className="flex items-center gap-2 rounded-lg border-2 border-[var(--text-secondary)]  px-4 py-2 text-white text-sm font-medium hover:opacity-90 transition"
                    >
                        <span className="text-[var(--btn-bg-black)] font-semibold text-base">{item.linkName}</span>

                        <Image
                            src={arrowRight}
                            alt="arrow right"
                            width={14}
                            height={14}
                        />
                    </Link>
                </div>

            </div>
        </div>
        </div>
    );
};

export default PackageCard;