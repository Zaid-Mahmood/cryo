"use client"
import Link from "next/link";
import CommonMembershipPage from "@/app/(pages)/(CommonPages)/CommonMembershipPage/CommonMembershipPage"
import { memberPkgs } from "./dummyutils";
import Image from "next/image";
import checkImg from "@/assets/membership-img/check.png";
const MembershipPackages = () => {
  const highlightPlanText = (title: string) => {
    if (title.startsWith("All ")) {
      const planName = title.replace("All ", "").replace(" treatments", "");

      return (
        <>
          All{" "}
          <span className="text-[var(--btn-bg-primary)]">{planName}</span>{" "}
          treatments
        </>
      );
    }

    if (title.startsWith("HBOT")) {
      return <span className="font-semibold text-base font-body">{title}</span>;
    }

    return title;
  };

  const getBadgeClass = (planType: string) => {
    if (planType === "Best Value") {
      return "text-[#F2B705] bg-[#FFFAE5] px-[10px] py-1 rounded-md";
    }

    return "text-[var(--btn-bg-primary)]  bg-[#F2F7FD] px-[10px] py-1 rounded-md";
  };
  return (
    <CommonMembershipPage title="Membership Overview" description="Our memberships are designed to make consistent recovery and wellness more accessible, flexible, and cost-effective. Whether you’re focused on performance, recovery, or overall wellbeing, each plan gives you ongoing access to treatments that help you feel and perform at your best.">
      <div className="grid overflow-hidden border border-[var(--border-primary)] md:grid-cols-3">
        {memberPkgs.map((card, index) => (
          <div
            key={card.heading}
            className={`flex flex-col px-4 py-3 md:px-5 ${index !== memberPkgs.length - 1
              ? "border-b border-[var(--border-primary)] md:border-b-0 md:border-r"
              : ""
              }`}
          >
            <div className="rounded-md bg-[#FAFAFA]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-body text-lg font-semibold text-[var(--btn-bg-black)]">
                      {card.heading}
                    </h3>

                    <div className="relative group">
                      <Image
                        src={card.img}
                        alt="info-img"
                        className="cursor-pointer"
                      />

                      {/* Tooltip */}
                      <div
                        className="absolute left-1/2 top-[140%] -translate-x-1/2 w-[260px] rounded-md border border-[#1DA1F2] bg-[#0B0F19] px-4 py-3 text-xs leading-5 text-white
opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible z-50" >
                        Limited membership spots available. Fair-use policy applies.
                        Optional partner rates on available on eligible plans.

                        {/* Arrow */}
                        <div
                          className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2
          rotate-45 border-l border-t border-[#1DA1F2] bg-[#0B0F19]"
                        />
                      </div>
                    </div>
                  </div>

                  <p className="mt-2 max-w-[280px] font-body text-xs leading-relaxed text-[var(--text-description)]">
                    {card.desc}
                  </p>
                </div>

                {card.planType && (
                  <span
                    className={`mt-1 whitespace-nowrap font-body text-base font-bold ${getBadgeClass(
                      card.planType
                    )}`}
                  >
                    {card.planType}
                  </span>
                )}
              </div>

              <div className="mt-7 flex items-end font-body text-[var(--btn-bg-primary)]">
                <span className="mb-1 text-base font-medium">$</span>
                <span className="text-6xl font-heading font-bold leading-none pl-1">
                  {card.price}
                </span>
                <span className="mb-2 ml-1 text-base font-semibold">/week</span>
              </div>

              <Link target="_blank" href={card.href}>
                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-[#262626] px-4 py-3 font-body text-sm font-semibold text-white transition hover:bg-black cursor-pointer"
                >
                  {card.btnText}
                </button>
              </Link>
            </div>

            <div className="mt-5 font-body">
              <p className="text-xs font-semibold text-[var(--text-description)]">
                {card.treatments.heading}:
              </p>

              <ul className="mt-3">
                {card.treatments.title.map((title) => (
                  <li
                    key={title}
                    className="flex items-center gap-2 border-b border-dashed border-[var(--border-primary)] py-2 text-base text-[var(--btn-bg-black)] last:border-b-0"
                  >
                    <Image src={checkImg} alt="check-img" />

                    <span>{highlightPlanText(title)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 font-body">
              <p className="text-xs font-semibold text-[var(--text-description)]">
                {card.treatments.membership.heading}
              </p>

              <ul className="mt-3">
                {card.treatments.membership.title.map((title) => (
                  <li
                    key={title}
                    className="flex items-center gap-2 border-b border-dashed border-[var(--border-primary)] py-2 text-sm text-[var(--btn-bg-black)]  last:border-b-0"
                  >
                    <Image src={checkImg} alt="check-img" />
                    <span>{highlightPlanText(title)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </CommonMembershipPage>
  )
}

export default MembershipPackages
