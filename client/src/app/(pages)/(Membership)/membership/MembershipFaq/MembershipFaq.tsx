  "use client"
import CommonForm from "@/app/(pages)/(CommonPages)/CommonForm/CommonForm";
import CommonAccordion from "@/app/(pages)/(CommonPages)/CommonAccordion/CommonAcordion";
const MembershipFaq = () => {
    const formData = [
        { type: "text", placeholder: "Your Name", required: true },
        { type: "email", placeholder: "Your Email", required: true },
        { type: "textarea", placeholder: "Write a message", required: true },
    ];
    const faqData = [
        {
            question: "What services does CryoSubZero offer?",
            answer:
                "CryoSubZero offers a range of recovery, wellness, and performance services in Cheltenham, including Whole Body Cryotherapy, Infrared Sauna, Red Light Therapy, Salt Therapy, Hyperbaric Chamber, IV Infusions, Lymphatic Drainage, Local Cryotherapy, and SCANECA 3D Body Scan.",
        },
        {
            question: "Who are CryoSubZero’s services suitable for?",
            answer:
                "Our services are suitable for athletes, gym-goers, busy professionals, tradies, wellness-focused clients, and anyone looking for support with recovery, fatigue, muscle soreness, stress, skin health, breathing wellness, circulation, or general wellbeing.",
        },
        {
            question: "Which CryoSubZero service is best for me?",
            answer:
                "The best service depends on your goal. Cryotherapy is popular for recovery, infrared sauna for relaxation, red light therapy for skin and cellular wellness, salt therapy for breathing support, lymphatic drainage for fluid movement, IV infusions for hydration, hyperbaric chamber for oxygen support, and SCANECA 3D Body Scan for body composition insights.",
        },
        {
            question: "Do I need to prepare before my appointment?",
            answer:
                "Preparation depends on the service you book. In general, arrive hydrated, avoid heavy meals immediately before your appointment, and wear comfortable clothing. For cryotherapy, your skin and clothing should be completely dry. Our team will guide you before your session begins.",
        },
        {
            question: "What should I wear or bring?",
            answer:
                "Wear comfortable clothing and bring a water bottle if needed. Some services may require specific preparation or protective items, which our team will explain before your appointment. The goal is to keep your session safe, comfortable, and easy from start to finish.",
        },
        {
            question: "How often should I book a wellness or recovery session?",
            answer:
                "How often you visit depends on your goals, lifestyle, and chosen service. Some clients come weekly for general wellness, while others book more regularly for sports recovery, fatigue support, or performance goals. Our team can help recommend a routine that suits your body.",
        },
        {
            question: "Is it safe to combine different services?",
            answer:
                "Yes, many clients combine services such as cryotherapy, infrared sauna, red light therapy, lymphatic drainage, and body scanning as part of a broader wellness routine. The best combination depends on your goals, health history, and how your body responds.",
        }, {
            question: "Cryotherapy near me, where can I find CryoSubZero?",
            answer:
                "If you are searching for cryotherapy near me in Cheltenham or Bayside Melbourne, CryoSubZero is located at Level 1, 284 Bay Road, Cheltenham VIC 3192. We are convenient for clients from Cheltenham, Highett, Mentone, Moorabbin, Beaumaris, Sandringham, and nearby Melbourne suburbs.",
        }, {
            question: "How long does a session take?",
            answer:
                "Session times vary depending on the service. Cryotherapy is usually quick, while infrared sauna, red light therapy, salt therapy, lymphatic drainage, hyperbaric chamber sessions, IV infusions, and SCANECA 3D Body Scan may take longer. Our team will let you know how much time to allow when booking.",
        }, {
            question: "What makes CryoSubZero different?",
            answer:
                "CryoSubZero brings multiple recovery, wellness, and performance services together in one Cheltenham location. Instead of focusing on just one treatment, we help clients choose the right service or combination of services for recovery, relaxation, energy, skin support, body insights, and overall wellbeing.",
        }, {
            question: "Do I need to book multiple services?",
            answer:
                "No, you can book one service at a time. Many clients start with one treatment and later combine services based on their recovery, wellness, or performance goals.",
        },
    ];
  return (
    <div>
  
        <div className="px-5 pb-8 md:px-16 md:pb-13">
            <h2 className="lg:hidden font-heading font-semibold text-3xl/12 pt-3 pb-6 text-center">
                Frequently{" "}
                <span className="text-[var(--btn-bg-primary)]">Asked</span> Questions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-11 lg:place-items-center">
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

                <div className="order-1  lg:col-span-2 lg:order-2">
                    <CommonAccordion items={faqData.map((item) => ({
                        title: item.question,
                        content: item.answer,
                    }))} defaultOpenIndex={0} />
                </div>
            </div>
            <hr className="lg:mt-13 border-[var(--border-primary)]" />
        </div>
  

    </div>
  )
}

export default MembershipFaq
