import CommonBanner from "@/app/(pages)/(CommonPages)/CommonBanner/CommonBanner";
import bannerImg from "@/assets/service-drop/red-light-therapy/banner.png";
import CommonText from "@/app/(pages)/(CommonPages)/CommonText/CommonText";
import RedLightPackages from "./RedLightPackages/RedLightPackages";
import WhyChooseRedLight from "./WhyChooseRedLight/WhyChooseRedLight";
import CommonStepsWrapper from "@/app/(pages)/(CommonPages)/CommonStepsWrapper/CommonStepsWrapper";
import { steps, middleImg } from "./dummyutils";
import ClientCarousalWrapper from "@/app/(pages)/(CommonPages)/ClientCarousalWrapper/ClientCarousalWrapper";
import { Items } from "../../../../(LandingPage)/ClientReviews/dummyUtils";
import RedLightTherapyFaq from "./RedLightTherapyFaq/RedLightTherapyFaq";
import CommonDiscountBanner from "@/app/(pages)/(CommonPages)/CommonDiscountBanner/CommonDiscountBanner";
import RedLightRecommendation from "./RedLightRecommendation/RedLightRecommendation";
import CommonStepText from "@/app/(pages)/(CommonPages)/CommonStepsWrapper/CommonStepText";
const RedLightTherapy = () => {
    return (
        <div>
            <CommonBanner
                image={bannerImg}
                mobileImage={bannerImg}
                title="Red Light Therapy"
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
                title='What is <span class="text-[var(--btn-bg-primary)]"> Red Light Therapy?</span>'
                subtitle="Uses low-level red and near-infrared light to stimulate cellular activity and boost energy production. This light penetrates the skin to support repair, accelerate recovery, and promote visible improvements in skin health."
                // buttonText="About Us"
                buttonHref="#"
                align="center"
                line
            />
            <RedLightPackages />
            <WhyChooseRedLight />
            <CommonStepText
                title='What to Expect During Your <span class="text-[var(--btn-bg-primary)]">Session</span>'
                subtitle="A gentle, non-invasive light therapy that supports recovery, reduces inflammation, and improves skin health. The treatment works passively while you relax under targeted red  light."
            />
            <CommonStepsWrapper
                image={middleImg}
                steps={steps}
            />
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
                <RedLightTherapyFaq />
                <RedLightRecommendation />
            </div>

        </div>
    )
}

export default RedLightTherapy
