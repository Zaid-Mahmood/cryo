import logo from "@/assets/footer-img/mainlogo.png";
import fblogo from "@/assets/footer-img/fblogo.png";
import instalogo from "@/assets/footer-img/insta.png";
import linked from "@/assets/footer-img/linkedin.png";
import tiktok from "@/assets/footer-img/tiktok.png";
import location from "@/assets/footer-img/contact-us-logos/location.png";
import time from "@/assets/footer-img/contact-us-logos/clock.png";
import phone from "@/assets/footer-img/contact-us-logos/phone.png";
import mail from "@/assets/footer-img/contact-us-logos/mail.png";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    label: "Cryotherapy",
    href: "/services/whole-body-cryotherapy",
  },
  {
    label: "HBOT",
    href: "/services/hyperbaric-oxygen-therapy",
  },
  {
    label: "Infrared Sauna",
    href: "/services/infrared-sauna",
  },
  {
    label: "Red Light Therapy",
    href: "/services/red-light-therapy",
  },
  {
    label: "Salt Therapy",
    href: "/services/salt-therapy",
  },
  {
    label: "IV Infusions",
    href: "/services/iv-infusion",
  },
  {
    label: "Lymphatic Drainage",
    href: "/services/lymphatic-drainage",
  },
  {
    label: "Scaneca 3D Scan",
    href: "/services/scaneca-body-scan",
  },
  {
    label: "Local Cryotherapy",
    href: "/services/local-cryotherapy",
  },
];

const resources = [
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Membership",
    href: "/membership",
  },
  {
    label: "Packages",
    href: "/packages",
  },
  {
    label: "Gift Cards",
    href: "/gift-cards",
  },
];

const socials = [
  {
    icon: fblogo,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61579179572006",
  },
  {
    icon: instalogo,
    label: "Instagram",
    href: "https://www.instagram.com/cryosubzero/",
  },
  {
    icon: linked,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/cryosubzero",
  },
  {
    icon: tiktok,
    label: "TikTok",
    href: "https://www.tiktok.com/@cryosubzero2?_r=1&_t=ZS-92cqGb9uubE",
  },
];

const contactItems = [
  {
    icon: location,
    label: "Level 1, 284 Bay Road, Cheltenham VIC 3192",
    href: "https://www.google.com/maps?q=Level%201,%20284%20Bay%20Road,%20Cheltenham%20VIC%203192",
  },
  {
    icon: time,
    label: "Mon-Fri: 8:30am-6:30pm\nSat-Sun: 9am-3pm",
    href: "#",
  },
  {
    icon: phone,
    label: "03 9022 6606",
    href: "tel:0390226606",
  },
  {
    icon: mail,
    label: "info@cryosubzero.com",
    href: "mailto:info@cryosubzero.com",
  },
];
const Footer = () => {
    return (
        <footer className="w-full bg-[var(--footer-bg-blue)] px-5 py-6 text-white lg:py-13 lg:px-16">
            <div>
                <div className="flex flex-col items-center gap-5 border-b border-white/15 pb-7 lg:flex-row lg:items-center lg:justify-between">
                    <div className="text-center lg:text-left">
                        <h2 className="font-heading text-2xl font-bold leading-tight lg:text-3xl">
                            Join Our Newsletter
                        </h2>
                        <p className="mt-2 font-body text-xs text-white/80 lg:text-base">
                            We&apos;ll send you a letter once per week. No spams.
                        </p>
                    </div>

                    <form className="grid grid-cols-3 lg:flex lg:flex-row lg:w-full lg:max-w-[760px] flex-col gap-3 sm:flex-row">
                        {/* <div className="hidden lg:block"> */}
                        <label htmlFor="footer-email" className="sr-only hidden lg:block">
                            Enter your email
                        </label>
                        <input
                            id="footer-email"
                            type="email"
                            placeholder="Enter Your Email"
                            className="h-12 w-full lg:min-w-0 flex-1 rounded-full bg-white px-6 font-body text-sm text-slate-950 outline-none placeholder:text-[#9C9C9C] hidden lg:block"
                        />
                        {/* </div> */}
                        <div className="col-span-2 lg:hidden">
                            <label htmlFor="footer-email" className="sr-only">
                                Enter your email
                            </label>
                            <input
                                id="footer-email"
                                type="email"
                                placeholder="Enter Your Email"
                                className="h-12 w-full lg:min-w-0 flex-1 rounded-full bg-white px-6 font-body text-sm text-slate-950 outline-none placeholder:text-[#9C9C9C]"
                            />
                        </div>
                        <button
                            type="submit"
                            className="sm:w-auto h-12 rounded-full bg-[#008FE8] px-2 sm:px-8 font-body text-sm font-semibold text-white transition hover:bg-[#0078C7]"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                <div className="grid gap-8 border-b border-white/15 py-6 grid-cols-1 text-center lg:grid-cols-[1.35fr_1fr_0.55fr_0.85fr] lg:gap-12">
                    <div className="flex flex-col justify-between items-center lg:items-start gap-8">
                        <div>
                            <Image
                                src={logo}
                                alt="Cryo SubZero"
                                width={210}
                                height={80}
                                className="h-auto w-[175px] mx-auto lg:mx-0 lg:w-[210px]"
                            />
                            <p className="mt-7 max-w-[430px] font-body text-xs leading-5 text-white/85 lg:text-sm lg:text-left text-center">
                                Advanced recovery and wellness treatments to help you feel
                                better, perform better, every day.
                            </p>
                        </div>

                        <div className="flex items-center gap-5">
                            {socials.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    aria-label={item.label}
                                    className="inline-flex h-6 w-6 items-center justify-center"
                                >
                                    <Image
                                        src={item.icon}
                                        alt=""
                                        width={24}
                                        height={24}
                                        className="h-6 w-6 object-contain"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-body text-base lg:text-xl font-medium lg:text-left text-center">Services</h3>
                        <ul className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-3  lg:text-left text-center">
                            {services.map((item , id) => (
                                <li key={id}>
                                    <Link
                                        href={item.href}
                                        className="font-body text-sm lg:text-[15px] text-center text-white/85 transition hover:text-white cursor-pointer"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-body text-base lg:text-xl font-medium  lg:text-left text-center">Resources</h3>
                        <ul className="mt-3 space-y-3  lg:text-left text-center">
                            {resources.map((item , id) => (
                                <li key={id}>
                                    <Link
                                        href={item.href}
                                        className="font-body text-sm lg:text-[15px] text-white/85 transition hover:text-white cursor-pointer"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-body text-base lg:text-xl font-medium  lg:text-left text-center">Contact Us</h3>
                        <ul className="mt-3 space-y-3">
                            {contactItems.map((item , id) => (
                                <li key={id} className="flex lg:items-start items-center justify-center lg:justify-start gap-3 cursor-pointer">
                                    <Image
                                        src={item.icon}
                                        alt=""
                                        width={18}
                                        height={18}
                                        className="mt-0.5 h-[18px] w-[18px] object-contain"
                                    />
                                    <Link href={item.href} className="whitespace-pre-line leading-5 font-body text-sm lg:text-[15px] lg:text-left text-center text-white/85 transition hover:text-white">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <p className="pt-6 text-center font-body text-xs lg:text-base text-white">
                    Copyright © 2026 Cryo SubZero. All Rights Reserved. Powered By
                    CodeBryx
                </p>
            </div>
        </footer>
    );
};

export default Footer;
