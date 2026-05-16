"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/header-logo/logo.png";
import downArrow from "@/assets/header-logo/down-arrow.png";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    dropdown: [
      {
        title: "Whole Body Cryotherapy",
        href: "/services/whole-body-cryotherapy",
      },
      {
        title: "Infrared Sauna",
        href: "/services/infrared-sauna",
      },
      {
        title: "Red Light Therapy",
        href: "red-light-therapy",
      },
      {
        title: "Salt Therapy",
        href: "#",
      },
      {
        title: "Hyperbaric Oxygen Therapy",
        href: "#",
      },
      {
        title: "IV Infusion",
        href: "#",
      },
      {
        title: "SCANECA 3D Body Scan",
        href: "#",
      },
      {
        title: "Lymphatic Drainage",
        href: "#",
      },
      {
        title: "Local Cryotherapy",
        href: "#",
      },
    ],
  },
  {
    title: "Membership",
    href: "#",
  },
  {
    title: "Packages",
    href: "#",
  },
  {
    title: "Gift Cards",
    href: "#",
  },
  {
    title: "Blog",
    href: "#",
  },
  {
    title: "Contact Us",
    href: "#",
  },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // ✅ SEPARATE STATES (IMPORTANT FIX)
  const [openServicesDesktop, setOpenServicesDesktop] = useState(false);
  const [openServicesMobile, setOpenServicesMobile] = useState(false);

  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isServicesActive = pathname.startsWith("/services");

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setOpenServicesDesktop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="flex w-full items-center justify-between px-6 py-4 lg:px-16 lg:py-5">

        {/* Logo */}
        <div className="hidden md:block">
          <Link href="/">
            <Image src={logo} alt="logo" width={140} height={40} priority />
          </Link>
        </div>
        <div className="block md:hidden">
          <Link href="/">
            <Image src={logo} alt="logo" width={77} height={44} priority />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.dropdown ? (
                <div ref={servicesRef} className="relative">

                  {/* SERVICES BUTTON */}
                  <button
                    type="button"
                    onClick={() =>
                      setOpenServicesDesktop((prev) => !prev)
                    }
                    className={`inline-flex items-center gap-2 rounded-full px-2 py-1 text-base font-body transition ${isServicesActive
                        ? "font-bold text-(--btn-bg-primary)"
                        : "text-slate-950 hover:text-sky-600"
                      }`}
                  >
                    {item.title}

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`h-5 w-5 transition ${openServicesDesktop ? "rotate-180" : ""
                        }`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  {/* DROPDOWN */}
                  {openServicesDesktop && (
                    <div className="absolute left-0 top-full mt-3 flex min-w-[220px] flex-col gap-1 rounded-3xl border border-slate-200 bg-white p-3 shadow-lg">
                      {item.dropdown.map((service, serviceIndex) => {
                        const isActiveLink = pathname === service.href;

                        return (
                          <Link
                            key={serviceIndex}
                            href={service.href}
                            onClick={() =>
                              setOpenServicesDesktop(false)
                            }
                            className={`rounded-2xl px-3 py-2 w-full text-sm font-medium transition  ${isActiveLink
                                ? "bg-slate-100 font-bold text-(--btn-bg-primary)"
                                : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                              }`}
                          >
                            {service.title}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`cursor-pointer rounded-full px-2 py-1 text-base transition font-body ${isActive(item.href)
                      ? "font-bold text-(--btn-bg-primary)"
                      : "text-(--navlink-text-black) hover:text-(--btn-bg-primary)"
                    }`}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* HAMBURGER */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-slate-950 lg:hidden"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <div className="relative flex h-5 w-5 flex-col justify-between overflow-hidden">
            <span
              className={`block h-[2px] w-5 bg-current transition ${openMenu ? "translate-y-[9px] rotate-45" : ""
                }`}
            />
            <span
              className={`block h-[2px] w-5 bg-current transition ${openMenu ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block h-[2px] w-5 bg-current transition ${openMenu ? "-translate-y-[9px] -rotate-45" : ""
                }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${openMenu ? "max-h-[500px]" : "max-h-0"
          }`}
      >
        <div className="px-6 pb-6">
          <ul className="flex flex-col gap-4 border-t border-slate-200 pt-5">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.dropdown ? (
                  <>
                    {/* MOBILE SERVICES BUTTON */}
                    <button
                      type="button"
                      onClick={() =>
                        setOpenServicesMobile((prev) => !prev)
                      }
                      className={`flex w-full items-center justify-between px-4 py-3 text-base transition ${isServicesActive
                          ? "font-bold text-(--btn-bg-primary)"
                          : "text-(--navlink-text-black)"
                        }`}
                    >
                      <span>{item.title}</span>

                      <Image
                        src={downArrow}
                        alt="expand"
                        width={24}
                        height={24}
                        className={`transition ${openServicesMobile ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {openServicesMobile && (
                      <div className="space-y-1 my-2 border rounded-xl border-slate-200 px-4 py-3">
                        {item.dropdown.map((service, serviceIndex) => {
                          const isActiveLink = pathname === service.href;

                          return (
                            <Link
                              key={serviceIndex}
                              href={service.href}
                              onClick={() =>
                                setOpenServicesMobile(false)
                              }
                              className={`block rounded-2xl px-3 py-2 text-sm font-medium transition ${isActiveLink
                                  ? "bg-slate-100 font-bold text-(--btn-bg-primary)"
                                  : "text-slate-700 hover:bg-white hover:text-slate-950"
                                }`}
                            >
                              {service.title}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block rounded-2xl px-4 py-3 text-base transition font-body ${isActive(item.href)
                        ? "font-bold text-(--btn-bg-primary)"
                        : "text-(--navlink-text-black) hover:text-(--btn-bg-primary)"
                      }`}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;