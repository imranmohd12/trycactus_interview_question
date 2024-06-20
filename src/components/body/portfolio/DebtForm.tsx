import CurrencyInput from "../../formelements/CurrencyInput"
import TextInput from "../../formelements/TextInput"

const DebtForm = () => {
    return (
        <form>
            <div className="flex gap-[16px]">
                <TextInput labelName="Lender" styleClasses="w-[400px]" />
                <TextInput labelName="Email" styleClasses="w-[275px]" />
                <TextInput labelName="Phone" styleClasses="w-[275px]" />
            </div>
            <div className="flex gap-[16px]">
                <TextInput labelName="Start Date" typeInput="date" styleClasses="w-[210px]" />
                <CurrencyInput currency="$" labelName="Original Loan Amount" />
            </div>
        </form>

    )
}

export default DebtForm