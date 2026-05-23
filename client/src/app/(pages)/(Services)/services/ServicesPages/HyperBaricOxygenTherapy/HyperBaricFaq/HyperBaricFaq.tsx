"use client"

import CommonAccordion from "@/app/(pages)/(CommonPages)/CommonAccordion/CommonAcordion";
import CommonForm from "@/app/(pages)/(CommonPages)/CommonForm/CommonForm";
const HyperBaricFaq = () => {
    const formData = [
        { type: "text", placeholder: "Your Name", required: true },
        { type: "email", placeholder: "Your Email", required: true },
        { type: "textarea", placeholder: "Write a message", required: true },
    ];
    const faqData = [
        {
            question: "What should I expect inside the hyperbaric chamber?",
            answer:
                "You relax inside the chamber while the pressure is gradually adjusted in a controlled setting.The team explains the process beforehand so you feel prepared and comfortable.",
        },
        {
            question: "Will I feel pressure in my ears during HBOT?",
            answer:
                "Some clients may feel mild ear pressure, similar to flying in a plane. Swallowing or gently equalising often helps, and staff can guide you if needed.",
        },
        {
            question: "Is hyperbaric oxygen therapy suitable for recovery?",
            answer:
                "Hyperbaric oxygen therapy is often used as part of a wellness and recovery routine. It supports oxygen delivery in a pressurised environment, but it is not a replacement for medical care.",
        },
        {
            question: "Who should check before booking HBOT?",
            answer:
                "Clients with ear, sinus, lung, heart, pregnancy or complex medical concerns should seek medical advice first. Safety and suitability are important before starting hyperbaric oxygen therapy.",
        },
        {
            question: "Where can I find a hyperbaric chamber near Cheltenham?",
            answer:
                "Cryo SubZero offers hyperbaric chamber sessions in Cheltenham, VIC. It is a local option for clients searching for HBOT near Bayside and Melbourne.",
        }
    ];
    return (
        <div className="px-5 pb-8 md:px-16 md:pb-13">
            <h2 className="lg:hidden font-heading font-semibold text-3xl/12 pt-3 pb-6 text-center">
                Frequently{" "}
                <span className="text-[var(--btn-bg-primary)]">Asked</span> Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-x-11 lg:place-items-center">
                <div className="order-2  mt-6 lg:mt-0 lg:col-span-1 lg:order-1">
                    <h2 className="hidden lg:block font-heading font-semibold text-5xl/12 pt-16 pb-11">
                        Frequently{" "}
                        <span className="text-[var(--btn-bg-primary)]">Asked</span> Questions
                    </h2>

                    <div className="rounded-xl  shadow-[0px_4px_10px_#0000000F,0px_8px_20px_#0000001A] bg-[#FAFAFA] p-6">
                        <CommonForm
                            heading="Still Have Questions?"
                            description="Our team of experts is here to guide you, whether you have questions about cryotherapy, HBOT, or any of our other therapies."
                            fields={formData}
                            buttonLabel="Get In Touch"
                            buttonHref="#"
                        />
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <CommonAccordion items={faqData.map((item) => ({
                        title: item.question,
                        content: item.answer,
                    }))} defaultOpenIndex={0} />
                </div>
            </div>
            <hr className="lg:mt-13 border-[var(--border-primary)]" />
        </div>
    )
}

export default HyperBaricFaq
