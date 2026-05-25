import CommonBanner from "@/app/(pages)/(CommonPages)/CommonBanner/CommonBanner";
import bannerImg from "@/assets/service-drop/hyperbaric-therapy/banner.png";
import CommonText from "@/app/(pages)/(CommonPages)/CommonText/CommonText";
import HyperBaricPackages from "./HyperBaricPackages/HyperBaricPackages";
import WhyChooseHyperBaric from "./WhyChooseHyperBaric/WhyChooseHyperBaric";
import CommonStepText from "@/app/(pages)/(CommonPages)/CommonStepsWrapper/CommonStepText";
import CommonStepsWrapper from "@/app/(pages)/(CommonPages)/CommonStepsWrapper/CommonStepsWrapper";
import { steps, middleImg } from "./dummyutils";
import ClientCarousalWrapper from "@/app/(pages)/(CommonPages)/ClientCarousalWrapper/ClientCarousalWrapper";
import { Items } from "../../../../(LandingPage)/ClientReviews/dummyUtils";
import CommonDiscountBanner from "@/app/(pages)/(CommonPages)/CommonDiscountBanner/CommonDiscountBanner";
import HyperBaricFaq from "./HyperBaricFaq/HyperBaricFaq";
import HyperBaricRecommendation from "./HyperBaricRecommendation/HyperBaricRecommendation";
const HyperBaricOxygenTherapy = () => {
    return (
        <div>
            <CommonBanner
                image={bannerImg}
                mobileImage={bannerImg}
                title="Hyperbaric Oxygen Therapy"
                align="center"
                buttons={[
                    {
                        label: "Book A Session",
                        href: "https://www.fresha.com/a/cryo-subzero-cheltenham-284-bay-road-x216yymn/all-offer?menu=true&share=true&pId=2636491",
                        variant: "primary",
                    }
                ]}
                height="h-screen" />
            <CommonText
                title='What is <span class="text-[var(--btn-bg-primary)]"> HBOT?</span>'
                subtitle="Hyperbaric Oxygen Therapy (HBOT) involves breathing oxygen in a pressurised chamber, allowing your body to absorb higher levels of oxygen. This increased oxygen delivery supports recovery, healing, and overall wellness."
                buttonHref="#"
                align="center"
                line
            />
            <HyperBaricPackages />
            <WhyChooseHyperBaric />
            <CommonStepText
                title='What to Expect During Your <span class="text-[var(--btn-bg-primary)]">Session</span>'
                subtitle="A comfortable, guided session designed to be safe and relaxing, with support from check-in through your treatment and aftercare. Simply lie back as pressurized oxygen is delivered while you rest."
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
                href="/membership"
                buttonText="Become a Member" />
                  <div className="pt-13 lg:pt-26">
                <HyperBaricFaq />
                <HyperBaricRecommendation />
            </div>
        </div>
    )
}

export default HyperBaricOxygenTherapy
