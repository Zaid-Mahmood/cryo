import phone from "@/assets/contact-us-img/phone.png";
import phone1 from "@/assets/contact-us-img/phone-1.png";
import phone2 from "@/assets/contact-us-img/phone-2.png";
import phone3 from "@/assets/contact-us-img/phone-3.png";
import linkedin from "@/assets/navbar-social-links/linkedin.png";
import fb from "@/assets/navbar-social-links/fb.png";
import insta from "@/assets/navbar-social-links/insta.png";
import tiktok from "@/assets/navbar-social-links/tiktok.png";
import Link from "next/link";
import Image from "next/image";
const HoursSection = () => {
    const contactLinks = [
        { img: phone, iconHeading: "Working Hours", iconDesc: "Mon–Fri: 8:30am – 6:30pm Sun-Sat: 9am – 3pm" },
        { img: phone1, iconHeading: "Call", iconDesc: "03 9022 6606" },
        { img: phone2, iconHeading: "Write to Us", iconDesc: "info@cryosubzero.com" },
        { img: phone3, iconHeading: "Address", iconDesc: "Level 1, 284 Bay Road, Cheltenham VIC 3192" }
    ]
    const socialLinks = [
        { image: linkedin, href: "https://www.linkedin.com/company/cryosubzero" },
        { image: fb, href: "https://www.facebook.com/profile.php?id=61579179572006" },
        { image: insta, href: "https://www.instagram.com/cryosubzero/" },
        { image: tiktok, href: "https://www.tiktok.com/@cryosubzero2?_r=1&_t=ZS-92cqGb9uubE" },
    ]
    return (
        <div className="md:py-13 md:px-16 px-8 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-11">
                {contactLinks.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center"
                    >
                        <Image
                            src={item.img}
                            alt={item.iconHeading}
                            width={56}
                            height={56}
                            className="object-contain"
                        />

                        <h3 className="pt-6 text-xl font-semibold text-[#2C2C2C] font-body">
                            {item.iconHeading}
                        </h3>

                        <p className="w-full md:max-w-3/4 pt-2 text-base text-[#656565] font-body text-center">
                            {item.iconDesc}
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center gap-11">
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
    )
}

export default HoursSection
