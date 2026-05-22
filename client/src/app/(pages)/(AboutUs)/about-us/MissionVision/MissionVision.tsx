import sideImg from "@/assets/aboutus-img/side-img.png";
import Image from "next/image";

const MissionVision = () => {
    const missionVisionString = [
        {
            heading: "Our Mission",
            desc: "To make advanced recovery and wellness therapies more accessible through science-backed treatments, personalised care, and a premium client experience.",
            bgColor: "#E9F2FB",
            textColor: "#262626",
        },
        {
            heading: "Our Values",
            desc: "We believe in creating a welcoming, people-first wellness environment focused on recovery, performance, and long-term wellbeing.",
            bgColor: "#2680D9",
            textColor: "#FFFFFF",
        },
    ];

    return (
        <div className="pb-8 px-5 md:px-16 md:pb-13">
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 items-stretch">

                {/* Left Image */}
                <div className="w-full lg:w-1/2">
                    <Image
                        src={sideImg}
                        alt="side-img"
                        className="w-full h-full object-cover rounded-[20px]"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    {missionVisionString.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-[20px] p-8 md:p-10 min-h-[260px] flex flex-col justify-end"
                            style={{
                                backgroundColor: item.bgColor,
                            }}
                        >
                            <div>
                                <h3
                                    className="text-3xl font-bold font-heading mb-4"
                                    style={{ color: item.textColor }}
                                >
                                    {item.heading}
                                </h3>

                                <p
                                    className="text-base font-body leading-[30px]"
                                    style={{ color: item.textColor }}
                                >
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MissionVision;