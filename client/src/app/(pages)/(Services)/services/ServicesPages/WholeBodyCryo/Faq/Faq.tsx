"use client"
import CommonForm from "@/app/(pages)/(CommonPages)/CommonForm/CommonForm";
import CommonAccordion from "@/app/(pages)/(CommonPages)/CommonAccordion/CommonAcordion";
const Faq = () => {
    const formData = [
        { type: "text", placeholder: "Your Name", required: true },
        { type: "email", placeholder: "Your Email", required: true },
        { type: "textarea", placeholder: "Write a message", required: true },
    ];
    const faqData = [
        {
            question: "Is whole body cryotherapy suitable for first-time clients?",
            answer:
                "Yes, first-time clients can try whole body cryotherapy with proper guidance from the team.The session is short, and everything is explained before you step inside.",
        },
        {
            question: "How can whole body cryotherapy support recovery?",
            answer:
                "Whole body cryotherapy may help support muscle recovery, soreness and post-training comfort.Many active clients use it as part of their regular wellness and recovery routine.",
        },
        {
            question: "What should I do before my cryotherapy session?",
            answer:
                "Arrive with dry skin and avoid applying heavy lotions or oils before your appointment.The team will guide you on what to wear and how to prepare safely.",
        },
        {
            question: "Is cryotherapy near Cheltenham useful after gym or sport?",
            answer:
                "Yes, many clients book cryotherapy near Cheltenham after gym, running or sport. It may help you feel refreshed and support your body’s natural recovery process.",
        },
        {
            question: "Can I return to normal activities after cryotherapy?",
            answer:
                "Most clients can return to normal daily activities straight after the session. It is a quick treatment, making it suitable for busy schedules.",
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
    );
};

export default Faq;
