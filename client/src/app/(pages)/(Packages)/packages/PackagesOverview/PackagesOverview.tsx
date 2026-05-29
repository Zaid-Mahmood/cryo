import PackagesAdWrapper from "@/app/(pages)/(CommonPages)/PackagesAdWrapper/PackagesAdWrapper";
import sideImg from "@/assets/packages/side-img.png"
const PackagesOverview = () => {
    return (
        <div className="py-8 px-5 md:pt-13 md:pb-11 md:px-16">
            <h4 className="text-3xl font-heading font-bold pb-2 text-[var(--btn-bg-black)] md:text-left text-center">New To Recovery?</h4>
            <p className="pb-6 md:pb-11 text-base font-body text-[var(--text-secondary)]  md:text-left text-center">Experience a comprehensive introduction to wellness with a whole body cryotherapy session, a body scan, and a guided facility tour, all designed to enhance your recovery and fitness journey in Cheltenham.</p>
            <PackagesAdWrapper
                image={sideImg}
                tag={"Whole Body Cryotherapy + SCANECA 3D Body Scan + Guided Facility Tour"}
                title={"Athlete First Experience Bundle"}
                description={"Experience Cryo SubZero with a guided recovery session including Whole Body Cryotherapy, a 3D Body Scan, and a personalised facility tour."}
                price={"A$49"}
                duration="30mins"
                buttonText="Book Your First Experience"
                buttonHref="https://www.fresha.com/a/cryo-subzero-cheltenham-284-bay-road-x216yymn/booking?menu=true&share=true&offerItems=sv%3A26798242&pId=2636491&dppub=true&cartId=827c1796-afdf-4bd6-8335-f3b218e02c53"
            />
        </div>
    )
}

export default PackagesOverview
