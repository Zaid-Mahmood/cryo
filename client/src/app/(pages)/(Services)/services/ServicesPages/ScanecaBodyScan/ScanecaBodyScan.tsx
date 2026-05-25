import CommonBanner from "@/app/(pages)/(CommonPages)/CommonBanner/CommonBanner";
import bannerImg from "@/assets/service-drop/scaneca-body-scan/banner.png";
import CommonText from "@/app/(pages)/(CommonPages)/CommonText/CommonText";
import ScanecaPackages from "./ScanecaPackages/ScanecaPackages";
import ScanecaBodyChoose from "./ScanecaBodyChoose/ScanecaBodyChoose";
import CommonStepText from "@/app/(pages)/(CommonPages)/CommonStepsWrapper/CommonStepText";
import { steps, middleImg } from "./dummyutils.js";
import CommonStepsWrapper from "@/app/(pages)/(CommonPages)/CommonStepsWrapper/CommonStepsWrapper";
import ClientCarousalWrapper from "@/app/(pages)/(CommonPages)/ClientCarousalWrapper/ClientCarousalWrapper";
import { Items } from "../../../../(LandingPage)/ClientReviews/dummyUtils";
import CommonDiscountBanner from "@/app/(pages)/(CommonPages)/CommonDiscountBanner/CommonDiscountBanner";
import ScanecaFaq from "./ScanecaFaq/ScanecaFaq";
import ScanecaRecommendation from "./ScanecaRecommendation/ScanecaRecommendation";
const ScanecaBodyScan = () => {
    return (
        <div>
            <CommonBanner
                image={bannerImg}
                mobileImage={bannerImg}
                title="SCANECA 3D Body Scan"
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
                title='What is <span class="text-[var(--btn-bg-primary)]"> SCANECA 3D Body Scan?</span>'
                subtitle="A data-driven assessment designed to give you accurate insights into your body, posture, and progress. Experience precise measurements and visual tracking that help you understand changes, improve performance, and stay on track."
                buttonHref="#"
                align="center"
                line />
            <ScanecaPackages />
            <ScanecaBodyChoose />
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
                <ScanecaFaq />
                <ScanecaRecommendation />
            </div>
        </div>
    )
}

export default ScanecaBodyScan
