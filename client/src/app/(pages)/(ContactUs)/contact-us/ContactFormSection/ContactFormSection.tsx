"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import sideImg from "@/assets/contact-us-img/side-img.png";
import Image from "next/image";

const ContactFormSection = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setLoading(true);
      setStatus("");

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.log(error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:py-13 md:px-16 px-5 py-6">
      <div className="flex flex-col items-center md:flex-row md:items-end pb-6">
        <h2 className="md:text-6xl font-heading font-bold text-[#2C2C2C] md:text-start text-center text-[39px]">
          We’re Here to Help You <span className="text-[#2680D9]"> Recover </span> Better
        </h2>
        <p className="text-[#656565] text-base md:text-start text-center">
          Whether you have questions about Cryotherapy, HBOT, memberships, or recovery treatments, our team is here to guide you every step of the way.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full bg-[#FAFAFA] border-2 border-[#DCDCDC] rounded-xl p-6">
          <h3 className="font-body text-[20px] font-semibold text-[#2C2C2C]">
            Get in Touch
          </h3>

          <p className="mt-2 font-body text-[13px] leading-[1.5] text-[#888888]">
            Reach out online, give us a call, or visit our Cheltenham wellness
            centre. We’ll help you find the right treatment for your recovery and
            wellness goals.
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="mt-11">
            <div className="grid grid-cols-2 gap-x-3 space-y-5">
              <div>
                <label className="mb-3 block text-base font-medium text-[#2C2C2C]">
                  Full Name
                </label>
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name"
                  required
                  className="h-[56px] md:h-[58px] w-full rounded-xl bg-white px-6 text-[13px] text-[#2C2C2C] outline-none placeholder:text-[#C9C9C9]"
                />
              </div>

              <div>
                <label className="mb-3 block text-base font-medium text-[#2C2C2C]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  required
                  className="h-[56px] md:h-[58px] w-full rounded-xl bg-white px-6 text-[13px] text-[#2C2C2C] outline-none placeholder:text-[#C9C9C9]"
                />
              </div>

              <div>
                <label className="mb-3 block text-base font-medium text-[#2C2C2C]">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+61485906541"
                  className="h-[56px] md:h-[58px] w-full rounded-xl bg-white px-6 text-[13px] text-[#2C2C2C] outline-none placeholder:text-[#C9C9C9]"
                />
              </div>

              <div>
                <label className="mb-3 block text-base font-medium text-[#2C2C2C]">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="h-[56px] md:h-[58px] w-full rounded-xl bg-white px-6 text-[13px] text-[#2C2C2C] outline-none placeholder:text-[#C9C9C9]"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-3 block text-base font-medium text-[#2C2C2C]">
                Message
              </label>

              <textarea
                name="message"
                placeholder="Write your message here..."
                required
                className="h-[150px] w-full resize-none rounded-[4px] bg-white px-6 py-5 text-[13px] text-[#2C2C2C] outline-none placeholder:text-[#C9C9C9]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 py-4 font-body w-full rounded-[6px] bg-[#008BE8] text-base font-semibold text-white"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {status && (
              <p className="mt-3 text-sm text-[#2C2C2C]">
                {status}
              </p>
            )}
          </form>
        </div>

        <div>
          <Image className="w-full" src={sideImg} alt="side-img" />
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;