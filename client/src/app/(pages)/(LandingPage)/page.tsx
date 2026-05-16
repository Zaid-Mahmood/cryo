import Banner from "./Banner/Banner";
import Text from "./Text/Text";
import Services from "./Services/Services";
import ChooseUs from "./ChooseUs/ChooseUs";
import { Items } from "./ClientReviews/dummyUtils"
import ClientCarousalWrapper from "../(CommonPages)/ClientCarousalWrapper/ClientCarousalWrapper";
import Memberships from "./Memberships/Memberships";
import GiftBanner from "./GiftBanner/GiftBanner";
import Faq from "./Faq/Faq";
import Articles from "./Articles/Articles";
const LandingPage = () => {

  return (
    <div>
      <Banner />
      <Text />
      <Services />
      <ChooseUs />
      <ClientCarousalWrapper
        items={Items}
      />
      <Memberships />
      <GiftBanner/>
      <Faq/>
      <Articles/>
    </div>
  )
}

export default LandingPage
