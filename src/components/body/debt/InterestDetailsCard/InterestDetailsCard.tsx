import CurrencyViewField from "../BankAndLoanDetailsCard/CurrencyViewField"
import MonthsViewField from "../BankAndLoanDetailsCard/MonthsViewField"

const InterestDetailsCard = () => {
    return (
        <div className="bg-white m-[20px] rounded-[8px] w-[40%] w-min-[500px] h-fit">
            <div className="text-[18px] font-semibold p-[30px] border-b border-inputbordergray">Interest Details</div>
            <div className="flex p-[20px] justify-between">
                <div className="flex flex-col gap-[10px]">
                    <CurrencyViewField labelName="Interest Rate" value="2.5%" currency="" />
                    <CurrencyViewField labelName="Principal Down Start" value="12/05/2023" currency="" />
                </div>
                <div className="flex flex-col gap-[10px]">
                    <MonthsViewField labelName="Interest only period" value={12} />
                    <CurrencyViewField labelName="Maturation Date" value="12/05/2023" currency="" />
                </div>
                <div className="flex flex-col gap-[10px]">
                    <CurrencyViewField labelName="Rate Type" value="FIXED" currency="" />
                </div>
            </div>
        </div>
    )
}

export default InterestDetailsCard