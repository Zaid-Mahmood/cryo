import Image from "next/image";
import snowImg1 from "@/assets/choose-us-img/snowflake.png";
import snowImg2 from "@/assets/choose-us-img/snowflake-1.png";
import snowImg3 from "@/assets/choose-us-img/snowflake-2.png";
import snowImg4 from "@/assets/choose-us-img/snowflake-3.png";
import sessionImg1 from "@/assets/choose-us-img/img-1.png";
import sessionImg2 from "@/assets/choose-us-img/img-2.png";
import sessionImg3 from "@/assets/choose-us-img/img-3.png";

const ChooseUs = () => {
    const sections = [
        {
            image: snowImg1,
            heading: "Advanced Cryotherapy",
            desc: "Cutting-edge cold therapy for faster recovery and reduced inflammation.",
        },
        {
            image: snowImg2,
            heading: "Personalized Recovery",
            desc: "Treatments tailored to your body, goals, and recovery needs.",
        },
        {
            image: snowImg3,
            heading: "Trusted by Athletes",
            desc: "Used by professionals to boost performance and speed up recovery.",
        },
        {
            image: snowImg4,
            heading: "Fast, Effective Sessions",
            desc: "Quick treatments designed to fit seamlessly into your routine.",
        },
    ];

    return (
        <div className="bg-[var(--bg-primary)] px-5 py-8 md:px-16 md:py-13 flex gap-6">
            <div className="w-full md:max-w-1/2">
                <div className="md:pb-11 pb-6">
                    <h2 className="font-heading font-bold text-2xl md:text-3xl text-center md:text-left">
                        Why Choose Us
                    </h2>
                </div>

                <div className="flex gap-3 mb-5 md:hidden">
                    <Image
                        src={sessionImg1}
                        width={0}
                        height={0}
                        alt="img-1"
                    />
                    <div className="flex flex-col gap-3">
                        <Image
                            src={sessionImg2}
                            width={0}
                            height={0}
                            alt="img-1"
                            className=" h-full"

                        />
                        <Image
                            src={sessionImg3}
                            width={0}
                            height={0}
                            alt="img-1"
                            className="h-full"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                    {sections.map((section, index) => (
                        <div key={index} className="flex items-center gap-3 bg-white p-3 md:p-5 border border-[0.5px] border-[var(--border-primary)] rounded-lg">
                            <Image
                                src={section.image}
                                alt={section.heading}
                                width={50}
                                height={50}
                            />
                            <div className="font-body">
                                <h3 className="font-semibold text-base text-[var(--btn-bg-black)]">
                                    {section.heading}
                                </h3>

                                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                                    {section.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden md:grid md:grid-cols-2 md:gap-3">
                <Image
                    src={sessionImg1}
                    width={0}
                    height={0}
                    alt="img-1"
                    className="h-full"
                />
                <div className="flex flex-col gap-3">
                    <Image
                        src={sessionImg2}
                        width={0}
                        height={0}
                        alt="img-1"
                        className="h-full"
                    />
                    <Image
                        src={sessionImg3}
                        width={0}
                        height={0}
                        alt="img-1"
                        className="h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;