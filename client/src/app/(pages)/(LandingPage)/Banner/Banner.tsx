import BannerImg from "@/assets/banner-img/banner.png";
import MobileImg from "@/assets/banner-img/mobile-img.png";
import CommonBanner from "../../(CommonPages)/CommonBanner/CommonBanner";

const Banner = () => {
  return (
    <CommonBanner
      image={BannerImg}
      mobileImage={MobileImg}
      title="Restore Your Body. Recharge Your Life."
      align="left"
      buttons={[
        {
          label: "Get Started",
          href: "#",
          variant: "primary",
        },
        {
          label: "Explore Memberships",
          href: "#",
          variant: "secondary",
        },
      ]}
      height="h-screen"
    />
  );
};

export default Banner;