import Button from "../../formelements/Button"

type rentRollStepFormPropType = {
    handleContinueBtn: () => void
}
const RentRollStepForm = ({ handleContinueBtn }: rentRollStepFormPropType) => {
    return (
        <div>
            <div className="text-[24px] font-medium p-[20px]">Rent Roll</div>
            <Button value="Continue" styleClasses="bg-black text-white mx-[20px]" handleClick={handleContinueBtn} />
        </div>
    )
}

export default RentRollStepForm