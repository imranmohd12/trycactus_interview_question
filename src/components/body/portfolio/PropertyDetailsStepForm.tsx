import Button from "../../formelements/Button";

type propertyDetailsStepForm = {
    handleContinueBtn: () => void
}
const PropertyDetailsStepForm = ({ handleContinueBtn }: propertyDetailsStepForm) => {
    return (
        <div>
            <div className="text-[24px] font-medium p-[20px]">Property Details</div>
            <Button value="Continue" styleClasses="bg-black text-white m-[20px]" handleClick={handleContinueBtn} />
        </div>
    )
}

export default PropertyDetailsStepForm