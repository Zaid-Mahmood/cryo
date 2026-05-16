import WholeBodyCryo from "../ServicesPages/WholeBodyCryo/WholeBodyCryo";
import InfraredSuana from "../ServicesPages/InfraredSuana/InfraredSuana";
import RedLightTherapy from "../ServicesPages/RedLightTherapy/RedLightTherapy";
const componentsMap: Record<string, React.FC> = {
    "whole-body-cryotherapy": WholeBodyCryo,
    "infrared-sauna" : InfraredSuana ,
    "red-light-therapy" : RedLightTherapy
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