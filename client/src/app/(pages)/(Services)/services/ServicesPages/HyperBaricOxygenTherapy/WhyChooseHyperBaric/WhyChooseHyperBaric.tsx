import CommonChooseUs from "@/app/(pages)/(CommonPages)/CommonChooseUs/CommonChooseUs";
import CommonChooseTiles from "@/app/(pages)/(CommonPages)/CommonChooseTiles/CommonChooseTiles";
import { sideImg, tiles } from "./dummyUtils";

const WhyChooseHyperBaric = () => {
    return (
        <div className="w-full py-8 px-5 md:px-16 md:py-13 bg-[var(--light-blue)]">
            <CommonChooseUs title='Why Choose   
             <span class="text-[var(--btn-bg-primary)]">HBOT</span>'
                subtitle="A non-invasive oxygen therapy designed to enhance recovery, support healing, and improve overall wellbeing. Experience increased oxygen delivery at a cellular level to help boost energy, reduce inflammation, and accelerate repair." />
            <CommonChooseTiles
                sideImage={sideImg}
                tiles={tiles}
            />
        </div>
    )
}

export default WhyChooseHyperBaric
