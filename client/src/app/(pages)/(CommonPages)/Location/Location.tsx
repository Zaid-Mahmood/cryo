import Image from "next/image";
import locationImg from "@/assets/location-img/mail.png";
import map from "@/assets/location-img/map-pin.png";

const Location = () => {
  const contactAddress = [
    {
      img: locationImg,
      heading: "Contact",
      info: "info@cryosubzero.com",
    },
    {
      img: map,
      heading: "Address",
      info: "Level 1, 284 Bay Road, Cheltenham VIC 3192",
    },
  ];

  return (
    <div className="px-5 py-8 md:px-16 md:py-13">

      {/* Top Section desktop*/}
      <div className="flex items-center justify-between">

        {/* Heading */}
        <div>
          <h2 className="hidden md:block text-left text-center font-heading font-semibold text-5xl/12">
            Find Us in
            <br />
            <span className="pt-2 text-[var(--btn-bg-primary)]">
              Cheltenham
            </span>
          </h2>
        </div>

        {/* Contact Info */}
        <div className="hidden mt-8 md:flex md:flex-col md:gap-4 md:items-center  md:items-start md:text-left">
          {contactAddress.map((item, index) => (
            <div
              key={index}
              className="md:items-start md:justify-start"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={item.img}
                  alt={item.heading}
                  width={20}
                  height={20}
                />

                <h3 className="font-body text-lg font-semibold text-[var(--btn-bg-black)]">
                  {item.heading}
                </h3>
              </div>

              <p className="pt-1 font-body text-base text-[var(--text-description)]">
                {item.info}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Top Section mobile */}
      <div className="flex items-center justify-between md:hidden">

        {/* Heading */}
        <div className="mx-auto">
          <h2 className="font-heading font-semibold text-3xl">
            Find Us in
            <span className="pt-2 pl-2 text-[var(--btn-bg-primary)]">
              Cheltenham
            </span>
          </h2>
        </div>

        {/* Contact Info */}
        <div className="hidden  md:flex md:flex-col md:gap-4 md:items-center  md:items-start md:text-left">
          {contactAddress.map((item, index) => (
            <div
              key={index}
              className="md:items-start md:justify-start"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={item.img}
                  alt={item.heading}
                  width={20}
                  height={20}
                />

                <h3 className="font-body text-lg font-semibold text-[var(--btn-bg-black)]">
                  {item.heading}
                </h3>
              </div>

              <p className="pt-1 font-body text-base text-[var(--text-description)]">
                {item.info}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Map */}
      <div className="pt-11 overflow-hidden rounded-2xl">
        <iframe
          src="https://www.google.com/maps?q=Level%201,%20284%20Bay%20Road,%20Cheltenham%20VIC%203192&output=embed"
          width="100%"
          height="450"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full border-0"
        />
      </div>

  <div className="md:hidden mt-8 flex flex-col gap-4 items-center">
          {contactAddress.map((item, index) => (
            <div
              key={index}
            >
              <div className="flex justify-center items-center gap-2">
                <Image
                  src={item.img}
                  alt={item.heading}
                  width={20}
                  height={20}
                />

                <h3 className="font-body text-base font-semibold text-[var(--btn-bg-black)]">
                  {item.heading}
                </h3>
              </div>

              <p className="pt-1 font-body text-sm text-[var(--text-description)]">
                {item.info}
              </p>
            </div>
          ))}
        </div>

    </div>
  );
};

export default Location;