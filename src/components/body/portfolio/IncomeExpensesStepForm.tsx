import Button from "../../formelements/Button"

type incomeExpensesStepFormPropType = {
    handleContinueBtn: () => void
}
const IncomeExpensesStepForm = ({ handleContinueBtn }: incomeExpensesStepFormPropType) => {
    return (
        <div>
            <div className="text-[24px] font-medium p-[20px]">Property Details</div>
            <Button value="Continue" styleClasses="bg-black text-white m-[20px]" handleClick={handleContinueBtn} />
        </div>
    )
}

export default IncomeExpensesStepForm;