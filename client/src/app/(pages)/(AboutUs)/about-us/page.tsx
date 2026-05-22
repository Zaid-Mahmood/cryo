import CommonBanner from "../../(CommonPages)/CommonBanner/CommonBanner";
import bannerImg from "@/assets/aboutus-img/about-us.png";
import AboutUsText from "./AboutUsText/AboutUsText";
import DriveUs from "./DriveUs/DriveUs";
import MissionVision from "./MissionVision/MissionVision";
import AboutUsCarousal from "./AboutUsCarousal/AboutUsCarousal";
import TeamSection from "./TeamSection/TeamSection";
const AboutUsPage = () => {
    return (
        <div>
            <CommonBanner
                image={bannerImg}
                mobileImage={bannerImg}
                title={
                    <>
                    </>
                }
                align="center"
                height="h-screen"
            />
            <AboutUsText/>
            <DriveUs/>
            <MissionVision/>
            <AboutUsCarousal/>
            <TeamSection/>
        </div>
    )
}

export default AboutUsPage
