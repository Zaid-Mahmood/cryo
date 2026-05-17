import CommonChooseUs from "@/app/(pages)/(CommonPages)/CommonChooseUs/CommonChooseUs";
import CommonChooseTiles from "@/app/(pages)/(CommonPages)/CommonChooseTiles/CommonChooseTiles";
import { sideImg, tiles } from "./dummyUtils";
const ScanecaBodyChoose = () => {
  return (
      <div className="w-full py-8 px-5 md:px-16 md:py-13 bg-[var(--light-blue)]">
            <CommonChooseUs title='Why Choose
             <span class="text-[var(--btn-bg-primary)]">3D Body Scan</span>'
                subtitle="A data-driven assessment designed to give you accurate insights into your body, posture, and progress. Experience precise measurements and visual tracking that help you understand changes, improve performance, and stay on track." />
            <CommonChooseTiles
                sideImage={sideImg}
                tiles={tiles}
            />
        </div>
  )
}

export default ScanecaBodyChoose
