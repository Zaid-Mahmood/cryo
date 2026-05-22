interface TextProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonHref?: string;
  align?: "left" | "center";
  line?: boolean
}

import Link from "next/link";

const CommonText = ({
  title,
  subtitle,
  buttonText,
  buttonHref = "#",
  align = "left",
  line = true
}: TextProps) => {
  const isLeft = align === "left";
  return (
    <section className="w-full py-8 px-5 md:px-16 md:py-13">
      <div
        className={`gap-3 md:gap-8  ${isLeft
          ? "flex flex-col md:flex-row md:items-center md:justify-between justify-center items-center w-full"
          : "flex flex-col text-center items-center"
          }`}
      >
        <div className={`${isLeft ? 'md:max-w-[40%] w-full' : 'w-full'}`}>
          <h2 className={`${isLeft ? 'font-heading text-center md:text-left text-4xl font-bold leading-tight text-[var(--btn-bg-black)] md:text-5xl' : 'w-full text-4xl font-bold leading-tight text-[var(--btn-bg-black)] md:text-5xl font-heading text-center'}`} dangerouslySetInnerHTML={{ __html: title }} />
        </div>

        <div
          className={`${isLeft ? "md:text-left text-center md:max-w-[55%] w-full" : "text-center w-full"
            }`}
        >
          <p className={`font-body ${isLeft ? "text-center w-full md:pb-[46px]" : "text-center md:pb-0"} text-[var(--text-secondary)] text-base pb-6`}>
            {subtitle}
          </p>

          {buttonText && (
            <Link
              href={buttonHref}
              className="w-[160px] inline-flex rounded-lg bg-[var(--btn-bg-black)] px-11 py-3 font-body text-base font-semibold text-white transition hover:bg-black mb-6 md:mb-0"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
      {line && (
        <hr className="mt-2 md:mt-13 border-slate-200" />
      )}
    </section>
  );
};

export default CommonText;