import checkImg from "@/assets/membership-img/check.png";
import Image from "next/image";
const ComparePlans = () => {
    const planColumns = [
        { key: 'standard', label: 'Essential Plan' },
        { key: 'professional', label: 'Performance Plan', tag: "Popular" },
        { key: 'enterprise', label: 'Elite Plan', tag: "Best Value" },
    ]

    const comparisonRows = [
        {
            feature: 'Whole Body Cryotherapy',
            standard: true,
            professional: true,
            enterprise: true,
        },
        {
            feature: 'Infrared Sauna',
            standard: true,
            professional: true,
            enterprise: true,
        },
        {
            feature: 'Red Light Therapy',
            standard: true,
            professional: true,
            enterprise: true,
        },
        {
            feature: 'Salt Therapy',
            standard: true,
            professional: true,
            enterprise: true,
        },
        {
            feature: 'Body Composition Scan',
            standard: true,
            professional: true,
            enterprise: true,
        },
        {
            feature: 'Lymphatic Compression',
            standard: "-",
            professional: true,
            enterprise: true,
        },
        {
            feature: "Local Cryotherapy",
            standard: '-',
            professional: "-",
            enterprise: true,
        },
        {
            feature: "HBOT (1 session)",
            standard: '-',
            professional: "Per month",
            enterprise: "Per week",
        },
        {
            feature: "Advance Booking",
            standard: '3 Days',
            professional: "5 Days",
            enterprise: "7 Days",
        }
    ]

    const renderCellValue = (
        value: string | boolean,
        feature: string
    ) => {
        if (typeof value === "boolean") {
            return (
                <Image
                    src={checkImg}
                    alt="check-img"
                    className="mx-auto h-6 w-6"
                />
            );
        }

        const isAdvanceBooking = feature === "Advance Booking";
        const isHBOT = feature === "HBOT (1 session)" && value !== "-";

        return (
            <span
                className={`
        text-base 
        ${isAdvanceBooking ? "text-[#2680D9] font-semibold" : "text-text-black"}
        ${isHBOT
                        ? "inline-block rounded-md border border-[#D9D9D9] bg-white px-3 py-1"
                        : ""
                    }
      `}
            >
                {value}
            </span>
        );
    };
    return (
        <div className="pb-13 px-4 sm:px-6 lg:px-16">
            <h2 className="text-[32px] font-semibold text-text-black pb-3">Compare Plans</h2>
            <p className="text-base text-[#656565] pb-11">
                Begin your wellness journey at Cryo SubZero.
            </p>

            <div className="overflow-x-auto  border-[0.5px] border-border-[#262626] bg-white shadow-sm">
                <table className="min-w-[720px] w-full table-auto  border-spacing-0">
                    <thead className="bg-[#FAFAFA] text-text-black text-2xl">
                        <tr>
                            <th className="pl-6 pr-[194px] pt-5 pb-15 text-left font-body font-medium text-xl  align-middle">Treatments</th>
                            {planColumns.map((column) => (
                                <th
                                    key={column.key}
                                    className="px-6  font-normal text-center 
                                     pt-5 pb-15 font-body font-medium text-xl  align-middle"
                                >
                                    <div className="gap-2">
                                        <span>{column.label}</span>
                                        <br/>
                                        {column.tag && (
                                            <span
                                                className={`rounded-md px-3 py-1 text-sm font-semibold
                                     ${column.tag === "Best Value"
                                                        ? "bg-[#FFFAE5] text-[#FFCC00]"
                                                        : "bg-[#F2F7FD] text-[#2680D9]"
                                                    }`}
                                            >
                                                {column.tag}
                                            </span>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonRows.map((row, rowIndex) => (
                            <tr
                                key={row.feature}
                                className={`border-t border-border-secondary  ${rowIndex === comparisonRows.length - 1 ? 'border-b' : ''}`}
                            >
                                <td className="px-6 py-5 text-base text-text-black">{row.feature}</td>
                                {planColumns.map((column) => (
                                    <td key={column.key} className="px-6 py-5 text-center">
                                        {renderCellValue(
                                            row[column.key as keyof typeof row] as string | boolean,
                                            row.feature
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ComparePlans
