import Button from "../../formelements/Button"


type ownerShipStructureFormPropType = {
    handleContinueBtn: () => void
}
const OwnerShipStructureForm = ({ handleContinueBtn }: ownerShipStructureFormPropType) => {
    return (
        <div>
            <div className="text-[24px] font-medium p-[20px]">Ownership Structure </div>
            <Button value="Continue" styleClasses="bg-black text-white m-[20px]" handleClick={handleContinueBtn} />
        </div>
    )
}

export default OwnerShipStructureForm