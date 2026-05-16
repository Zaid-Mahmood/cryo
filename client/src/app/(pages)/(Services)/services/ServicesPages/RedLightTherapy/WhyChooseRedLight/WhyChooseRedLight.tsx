import CommonChooseUs from "@/app/(pages)/(CommonPages)/CommonChooseUs/CommonChooseUs";
import CommonChooseTiles from "@/app/(pages)/(CommonPages)/CommonChooseTiles/CommonChooseTiles";
import { tiles, sideImg } from "./dummyUtils";

const WhyChooseRedLight = () => {
  return (
        <div className="w-full py-8 px-5 md:px-16 md:py-13 bg-[var(--light-blue)]">
            <CommonChooseUs title='Why Choose   
             <span class="text-[var(--btn-bg-primary)]">Red Light Therapy</span>'
                subtitle="A geA non-invasive light therapy designed to stimulate cellular energy, support tissue repair, and enhance overall recovery. Experience targeted red and near-infrared light that helps reduce inflammation, improve skin health, and accelerate healing." />
            <CommonChooseTiles
                sideImage={sideImg}
                tiles={tiles}
            />
        </div>
  )
}

export default WhyChooseRedLight
