import CommonBanner from "../../(CommonPages)/CommonBanner/CommonBanner";
import bannerImg from "@/assets/membership/banner-img.png";
import MembershipPackages from "./MembershipPackages/MembershipPackages";
import ComparePlans from "./ComparePlans/ComparePlans";
import MembershipFaq from "./MembershipFaq/MembershipFaq";
import Location from "../../(CommonPages)/Location/Location";
const MembershipPage = () => {
  return (
    <div>
      <CommonBanner
        image={bannerImg}
        mobileImage={bannerImg}
        title={
          <>
            Memberships <br /> Built for Better Recovery
          </>
        }
        align="center"
        height="h-screen"
      />
      <MembershipPackages/>
      <ComparePlans/>
      <MembershipFaq/>
    
    </div>
  )
}

export default MembershipPage