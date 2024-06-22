import BankAndLoanDetailsCard from "./BankAndLoanDetailsCard/BankAndLoanDetailsCard"
import InterestDetailsCard from "./InterestDetailsCard/InterestDetailsCard"

const RightDetailsSection = () => {
    return (
        <div className="flex w-[100%]">
            <BankAndLoanDetailsCard />
            <InterestDetailsCard />
        </div>
    )
}

export default RightDetailsSection