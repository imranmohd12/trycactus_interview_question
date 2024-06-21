import Button from "../../formelements/Button"
import DebtForm from "./DebtForm"

const FinancingForm = () => {
    return (
        <div>
            <div className="text-[24px] font-medium p-[20px]">Financing</div>
            <div className="flex justify-between">
                <div className="flex">
                    <div className="border-b-2 border-cactusgreen text-labelgray  p-[10px]">Dept1</div>
                    <div className="border-b-2 border-labelgray text-labelgray  p-[10px]">Dept1</div>
                </div>
                <div>
                    <Button value="Add Another Debt" styleClasses="border border-inputbordergray" />
                </div>
            </div>
            <DebtForm />
        </div>
    )
}

export default FinancingForm