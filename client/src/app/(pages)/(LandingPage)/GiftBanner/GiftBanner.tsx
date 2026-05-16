import Image from "next/image";
import giftCard from "@/assets/giftbanner-img/giftBanner.png";
import giftImg from "@/assets/giftbanner-img/gift-img.png";
import Link from "next/link";

const GiftBanner = () => {
    return (
        <div className="py-8 md:py-13">
            <div className="flex flex-col flex-col-reverse md:grid md:grid-cols-2 md:gap-8 w-full bg-gradient-to-r from-[#E5F2FF] to-[#B2D9FF] justify-between">
                <div className="md:my-auto mt-11 mb-8 md:pl-16 px-5 w-full md:text-left text-center">
                    <h4 className="font-heading font-bold text-2xl md:text-3xl items-center pb-3 text-[var(--btn-bg-black)]">Gift Recovery & Wellness</h4>
                    <p className="text-base font-body text-[var(--text-secondary)] pb-8 md:pb-11">Not sure what to get them? A CryoSubZero gift card lets them choose their own wellness journey — from cryotherapy and infrared sauna to red light therapy and beyond. Perfect for birthdays, anniversaries, or just because they deserve it.</p>
                    <Link
                        href="#"
                        className="w-[200px] inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--btn-bg-primary)] px-10 py-4 font-body text-base font-semibold text-white transition hover:bg-[var(--hover-bg-primary)]"
                    >
                        <span>Send a Gift</span>
                        <Image src={giftImg} alt="gift-img" />

                    </Link>
                </div>
                <div>
                    <Image src={giftCard} alt="gift-card" />
                </div>
            </div>
        </div>
    )
}

export default GiftBanner
