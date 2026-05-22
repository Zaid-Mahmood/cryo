const AboutUsText = () => {
    return (
        <section className="w-full py-8 px-5 md:px-16 md:py-13">
            <div className="gap-3 md:gap-8 flex md:flex-row flex-col justify-center md:justify-between items-center" >
                <div className='w-full md:max-w-[25%] w-full'>
                    <h2 className='md:text-left text-center font-heading md:text-left  text-5xl leading-tight text-[var(--btn-bg-black)] md:text-5xl'>Why We Built <span className="text-[#2680D9]  font-semibold"> Cryo SubZero</span></h2>
                </div>
                <div className="w-full md:max-w-[50%]">
                    <p className='font-body w-full md:pb-[46px] md:text-left text-center text-[var(--text-secondary)] text-base pb-6'>
                        Cryo SubZero was created with a simple belief — people deserve to feel their best, not just occasionally, but every day. Built around recovery, performance, and long-term wellbeing, our space brings together advanced wellness therapies designed to support both body and mind.
                    </p>
                    <p className='font-body w-full md:pb-[46px]  md:text-left text-center text-[var(--text-secondary)] text-base pb-6'>
                        We wanted to create more than a recovery centre. Our goal was to build a welcoming environment where science-backed treatments, personalised care, and modern wellness come together to help people move better, recover faster, and live healthier lives.
                    </p>
                </div>
            </div>
            <hr className="lg:mt-13 border-[var(--border-primary)]" />
        </section>
    )
}

export default AboutUsText
