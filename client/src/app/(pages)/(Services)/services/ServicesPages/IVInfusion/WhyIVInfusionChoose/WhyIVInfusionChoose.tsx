import CommonChooseUs from "@/app/(pages)/(CommonPages)/CommonChooseUs/CommonChooseUs";
import CommonChooseTiles from "@/app/(pages)/(CommonPages)/CommonChooseTiles/CommonChooseTiles";
import { sideImg, tiles } from "./dummyUtils";

const WhyIVInfusionChoose= () => {
    return (
        <div className="w-full py-8 px-5 md:px-16 md:py-13 bg-[var(--light-blue)]">
            <CommonChooseUs title='Why Choose
             <span class="text-[var(--btn-bg-primary)]">IV Infusions</span>'
                subtitle="A targeted nutrient therapy designed to support hydration, restore balance, and enhance overall well-being. Experience efficient delivery of essential vitamins and fluids that help boost energy, support recovery, and improve daily performance." />
            <CommonChooseTiles
                sideImage={sideImg}
                tiles={tiles}
            />
        </div>
    )
}

export default WhyIVInfusionChoose
