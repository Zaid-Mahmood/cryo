import CommonText from "../../(CommonPages)/CommonText/CommonText"
const Text = () => {
    return (
        <div >
            <CommonText
                title='More Than Just A <span class="text-[var(--btn-bg-primary)]"> Wellness</span> Center'
                subtitle="We combine advanced therapies like cryotherapy with personalized recovery solutions to reduce pain, improve performance, and support overall wellness. Designed to help you feel better, faster."
                buttonText="About Us"
                buttonHref="/about-us"
                align="left"
                line
            />
        </div>
    )
}

export default Text
