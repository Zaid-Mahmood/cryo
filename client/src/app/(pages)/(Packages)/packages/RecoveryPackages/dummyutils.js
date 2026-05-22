import cardImg1 from "@/assets/packages/card-img1.png";
import cardImg2 from "@/assets/packages/card-img2.png";
import cardImg3 from "@/assets/packages/cardImg3.png";
import cardImg4 from "@/assets/packages/cardImg4.png";
import cardImg5 from "@/assets/packages/cardImg5.png";
import singleShared1 from "@/assets/packages/single-1.png";
import singleShared2 from "@/assets/packages/single-2.png";
import singleShared3 from "@/assets/packages/single-3.png";
import familyImg from "@/assets/packages/family-pkg-1.png";

export const comboPackages = [
    {
        id: 1,
        title: "Triple Recovery",
        desc: "Full-spectrum rejuvenation for energy, skin, and performance",
        price: "A$129",
        oldPrice: "A$165",
        duration: "1hour 20mins",
        image: cardImg1,
        tag: "Red Light Therapy + Cryotherapy + Infrared Sauna",
        linkName: "Book Now",
        linkhref: "#"
    },
    {
        id: 2,
        title: "Contrast Therapy",
        desc: "Rapid recovery and circulation boost",
        price: "A$99",
        oldPrice: "A$120",
        duration: "50mins",
        image: cardImg2,
        tag: "Cryotherapy + Infrared Sauna",
        save: "Save 18%",
        linkName: "Book Now",
        linkhref: "#"
    },
    {
        id: 3,
        title: "Radiant Recovery",
        desc: "Faster recovery, less pain, better circulation.",
        price: "A$99",
        oldPrice: "A$115",
        duration: "35mins",
        image: cardImg3,
        tag: "Cryotherapy + Red Light Therapy",
        save: "Save 14%",
        linkName: "Book Now",
        linkhref: "#"
    },
    {
        id: 4,
        title: "Salt & Heat",
        desc: "Breathe easier, detoxify, and recharge your body",
        price: "A$130",
        oldPrice: "A$160",
        duration: "45mins",
        image: cardImg4,
        tag: "Salt Therapy + Infrared Sauna",
        save: "Save 19%",
        linkName: "Book Now",
        linkhref: "#"
    },
    {
        id: 5,
        title: "Breathe & Glow",
        desc: "Immune boost, skin vitality and respiratory rejuvenation",
        price: "A$130",
        oldPrice: "A$145",
        duration: "45mins",
        image: cardImg5,
        tag: "Salt Therapy +  Red Light Therapy",
        save: "Save 10%",
        linkName: "Book Now",
        linkhref: "#"
    },
];

export const togetherPackages = [
    {
        heading: "Shared Single Sessions",
        packages: [
            {
                id: 1,
                title: "Whole Body Cryotherapy - (Couple / Friend)",
                price: "A$85",
                image: singleShared1,
                duration: "5mins",
                linkName: "Book Now",
                linkhref: "#"
            },
            {
                id: 2,
                title: "HBOT - (Couple / Friend)",
                price: "A$199",
                image: singleShared2,
                duration: "1hour",
                linkName: "Book Now",
                linkhref: "#"
            },
            {
                id: 3,
                title: "Red Light Therapy - (Couple / Friend)",
                price: "A$75",
                image: singleShared3,
                duration: "30mins",
                linkName: "Book Now",
                linkhref: "#"
            }
        ]
    },
    {
        heading: "Shared Combo Recovery's",
        packages: [
            {
                id: 1,
                tag: "Cryotherapy + Infrared Sauna + Red Light Therapy",
                title: "Triple Recovery",
                price: "A$129",
                oldPrice: "A$165",
                desc: "Full-spectrum rejuvenation for energy, skin, and performance",
                image: cardImg1,
                duration: "1hour 20mins",
                linkName: "Book Now",
                linkhref: "#"
            },
            {
                id: 2,
                tag: "Cryotherapy + Infrared Sauna",
                title: "Contrast Therapy",
                price: "A$99",
                oldPrice: "A$120",
                save: "Save 18%",
                desc: "Rapid recovery and circulation boost",
                image: cardImg2,
                duration: "50mins",
                linkName: "Book Now",
                linkhref: "#"
            },
            {
                id: 3,
                tag: "Salt Therapy +  Red Light Therapy",
                title: "Breathe & Glow",
                price: "A$130",
                oldPrice: "A$145",
                save: "Save 18%",
                desc: "Immune boost, skin vitality and respiratory rejuvenation",
                image: cardImg3,
                duration: "45mins",
                linkName: "Book Now",
                linkhref: "#"
            },
        ],
    },
    {
        heading: "Family Package",
        packages: [
            {
                id: 1,
                tag: "Salt Therapy",
                title: "Family & Group Halotherapy Packages",
                price: "A$90",
                desc: "Experience Cryo SubZero with a guided recovery session including Whole Body Cryotherapy, a 3D Body Scan, and a personalised facility tour.",
                image: familyImg,
                duration: "45mins",
                linkName: "Book Now",
                linkhref: "#"
            }
        ]
    }
];