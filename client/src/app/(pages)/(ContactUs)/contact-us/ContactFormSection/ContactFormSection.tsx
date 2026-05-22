"use client"
import sideImg from "@/assets/contact-us-img/side-img.png";
import Image from "next/image";
const ContactFormSection = () => {
    const formFields = [
        {
            type: "text",
            placeholder: "Full Name",
            name: "fullName",
        },

        {
            type: "email",
            placeholder: "Work Email",
            name: "email",
        },

        {
            type: "text",
            placeholder: "Subject",
            name: "subject",
        },

        {
            type: "textarea",
            placeholder: "Message",
            name: "message",
        },
    ];
    return (
        <div className="md:py-13 md:px-16 px-5 py-6">
            <div className="flex flex-col items-center md:flex-row md:items-end pb-6">
                <h2 className="md:text-6xl font-heading font-bold text-[#2C2C2C] md:text-start text-center text-[39px]">We’re Here to Help You <span className="text-[#2680D9]"> Recover </span> Better</h2>
                <p className="text-[#656565] text-base md:text-start text-center">Whether you have questions about Cryotherapy, HBOT, memberships, or recovery treatments, our team is here to guide you every step of the way.</p>
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
                    <form className="mt-11">
                        <div className="grid grid-cols-2 gap-x-3 space-y-5">
                            <div >
                                <label className="mb-3 block text-base font-medium text-[#2C2C2C]">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="h-[56px] md:h-[58px] w-full rounded-xl bg-white px-6 text-[13px] text-[#2C2C2C] outline-none placeholder:text-[#C9C9C9]"
                                />
                            </div>

                            <div >
                                <label className="mb-3 block text-base font-medium text-[#2C2C2C]">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="email@example.com"
                                    className="h-[56px] md:h-[58px] w-full rounded-xl bg-white px-6 text-[13px] text-[#2C2C2C] outline-none placeholder:text-[#C9C9C9]"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block text-base font-medium text-[#2C2C2C]">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="+61485906541"
                                    className="h-[56px] md:h-[58px] w-full rounded-xl bg-white px-6 text-[13px] text-[#2C2C2C] outline-none placeholder:text-[#C9C9C9]"
                                />
                            </div>

                            <div >
                                <label className="mb-3 block text-base font-medium text-[#2C2C2C]">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="h-[56px] md:h-[58px] w-full rounded-xl bg-white px-6 text-[13px] text-[#2C2C2C] outline-none placeholder:text-[#C9C9C9]"
                                />
                            </div>
                        </div>

                        <div className="mt-5">
                            <label className="mb-3 block text-base font-medium text-[#2C2C2C]">
                                Message
                            </label>

                            <textarea
                                placeholder="Write your message here..."
                                className="h-[150px] w-full resize-none rounded-[4px] bg-white px-6 py-5 text-[13px] text-[#2C2C2C] outline-none placeholder:text-[#C9C9C9]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-6 py-4 font-body w-full rounded-[6px] bg-[#008BE8] text-base font-semibold text-white"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                <div className="">
                    <Image className="w-full" src={sideImg} alt="side-img" />
                </div>
            </div>
        </div>
    )
}

export default ContactFormSection
