import WholeBodyCryo from "../ServicesPages/WholeBodyCryo/WholeBodyCryo";
import InfraredSuana from "../ServicesPages/InfraredSuana/InfraredSuana";
import RedLightTherapy from "../ServicesPages/RedLightTherapy/RedLightTherapy";
import SaltTherapy from "../ServicesPages/SaltTherapy/SaltTherapy";
import HyperBaricOxygenTherapy from "../ServicesPages/HyperBaricOxygenTherapy/HyperBaricOxygenTherapy";
import IVInfusion from "../ServicesPages/IVInfusion/IVInfusion";
import ScanecaBodyScan from "../ServicesPages/ScanecaBodyScan/ScanecaBodyScan";
import LymphaticDrainage from "../ServicesPages/LymphaticDrainage/LymphaticDrainage";
import LocalCryoTherapy from "../ServicesPages/LocalCryoTherapy/LocalCryoTherapy";
const componentsMap: Record<string, React.FC> = {
    "whole-body-cryotherapy": WholeBodyCryo,
    "infrared-sauna" : InfraredSuana ,
    "red-light-therapy" : RedLightTherapy,
    "salt-therapy" : SaltTherapy,
    "hyperbaric-oxygen-therapy" : HyperBaricOxygenTherapy ,
    "iv-infusion" : IVInfusion ,
    "scaneca-body-scan" : ScanecaBodyScan ,
    "lymphatic-drainage" : LymphaticDrainage ,
    "local-cryotherapy" : LocalCryoTherapy
};

export default async function ServicesPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const Component = componentsMap[slug];

    if (!Component) {
        return <div>Service Not Found</div>;
    }

    return <Component />;
}