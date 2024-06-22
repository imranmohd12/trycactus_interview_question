import Button from "../../../formelements/Button"
import BankAddress from "./BankAddress"
import BankTitle from "./BankTitle"
import BottomTotal from "./BottomTotal"
import CurrencyViewField from "./CurrencyViewField"
import MonthsViewField from "./MonthsViewField"

const BankAndLoanDetailsCard = () => {
  return (
    <div className="flex flex-col w-[710px] bg-white m-[20px] rounded-t-[8px]">
      <div className="flex justify-between items-center p-[20px] border-b border-inputbordergray">
        <BankTitle />
        <BankAddress />
        <Button value="Contact Info" styleClasses="border border-inputbordergray" />
      </div>
      <div className="flex p-[20px] justify-between">
        <div className="flex flex-col gap-[10px]">
          <CurrencyViewField labelName="Initital Loan Balance" value="450,000" currency="$" />
          <CurrencyViewField labelName="Remaining Loan Balance" value="422,922" currency="$" />
        </div>
        <div className="flex flex-col gap-[10px]">
          <MonthsViewField labelName="Initial Ammortization" value={360} />
          <MonthsViewField labelName="Remaining Ammortization" value={347} />
        </div>
        <div className="flex flex-col gap-[10px]">
          <MonthsViewField labelName="Initial Term" value={60} />
          <MonthsViewField labelName="Remaining Term" value={47} />
        </div>
      </div>
      <BottomTotal />
    </div>
  )
}

export default BankAndLoanDetailsCard