"use client";

import { useState } from "react";
// import RecoveryComboCarousel from "./RecoveryComboCarousel";
// import { comboPackages, togetherPackages } from "./dummyUtils";
// import PackageCard from "./PackageCard";
import RecoveryComboCarousel from "./RecoveryComboCarousel";
import PackageCard from "./PackageCard";
 import { comboPackages, togetherPackages } from "./dummyutils";

const RecoveryPackages = () => {
    const [activeTab, setActiveTab] = useState("combos");

    return (
        <div >
            <h4 className="font-heading font-bold text-3xl text-[var(--btn-bg-black)] text-center mb-[2px]">
                Explore Recovery Packages
            </h4>

            <p className="pt-2 text-base font-body text-[var(--text-secondary)] text-center mb-11">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-16">
                        {comboPackages.map((item) => (
                            <PackageCard key={`combo-${item.id}`} item={item} />
                        ))} 
                    </div>
                ) : (
                    <div className="space-y-16">
                        {togetherPackages.map((section, index) => (
                            <div key={`${section.heading}-${index}`}>
                                {section.heading === "Family Package" ? (
                                    <>
                                        <h3 className="mb-8 font-heading text-2xl font-bold text-[var(--btn-bg-black)]">
                                            {section.heading}
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-16">
                                            {section.packages.map((item, itemIndex) => (
                                                <PackageCard
                                                    key={`${section.heading}-${item.id}-${itemIndex}`}
                                                    item={item}
                                                />
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <RecoveryComboCarousel
                                        title={section.heading}
                                        data={section.packages}
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
