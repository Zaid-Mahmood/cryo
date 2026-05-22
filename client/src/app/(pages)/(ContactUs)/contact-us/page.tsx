import ContactFormSection from "./ContactFormSection/ContactFormSection";
import HoursSection from "./HoursSection/HoursSection";
const page = () => {
  return (
    <div>
        <ContactFormSection/>
        <hr className="my-0 md:mx-16 mx-8 text-[var(--border-primary)]"/>
        <HoursSection/>
    </div>
  )
}

export default page
