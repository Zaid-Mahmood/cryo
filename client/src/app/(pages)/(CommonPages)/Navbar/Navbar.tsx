"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/header-logo/logo.png";
import downArrow from "@/assets/header-logo/down-arrow.png";
import { usePathname } from "next/navigation";
import linkedin from "@/assets/navbar-social-links/linkedin.png";
import fb from "@/assets/navbar-social-links/fb.png";
import insta from "@/assets/navbar-social-links/insta.png";
import tiktok from "@/assets/navbar-social-links/tiktok.png";

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
        href: "/services/red-light-therapy",
      },
      {
        title: "Salt Therapy",
        href: "/services/salt-therapy",
      },
      {
        title: "Hyperbaric Oxygen Therapy",
        href: "/services/hyperbaric-oxygen-therapy",
      },
      {
        title: "IV Infusion",
        href: "/services/iv-infusion",
      },
      {
        title: "SCANECA 3D Body Scan",
        href: "/services/scaneca-body-scan",
      },
      {
        title: "Lymphatic Drainage",
        href: "/services/lymphatic-drainage",
      },
      {
        title: "Local Cryotherapy",
        href: "/services/local-cryotherapy",
      },
    ],
  },
  {
    title: "Membership",
    href: "/membership",
  },
  {
    title: "Packages",
    href: "/packages",
  },
  {
    title: "Gift Cards",
    href: "/gift-cards",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
];
const socialLinks = [
  { image: linkedin, href: "https://www.linkedin.com/company/cryosubzero" },
  { image: fb, href: "https://www.facebook.com/profile.php?id=61579179572006" },
  { image: insta, href: "https://www.instagram.com/cryosubzero/" },
  { image: tiktok, href: "https://www.tiktok.com/@cryosubzero2?_r=1&_t=ZS-92cqGb9uubE" },
]
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

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
            <Image src={logo} alt="logo" width={105} height={60} priority />
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
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${openMenu ? "min-h-dvh" : "max-h-0"
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
                      onClick={() =>{
                        setOpenServicesMobile((prev) => !prev)
                        }
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
                              onClick={() =>{
                                setOpenServicesMobile(false)
                                setOpenMenu(false)
                              }
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
                    onClick={()=>setOpenMenu(false)}
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
          <div className="mt-12 flex items-center justify-center gap-4 lg:hidden">
            {socialLinks.map((item, index) => (
              <Link key={index} href={item.href}>
                <Image
                  src={item.image}
                  alt="social-link"
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;