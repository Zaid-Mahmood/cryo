import CommonBanner from "../../../(CommonPages)/CommonBanner/CommonBanner";
import bannerImg from "@/assets/gift-cards-img/banner.png";
const GiftCardBanner = () => {
  return (
    <CommonBanner
    image={bannerImg}
        mobileImage={bannerImg}
        title={
          <>
           Give the Gift of<br /> Recovery
          </>
        }
        align="center"
        height="h-screen"
    />
  )
}

export default GiftCardBanner
