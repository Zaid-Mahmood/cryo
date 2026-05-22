import Image from "next/image";

import team1 from "@/assets/aboutus-img/team-1.png";
import team2 from "@/assets/aboutus-img/team-2.png";
import team3 from "@/assets/aboutus-img/team-3.png";

const TeamSection = () => {
    const teams = [
        { img: team1, name: "Dr Najia Asher", role: "Business Manager" },
        { img: team2, name: "Lucy Ozdil", role: "Practice Nurse" },
        { img: team3, name: "Omar Siddiqui", role: "Marketing Executive" }
    ];

    const heading = "Meet Our Team";

    const subtitle =
        "A passionate team focused on helping clients feel better, recover faster, and prioritise long-term wellness.";

    return (
        <div className="px-5 py-8 md:px-16 md:py-13 bg-[#E9F2FB]">
            
            {/* Heading */}
            <div className="text-center mb-11">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-[var(--btn-bg-black)] mb-4">
                    {heading}
                </h2>

                <p className="text-base font-body text-[var(--text-secondary)] max-w-[760px] mx-auto leading-[30px]">
                    {subtitle}
                </p>
            </div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teams.map((team, index) => (
                    <div
                        key={index}
                        className="rounded-[12px] overflow-hidden bg-white px-2 pt-2 pb-6"
                    >
                        <div className="overflow-hidden">
                            <Image
                                src={team.img}
                                alt={team.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="pt-6 text-center">
                            <h3 className="text-2xl font-heading font-bold text-[var(--btn-bg-black)] mb-2">
                                {team.name}
                            </h3>

                            <p className="text-base font-body text-[var(--text-secondary)]">
                                {team.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamSection;