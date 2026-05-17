import CommonBanner from "@/app/(pages)/(CommonPages)/CommonBanner/CommonBanner";
import bannerImg from "@/assets/service-drop/lymphatic-drainage/banner.png";
import CommonText from "@/app/(pages)/(CommonPages)/CommonText/CommonText";
import LymphaticPackages from "./LymphaticPackages/LymphaticPackages";
import WhyChooseLymphatic from "./WhyChooseLymphatic/WhyChooseLymphatic";
import CommonStepText from "@/app/(pages)/(CommonPages)/CommonStepsWrapper/CommonStepText";
import CommonStepsWrapper from "@/app/(pages)/(CommonPages)/CommonStepsWrapper/CommonStepsWrapper";
import { steps, middleImg } from "./dummyutils.js";
import ClientCarousalWrapper from "@/app/(pages)/(CommonPages)/ClientCarousalWrapper/ClientCarousalWrapper";
import { Items } from "../../../../(LandingPage)/ClientReviews/dummyUtils";
import CommonDiscountBanner from "@/app/(pages)/(CommonPages)/CommonDiscountBanner/CommonDiscountBanner";
import LymphaticDrainageFaq from "./LymphaticDrainageFaq/LymphaticDrainageFaq";
import LymphaticDrainageRecommendation from "./LymphaticDrainageRecommendation/LymphaticDrainageRecommendation";
const LymphaticDrainage = () => {
    return (
        <div>
            <CommonBanner
                image={bannerImg}
                mobileImage={bannerImg}
                title="Lymphatic Drainage"
                align="center"
                buttons={[
                    {
                        label: "Book A Session",
                        href: "#",
                        variant: "primary",
                    }
                ]}
                height="h-screen" />
            <CommonText
                title='What is <span class="text-[var(--btn-bg-primary)]"> Lymphatic Drainage?</span>'
                subtitle="Lymphatic drainage uses gentle compression therapy to stimulate the movement of lymph fluid throughout the body. This helps support circulation, reduce swelling, and encourage the removal of excess fluid and waste."
                buttonHref="#"
                align="center"
                line />
            <LymphaticPackages />
            <WhyChooseLymphatic />
            <CommonStepText
                title='What to Expect During Your <span class="text-[var(--btn-bg-primary)]">Session</span>'
                subtitle="Simply lie back while rhythmic air compression works to stimulate circulation and lymphatic flow."
            />
            <CommonStepsWrapper
                image={middleImg}
                steps={steps} />
            <ClientCarousalWrapper items={Items} />
            <CommonDiscountBanner
                heading={
                    <>
                        Save Up to <span className="font-bold">30%</span> with Membership
                    </>
                }
                description="Unlock consistent recovery with flexible membership options designed to help you save more, stay consistent, and get better results over time."
                href="#"
                buttonText="Become a Member" />
            <div className="pt-13 lg:pt-26">
                <LymphaticDrainageFaq />
                <LymphaticDrainageRecommendation />
            </div>
        </div>
    )
}

export default LymphaticDrainage
