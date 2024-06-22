import DebtScheduleTable from "./DebtScheduleTable/DebtScheduleTable"
import LeftIcons from "./LeftIcons"
import LoanDetailsTitle from "./LoanDetailsTitle"
import RightDetailsSection from "./RightDetailsSection"


const Debt = () => {
    return (
        <div className="flex box-border">
            <LeftIcons />
            <div className="flex flex-col  w-full">
                <LoanDetailsTitle />
                <RightDetailsSection />
                <DebtScheduleTable />
            </div>

        </div>
    )
}

export default Debt