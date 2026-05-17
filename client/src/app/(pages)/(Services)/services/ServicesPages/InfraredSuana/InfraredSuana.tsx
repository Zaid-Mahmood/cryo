import banner from "@/assets/service-drop/infrared-suana/infrared-suana.png";
import CommonBanner from "@/app/(pages)/(CommonPages)/CommonBanner/CommonBanner";
import CommonText from "@/app/(pages)/(CommonPages)/CommonText/CommonText";
import Packages from "./InfraredPackages/InfraredPackages";
import WhyChooseInfrared from "./WhyChooseInfrared/WhyChooseInfrared";
import CommonStepsWrapper from "@/app/(pages)/(CommonPages)/CommonStepsWrapper/CommonStepsWrapper";
import { steps, middleImg } from "./dummyUtils";
import { Items } from "../../../../(LandingPage)/ClientReviews/dummyUtils";
import ClientCarousalWrapper from "@/app/(pages)/(CommonPages)/ClientCarousalWrapper/ClientCarousalWrapper";
import InfraredFaq from "./InfraredFaq/InfraredFaq";
import InfraredRecommendation from "./InfraredRecommendation/InfraredRecommendation";
import CommonDiscountBanner from "@/app/(pages)/(CommonPages)/CommonDiscountBanner/CommonDiscountBanner";
import CommonStepText from "@/app/(pages)/(CommonPages)/CommonStepsWrapper/CommonStepText";
const InfraredSuana = () => {
  return (
    <div>
      <CommonBanner
        image={banner}
        mobileImage={banner}
        title="Infrared Sauna"
        align="center"
        buttons={[
          {
            label: "Book A Session",
            href: "#",
            variant: "primary",
          }
        ]}
        height="h-screen"
      />
      <CommonText
        title='What is <span class="text-[var(--btn-bg-primary)]">Infrared Sauna?</span>'
        subtitle="Unlike traditional saunas that heat the air around you, infrared saunas use light to warm your body directly. This deep-penetrating heat delivers the same benefits at a lower, more comfortable temperature, making it effective for detox, recovery, and relaxation."
        
        align="center"
        line
      />
      <Packages />
      <WhyChooseInfrared />
      <CommonStepText
        title='What to Expect During Your <span class="text-[var(--btn-bg-primary)]">Session</span>'
        subtitle="A calm, heat-based experience designed to be comfortable and relaxing, with guided support from check-in through your session and post-treatment recovery."
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
        href="#"
        buttonText="Become a Member" />
      <div className="pt-13 lg:pt-26">
        <InfraredFaq />
        <InfraredRecommendation />
      </div>
    </div>
  )
}

export default InfraredSuana
