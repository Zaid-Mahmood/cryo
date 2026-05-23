"use client"

import CommonAccordion from "@/app/(pages)/(CommonPages)/CommonAccordion/CommonAcordion";
import CommonForm from "@/app/(pages)/(CommonPages)/CommonForm/CommonForm";

const LocalCryoFaq = () => {
      const formData = [
        { type: "text", placeholder: "Your Name", required: true },
        { type: "email", placeholder: "Your Email", required: true },
        { type: "textarea", placeholder: "Write a message", required: true },
    ];
     const faqData = [
        {
            question: "How is local cryotherapy different from whole body cryotherapy?",
            answer:
                "Local cryotherapy targets one specific area, such as the knee, shoulder, back or ankle.Whole body cryotherapy exposes the body more generally for overall recovery support.",
        },
        {
            question: "Is local cryotherapy useful for targeted soreness?",
            answer:
                "Yes, local cryotherapy may support comfort in a specific sore or overworked area. It is often chosen when clients want focused cold therapy rather than a full-body session.",
        },
        {
            question: "What should I wear for local cryotherapy?",
            answer:
                "Wear clothing that allows easy access to the treatment area. For example, shorts may be suitable for knees or ankles, while a loose top may help for shoulders.",
        },
        {
            question: "Can local cryotherapy be used after sport?",
            answer:
                "Many clients use local cryotherapy after sport for targeted recovery support. If you have a serious injury or ongoing pain, medical advice is recommended first.",
        },
        {
            question: "Where can I book local cryotherapy near me?",
            answer:
                "Cryo SubZero provides local cryotherapy in Cheltenham, VIC. It is ideal for clients searching for targeted cold therapy near Bayside Melbourne.",
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

export default LocalCryoFaq
