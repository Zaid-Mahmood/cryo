import bannerImg from "@/assets/service-drop/salt-therapy/banner.png";
import CommonBanner from "@/app/(pages)/(CommonPages)/CommonBanner/CommonBanner";
import CommonText from "@/app/(pages)/(CommonPages)/CommonText/CommonText";
import SaltTherapyPackages from "./SaltTherapyPackages/SaltTherapyPackages";
import WhyChooseSaltTherapy from "./WhyChooseSaltTherapy/WhyChooseSaltTherapy";
import CommonStepsWrapper from "@/app/(pages)/(CommonPages)/CommonStepsWrapper/CommonStepsWrapper";
import { steps, middleImg } from "./dummyutils";
import CommonStepText from "@/app/(pages)/(CommonPages)/CommonStepsWrapper/CommonStepText";
import ClientCarousalWrapper from "@/app/(pages)/(CommonPages)/ClientCarousalWrapper/ClientCarousalWrapper";
import { Items } from "../../../../(LandingPage)/ClientReviews/dummyUtils";
import SaltTherapyFaq from "./SaltTherapyFaq/SaltTherapyFaq";
import CommonDiscountBanner from "@/app/(pages)/(CommonPages)/CommonDiscountBanner/CommonDiscountBanner";
import SaltTherapyRecommendation from "./SaltTherapyRecommendation/SaltTherapyRecommendation";
const SaltTherapy = () => {
    return (
        <div>
            <CommonBanner
                image={bannerImg}
                mobileImage={bannerImg}
                title="Salt Therapy"
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
                title='What is <span class="text-[var(--btn-bg-primary)]"> Salt Therapy?</span>'
                subtitle="Salt Therapy, also known as halotherapy, recreates the microclimate of natural salt caves by dispersing fine salt particles into the air. These particles are inhaled into the lungs and absorbed by the skin, helping support breathing, skin health, and overall wellbeing"
                buttonHref="#"
                align="center"
                line
            />
            <SaltTherapyPackages />
            <WhyChooseSaltTherapy />
            <CommonStepText
                title='What to Expect During Your <span class="text-[var(--btn-bg-primary)]">Session</span>'
                subtitle="A calm, guided session designed to be relaxing and effortless, with support from check-in through your experience and aftercare. Simply sit back and breathe in salt-infused air as the therapy works naturally."
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
                <SaltTherapyFaq />
                <SaltTherapyRecommendation />
            </div>
        </div>
    )
}

export default SaltTherapy
