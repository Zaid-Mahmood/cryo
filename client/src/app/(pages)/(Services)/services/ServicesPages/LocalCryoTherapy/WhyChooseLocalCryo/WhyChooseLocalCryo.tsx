import CommonChooseUs from "@/app/(pages)/(CommonPages)/CommonChooseUs/CommonChooseUs";
import CommonChooseTiles from "@/app/(pages)/(CommonPages)/CommonChooseTiles/CommonChooseTiles";
import { sideImg, tiles } from "./dummyUtils";
const WhyChooseLocalCryo = () => {
  return (
     <div className="w-full py-8 px-5 md:px-16 md:py-13 bg-[var(--light-blue)]">
            <CommonChooseUs title='Why Choose
             <span class="text-[var(--btn-bg-primary)]">Lymphatic Drainage</span>'
                subtitle="A gentle compression therapy designed to support circulation, reduce fluid retention, and enhance overall recovery. Experience rhythmic pressure that helps stimulate lymphatic flow, reduce swelling, and leave your body feeling lighter." />
            <CommonChooseTiles
                sideImage={sideImg}
                tiles={tiles}
            />
        </div>
  )
}

export default WhyChooseLocalCryo
