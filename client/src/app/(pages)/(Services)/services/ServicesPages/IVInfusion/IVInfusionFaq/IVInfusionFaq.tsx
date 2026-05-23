"use client"

import CommonAccordion from "@/app/(pages)/(CommonPages)/CommonAccordion/CommonAcordion";
import CommonForm from "@/app/(pages)/(CommonPages)/CommonForm/CommonForm";
const IVInfusionFaq = () => {
      const formData = [
        { type: "text", placeholder: "Your Name", required: true },
        { type: "email", placeholder: "Your Email", required: true },
        { type: "textarea", placeholder: "Write a message", required: true },
    ];
    const faqData = [
        {
            question: "Do I need a consultation before an IV infusion?",
            answer:
                "Yes, a consultation is important before IV infusion therapy. It helps the team understand your goals, health background and suitability for treatment.",
        },
        {
            question: "Who performs the IV infusion treatment?",
            answer:
                "IV infusions should be performed by trained healthcare professionals in a safe setting.At Cryo SubZero, client comfort and professional care are part of the treatment process.",
        },
        {
            question: "Does an IV infusion hurt during the session?",
            answer:
                "You may feel a small pinch when the IV is inserted. After that, most clients sit back and relax while the infusion is delivered.",
        },
        {
            question: "Can IV infusions support hydration and wellness?",
            answer:
                "IV infusions may support hydration, nutrient intake and general wellbeing depending on the selected option. The best infusion choice should be based on your individual needs and consultation.",
        },
        {
            question: "Where can I book IV infusions near me?",
            answer:
                "Cryo SubZero offers IV infusions in Cheltenham, VIC. It is a local option for clients looking for hydration and wellness support near Bayside Melbourne.",
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

                <div className="order-1  lg:order-2">
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

export default IVInfusionFaq
