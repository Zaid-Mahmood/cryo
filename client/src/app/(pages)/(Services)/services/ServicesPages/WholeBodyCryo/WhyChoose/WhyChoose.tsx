import CommonChooseUs from "@/app/(pages)/(CommonPages)/CommonChooseUs/CommonChooseUs";
import CommonChooseTiles from "@/app/(pages)/(CommonPages)/CommonChooseTiles/CommonChooseTiles";
import { tiles, sideImg } from "./dummyutils";
const WhyChoose = () => {
    return (
        <div className="w-full py-8 px-5 md:px-16 md:py-13 bg-[var(--light-blue)]">
            <CommonChooseUs title='Why Choose Whole Body  <span class="text-[var(--btn-bg-primary)]"> Cryotherapy?</span>'
                subtitle="A fast, non-invasive treatment designed to support recovery, reduce inflammation, and help your body perform at its best. Experience noticeable results in just a few minutes per session." />
            <CommonChooseTiles
                sideImage={sideImg}
                tiles={tiles}
            />
        </div>
    )
}

export default WhyChoose
