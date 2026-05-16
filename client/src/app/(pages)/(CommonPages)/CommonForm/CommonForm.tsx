import Link from "next/link";
interface FormField {
    type: string;
    placeholder: string;
    required?: boolean;
}

interface CommonFormProps {
    heading: string;
    description: string;
    fields: FormField[];
    buttonLabel: string;
    buttonHref: string;
}

const CommonForm = ({
    heading,
    description,
    fields,
    buttonLabel,
    buttonHref,
}: CommonFormProps) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Form Submitted");
    };

    return (
        <div>
            <h4 className="font-heading text-xl text-center lg:text-left lg:text-3xl font-bold text-[var(--btn-bg-black)]">
                {heading}
            </h4>

            <p className="pt-2 pb-6 font-body text-xs text-center lg:text-left text-[var(--text-description)]">
                {description}
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
                {fields.map((field, index) => (
                    <div key={index}>
                        {field.type === "textarea" ? (
                            <textarea
                                placeholder={field.placeholder}
                                required={field.required}
                                className="min-h-[120px] w-full resize-none rounded-lg border border-[var(--border-primary)] px-4 py-3 outline-none placeholder:text-[var(--text-placehoder)] bg-white"
                            />
                        ) : (
                            <input
                                type={field.type}
                                placeholder={field.placeholder}
                                required={field.required}
                                className="w-full rounded-lg border border-[var(--border-primary)] px-4 py-3 outline-none placeholder:text-[var(--text-placehoder)] bg-white"
                            />
                        )}
                    </div>
                ))}

                <Link href={buttonHref}>
                    <button
                        type="submit"
                        className="cursor-pointer rounded-lg bg-[var(--btn-bg-primary)] px-13 py-4 font-body text-base font-semibold text-white transition hover:bg-[var(--hover-bg-primary)] w-full lg:w-[70%]"
                    >
                        {buttonLabel}
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default CommonForm;