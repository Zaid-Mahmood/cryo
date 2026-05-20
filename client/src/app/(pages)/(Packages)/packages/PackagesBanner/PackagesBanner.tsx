import pkgBanner from "@/assets/packages/banner.png";
import CommonBanner from "@/app/(pages)/(CommonPages)/CommonBanner/CommonBanner";
const PackagesBanner = () => {
  return (
    <div>
      <CommonBanner
      image={pkgBanner}
        mobileImage={pkgBanner}
        title={
          <>
           Recovery Packages<br />  Designed Around You
          </>
        }
        align="center"
        height="h-screen"
      />
    </div>
  )
}

export default PackagesBanner
