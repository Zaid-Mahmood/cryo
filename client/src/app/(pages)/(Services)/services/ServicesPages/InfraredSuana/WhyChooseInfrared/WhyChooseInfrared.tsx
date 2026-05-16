import CommonChooseUs from "@/app/(pages)/(CommonPages)/CommonChooseUs/CommonChooseUs";
import CommonChooseTiles from "@/app/(pages)/(CommonPages)/CommonChooseTiles/CommonChooseTiles";
import { tiles, sideImg } from "./dummyUtils";
const WhyChooseInfrared = () => {
    return (
        <div className="w-full py-8 px-5 md:px-16 md:py-13 bg-[var(--light-blue)]">
            <CommonChooseUs title='Why Choose   
             <span class="text-[var(--btn-bg-primary)]">  Infrared Sauna</span>'
                subtitle="A gentle, heat-based therapy that warms your body from within to promote relaxation, improve circulation, and support recovery. Experience deep, consistent heat that helps reduce tension, encourage detox, and restore balance." />
            <CommonChooseTiles
                sideImage={sideImg}
                tiles={tiles}
            />
        </div>
    )
}

export default WhyChooseInfrared
