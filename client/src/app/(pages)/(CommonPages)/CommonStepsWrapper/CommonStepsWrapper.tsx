import Image, { StaticImageData } from "next/image";

interface StepItem {
  step: string;
  heading: string;
  desc: string;
}

interface SessionStepsWrapperProps {
  image: StaticImageData;
  steps: StepItem[];
}

const CommonStepsWrapper = ({
  image,
  steps,
}: SessionStepsWrapperProps) => {
  return (
    <div className='py-8 px-5 md:py-13 md:px-16'>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">

        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={image}
            alt="session-steps"
            className="w-full max-w-md object-cover rounded-xl"
          />
        </div>

        {/* Left Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 order-2 lg:order-1">
          {steps.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="border border-[var(--border-primary)] bg-[#F5FAFD] rounded-xl p-5"
            >
              <span className="font-heading text-6xl font-bold text-[var(--text-blue)]">
                {item.step}
              </span>

              <h3 className="font-body text-[var(--btn-bg-black)] pt-15 text-base font-semibold">
                {item.heading}
              </h3>

              <p className="pt-3 text-[var(--text-secondary)] lg:leading-7 text-xs lg:text-[15px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 order-3">
          {steps.slice(2, 4).map((item, index) => (
            <div
              key={index}
              className="border border-[var(--border-primary)] bg-[#F5FAFD] rounded-xl p-5"
            >
              <span className="font-heading text-6xl font-bold text-[var(--text-blue)]">
                {item.step}
              </span>

              <h3 className="font-body text-[var(--btn-bg-black)] pt-15 text-base font-semibold">
                {item.heading}
              </h3>

              <p className="pt-3 text-gray-600 lg:leading-7 text-xs lg:text-[15px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CommonStepsWrapper;