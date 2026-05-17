import CommonBanner from "@/app/(pages)/(CommonPages)/CommonBanner/CommonBanner";
import bannerImg from "@/assets/service-drop/local-cryotherapy/banner.png";
import CommonText from "@/app/(pages)/(CommonPages)/CommonText/CommonText";
import LocalCryoPackages from "./LocalCryoPackages/LocalCryoPackages";
import WhyChooseLocalCryo from "./WhyChooseLocalCryo/WhyChooseLocalCryo";
import CommonStepText from "@/app/(pages)/(CommonPages)/CommonStepsWrapper/CommonStepText";
import CommonStepsWrapper from "@/app/(pages)/(CommonPages)/CommonStepsWrapper/CommonStepsWrapper";
import { steps, middleImg } from "./dummyutils.js";
import ClientCarousalWrapper from "@/app/(pages)/(CommonPages)/ClientCarousalWrapper/ClientCarousalWrapper";
import { Items } from "../../../../(LandingPage)/ClientReviews/dummyUtils";
import CommonDiscountBanner from "@/app/(pages)/(CommonPages)/CommonDiscountBanner/CommonDiscountBanner";
import LocalCryoFaq from "./LocalCryoFaq/LocalCryoFaq";
import LocalCryoRecommendation from "./LocalCryoRecommendation/LocalCryoRecommendation";
const LocalCryoTherapy = () => {
    return (
        <div>
            <CommonBanner
                image={bannerImg}
                mobileImage={bannerImg}
                title="Local Cryotherapy"
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
                title='What is <span class="text-[var(--btn-bg-primary)]"> Local Cryotherapy?</span>'
                subtitle="Local Cryotherapy uses a precision handheld device to apply controlled cold air directly to targeted areas such as joints, muscles, or skin. This focused treatment helps reduce inflammation, relieve discomfort, and support faster recovery."
                buttonHref="#"
                align="center"
                line />
            <LocalCryoPackages />
            <WhyChooseLocalCryo />
            <CommonStepText
                title='What to Expect During Your <span class="text-[var(--btn-bg-primary)]">Session</span>'
                subtitle="A quick, guided treatment designed to be safe, comfortable, and effective, with support from check-in through recovery. The therapy uses targeted cold air to focus directly on the area needing attention."
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
                <LocalCryoFaq />
                <LocalCryoRecommendation />
            </div>
        </div>
    )
}

export default LocalCryoTherapy
