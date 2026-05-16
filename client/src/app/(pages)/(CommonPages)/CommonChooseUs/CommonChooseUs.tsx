interface TextProps {
    title: string;
    subtitle: string;
    align?: "left" | "center";
}

const CommonChooseUs = ({
    title,
    subtitle,
    align = "left",
}: TextProps) => {
    const isLeft = align === "left";
    return (
        <div
            className={`gap-0 md:gap-8  ${isLeft
                ? "flex flex-col md:flex-row md:items-center md:justify-between justify-center items-center w-full"
                : "flex flex-col text-center items-center"
                }`}
        >
            <div className={`${isLeft ? 'md:max-w-[40%] w-full' : 'w-full'}`}>
                <h2 className={`${isLeft ? 'font-heading text-center md:text-left text-3xl font-bold leading-tight text-[var(--btn-bg-black)] md:text-5xl' : 'w-full text-4xl font-bold leading-tight text-[var(--btn-bg-black)] md:text-5xl font-heading text-center'}`} dangerouslySetInnerHTML={{ __html: title }} />
            </div>

            <div
                className={`${isLeft ? "md:text-left text-center md:max-w-[55%] w-full" : "text-center w-full"
                    }`}
            >
                <p className={`py-3 font-body ${isLeft ? "text-center md:text-left w-full" : "text-center"} text-[var(--text-secondary)] text-base  md:pb-12`}>
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

export default CommonChooseUs
