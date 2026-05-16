import CommonBanner from "@/app/(pages)/(CommonPages)/CommonBanner/CommonBanner";
import bannerImg from "@/assets/service-drop/red-light-therapy/banner.png";
import CommonText from "@/app/(pages)/(CommonPages)/CommonText/CommonText";
import RedLightPackages from "./RedLightPackages/RedLightPackages";
import WhyChooseRedLight from "./WhyChooseRedLight/WhyChooseRedLight";
import CommonStepsWrapper from "@/app/(pages)/(CommonPages)/CommonStepsWrapper/CommonStepsWrapper";
import {steps , middleImg} from "./dummyutils";
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
                        href: "#",
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
            <RedLightPackages/>
            <WhyChooseRedLight/>
            <CommonStepsWrapper
        image={middleImg}
        steps={steps}
      />
        </div>
    )
}

export default RedLightTherapy
