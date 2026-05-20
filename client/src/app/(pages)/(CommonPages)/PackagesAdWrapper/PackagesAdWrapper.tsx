import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import rightArrow from "@/assets/packages/righ-arrow.png";
interface BundleCardProps {
  image: StaticImageData | string;
  tag: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  buttonText: string;
  buttonHref: string;
}

const PackagesAdWrapper = ({
  image,
  tag,
  title,
  description,
  price,
  duration,
  buttonText,
  buttonHref,
}: BundleCardProps) => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col md:flex-row md:gap-11">
        <div className="w-full md:w-[30%] h-full">
          <Image
            src={image}
            alt={title}
            className="rounded-xl w-full object-contain"
          />
        </div>

        <div className="font-body flex  flex-col items-start px-8 py-4">
          <p className="py-1 px-[10px]  text-[13px] font-bold text-[var(--btn-bg-primary)] bg-[var(--bg-primary)]">
            {tag}
          </p>

          <h3 className="mt-3 mb-2 text-xl font-semibold text-[#2C2C2C]">
            {title}
          </h3>

          <p className="mb-6 text-base text-[var(--text-secondary)]">
            {description}
          </p>

          <h4 className="mb-2 font-heading text-3xl font-bold leading-none text-[var(--btn-bg-primary)]">
            {price}
          </h4>

          <p className="mb-6 text-[13px] font-medium text-[var(--text-description)]">
            {duration}
          </p>

          <Link
            href={buttonHref}
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-[var(--btn-bg-primary)] px-6 py-4 font-body md:text-base text-sm font-semibold text-white transition hover:bg-[var(--hover-bg-primary)]"
          >
            {buttonText}
            <Image src={rightArrow} alt = "right-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};
  
export default PackagesAdWrapper
