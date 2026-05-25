import banner from "@/assets/service-drop/body-cryo/fullBodyCryo.png";
import CommonBanner from "@/app/(pages)/(CommonPages)/CommonBanner/CommonBanner";
import CommonText from "@/app/(pages)/(CommonPages)/CommonText/CommonText";
import Packages from "./Packages/Packages";
import WhyChoose from "./WhyChoose/WhyChoose";
import CommonStepsWrapper from "@/app/(pages)/(CommonPages)/CommonStepsWrapper/CommonStepsWrapper";
import { steps, middleImg } from "./dummyutils";
import CommonDiscountBanner from "@/app/(pages)/(CommonPages)/CommonDiscountBanner/CommonDiscountBanner";
import ClientCarousalWrapper from "@/app/(pages)/(CommonPages)/ClientCarousalWrapper/ClientCarousalWrapper";
import { Items } from "../../../../(LandingPage)/ClientReviews/dummyUtils";
import Faq from "./Faq/Faq";
import Recommendation from "./Recommendation/Recommendation";
import CommonStepText from "@/app/(pages)/(CommonPages)/CommonStepsWrapper/CommonStepText";
const WholeBodyCryo = () => {
  return (
    <div>
      <CommonBanner
        image={banner}
        mobileImage={banner}
        title="Whole Body Cryotherapy"
        align="center"
        buttons={[
          {
            label: "Book A Session",
            href: "https://www.fresha.com/a/cryo-subzero-cheltenham-284-bay-road-x216yymn/all-offer?menu=true&share=true&pId=2636491",
            variant: "primary",
          }
        ]}
        height="h-screen"
      />
      <CommonText
        title='What is <span class="text-[var(--btn-bg-primary)]"> Whole Body Cryotherapy?</span>'
        subtitle="A short, controlled exposure to subzero temperatures (up to -115°C) that stimulates circulation, reduces inflammation, and supports faster recovery. Step into our advanced chamber for a safe, 2–3 minute session designed to help your body recover and perform better."
        // buttonText="About Us"
        buttonHref="#"
        align="center"
        line
      />
      <Packages />
      <WhyChoose />
      <CommonStepText
       title='What to Expect During Your <span class="text-[var(--btn-bg-primary)]">Session</span>'
        subtitle="A quick, guided experience designed to be safe, comfortable, and effective, with trained professionals supporting you from check-in through recovery."
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
        <Faq />
      </div>
      <Recommendation />
    </div>
  )
}

export default WholeBodyCryo
