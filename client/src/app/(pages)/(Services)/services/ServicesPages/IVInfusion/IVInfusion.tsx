import CommonBanner from "@/app/(pages)/(CommonPages)/CommonBanner/CommonBanner";
import bannerImg from "@/assets/service-drop/iv-infusion/banner.png";
import CommonText from "@/app/(pages)/(CommonPages)/CommonText/CommonText";
import IVInfusionPackages from "./IVInfusionPackages/IVInfusionPackages";
import WhyIVInfusionChoose from "./WhyIVInfusionChoose/WhyIVInfusionChoose";
import CommonStepText from "@/app/(pages)/(CommonPages)/CommonStepsWrapper/CommonStepText";
import CommonStepsWrapper from "@/app/(pages)/(CommonPages)/CommonStepsWrapper/CommonStepsWrapper";
import { steps, middleImg } from "./dummyutils";
import ClientCarousalWrapper from "@/app/(pages)/(CommonPages)/ClientCarousalWrapper/ClientCarousalWrapper";
import { Items } from "../../../../(LandingPage)/ClientReviews/dummyUtils";
import CommonDiscountBanner from "@/app/(pages)/(CommonPages)/CommonDiscountBanner/CommonDiscountBanner";
import IVInfusionFaq from "./IVInfusionFaq/IVInfusionFaq";
import IVInfusionRecommendation from "./IVInfusionRecommendation/IVInfusionRecommendation";

const IVInfusion = () => {
    return (
        <div>
            <CommonBanner
                image={bannerImg}
                mobileImage={bannerImg}
                title="IV Infusion"
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
                title='What is <span class="text-[var(--btn-bg-primary)]">IV Infusion?</span>'
                subtitle="At Cryo SubZero, we offer IV nutrient infusions in a calm, professional setting, tailored to support hydration, nutritional balance, and overall well-being. Each treatment is delivered by qualified healthcare professionals following a detailed consultation."
                buttonHref="#"
                align="center"
                line
            />
            <IVInfusionPackages />
            <WhyIVInfusionChoose />
            <CommonStepText
                title='What to Expect During Your <span class="text-[var(--btn-bg-primary)]">Session</span>'
                subtitle="A comfortable, professionally guided treatment designed to be safe and relaxing, with support from consultation through your infusion and aftercare. The process is calm and efficient as nutrients are delivered directly while you sit back and relax."
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
                <IVInfusionFaq />
                <IVInfusionRecommendation />
            </div>
        </div>
    )
}

export default IVInfusion
