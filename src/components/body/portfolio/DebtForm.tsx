import { CALENDARTERMSOPTIONs, RATEADJUSTMENLIST } from "../../../utils/constants"
import CurrencyInput from "../../formelements/CurrencyInput"
import Dropdown from "../../formelements/Dropdown"
import InputAndOption from "../../formelements/InputAndOption"
import PostfixInput from "../../formelements/PostfixInput"
import TextInput from "../../formelements/TextInput"
import ToggleButton from "../../formelements/ToggleButton"

const DebtForm = () => {
    return (
        <form className="flex flex-col gap-[32px] border-l border-inputbordergray my-[20px]">
            <div className="flex gap-[16px] border-b border-inputbordergray p-[20px] flex-wrap">
                <TextInput labelName="Lender" styleClasses="w-[400px]" />
                <TextInput labelName="Email" styleClasses="w-[275px]" />
                <TextInput labelName="Phone" styleClasses="w-[275px]" />
            </div>
            <div className="flex gap-[16px] px-[20px] flex-wrap">
                <TextInput labelName="Start Date" typeInput="date" styleClasses="w-[210px] " />
                <CurrencyInput currency="$" labelName="Original Loan Amount" />
            </div>
            <div className="flex gap-[16px] px-[20px] flex-wrap">
                <ToggleButton option1="Fixed" option2="Variable" labelName="Type of interest" initialactive={1} />
                <PostfixInput labelName="Prime rate" postfix="%" />
                <PostfixInput labelName="Spread" postfix="%" />
                <PostfixInput labelName="Interest rate" postfix="%" />

            </div>
            <div className="flex gap-[16px] p-[20px] border-b border-inputbordergray flex-wrap">
                <Dropdown droplist={RATEADJUSTMENLIST} labelName="Rate Adjustments" />
                <TextInput typeInput="date" labelName="Last Rate Adjustmnet" />
                <TextInput typeInput="date" labelName="Next Rate Adjustmnet" disabled={true} value={`${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`} />
            </div>
            <div className="flex gap-[16px] px-[20px] flex-wrap">
                <ToggleButton option1="Monthly" option2="Semi-Annual" initialactive={2} labelName="Interest Capitalization" />
                <InputAndOption optionList={CALENDARTERMSOPTIONs} labelName="Interest Only Period" />
            </div>
            <div className="flex gap-[16px] px-[20px] flex-wrap">
                <InputAndOption optionList={CALENDARTERMSOPTIONs} labelName="Term" />
                <InputAndOption optionList={CALENDARTERMSOPTIONs} labelName="Ammortization" />
                <CurrencyInput labelName="Financing Fees(optional)" currency="$" />
            </div>

        </form>

    )
}

export default DebtForm