"use client";

import { useState } from "react";
import RecoveryComboCarousel from "./RecoveryComboCarousel";
import PackageCard from "./PackageCard";
import { comboPackages, togetherPackages } from "./dummyUtils";
import FamilyPackageCard from "./FamilyPackageCard";

const RecoveryPackages = () => {
    const [activeTab, setActiveTab] = useState("combos");

    return (
        <div className="" >
            <h4 className="px-5 md:px-0 font-heading font-bold text-3xl text-[var(--btn-bg-black)] text-center mb-[2px]">
                Explore Recovery Packages
            </h4>

            <p className="px-5 md:px-0 pt-2 text-base font-body text-[var(--text-secondary)] text-center mb-11">
                Choose from curated recovery experiences designed for performance,
                relaxation, and shared wellness. </p>
            <div className="mb-11 flex justify-center gap-2">
                <button
                    onClick={() => setActiveTab("combos")}
                    className={`px-6 py-3 rounded-xl font-body text-sm font-medium transition cursor-pointer ${activeTab === "combos"
                        ? "bg-[var(--btn-bg-black)] text-white"
                        : "text-[var(--btn-bg-black)]"
                        }`}
                >
                    Recovery Combos
                </button>

                <button
                    onClick={() => setActiveTab("together")}
                    className={`px-6 py-3 rounded-xl font-body text-sm font-medium transition cursor-pointer ${activeTab === "together"
                        ? "bg-[var(--btn-bg-black)] text-white"
                        : "text-[var(--btn-bg-black)]"
                        }`}
                >
                    Recover Together
                </button>
            </div>

            <div>
                {activeTab === "combos" ?
                    (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-16 px-5">
                            {comboPackages.map((item) => (
                                <PackageCard key={`combo-${item.id}`} item={item} />
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-16">
                            {togetherPackages.map((section, index) => (
                                <div key={`${section.heading}-${index}`}>
                                    {section.heading === "Family Package" ? (
                                        <div>
                                            {section.packages.map((item, itemIndex) => (
                                                <FamilyPackageCard
                                                    key={`${section.heading}-${itemIndex}`}
                                                    item={item}
                                                    heading={section.heading}
                                                />
                                            ))}
                                        </div>

                                    ) : (
                                        <RecoveryComboCarousel
                                            title={section.heading}
                                            data={section.packages}
                                            slidePercent={
                                                section.heading === "Shared Single Sessions"
                                                    ? 60
                                                    : 100
                                            }
                                            mobileSlidePercent={
                                                section.heading === "Shared Single Sessions"
                                                    ? 80
                                                    : 110
                                            }
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        </div>

    );
};

export default RecoveryPackages;
