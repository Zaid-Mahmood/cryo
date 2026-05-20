type MembershipWrapperProps = {
    title: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
}
const CommonMembershipPage = ({
    title,
    description,
    children,
    className = "",
}: MembershipWrapperProps) => {
    return (
        <div className={`w-full bg-white px-5 py-8 md:px-16 md:py-13 ${className}`}>
            <div>
                <h2 className="font-heading text-2xl font-bold text-[var(--btn-bg-black)] text-center md:text-left md:text-3xl">
                    {title}
                </h2>

                {description && (
                    <p className="mt-4 font-body text-sm leading-relaxed text-[var(--text-description)] text-center md:text-left md:text-base">
                        {description}
                    </p>
                )}
            </div>

            <div className="mt-6 md:mt-11">{children}</div>
        </div>
    )
}

export default CommonMembershipPage
