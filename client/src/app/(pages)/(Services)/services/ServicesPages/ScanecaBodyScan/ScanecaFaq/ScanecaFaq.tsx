"use client"

import CommonAccordion from "@/app/(pages)/(CommonPages)/CommonAccordion/CommonAcordion";
import CommonForm from "@/app/(pages)/(CommonPages)/CommonForm/CommonForm";
const ScanecaFaq = () => {
    const formData = [
        { type: "text", placeholder: "Your Name", required: true },
        { type: "email", placeholder: "Your Email", required: true },
        { type: "textarea", placeholder: "Write a message", required: true },
    ];
    const faqData = [
        {
            question: "What does a SCANECA 3D Body Scan show?",
            answer:
                "A SCANECA 3D Body Scan can show body measurements, posture insights and body composition data. It helps clients track progress beyond what normal scales can show.",
        },
        {
            question: " Is the SCANECA scan suitable for beginners?",
            answer:
                "Yes, the scan is quick, non-invasive and suitable for beginners. It is helpful if you want a clear starting point for fitness, wellness or body goals.",
        },
        {
            question: "Why is a 3D body scan better than only using scales?",
            answer:
                "Scales only show body weight, which does not always reflect real progress. A 3D body scan gives more detail about shape, measurements, posture and body changes.",
        },
        {
            question: "What should I wear for a SCANECA scan?",
            answer:
                "Wear fitted activewear so the scan can capture your body shape more accurately. Avoid loose clothing, jackets or bulky layers during the scan.",
        },
        {
            question: "Where can I get a 3D body scan near Cheltenham?",
            answer:
                "Cryo SubZero offers SCANECA 3D Body Scan in Cheltenham, VIC. It is a local option for clients tracking fitness, wellness and body composition progress.",
        },
        
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

export default ScanecaFaq
