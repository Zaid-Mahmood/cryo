import Link from "next/link";
import giftImg from "@/assets/giftbanner-img/gift-img.png";
import giftSideCard from "@/assets/gift-cards-img/side-img.png";
import Image from "next/image";

const GiftCardText = () => {
    return (
        <div className="md:px-16 md:py-13 pt-8 pb-3 px-5">
            <div className="flex md:flex-row flex-col justify-between items-center">
                <div className="w-full md:max-w-[55%] text-center md:text-left">
                    {/* Desktop heading */}
                    <h4 className="hidden md:block font-body font-bold text-3xl pb-2">
                        The perfect gift for someone who deserves to feel their best.
                    </h4>

                    {/* Mobile heading */}
                    <h4 className="block md:hidden font-body font-bold text-3xl pb-8">
                        The perfect gift for someone who deserves to feel their best.
                    </h4>

                    {/* Mobile image */}
                    <div className="flex justify-center md:hidden pb-8">
                        <Image src={giftSideCard} alt="gift-card-img" />
                    </div>

                    <p className="text-base font-body text-[var(--text-secondary)] pb-11">
                        Not sure what to get them? A CryoSubZero gift card lets them choose their own wellness journey — from cryotherapy and infrared sauna to red light therapy and beyond. Perfect for birthdays, anniversaries, or just because they deserve it.
                    </p>

                    <Link
                    target="_blank"
                        href="https://www.fresha.com/a/cryo-subzero-cheltenham-284-bay-road-x216yymn/gift-cards?share=true&pId=2636491&menu=true"
                        className="w-full md:w-[200px] inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--btn-bg-primary)] px-10 py-4 font-body text-base font-semibold text-white transition hover:bg-[var(--hover-bg-primary)]"
                    >
                        <span>Send a Gift</span>
                        <Image src={giftImg} alt="gift-img" />
                    </Link>
                </div>

                {/* Desktop image */}
                <div className="hidden md:block">
                    <Image src={giftSideCard} alt="gift-card-img" />
                </div>
            </div>
        </div>
    );
};

export default GiftCardText;