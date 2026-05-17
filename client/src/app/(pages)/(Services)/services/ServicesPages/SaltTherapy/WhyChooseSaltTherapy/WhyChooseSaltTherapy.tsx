import CommonChooseUs from "@/app/(pages)/(CommonPages)/CommonChooseUs/CommonChooseUs";
import CommonChooseTiles from "@/app/(pages)/(CommonPages)/CommonChooseTiles/CommonChooseTiles";
import { sideImg, tiles } from "./dummyUtils";

const WhyChooseSaltTherapy = () => {
    return (
        <div className="w-full py-8 px-5 md:px-16 md:py-13 bg-[var(--light-blue)]">
            <CommonChooseUs title='Why Choose   
             <span class="text-[var(--btn-bg-primary)]">Salt Therapy</span>'
                subtitle="A natural, non-invasive therapy designed to support respiratory health, improve skin condition, and promote deep relaxation. Experience salt-infused air that helps clear airways, reduce inflammation, and restore overall wellbeing." />
            <CommonChooseTiles
                sideImage={sideImg}
                tiles={tiles}
            />
        </div>
    )
}

export default WhyChooseSaltTherapy
