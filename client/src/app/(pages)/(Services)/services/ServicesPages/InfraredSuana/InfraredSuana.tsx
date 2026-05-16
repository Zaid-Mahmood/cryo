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
        // buttonText="About Us"
        buttonHref="#"
        align="center"
        line
      />
      <Packages />
      <WhyChooseInfrared />
      <CommonStepsWrapper
        image={middleImg}
        steps={steps}
      />
      <ClientCarousalWrapper items={Items} />
      <div className="pt-13 lg:pt-26">
        <InfraredFaq />
        <InfraredRecommendation/>
      </div>
    </div>
  )
}

export default InfraredSuana
