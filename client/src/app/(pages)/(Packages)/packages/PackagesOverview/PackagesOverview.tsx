import PackagesAdWrapper from "@/app/(pages)/(CommonPages)/PackagesAdWrapper/PackagesAdWrapper";
import sideImg from "@/assets/packages/side-img.png"
const PackagesOverview = () => {
    return (
        <div className="pt-13 pb-11 px-16">
            <h4 className="text-3xl font-heading font-bold pb-2 text-[var(--btn-bg-black)]">New To Recovery?</h4>
            <p className="pb-11 text-base font-body text-[var(--text-secondary)]">Experience a comprehensive introduction to wellness with a whole body cryotherapy session, a body scan, and a guided facility tour, all designed to enhance your recovery and fitness journey in Cheltenham.</p>
            <PackagesAdWrapper
                image={sideImg}
                tag={"Whole Body Cryotherapy + SCANECA 3D Body Scan + Guided Facility Tour"}
                title={"Athlete First Experience Bundle"}
                description={"Experience Cryo SubZero with a guided recovery session including Whole Body Cryotherapy, a 3D Body Scan, and a personalised facility tour."}
                price={"A$49"}
                duration="30mins"
                buttonText="Book Your First Experience"
                buttonHref="#"
            />
        </div>
    )
}

export default PackagesOverview
