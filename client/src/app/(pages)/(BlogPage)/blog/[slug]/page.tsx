import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs } from "../BlogDetailDummyUtils";

const sectionTitleClassName =
    "font-body text-sm font-medium text-[#262626] md:text-[25px]";

const sectionCopyClassName =
    "font-body text-sm leading-7 text-[#656565] md:text-base md:leading-8";

const BlogDetailPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const blog = blogs.find((item) => item.slug === slug);
    if (!blog) {
        notFound();
    }

    const [candidateSection, ...followupSections] = blog.considerations;

    return (
        <article className="bg-white px-5 py-8 md:px-16 md:py-13">
            <div >
                <header className="text-center">
                    <h1 className="font-heading text-[32px] font-bold text-[#2680D9] md:text-[56px]">
                        {blog.title}
                    </h1>

                    <h2 className="mt-2 font-heading text-[28px] text-[#262626] md:text-5xl">
                        {blog.subtitle}
                    </h2>

                    <p className="mt-3 font-body text-sm leading-6 text-[#8C8C8C] md:mt-5 md:text-base">
                        {blog.desc}
                    </p>
                </header>

                <Image
                    src={blog.image}
                    alt={blog.title}
                    priority
                    className="mt-7 h-auto w-full object-cover md:mt-11"
                />

                <div className="mt-7 space-y-10 md:mt-11 md:space-y-11">
                    <p className={sectionCopyClassName}>{blog.bannerDownContent}</p>

                    <section>
                        <h3 className={sectionTitleClassName}>{blog.innerBodyHeading}</h3>

                        <p className={`mt-2 ${sectionCopyClassName}`}>
                            {blog.innerBodyParagraph}
                        </p>
                    </section>

                    <blockquote className="mx-auto max-w-[1060px] border-l-[4px] border-l-[#2680D9] bg-[#E9F2FB] px-5 py-8  font-body text-base font-medium italic leading-7 text-[#004D99] md:px-6 md:text-xl md:leading-8">
                        {blog.notation1}
                    </blockquote>

                    <section>
                        <h3 className={sectionTitleClassName}>{blog.sessionQueries}</h3>

                        <div className="mt-5 grid items-stretch gap-7 lg:mt-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.93fr)] lg:gap-10">
                            <div className="space-y-5 md:space-y-6">
                                {blog.SessionWorksQuestions.map((item) => (
                                    <div key={item.question}>
                                        <h4 className="font-body text-base font-semibold leading-6 text-[#262626] md:text-lg">
                                            {item.question}
                                        </h4>

                                        <p className={`mt-1 ${sectionCopyClassName}`}>
                                            {item.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <Image
                                src={blog.sideImg}
                                alt="Cryotherapy session"
                                className="h-full w-full object-cover rounded-lg"
                            />
                        </div>
                    </section>
                    <hr className="text-[#D9D9D9]" />
                    <section>
                        <h3 className={sectionTitleClassName}>{blog.SessionBenefitsTitle}</h3>

                        <p className={`mt-3 ${sectionCopyClassName}`}>
                            {blog.SessionBenefitsDesc}
                        </p>

                        <div className="mt-5 grid items-stretch gap-7 lg:mt-7 lg:grid-cols-[minmax(360px,0.93fr)_minmax(0,1fr)] lg:gap-10">
                            <Image
                                src={blog.SessionBenefitRightImg}
                                alt="Cryotherapy chamber"
                                className="h-full min-h-[360px] w-full object-cover md:min-h-[560px]"
                            />

                            <div className="space-y-5 md:space-y-6">
                                {blog.SessionBenefitsQuestions.map((item) => {
                                    if (!item) return null;

                                    return (
                                        <div key={item.question}>
                                            <h4 className="font-body text-base font-semibold leading-6 text-[#262626] md:text-lg">
                                                {item.question}
                                            </h4>

                                            <p className={`mt-1 ${sectionCopyClassName}`}>
                                                {item.answer}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                    <hr className="text-[#D9D9D9]" />

                    <section>
                        <h3 className={sectionTitleClassName}>{blog.tableMainHeading}</h3>

                        <p className={`mt-3 ${sectionCopyClassName}`}>
                            {blog.tableMainDesc}
                        </p>

                        <div className="mt-5 overflow-x-auto border border-[#D9D9D9] rounded-lg md:mt-7">
                            <table className="w-full border-collapse font-body">
                                <thead className="bg-[#E9F2FB]">
                                    <tr>
                                        {blog.tableHeadiings.map((heading) => (
                                            <th
                                                key={heading}
                                                className="px-5 py-4 text-left text-xl font-medium text-[#004D99] md:px-6 md:text-base"
                                            >
                                                {heading}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody>
                                    {blog.tableData.map((item) => (
                                        <tr
                                            key={item.feature}
                                            className="border-t border-[#E5E5E5] text-sm leading-6 text-[#656565] md:text-base"
                                        >
                                            <td className="px-5 py-4 text-[#262626] md:px-6">
                                                {item.feature}
                                            </td>

                                            <td className="px-5 py-4 md:px-6">
                                                {item.wholeBodyCryotherapy}
                                            </td>

                                            <td className="px-5 py-4 md:px-6">
                                                {item.localisedCryotherapy}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {candidateSection && (
                        <section>
                            <h3 className={sectionTitleClassName}>
                                {candidateSection.question}
                            </h3>
                            <p className={`mt-3 ${sectionCopyClassName}`}>
                                {candidateSection.answer}
                            </p>
                        </section>
                    )}
                     

                    <aside className="mx-auto max-w-[1060px] border-l-[4px] border-l-[#FF8D28] bg-[#FFF1E5] px-5 py-8  font-body text-base font-medium italic leading-7  md:px-6 md:text-xl md:leading-8">
                        <h3 className="font-body text-base font-bold uppercase text-[#FF8D28] md:text-lg">
                            {blog.precautionQANotation.question}
                        </h3>
                        <p className={`mt-3 text-[#FF8D28] ${sectionCopyClassName}`}>
                            {blog.precautionQANotation.answer}
                        </p>
                    </aside>

                    {followupSections.map((item) => (
                        <section key={item.question}>
                            <h3 className={sectionTitleClassName}>{item.question}</h3>
                            <p className={`mt-3 ${sectionCopyClassName}`}>{item.answer}</p>
                        </section>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default BlogDetailPage;
