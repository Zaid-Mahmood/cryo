"use client"

import CommonAccordion from "@/app/(pages)/(CommonPages)/CommonAccordion/CommonAcordion";
import CommonForm from "@/app/(pages)/(CommonPages)/CommonForm/CommonForm";
const LymphaticDrainageFaq = () => {
     const formData = [
        { type: "text", placeholder: "Your Name", required: true },
        { type: "email", placeholder: "Your Email", required: true },
        { type: "textarea", placeholder: "Write a message", required: true },
    ];
     const faqData = [
        {
            question: "What does lymphatic drainage compression feel like?",
            answer:
                "Lymphatic drainage compression feels like gentle pressure and release around the legs.Many clients describe it as relaxing, comfortable and helpful for tired legs.",
        },
        {
            question: "Is lymphatic drainage good after gym or sport?",
            answer:
                "Yes, many active clients use lymphatic drainage after gym, running or sport. It may help support circulation, recovery and relief from heavy-feeling legs.",
        },
        {
            question: "What should I wear for lymphatic drainage therapy?",
            answer:
                "Wear comfortable activewear, leggings or fitted clothing for your session. This helps the compression boots fit properly and keeps you comfortable.",
        },
        {
            question: "Can lymphatic drainage help with heavy legs?",
            answer:
                "Many clients book lymphatic drainage when their legs feel tired, heavy or overworked. If swelling is sudden, painful or one-sided, seek medical advice before treatment.",
        },
        {
            question: "Where can I find lymphatic drainage near Cheltenham?",
            answer:
                "Cryo SubZero offers lymphatic drainage therapy in Cheltenham, VIC. It is a convenient recovery option for clients near Bayside, Highett, Mentone and Moorabbin.",
        },
        
    ];
  return (
    <div className="px-5 pb-8 md:px-16 md:pb-13">
            <h2 className="lg:hidden font-heading font-semibold text-3xl/12 pt-3 pb-6 text-center">
                Frequently{" "}
                <span className="text-[var(--btn-bg-primary)]">Asked</span> Questions
            </h2>
            <div className="grid md:grid-cols-2  gap-x-11 lg:place-items-center">
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

export default LymphaticDrainageFaq
