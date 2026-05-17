interface TextProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonHref?: string;
  align?: "left";
}


const CommonStepText = ({
  title,
  subtitle,
  align = "left",
}: TextProps) => {
  const isLeft = align === "left";
  return (
    <section className="w-full pt-8 px-5 md:px-16 md:pt-13">
      <div
        className={`gap-3 md:gap-8  ${isLeft
          ? "flex flex-col md:flex-row md:items-center md:justify-between justify-center items-center w-full"
          : "flex flex-col text-center items-center"
          }`}
      >
        <div className={`${isLeft ? 'md:max-w-1/2 w-full' : 'w-full'}`}>
          <h2 className={`${isLeft ? 'font-heading text-center md:text-left text-4xl font-bold leading-tight text-[var(--btn-bg-black)] md:text-5xl' : 'w-full text-4xl font-bold leading-tight text-[var(--btn-bg-black)] md:text-5xl font-heading text-center'}`} dangerouslySetInnerHTML={{ __html: title }} />
        </div>

        <div
          className={`${isLeft ? "md:text-left text-center md:max-w-1/2 w-full" : "text-center w-full"
            }`}
        >
          <p className={`font-body ${isLeft ? "md:text-left w-full" : "text-center"} text-[var(--text-secondary)] text-base pb-6 md:pb-12`}>
            {subtitle}
          </p>
        </div>
      </div>
    
    </section>
  );
};

export default CommonStepText;