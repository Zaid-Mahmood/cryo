import Image from "next/image";
import Link from "next/link";

const PackageCard = ({ item }: any) => {
    return (
        <div className="rounded-2xl overflow-hidden bg-white shadow-[0px_4px_10px_#0000000F]">
            <Image
                src={item.image}
                alt={item.title}
                className="w-full object-cover"
            />

            <div className="p-5">
                {item.tag && (
                    <p className="text-sm text-[var(--btn-bg-primary)]">
                        {item.tag}
                    </p>
                )}

                <h3 className="pt-3 font-body text-xl font-semibold text-[var(--btn-bg-black)]">
                    {item.title}
                </h3>

                {item.desc && (
                    <p className="pt-2 text-sm text-[var(--text-description)]">
                        {item.desc}
                    </p>
                )}

                <p className="pt-4 text-sm text-[var(--text-description)]">
                    {item.duration}
                </p>

                <div className="pt-4 flex items-center gap-3 flex-wrap">
                    <span className="text-xl font-bold">
                        {item.price}
                    </span>

                    {item.oldPrice && (
                        <span className="line-through text-[var(--text-description)]">
                            {item.oldPrice}
                        </span>
                    )}

                    {item.save && (
                        <span className="text-sm text-[var(--btn-bg-primary)]">
                            {item.save}
                        </span>
                    )}
                </div>

                <Link
                    href={item.linkhref}
                    className="mt-5 inline-block rounded-full bg-[var(--btn-bg-primary)] px-6 py-3 text-white"
                >
                    {item.linkName}
                </Link>
            </div>
        </div>
    );
};

export default PackageCard;