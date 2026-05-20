import PackagesBanner from "./PackagesBanner/PackagesBanner";
import PackagesOverview from "./PackagesOverview/PackagesOverview";
import RecoveryPackages from "./RecoveryPackages/RecoveryPackages";
const PackagesPage = () => {
    return (
        <div>
            <PackagesBanner/>
            <PackagesOverview/>
            <RecoveryPackages/>
        </div>
    )
}

export default PackagesPage
